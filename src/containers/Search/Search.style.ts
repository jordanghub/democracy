import styled from 'styled-components';

export const NavSearch = styled.div`
  border-radius: 0;
  max-width: 350px;
  display: flex;
  height: 35px;
  margin-left: 0.5rem;
  position: relative;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.15);

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  & .MuiPaper-root {
    border-radius: 0;
  }
`;
