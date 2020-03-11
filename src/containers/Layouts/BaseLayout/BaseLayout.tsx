import React, { useCallback } from 'react';
import { Nav } from 'components/Nav';
import { BaseLayoutProps } from './interface';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { TState } from 'types/state';
import { logout } from 'store/actions';

import * as Styled from './BaseLayout.style';
import { FlashMessage } from 'containers/FlashMessage/FlashMessage';
import { Footer } from 'components/Footer';
import Error from 'pages/_error';

export const BaseLayout = ({
  children,
  title = 'Democracy',
  description,
  statusCode,
}: BaseLayoutProps) => {
  const dispatch = useDispatch();

  const { flashMessage, isPageLoading } = useSelector(
    (state: TState) => state.app,
  );
  const categories = useSelector((state: TState) => state.thread.categories);
  const { isLoggedIn, userData } = useSelector((state: TState) => state.user);

  const logoutAction = useCallback(() => dispatch(logout()), [dispatch]);
  console.log(statusCode ? true : false);

  return statusCode ? (
    <Error statusCode={statusCode} />
  ) : (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {description && <meta name="description" content={description} />}
      </Head>
      <Nav
        isLoggedIn={isLoggedIn}
        logoutCallback={logoutAction}
        categories={categories}
        userData={userData}
      />
      {isPageLoading && <Styled.Loading color="secondary" />}

      {flashMessage && <FlashMessage />}
      {children}
    </div>
  );
};
