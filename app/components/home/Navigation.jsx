import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import css from 'css/main';
import Logo from 'components/Logo';

import Scroll from 'react-scroll';

const Link = Scroll.Link;

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
              <li><Link activeClass={cx("active")} to="features" smooth={true} duration={500}>Features</Link></li>
              <li><Link activeClass={cx("active")} to="hiw" smooth={true} duration={500}>How It Works</Link></li>
              <li><Link activeClass={cx("active")} to="subscribe" smooth={true} duration={500}>Get Started</Link></li>
              <li><Link activeClass={cx("active")} to="team" smooth={true} duration={500}>Team</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;