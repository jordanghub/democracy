import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Nav } from 'components';
import { Homepage } from 'containers';

export const App = () => {

  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
   </div>
  )
};