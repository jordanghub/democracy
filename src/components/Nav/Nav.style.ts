import styled from 'styled-components';

export const Wrapper = styled.div`
  & .MuiAppBar-root {
    flex-grow: 1;
  }

  & .MuiButton-root {
    color: white;
    cursor: pointer;
  }

  & a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
  }
  & ul {
    margin-top: 0;
    padding-left: 0;
  }

  & #menu-categories a {
    text-transform: capitalize;
  }
  color: white;
`;
