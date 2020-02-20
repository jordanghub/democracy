import styled from 'styled-components';
import { Paper, Typography } from '@material-ui/core';

export const Wrapper = styled(Paper)`
  margin-top: 1rem;
  padding: 1rem;

  & .Avatar-user {
    margin-top: 0.8rem;
  }
`;

export const Title = styled(Typography)``;

export const Categories = styled.div`
  margin-top: 0.8rem !important;
  & a:nth-child(n + 2) {
    margin-left: 0.5rem;
  }
`;
