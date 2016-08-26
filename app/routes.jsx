import React from 'react';
import { IndexRoute, Route } from 'react-router';

import {
  App,
  Home,
  Dashboard,
  LoginOrRegister,
  NotFound,
} from 'containers';

export default (store) => {
  const requireLogin = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if(!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if(authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };

  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes requiring login */ }
      <Route onEnter={requireLogin}>
        <Route path="dashboard" component={Dashboard}/>
      </Route>

      { /* Routes */ }
      <Route path="login" component={LoginOrRegister}/>
    </Route>
  );
};