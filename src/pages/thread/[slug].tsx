import { Container } from 'components';
import { BaseLayout, Thread } from 'containers';
import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import { fetchThreadSingle, clearThreadSingle } from 'store/actions';
import { memo } from 'react';
import { useRouter } from 'next/router';
import { TState } from 'types/state';
import { useSelector } from 'react-redux';
import Error from 'pages/_error';
import { fetchAndAwait } from 'utils/reduxFetchAndAwait';
import { FETCH_THREAD_SINGLE_ERROR } from 'appConstant/loadingErrors';

const ThreadShowPage: NextPage = memo(() => {
  const router = useRouter();

  const threadSingle = useSelector(
    (state: TState) => state.thread.threadSingle,
  );

  return (
    <BaseLayout>
      <Container>
        <Thread slug={router.query.slug as string} />
      </Container>
    </BaseLayout>
  );
});

ThreadShowPage.getInitialProps = async ({
  store,
  query,
  res,
}: NextPageContext & { store: Store }) => {
  console.log('thread show page');
  store.dispatch(clearThreadSingle());

  const result: any = await fetchAndAwait({
    action: fetchThreadSingle,
    actionPayload: {
      id: Number(query.slug),
    },
    dataSelector: (state) => state.thread.threadSingle,
    errorSelector: (state) =>
      state.app.loadingErrors[FETCH_THREAD_SINGLE_ERROR],
    store,
  });
  console.log(result);
  if (result.code) {
    res.statusCode = 404;
  }

  return {};
};

export default ThreadShowPage;
