import React from 'react';

import * as Styled from './ThreadShow.style';
import { useParams } from 'react-router-dom';
import { ThreadFull } from 'components';

import { threadSingle } from 'fixtures/thread';

export const ThreadShow = () => {

  const { slug } = useParams();
  
  return (
    <Styled.Wrapper>
      <ThreadFull 
        title={threadSingle.title}
        categories={threadSingle.categories}
        messages={threadSingle.messages}      
      />
    </Styled.Wrapper>
  )
}