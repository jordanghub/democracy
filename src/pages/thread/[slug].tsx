import * as Styled from 'pagesStyle/thread-show.style';
import { ThreadFull, Container } from 'components';
import { threadSingle } from 'fixtures/thread' 
import { BaseLayout } from 'containers';
import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import { fetchThreadSingle } from 'store/actions';
import { useSelector } from 'react-redux';
import { TState } from 'types/state';

const Thread: NextPage  = () => {

  const thread = useSelector((state: TState) => state.app.threadSingle);

  

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
          ) : <p>Pas de thread</p>       
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