import { Typography } from '@material-ui/core';
import * as Styled from 'pagesStyle/index.style';
import { ThreadHomepage, Nav } from 'components';

import { NextPage, NextPageContext } from 'next';
import { ThreadHomepage as ThreadHomepageType } from 'types/thread';

import { fetchLatestThreads } from 'store/actions';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TState } from 'types/state';


interface HomepageProps {
  threads?: ThreadHomepageType[];
}

const Homepage: NextPage<HomepageProps> = () => {

  const dispatch = useDispatch();

  const threads = useSelector((state: TState) => state.app.latestThreads);

  const fetchThreads = useCallback(() => {
    dispatch(fetchLatestThreads())
  }, []);

  if(!threads) {    
    fetchThreads();
  }

  const threadList = threads?.map((thread) => (
    <ThreadHomepage title={thread.title} />
  ))
  
  return (
    <div>
      <Nav />
      <Styled.Wrapper>
        <Styled.LatestThreads>
          <Typography variant="h4" component="h2">Les derniers threads</Typography>
          {threadList}
        </Styled.LatestThreads>
      </Styled.Wrapper>
    </div>
  )
}

Homepage.getInitialProps = async (ctx: NextPageContext & { store: any, isServer: boolean }) => {
  let latestThreads = ctx.store.getState().app.latestThreads;

  if(!latestThreads) {
    ctx.store.dispatch(fetchLatestThreads());    
  }

  if(ctx.isServer) {
    await new Promise((resolve) => {
      const unsubscribe = ctx.store.subscribe(() => {
        const state = ctx.store.getState();
        if(state.app.latestThreads) {
          unsubscribe()
          resolve()
        }
      })
    })
  }

  latestThreads = ctx.store.getState().app.latestThreads;
  
  return {};
  
}

export default Homepage