import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';

import compression from 'compression';
import path from 'path';
import PrettyError from 'pretty-error';
import http from 'http';
import axios from 'axios';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import { createMemoryHistory, match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import config from './config';
import createRoutes from 'routes';
import configureStore from 'store/configureStore';
import preRenderMiddleware from 'middlewares/preRenderMiddleware';
import header from 'components/Meta';

const analytics =
  `<script>
    (function(window, document) {
      var fn = 'aian';
      window[fn] = window[fn] || function() {
        (window[fn].p = window[fn].p || []).push(arguments);
      }
      window[fn].v = 1 * new Date();
      a = document.createElement('script');
      m = document.getElementsByTagName('script')[0];
      a.async = 1;
      a.src = 'http://aianash.com/api/analytics/aianash.js';
      m.parentNode.insertBefore(a, m);
    })(window, document);
    aian('token', '1892238');
    aian('track', 'all');
    </script>`;

/*
 * Export render function to be used in server/index.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
export default function render(req, res) {
  const authenticated = false; // req.isAuthenticated();
  const history = createMemoryHistory();
  const store = configureStore({}, history);
  const routes = createRoutes(store);

  /*
   * From the react-router docs:
   *
   * This function is to be used for server-side rendering. It matches a set of routes to
   * a location, without rendering, and calls a callback(err, redirect, props)
   * when it's done.
   *
   * The function will create a `history` for you, passing additional `options` to create it.
   * These options can include `basename` to control the base name for URLs, as well as the pair
   * of `parseQueryString` and `stringifyQuery` to control query string parsing and serializing.
   * You can also pass in an already instantiated `history` object, which can be constructured
   * however you like.
   *
   * The three arguments to the callback function you pass to `match` are:
   * - err:       A javascript Error object if an error occured, `undefined` otherwise.
   * - redirect:  A `Location` object if the route is a redirect, `undefined` otherwise
   * - props:     The props you should pass to the routing context if the route matched,
   *              `undefined` otherwise.
   * If all three parameters are `undefined`, this means that there was no route found matching the
   * given location.
   */
  match({routes, location: req.url}, (err, redirect, props) => {
    if(err) {
      res.status(500).json(err);
    } else if(redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if(props) {
      preRenderMiddleware(
        store.dispatch,
        props.components,
        props.params
      ).then(() => {
        const initialState = store.getState();
        const componentHTML = ReactDOM.renderToString(
          <Provider store={store}>
            <RouterContext {...props}/>
          </Provider>
        );

        res.status(200).send(`
          <!doctype html>
          <html ${header.htmlAttributes.toString()}>
            <head>
              ${header.title.toString()}
              ${header.meta.toString()}
              ${header.link.toString()}
            </head>
            <body>
              <div id="app">${componentHTML}</div>
              <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
              <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
              ${analytics}
            </body>
          </html>
        `);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    } else {
      res.status(404).send('Not found');
    }
  });
}