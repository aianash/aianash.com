import React, { PropTypes } from 'react';
import Navigation from 'containers/Navigation';
import classNames from 'classnames/bind';
import styles from 'css/main';

const cx = classNames.bind(styles);

const App = ({children}) => {
  return (
    <div classNames={cx('app')}>
      <Navigation />
        {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;