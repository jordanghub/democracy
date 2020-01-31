import React from 'react';

import * as Styled from './ThreadFull.style';
import { ThreadFullProps } from './interface';
import { ThreadHomepage, ThreadMessage } from 'components';
import { AnswerThreadForm } from 'containers/Forms/AnswerThreadForm';
export const ThreadFull = ({ id, title, messages, author, categories, date }: ThreadFullProps) => {
  const messagesList = messages.map((message, index) => (
    <ThreadMessage
      key={index}
      id={message.id}
      content={message.content}
      sources={message.sources}
      author={message.author}
      date={message.createdAt}
    />
  ))
  
  return (
    <Styled.Wrapper>
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