import React from 'react';
import * as Styled from './DummyComponent.style';

import { DummyComponentProps } from './interface';


export const DummyComponent = ({}: DummyComponentProps) => (
  <Styled.Wrapper>dummy component</Styled.Wrapper>
)