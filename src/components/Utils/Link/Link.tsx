import React, { memo } from 'react';


import * as Styled from './Link.style';
import { LinkProps } from './interface';

import Link from 'next/link'

export const LinkComponent = memo(({ to, children, visibleLink }: LinkProps) => (
  <Link href={to} as={visibleLink}>
    <Styled.LinkStyle href={visibleLink ? visibleLink : to}>{children}</Styled.LinkStyle>
  </Link>
))