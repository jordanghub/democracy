import React from 'react';

import * as Styled from './ThreadFull.style';
import { ThreadFullProps } from './interface';
import { ThreadHomepage, ThreadMessage } from 'components';
import { AnswerThreadForm } from 'containers/Forms/AnswerThreadForm';
export const ThreadFull = ({ title, messages, categories }: ThreadFullProps) => {
  const messagesList = messages.map((message) => (
    <ThreadMessage
     content={message.content}
     sources={message.sources}
    />
  ))
  
  return (
    <Styled.Wrapper>
      <ThreadHomepage
        title={title}
        withoutLink
      />
      <Styled.Messages>
        {messagesList}
      </Styled.Messages>
      <AnswerThreadForm />
    </Styled.Wrapper>
  )
}