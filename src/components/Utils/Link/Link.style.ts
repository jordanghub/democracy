import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled(Link)`
`
  

export const LinkStyle = styled.a`

  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
 
`
