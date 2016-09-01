import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';


const cx = classNames.bind(styles);

const Logo = () => (
  <a href="/" className={cx("aian-logo")}><span>aia</span>nash</a>
)

export default Logo;