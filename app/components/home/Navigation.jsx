import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import css from 'css/main';

const cx = classNames.bind(css);

const Navigation = () => {
  return (
    <nav className={cx('aian-nav')} role="navigation">
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-xs-2")}>
            <div id="aian-logo"><a href="index.html">Bow.</a></div>
          </div>
          <div className={cx("col-xs-10", "text-right", "menu-1")}>
            <ul>
              <li className={cx("active")}><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="work.html">Work</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;