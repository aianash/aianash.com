import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import css from 'css/main';
import Logo from 'components/Logo';

const cx = classNames.bind(css);

const Navigation = () => {
  return (
    <nav className={cx('aian-nav')} role="navigation">
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-xs-2")}>
            <div id="aian-logo"><Logo/></div>
          </div>
          <div className={cx("col-xs-10", "text-right", "menu-1")}>
            <ul>
              <li className={cx("active")}><a href="index.html">Home</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;