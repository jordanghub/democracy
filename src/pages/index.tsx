import { NextPage, NextPageContext } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'redux';
import { Typography } from '@material-ui/core';

import { ThreadHomepage as ThreadHomepageType } from 'types/thread';
import { TState } from 'types/state';

import * as Styled from 'pagesStyle/index.style';

import { ThreadHomepage, Container } from 'components';
import { fetchLatestThreads, changePaginationPage } from 'store/actions';

import { BaseLayout } from 'containers/Layouts';
import { Pagination } from 'components/Utils/Pagination';
import { useCallback } from 'react';

interface HomepageProps {
  threads?: ThreadHomepageType[];
}

const Homepage: NextPage<HomepageProps> = () => {
  const dispatch = useDispatch();
  const threads = useSelector((state: TState) => state.thread.latestThreads);

  const paginationData = useSelector(
    (state: TState) => state.pagination['latestThreads'],
  );
  //const   = useSelector((state: TState) => state.thread.latestThreads);
  const threadList = threads?.map((thread) => (
    <ThreadHomepage
      key={thread.id}
      id={thread.id}
      title={thread.title}
      author={thread.author}
      date={thread.createdAt}
      categories={thread.categories}
      messageType="thread"
    />
  ));

  const fethLatestThreadsAction = useCallback(
    (payload) => dispatch(fetchLatestThreads(payload)),
    [dispatch],
  );

  const handlePageChange = useCallback(
    (evt, page: number) => {
      if (page + 1 <= paginationData.pages) {
        fethLatestThreadsAction({ page: page + 1 });
      }
    },
    [paginationData],
  );

  return (
    <BaseLayout>
      <Container>
        <Typography variant="h4" component="h2">
          Les derniers threads
        </Typography>
        {threadList}
        {paginationData && (
          <Pagination
            count={paginationData.count}
            page={
              paginationData.currentPage > 0
                ? paginationData.currentPage - 1
                : 0
            }
            pageSize={5}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </BaseLayout>
  );
};

Homepage.getInitialProps = async (
  ctx: NextPageContext & { store: Store; isServer: boolean },
) => {
  const { store } = ctx;
  store.dispatch(fetchLatestThreads({ page: 1 }));
  return {};
};

export default Homepage;
