import React, { memo } from 'react';

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import * as Styled from './Nav.style';

import { LinkComponent } from 'components/Utils';
import { NavProps } from './interface';


export const Nav = memo(({ isLoggedIn, logoutCallback }: NavProps) => (
  <Styled.Wrapper>
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">
            <LinkComponent to="/">Democracy</LinkComponent>
          </Typography>

          { !isLoggedIn && (
            <>
              <LinkComponent to="/register">
                <Button color="inherit">S'inscrire</Button> 
              </LinkComponent>
              <LinkComponent to="/login">
                <Button color="inherit">Se connecter</Button> 
              </LinkComponent>
            </>
            )
          }

          {
            isLoggedIn && (
              <>
                <LinkComponent to="/thread/new">
                  <Button color="inherit">Créer un thread</Button> 
                </LinkComponent>
                <LinkComponent to="/profile">
                  <Button color="inherit">Mon profil</Button> 
                </LinkComponent>
                <Button color="inherit" onClick={logoutCallback}>Se déconnecter</Button> 
              </>
            )
          }      
          
          
        </Toolbar>
      </AppBar>
  </Styled.Wrapper>
));