import React from 'react';
import Waypoint from 'react-waypoint';
import classNames from 'classnames/bind';
import styles from 'css/main';

const cx = classNames.bind(styles);

const Upcoming = () => {
  return (
    <div id="upcomming" className={cx("aian-upcoming", "aianash")}>
      <div className={cx("container")}>
        <div className={cx("row", "hd-row")}>
          <div className={cx("col-md-8", "col-md-offset-2", "text-center")}>
            <a href="#features" className={cx("box-heading")}>What more ?</a>
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("col-md-4")}>
            <h2>Personalization</h2>
            <ul className={cx("list-unstyled")}>
              <li>Personalize website based on behavior.</li>
              <li>Optimize search result based on information user has.</li>
            </ul>
          </div>
          <div className={cx("col-md-4")}>
            <h2>Marketing</h2>
            <ul className={cx("list-unstyled")}>
              <li>Run your marketing campaign based on how information affect a user segment.</li>
            </ul>
          </div>
          <div className={cx("col-md-4")}>
            <h2>SEO</h2>
            <ul className={cx("list-unstyled")}>
              <li>Use most important information tags for SEO.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upcoming;