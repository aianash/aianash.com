import React, {Component} from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from 'css/main';

import {
  mac,
  d1,
  d2,
  d3 } from 'images';

const cx = classNames.bind(styles);
var d1style = {
  'backgroundImage' : 'url(' + d1 + ')'
}

var d2style = {
  'backgroundImage' : 'url(' + d2 + ')'
}

var d3style = {
  'backgroundImage' : 'url(' + d3 + ')'
}

class Header extends Component {

  state = {
    showing: 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({showing: (this.state.showing + 1) % 3})
    }, 8000)
  }

  render() {
    const {showing} = this.state
    return (
      <header id="aian-header" className={cx("aian-cover")}>
        <div className={cx('feature-desc', 'col-md-3', 'col-md-offset-2')}>
          <div className={cx({fadeIn: (showing === 0)})}>
            <h2>Actionable Analytics in one step</h2>
            <p>Turn massive data into insights that help you understand the factors behind user actions</p>
          </div>
          <div className={cx({fadeIn: (showing === 1)})}>
            <h2>User Engagement Trends</h2>
            <p>Quantify user engagement and visualize over time</p>
          </div>
          <div className={cx({fadeIn: (showing === 2)})}>
            <h2>Deep Dive into anomalies</h2>
            <p>Find most probable reasons behind anomalies as a sequence of events in user behavior</p>
          </div>
        </div>
        <div className={cx('feature-img', 'col-md-7')} style={{backgroundImage: 'url(' + mac + ')'}}>
          <div className={cx('feature-snap', {fadeIn: (showing === 0)})} style={d2style}></div>
          <div className={cx('feature-snap', {fadeIn: (showing === 1)})} style={d1style}></div>
          <div className={cx('feature-snap', {fadeIn: (showing === 2)})} style={d3style}></div>
        </div>
      </header>
    )
  }
}
        // </div>
        // <div className={cx('feature-img', 'col-md-7', {hidden: (showing !== 1)})} style={{backgroundImage: 'url(' + mac + ')'}}>

export default Header;