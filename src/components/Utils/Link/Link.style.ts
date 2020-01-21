import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled(NavLink)`

  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
  &:hover {
    text-decoration: underline;
  }
`