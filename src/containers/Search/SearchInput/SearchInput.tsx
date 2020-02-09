
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Search as SearchIcon, LabelOutlined, DescriptionOutlined } from '@material-ui/icons';

import * as Styled from './SearchInput.style';
import { Paper, Typography, MenuItem, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch, batch } from 'react-redux';
import { TState } from 'types/state';
import { LinkComponent } from 'components';
import { searchThread, changeSearchThreadResult } from 'store/actions';

export const SearchInput = () => {

  const dispatch = useDispatch();

  const searchThreadAction = useCallback(
    (payload) => dispatch(searchThread(payload)),
    [dispatch]
  )

  const changeSearchResultAction = useCallback(
    (payload) => dispatch(changeSearchThreadResult(payload)),
    [dispatch],
  );

  const searchResult = useSelector((state: TState) => state.thread.searchResults);

  const categories = useSelector((state: TState) => state.thread.categories);

  const [input, changeInput] = useState("");
  const [isMenuOpen, changeIsMenuOpen] = useState(false);

  const menuRef = useRef<null | HTMLDivElement>(null);

  const handleInputClick = (evt: any) => {
    if (input.length > 3 && !isMenuOpen) {
      changeIsMenuOpen(true);     
    }
  }

  const handleClickOut = (evt) => {
    if (isMenuOpen) {
      if (!menuRef.current.contains(evt.target)) {
        changeIsMenuOpen(false);
      }
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOut);

    return () => document.removeEventListener('click', handleClickOut)
  }, [isMenuOpen])

  const handleClose = () => {
    changeIsMenuOpen(false);
  }

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    changeInput(evt.target.value);
    if(evt.target.value.length > 3) {
      if(!isMenuOpen) {
        changeIsMenuOpen(true);
      }

      if(searchResult) {
        changeSearchResultAction({ searchResult: null})
      }

      searchThreadAction({ search: evt.target.value });

    } else if(isMenuOpen) {
      changeSearchResultAction({ searchResult: null})
      changeIsMenuOpen(false);
    }
  }

  const categoriesResult = categories.filter((cat) => cat.name.toLowerCase().includes(input.toLowerCase())).map((category) => (
    <MenuItem key={category.name} onClick={handleClose}>      
      <LabelOutlined fontSize="small" />        
      <LinkComponent to={`/categories/[slug]`} visibleLink={`/categories/${category.id}`}>{category.name}</LinkComponent>
    </MenuItem>
  ))
  const threadResults = searchResult?.map((thread) => (
    <MenuItem key={thread.id} onClick={handleClose}>      
      <DescriptionOutlined fontSize="small" />        
      <LinkComponent to={`/thread/[slug]`} visibleLink={`/thread/${thread.id}`}>{thread.title.slice(0, 25)}...</LinkComponent>
    </MenuItem>
  ))

  return (
    <Styled.NavSearch ref={menuRef}>
      <Styled.NavSearchIcon>
        <SearchIcon />
      </Styled.NavSearchIcon>
      <Styled.NavSearchInput
        placeholder="Rechercher..."
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleInputChange}
        value={input}
        onClick={handleInputClick}
      />
      <Styled.SearchResult
        id="nav-search-results"
        open={isMenuOpen}
        anchorEl={menuRef.current}
        disablePortal
      >
        <Paper elevation={6}>
          {
            (threadResults && threadResults.length === 0)
            && (!categoriesResult || categoriesResult.length === 0) && (
              <Typography variant="h6" component="p" align="center">Aucun résultat</Typography>
            )
          }
          {
            !searchResult && <CircularProgress size={40} />
          }
          {threadResults}
          {categoriesResult}           
        </Paper>

      </Styled.SearchResult>
    </Styled.NavSearch>
  )

};