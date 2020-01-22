import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Nav } from 'components';
import { Homepage } from 'containers';
import { ThreadShow } from 'containers';
import { HOMEPAGE_ROUTE, THREAD_SHOW_ROUTE } from 'appConsts/routes';

export const App = () => {

  return (
    <div>
      <Nav />
      <Switch>
        <Route path={HOMEPAGE_ROUTE} exact>
          <Homepage />
        </Route>
        <Route path={THREAD_SHOW_ROUTE}>
         <ThreadShow />
        </Route>
      </Switch>
   </div>
  )
};