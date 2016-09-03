import React from 'react';
import { IndexRoute, Route } from 'react-router';

import {
  App,
  Home,
  Dashboard,
  LoginOrRegister,
  NotFound,
} from 'containers';

import {
  Behavior,
  Predict,
  ABTest
} from 'components/dashboard';

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
      <Route path="dashboard" component={Dashboard}>
        <Route path="behavior" component={Behavior}/>
        <Route path="predict" component={Predict}/>
        <Route path="abtest" component={ABTest}/>
      </Route>
      <Route path="login" component={LoginOrRegister}/>
    </Route>
  );
};