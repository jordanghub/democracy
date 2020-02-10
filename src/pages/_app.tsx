import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'theme';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import cookies from 'cookie';
import nextCookie from 'next-cookies';
import Router from 'next/router';

import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import createStore from 'store';
import {
  routeChangeComplete,
  routeChangeStart,
  setAuthStatus,
  fetchScoringCategories,
  fetchCategories,
} from 'store/actions';

interface MyAppProps {
  store: Store;
}

// TODO find a place to put the axios interceptors

class MyApp extends App<MyAppProps> {
  constructor(props: any) {
    super(props);
  }

  handleRouteChange = () => {
    const { store } = this.props;
    store.dispatch(routeChangeStart());
  };

  handleRouteChangeComplete = () => {
    const { store } = this.props;
    store.dispatch(routeChangeComplete());
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      Router.events.on('routeChangeStart', this.handleRouteChange);
      Router.events.on('routeChangeComplete', this.handleRouteChangeComplete);
    }
  }
  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.handleRouteChange);
    Router.events.on('routeChangeComplete', this.handleRouteChangeComplete);
  }

  // First render is only back then is called on every page change
  static async getInitialProps({ Component, ctx }) {
    console.log('------ _app.tsx initial props -----');
    let pageProps = {};

    if (typeof window === 'undefined') {
      ctx.store.dispatch(fetchScoringCategories());
      ctx.store.dispatch(fetchCategories());

      if (typeof ctx.req.headers.cookie === 'string') {
        const cookiesList = cookies.parse(ctx.req.headers.cookie);
        if (cookiesList && cookiesList.token) {
          ctx.store.dispatch(setAuthStatus({ status: true }));
        } else {
          ctx.store.dispatch(setAuthStatus({ status: false }));
        }
      } else {
        ctx.store.dispatch(setAuthStatus({ status: false }));
      }
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}
export default withRedux(createStore)(withReduxSaga(MyApp));
