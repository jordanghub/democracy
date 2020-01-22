import React from 'react';
import { Nav } from 'components/Nav';
import { BaseLayoutProps } from './interface'

export const BaseLayout = ({ children }: BaseLayoutProps) => (
    <div>
      <Nav />
      {children}
    </div>
)