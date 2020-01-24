import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'theme';
import { Provider } from 'react-redux';

import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import createStore from 'store';
import { Store } from 'redux';


interface MyAppProps {
  store: Store
}

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>     
    )
  }
}
export default withRedux(createStore)(withReduxSaga(MyApp))