import React from "react";
import { Switch, Route } from "react-router-dom";
import { Nav } from "components";
import { Homepage } from "containers";

import { materialPalette } from "theme"
import { ThemeProvider, CssBaseline } from "@material-ui/core";

export const App = () => {
  return (
    <ThemeProvider theme={materialPalette}>
      <CssBaseline />
      <div>
        <Nav />
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
};
