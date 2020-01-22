import React from 'react';
import { Nav } from 'components/Nav';
import { BaseLayoutProps } from './interface'
import Head from 'next/head';

export const BaseLayout = ({ children }: BaseLayoutProps) => (
    <div>
      <Head>
        <title>next js</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Nav />
      {children}
    </div>
)