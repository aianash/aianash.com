import React from 'react';
import { IndexRoute, Route } from 'react-router';

import {
  App,
  Home,
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
    </Route>
  );
};