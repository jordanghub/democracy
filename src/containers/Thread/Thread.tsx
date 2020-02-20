import React, { useEffect, useCallback } from 'react';

import * as Styled from './Thread.style';
import { ThreadHomepage, ThreadMessage } from 'components';
import { AnswerThreadForm } from 'containers/Forms/AnswerThreadForm';
import { ThreadOriginalSelection } from 'components/Thread/ThreadOriginalSelection';
import { useDispatch, useSelector } from 'react-redux';
import { setFlashMessage } from 'store/actions';
import socket from 'utils/websockets';
import { EVENT_NEW_THREAD_MESSAGE } from 'appConstant/websockets';
import { Backdrop, CircularProgress, Typography } from '@material-ui/core';

import { useThread } from 'hooks';
import { useForms } from 'hooks';
import { TState } from 'types/state';
import { IThreadContainerProps } from './interface';

export const Thread = ({ slug }: IThreadContainerProps) => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state: TState) => state.user);

  const setFlashMessageAction = useCallback(
    (payload) => dispatch(setFlashMessage(payload)),
    [dispatch],
  );

  const { thread, addNewThreadMessage } = useThread();
  const { setInitialFormData } = useForms();

  useEffect(() => {
    if (thread?.threadSingle?.id && typeof window !== 'undefined') {
      socket.on(
        `${EVENT_NEW_THREAD_MESSAGE}${thread.threadSingle.id}`,
        addNewThreadMessage,
      );
      return () => {
        socket.off(
          `${EVENT_NEW_THREAD_MESSAGE}${thread.threadSingle.id}`,
          addNewThreadMessage,
        );
      };
    }
  }, [thread?.threadSingle?.id]);

  if (!thread.threadSingle) {
    return (
      <Backdrop open={!thread.threadSingle}>
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
    categories,
  } = thread.threadSingle;

  const messagesList = messages.map((message, index) => (
    <ThreadMessage
      setFlashMessageAction={setFlashMessageAction}
      setInitialFormDataAction={setInitialFormData}
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
        categories={categories}
        withoutLink
        messageType="thread"
      />
      <Styled.Messages>{messagesList}</Styled.Messages>
      {isLoggedIn ? (
        <AnswerThreadForm />
      ) : (
        <Styled.NotLoggedInMessage>
          <Typography component="p" variant="h6">
            Vous devez être connecté pour envoyer un message
          </Typography>
        </Styled.NotLoggedInMessage>
      )}
    </Styled.Wrapper>
  );
};
