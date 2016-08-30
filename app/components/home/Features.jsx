import React from 'react';
import Waypoint from 'react-waypoint';
import classNames from 'classnames/bind';
import styles from 'css/main';
import dashboard1 from 'images/dashboard_1.png'
import skrolConfig from 'skrollrconfig';

const cx = classNames.bind(styles);
const featuresSkrCfg = skrolConfig('aian-features');

const Features = () => {
  return (
    <div id="aian-features" className={cx('aian-features')} {...featuresSkrCfg}>
      <div className={cx("container")}>
        <div className={cx("row", "animate-box")}>
          <div className={cx("col-md-8", "col-md-offset-2", "text-center", "fh5co-heading")}>
            <h2>Dashboard</h2>
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("project")}>
            <div className={cx("col-md-8", "col-md-push-5", "animate-box")} >
              <img className={cx("img-responsive")} src={dashboard1} alt="work"/>
            </div>
            <div className={cx("col-md-4", "col-md-pull-8", "animate-box")}>
              <div className={cx("mt")}>
                <h3>Real Project For Real Solutions</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p>
                <ul className={cx("list-nav")}>
                  <li><i className={cx("icon-check")}></i>Far far away, behind the word</li>
                  <li><i className={cx("icon-check")}></i>There live the blind texts</li>
                  <li><i className={cx("icon-check")}></i>Separated they live in bookmarksgrove</li>
                  <li><i className={cx("icon-check")}></i>Semantics a large language ocean</li>
                  <li><i className={cx("icon-check")}></i>A small river named Duden</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx("project")}>
            <div className={cx("col-md-8", "col-md-pull-1", "animate-box")}>
              <img className={cx("img-responsive")} src={dashboard1} alt="work"/>
            </div>
            <div className={cx("col-md-4", "animate-box")}>
              <div className={cx("mt")}>
                <div>
                  <h4><i className={cx("icon-user")}></i>Real Project For Real Solutions</h4>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                </div>
                <div>
                  <h4><i className={cx("icon-video2")}></i>Real Project For Real Solutions</h4>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                </div>
                <div>
                  <h4><i className={cx("icon-shield")}></i>Real Project For Real Solutions</h4>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;