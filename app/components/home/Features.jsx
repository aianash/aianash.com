import React from 'react';
import Waypoint from 'react-waypoint';
import classNames from 'classnames/bind';
import styles from 'css/main';
import skrolConfig from 'skrollrconfig';
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
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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