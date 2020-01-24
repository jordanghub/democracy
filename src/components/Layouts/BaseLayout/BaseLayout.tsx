import React from 'react';
import { Nav } from 'components/Nav';
import { BaseLayoutProps } from './interface'
import Head from 'next/head';

export const BaseLayout = ({ children, title = 'Democracy', description }: BaseLayoutProps) => (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />   
        { description && <meta name="description" content={description} />}
        
      </Head>
      <Nav />
      {children}
    </div>
)