import styled from "styled-components";
import { InputBase } from "@material-ui/core";

export const Wrapper = styled.div`
  & .MuiAppBar-root {
    flex-grow: 1;
  }

  & .MuiButton-root {
    color: white;
    cursor: pointer;
    padding-right: 0;
  }

  & a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
  }

  & #menu-categories a {
    text-transform: capitalize;
  }
  color: white;

`;