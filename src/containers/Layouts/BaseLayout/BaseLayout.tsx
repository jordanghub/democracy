import React, { useCallback } from 'react';
import { Nav } from 'components/Nav';
import { BaseLayoutProps } from './interface'
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { TState } from 'types/state';
import { AlertTitle, Alert } from '@material-ui/lab';
import { LinearProgress } from '@material-ui/core';
import { logout } from 'store/actions';

import * as Styled from './BaseLayout.style';

export const BaseLayout = ({ children, title = 'Democracy', description }: BaseLayoutProps) => {

  const dispatch = useDispatch();

  const { flashMessage, isPageLoading, isLoggedIn} = useSelector((state: TState) => state.app);

  const logoutAction = useCallback(
    () => dispatch(logout()),
    [dispatch]
  )
  return(
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />   
        { description && <meta name="description" content={description} />}
        
      </Head>

      
      <Nav isLoggedIn={isLoggedIn} logoutCallback={logoutAction} />
      {
        isPageLoading && <Styled.Loading color="secondary" />
      }
      
      {
        (flashMessage) && (
          // @ts-ignore
          <Styled.FlashMessage severity={flashMessage.type}>
            <AlertTitle >{flashMessage.message}</AlertTitle>
          </Styled.FlashMessage>
        )
      }  
      
      {children}
    </div>
  )
}