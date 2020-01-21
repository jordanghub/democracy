import React, { memo } from 'react';

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import * as Styled from './Nav.style';

import { Link } from 'components/Utils';


export const Nav = memo(() => (
  <Styled.Wrapper>
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">
            Democracy
          </Typography>

          <Link to="/">
            <Button color="inherit">Se connecter</Button> 
          </Link>
          <Link to="/thread/new">
            <Button color="inherit">Créer un thread</Button> 
          </Link>

        </Toolbar>
      </AppBar>
  </Styled.Wrapper>
));