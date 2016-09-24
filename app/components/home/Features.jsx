import React from 'react';
import Waypoint from 'react-waypoint';
import classNames from 'classnames/bind';
import styles from 'css/main';
import Logo from 'components/Logo';
import Scroll from 'react-scroll';

import {f1w, f2w, f1, d2, d3} from 'images';

const Element = Scroll.Element;
const cx = classNames.bind(styles);

var d1style = {
  'backgroundImage' : 'url(' + f1 + ')'
}

const FeatureOne = () => (
  <div className={cx("feature", "aianash")}>
    <img className={cx("col-md-6", 'col-md-offset-1', 'image-responsive')} src={f1w}/>
    <div className={cx("col-md-3", "animate-box")}>
      <div className={cx("desc", 'left')}>
        <h3><Logo/>behavior</h3>
        <ul className={cx('list-unstyled')}>
          <li>Why write complex queries to segment users and find common interests? When our machine learning algorithms can find it for you.</li>
          <li>Don't just believe in crude metrics. But gain insights into reasons behind user actions.</li>
          <li>Identify untapped user interests to customise your product or marketing efforts.</li>
        </ul>
      </div>
    </div>
  </div>
)

const FeatureTwo = () => (
  <div className={cx("feature", "aianash")}>
    <div className={cx("col-md-3", 'col-md-offset-2', "animate-box")}>
      <div className={cx("desc")}>
        <h3><Logo/>timeline</h3>
        <ul className={cx('list-unstyled')}>
          <li>Understand when and where you are losing customers.</li>
          <li>Visualise how user interests evolve throughout the website.</li>
        </ul>
      </div>
    </div>
    <img className={cx("col-md-", 'image-responsive')} src={f2w}/>
  </div>
)

const Features = () => {
  return (
    <Element name="features" id="aian-features" className={cx('aian-features')}>
      <div className={cx("")}>
        <div className={cx("row", "hd-row")}>
          <div className={cx("col-md-8", "col-md-offset-2", "text-center")}>
            <a href="#features" className={cx("box-heading")}>Dashboard</a>
          </div>
        </div>
        <div className={cx("row")}>
          <FeatureOne/>
          <FeatureTwo/>
        </div>
      </div>
    </Element>
  )
}

export default Features;