import styled from 'styled-components';
import { Popper } from '@material-ui/core';

export const Wrapper = styled.div`
  & .MuiTabsContainer {
    z-index: 1200;
  }

  & .MuiSvgIcon-root {
    color: teal;
  }
`;

export const PoperRating = styled(Popper)`
  position: relative;
  min-width: 300px;
  min-height: 750px;
`;
