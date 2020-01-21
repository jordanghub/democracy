import React, { memo } from 'react';

import * as Styled from './Link.style';
import { LinkProps } from './interface';

export const Link = memo(({ to, children }: LinkProps) => (
  <Styled.Wrapper to={to}>
    {children}
  </Styled.Wrapper>
))