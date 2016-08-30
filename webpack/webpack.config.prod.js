var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
var webpack = require('webpack');

var assetsPath = path.join(__dirname, '..', 'public', 'assets');
var publicPath = '/assets/';

var commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react', 'stage-0'],
      plugins: [
        'transform-decorators-legacy',
        'transform-react-remove-prop-types',
        'transform-react-constant-elements',
        'transform-react-inline-elements'
      ]
    },
    include: path.join(__dirname, '..', 'app'),
    exclude: path.join(__dirname, '..', 'node_modules')
  },
  { test: /\.json$/, loader: 'json-loader' },
  {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
    loader: 'url',
    query: {
        name: '[hash].[ext]',
        limit: 10000,
    }
  },
  { test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module!postcss-loader')
  }
];

var postCSSConfig = function () {
  return [
    require('postcss-import')(),
    require('postcss-cssnext')({
      browsers: ['> 1%', 'last 2 versions']
    }),
    require('postcss-reporter')({ clearMessages: true })
  ];
};

module.exports = [
  {
    // The configuration for the client
    name: 'browser',
    context: path.join(__dirname, '..', 'app'),
    devtool: 'source-map',
    entry: {
      app: [
        'bootstrap-sass!./theme/bootstrap.config.prod.js',
        './client'
      ]
    },
    output: {
      path: assetsPath,
      filename: '[name].js',
      publicPath: publicPath // The output path from the view of the Javascript
    },
    module: {
      loaders: commonLoaders
    },
    resolve: {
      root: [path.join(__dirname, '..', 'app')],
      extensions: ['', '.js', '.jsx', '.css']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        // extract inline css from modules into separate files
        new ExtractTextPlugin('styles/main.css', { allChunks: true }),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          },

          __CLIENT__: true,
          __SERVER__: true,
          __DEVELOPMENT__: false,
          __DEVTOOLS__: false,
          // to remove following
          __DEVCLIENT__: false,
          __DEVSERVER__: false
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false
          }
        }),
        new InlineEnviromentVariablesPlugin({ NODE_ENV: 'production' })
    ],
    postcss: postCSSConfig
  }, {
    // The configuration for the server-side rendering
    name: 'server-side rendering',
    context: path.join(__dirname, '..', 'app'),
    entry: {
      server: './server'
    },
    target: 'node',
    output: {
      path: assetsPath,
      filename: 'server.js',
      publicPath: publicPath, // The output path from the view of the Javascript
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: commonLoaders
    },
    resolve: {
      root: [path.join(__dirname, '..', 'app')],
      extensions: ['', '.js', '.jsx', '.css']
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new ExtractTextPlugin('styles/main.css', { allChunks: true }),
      new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          },

          __CLIENT__: true,
          __SERVER__: true,
          __DEVELOPMENT__: false,
          __DEVTOOLS__: false,
          // to remove following
          __DEVCLIENT__: false,
          __DEVSERVER__: false
      }),
      new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
      new webpack.IgnorePlugin(/vertx/),

      // optimizations
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new InlineEnviromentVariablesPlugin({ NODE_ENV: 'production' })
    ],
    postcss: postCSSConfig
  }
];