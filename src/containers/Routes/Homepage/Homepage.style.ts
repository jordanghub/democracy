import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
`;


export const LatestThreads = styled.section`

  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 70%;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 50%;
  }
  

  & > *:nth-child(n+2) {
    margin-top: 1rem;
  }

`