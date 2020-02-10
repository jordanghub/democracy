import { Container } from 'components';
import { BaseLayout, Thread } from 'containers';
import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import {
  fetchThreadSingle,
  addNewThreadMessage,
  clearThreadSingle,
} from 'store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { TState } from 'types/state';
import { useEffect, useCallback, useRef, memo } from 'react';
import socket from 'utils/websockets';
import { EVENT_NEW_THREAD_MESSAGE } from 'appConstant/websockets';
import { CircularProgress, Backdrop } from '@material-ui/core';

const ThreadShowPage: NextPage = memo(() => {
  return (
    <BaseLayout>
      <Container>
        <Thread />
      </Container>
    </BaseLayout>
  );
});

ThreadShowPage.getInitialProps = async ({
  store,
  query,
}: NextPageContext & { store: Store }) => {
  console.log('initial props');

  store.dispatch(
    fetchThreadSingle({
      id: Number(query.slug),
    }),
  );

  return {};
};

export default ThreadShowPage;
