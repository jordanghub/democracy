import styled from 'styled-components';
import { InputBase, Popper } from '@material-ui/core';

export const NavSearch = styled.div`
  border-radius: 0;
  width: 250px;
  display: flex;
  height: 35px;
  margin-left: 0.5rem;
  position: relative;  
  border-radius: 3px;
  background-color: rgba(255,255,255,0.15);
  &:hover {
    background-color: rgba(255,255,255,0.25);
  }

  & .MuiPaper-root {
    border-radius: 0;
  }
`

export const NavSearchIcon = styled.div`
  width: 30px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavSearchInput = styled(InputBase)`   
  padding-left: 30px !important; 
  padding: 0.5rem;
  transition: width 500ms;
  width: 100%;    
  color: white !important;

  &::placeholder{
    color: white !important;
  }

`

export const SearchResult = styled(Popper)`
  width: 100%;
  & a {
    text-transform: capitalize;
    margin-left: 0.2rem;
  }
  & .MuiCircularProgress-root {
    margin: auto;
    display: block;
  }
`

export const SearchThreadsResult = styled.div`

`



export const SearchCategoryResult = styled.div`

`