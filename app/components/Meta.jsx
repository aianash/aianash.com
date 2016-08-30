import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';

import config from 'helmconfig.js';

// Remove stylesheets because we do not extract them into a css file
// in development mode
// if(__DEVELOPMENT__) {
//   config.link = config.link.filter(l => l.rel !== 'stylesheet');
// }

const Meta = () => (
  <Helmet
    htmlAttributes={{"lang": "en", "amp": undefined}}
    title="aianash" meta={config.meta}
    link={config.link}
  />
)

ReactDOM.renderToString(<Meta />);
const header = Helmet.rewind();

export default header;