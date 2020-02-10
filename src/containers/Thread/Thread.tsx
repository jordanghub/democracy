import React, { useEffect, useCallback } from 'react';

import * as Styled from './Thread.style';
import { ThreadFullProps } from './interface';
import { ThreadHomepage, ThreadMessage } from 'components';
import { AnswerThreadForm } from 'containers/Forms/AnswerThreadForm';
import { ThreadOriginalSelection } from 'components/Thread/ThreadOriginalSelection';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewThreadMessage,
  clearThreadSingle,
  fetchThreadSingle,
  setFlashMessage,
} from 'store/actions';
import socket from 'utils/websockets';
import { EVENT_NEW_THREAD_MESSAGE } from 'appConstant/websockets';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { TState } from 'types/state';
import { useThread } from 'hooks';

export const Thread = () => {
  const threadData = useSelector((state: TState) => state.thread.threadSingle);

  const dispatch = useDispatch();

  const setFlashMessageAction = useCallback(
    (payload) => dispatch(setFlashMessage(payload)),
    [dispatch],
  );

  const setInitialFormDataAction = useCallback(
    (payload) => dispatch(setFlashMessage(payload)),
    [dispatch],
  );
  const { clearThreadSingle, thread, addNewThreadMessage } = useThread();

  useEffect(() => {
    if (thread?.threadSingle?.id) {
      socket.on(
        `${EVENT_NEW_THREAD_MESSAGE}${thread.threadSingle.id}`,
        addNewThreadMessage,
      );
      return () => {
        console.log(`Retrait de l'écouteur sur le thread ${id}`);
        socket.off(
          `${EVENT_NEW_THREAD_MESSAGE}${thread.threadSingle.id}`,
          addNewThreadMessage,
        );
        clearThreadSingle();
      };
    }
  }, [thread?.threadSingle?.id]);

  if (!thread.threadSingle) {
    return (
      <Backdrop open>
        <CircularProgress color="primary" />
      </Backdrop>
    );
  }
  const {
    id,
    messages,
    originalSelection,
    title,
    createdAt,
    author,
  } = threadData;

  const messagesList = messages.map((message, index) => (
    <ThreadMessage
      setFlashMessageAction={setFlashMessageAction}
      setInitialFormDataAction={setInitialFormDataAction}
      threadId={id}
      key={index}
      id={message.id}
      highlightedItems={message.highlightedItems}
      content={message.content}
      sources={message.sources}
      author={message.author}
      date={message.createdAt}
    />
  ));
  return (
    <Styled.Wrapper>
      {originalSelection && (
        <ThreadOriginalSelection
          threadId={originalSelection.thread.id}
          selectedText={originalSelection.selectedText}
          title={originalSelection.thread.title}
        />
      )}
      <ThreadHomepage
        id={id}
        title={title}
        author={author}
        date={createdAt}
        withoutLink
        messageType="thread"
      />
      <Styled.Messages>{messagesList}</Styled.Messages>
      <AnswerThreadForm />
    </Styled.Wrapper>
  );
};
