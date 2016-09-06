import React from 'react';
import Waypoint from 'react-waypoint';
import classNames from 'classnames/bind';
import styles from 'css/main';
import Logo from 'components/Logo';

import {dbehavior, dpredict, dabtest} from 'images';

const cx = classNames.bind(styles);

const FeatureOne = () => (
  <div className={cx("feature")}>
    <div className={cx("col-md-8", "col-md-pull-1", "animate-box")} >
      <img className={cx("img-responsive")} src={dbehavior} alt="work"/>
    </div>
    <div className={cx("col-md-4", "animate-box")}>
      <div className={cx("desc")}>
        <h3><Logo/>behavior</h3>
        <p><span> Analyze</span> informations acquired by users. <span>Understand</span> how information influenced actions. <span>Compare</span> different behavior clusters of users. <span>Visualize</span> navigation patterns for a user behavior. <span>Correlate</span> behavior with user segments.</p>
      </div>
    </div>
  </div>
)

const FeatureTwo = () => (
  <div className={cx("feature")}>
    <div className={cx("col-md-8", "col-md-pull-1", "animate-box")}>
      <img className={cx("img-responsive")} src={dpredict} alt="work"/>
    </div>
    <div className={cx("col-md-4", "animate-box")}>
      <div className={cx("desc")}>
        <h3><Logo/>Predict</h3>
        <p><span> Predict</span> behavior of user on customized webpage. <span>Compare</span> predictions for different user segments. <span>Visualize</span> prediction for different referral page.</p>
      </div>
    </div>
  </div>
)

const FeatureThree = () => (
  <div className={cx("feature")}>
    <div className={cx("col-md-8", "col-md-pull-1", "animate-box")}>
      <img className={cx("img-responsive")} src={dabtest} alt="work"/>
    </div>
    <div className={cx("col-md-4", "animate-box")}>
      <div className={cx("desc")}>
        <h3><Logo/>A/B Test</h3>
        <p><span> A/B Test</span> user behavior with multiple design. <span>Analyze</span> predictions for different tests.</p>
      </div>
    </div>
  </div>
)

const Features = () => {
  return (
    <div id="aian-features" className={cx('aian-features')}>
      <div className={cx("container")}>
        <div className={cx("row", "hd-row")}>
          <div className={cx("col-md-8", "col-md-offset-2", "text-center")}>
            <a href="#features" className={cx("box-heading")}>Dashboard</a>
          </div>
        </div>
        <div className={cx("row")}>
          <FeatureOne/>
          <FeatureTwo/>
          <FeatureThree/>
        </div>
      </div>
    </div>
  )
}

export default Features;