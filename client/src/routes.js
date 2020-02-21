import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import IntroPage from './pages/IntroPage';
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';
import ListProjects from './pages/ListProjects';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/projects" exact>
          <ListProjects />
        </Route>
        <Route path="/admin" exact>
        </Route>
        <Route path="/billing" exact>
        </Route>
        <Route path="/support" exact>
        </Route>

        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/intro" exact>
        <IntroPage />
      </Route>
      <Route path="/auth" exact>
        <FormPage />
      </Route>
      <Redirect to="/intro" />
    </Switch>
  );
};