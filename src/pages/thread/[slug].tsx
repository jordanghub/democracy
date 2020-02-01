import { ThreadFull, Container } from 'components';
import { BaseLayout } from 'containers';
import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import { fetchThreadSingle, addNewThreadMessage, clearThreadSingle } from 'store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { TState } from 'types/state';
import { useEffect, useCallback, useRef } from 'react';
import socket from 'utils/websockets';
import { EVENT_NEW_THREAD_MESSAGE } from 'appConstant/websockets';
import { CircularProgress, Backdrop } from '@material-ui/core';

const Thread: NextPage  = () => {

  const thread = useSelector((state: TState) => state.thread.threadSingle);


  const usePrevious = (value: any) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const oldThreadId = usePrevious(thread?.id);

  console.log(oldThreadId);

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

  useEffect(() => {
    if (thread?.id && (thread?.id !== oldThreadId) && socket) {
      
      console.log(`Ajout  de l'écouteur sur le thread ${thread.id}`)
      socket.on(`${EVENT_NEW_THREAD_MESSAGE}${thread.id}`, handleNewMessage);
      return () => {
        console.log(`Retrait de l'écouteur sur le thread ${thread.id}`)
        clearThreadAction();
        return socket.off(`${EVENT_NEW_THREAD_MESSAGE}${thread.id}`,handleNewMessage);
      };
    }    
  }, [thread?.id])

  

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
}
Thread.getInitialProps = async ({ store, query}: NextPageContext & {store: Store}) => {

  store.dispatch(fetchThreadSingle({
    id: Number(query.slug),
  }));

  return {};
}

export default Thread; 