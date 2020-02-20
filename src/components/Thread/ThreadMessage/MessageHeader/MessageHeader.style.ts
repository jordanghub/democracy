import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

export const Header = styled(Grid)`
  margin-bottom: 1rem;
  & .thread-message-actions {
    @media screen and (min-width: 600px) {
      justify-content: flex-end;
    }
  }
`;

export const Date = styled(Typography)`
  color: teal;
  font-size: 0.8rem;
  margin-left: 0.5rem !important;
`;
