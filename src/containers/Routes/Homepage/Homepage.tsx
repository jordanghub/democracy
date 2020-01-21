import React from 'react'

import * as Styled from './Homepage.style';
import { useSelector } from 'react-redux';
import { TState } from 'types/state';
import { ThreadHomepage } from 'components';
import { Typography } from '@material-ui/core';

export const Homepage = () => {

  const threads = useSelector((state: TState) => state.app.latestThreads);

  if(!threads) {
    // Fetch threads
  }

  const threadList = threads?.map((thread) => (
    <ThreadHomepage title={thread.title} />
  ))
  
  return (
    <Styled.Wrapper>
      <Styled.LatestThreads>
        <Typography variant="h4" component="h2">Les derniers threads</Typography>
        {threadList}
      </Styled.LatestThreads>
    </Styled.Wrapper>
  )
}