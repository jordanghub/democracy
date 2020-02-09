import { ThreadFull, Container } from 'components';
import { BaseLayout } from 'containers';
import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import { fetchThreadSingle, addNewThreadMessage, clearThreadSingle } from 'store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { TState } from 'types/state';
import { useEffect, useCallback, useRef, memo } from 'react';
import socket from 'utils/websockets';
import { EVENT_NEW_THREAD_MESSAGE } from 'appConstant/websockets';
import { CircularProgress, Backdrop } from '@material-ui/core';

const Thread: NextPage  = memo(() => {

  const thread = useSelector((state: TState) => state.thread.threadSingle);

  return (
    <BaseLayout>
      <Container>
        {
          thread ? (
            <ThreadFull
              id={thread.id}
              author={thread.author}
              title={thread.title}
              messages={thread.messages}
              categories={thread.categories}
              date={thread.createdAt}
              originalSelection={thread.originalSelection}
            />
          ) : (
            <Backdrop open>
              <CircularProgress color="primary" />
            </Backdrop>
          )     
        }
        
      </Container>
    </BaseLayout>
  )
})

Thread.getInitialProps = async ({ store, query}: NextPageContext & {store: Store}) => {

  console.log('initial props');

  store.dispatch(fetchThreadSingle({
    id: Number(query.slug),
  }));

  return {};
}

export default Thread; 