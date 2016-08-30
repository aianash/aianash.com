import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

const cx = classNames.bind(styles);

const App = ({children}) => {
  return (
    <div className={cx('app')}>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;