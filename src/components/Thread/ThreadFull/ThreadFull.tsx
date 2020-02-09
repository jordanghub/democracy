import React, { useEffect, useCallback, useRef } from 'react';

import * as Styled from './ThreadFull.style';
import { ThreadFullProps } from './interface';
import { ThreadHomepage, ThreadMessage } from 'components';
import { AnswerThreadForm } from 'containers/Forms/AnswerThreadForm';
import { useDispatch } from 'react-redux';
import { addNewThreadMessage, clearThreadSingle, fetchThreadSingle } from 'store/actions';
import socket from 'utils/websockets';
import { EVENT_NEW_THREAD_MESSAGE } from 'appConstant/websockets';
import { ThreadOriginalSelection } from '../ThreadOriginalSelection/ThreadOriginalSelection';


export const ThreadFull = ({ id, title, messages, author, categories, date, originalSelection }: ThreadFullProps) => {

  const dispatch = useDispatch();

  const addMessageAction = useCallback(
    (payload) => dispatch(addNewThreadMessage(payload)),
    [dispatch],
  )

  const handleNewMessage = useCallback(
    (payload) => addMessageAction(payload),
    [addMessageAction]
  )
  const clearThreadAction = useCallback(
    () => dispatch(clearThreadSingle()),
    [dispatch],
  ) 
  const fetchThreadAction = useCallback(
    (payload) => dispatch(fetchThreadSingle(payload)),
    [dispatch],
  )
  
  useEffect(() => {
    
    if(id && id !== undefined) {
      
      fetchThreadAction({
        id: Number(id),
      })
      
      socket.on(`${EVENT_NEW_THREAD_MESSAGE}${id}`, handleNewMessage);
      return () => {
        console.log(`Retrait de l'écouteur sur le thread ${id}`)
        socket.off(`${EVENT_NEW_THREAD_MESSAGE}${id}`,handleNewMessage);  
        clearThreadAction()      
      } 
    }
  }, [id])

  const messagesList = messages.map((message, index) => (
    <ThreadMessage
      threadId={id}
      key={index}
      id={message.id}
      highlightedItems={message.highlightedItems}
      content={message.content}
      sources={message.sources}
      author={message.author}
      date={message.createdAt}
    />
  ))  
  return (
    <Styled.Wrapper>
      {
        originalSelection && (
          <ThreadOriginalSelection
            threadId={originalSelection.thread.id}
            selectedText={originalSelection.selectedText}
            title={originalSelection.thread.title}
          />
        )
      }
      <ThreadHomepage
        id={id}
        title={title}
        author={author}
        date={date}
        withoutLink
      />
      <Styled.Messages>
        {messagesList}
      </Styled.Messages>
      <AnswerThreadForm />
    </Styled.Wrapper>
  )
}