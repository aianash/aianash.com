import Express from 'express';
import webpack from 'webpack';

import compression from 'compression';
import path from 'path';
import PrettyError from 'pretty-error';
import http from 'http';
import axios from 'axios';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

var ENV = process.env.NODE_ENV || 'development';

const AppServer = require('../public/assets/server');

const pretty = new PrettyError();
const app = Express();
const server = new http.Server(app);

app.set('port', (process.env.PORT || 3000));

if(ENV === 'production') {
  app.use(compression());
}

if(ENV === 'development') {
  const webpackDevConfig = require('../webpack/webpack.config.dev-client');
  const compiler = webpack(webpackDevConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.use(Express.static(path.join(__dirname, '..', 'static')));

app.use('*', AppServer.default);

if(app.get('port')) {
  server.listen(app.get('port'), (err) => {
    if(err) {
      console.error(err);
    }
    console.info('==> 💻  Open http://localhost:3000 in a browser to view the app.');
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}