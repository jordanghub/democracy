import React, { memo, useState, useRef, useEffect } from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Menu,
  MenuItem,
  InputBase,
  Popover,
  Popper,
  Paper,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ArrowDropDown,
  Search as SearchIcon,
} from '@material-ui/icons';

import * as Styled from './Nav.style';

import { LinkComponent } from 'components/Utils';
import { NavProps } from './interface';
import { Search } from 'containers/Search';

export const Nav = memo(
  ({ isLoggedIn, logoutCallback, categories }: NavProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleCategoriesMenuClose = () => {
      setIsMenuOpen(false);
    };
    const handleCategoriesMenuOpen = (evt) => {
      setIsMenuOpen(true);
    };

    const handleClickOut = (evt: any) => {
      if (isMenuOpen) {
        if (!menuRef.current.contains(evt.target)) {
          setIsMenuOpen(false);
        }
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClickOut);
      return () => document.removeEventListener('click', handleClickOut);
    }, [isMenuOpen]);

    // TODO déplacer le style dans le fichier style
    const menuCategories = (
      <Popper
        style={{ zIndex: 9999 }}
        anchorEl={menuRef.current}
        id="menu-categories"
        open={isMenuOpen}
        disablePortal
      >
        <Paper elevation={6} component="ul">
          {categories?.map((category) => (
            <MenuItem onClick={handleCategoriesMenuClose} key={category.name}>
              <LinkComponent
                to={`/categories/[slug]`}
                visibleLink={`/categories/${category.id}`}
              >
                {category.name}
              </LinkComponent>
            </MenuItem>
          ))}
        </Paper>
      </Popper>
    );

    return (
      <Styled.Wrapper>
        {menuCategories}
        <AppBar position="static">
          <Toolbar>
            <Grid container justify="space-between" direction="row">
              <Grid item container alignItems="center" xs>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <LinkComponent to="/" isButton>
                  Democracy
                </LinkComponent>
                <Search />
              </Grid>

              <Grid item container alignItems="center" xs justify="flex-end">
                <Typography onClick={handleCategoriesMenuOpen} component="span">
                  <Grid
                    container
                    alignItems="center"
                    className="MuiButton-root"
                    ref={menuRef}
                  >
                    <span>CATEGORIES</span>
                    <ArrowDropDown />
                  </Grid>
                </Typography>
                {!isLoggedIn && (
                  <>
                    <LinkComponent to="/register" isButton>
                      S'inscrire
                    </LinkComponent>
                    <LinkComponent to="/login" isButton>
                      Se connecter
                    </LinkComponent>
                  </>
                )}

                {isLoggedIn && (
                  <>
                    <LinkComponent to="/thread/new" isButton>
                      Créer un thread
                    </LinkComponent>
                    <LinkComponent to="/profile" isButton>
                      Mon profil
                    </LinkComponent>
                    <Button href="/logout" color="inherit">
                      Se déconnecter
                    </Button>
                  </>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Styled.Wrapper>
    );
  },
);
