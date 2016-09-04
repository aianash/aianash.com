import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

const cx = classNames.bind(styles);

const Answers = () => {
  return  (
    <div id='aian-answers' className={cx('aian-answers')}>
      <div className={cx('container')}>
          <div className={cx("row", "hd-row")}>
            <div className={cx("col-md-12", "text-center")}>
              <a href="#" className={cx("box-heading", "light")}>answers : our's / other's</a>
            </div>
          </div>

          <div className={cx("row", "ques")}>
            <div className={cx("col-md-5", "col-md-offset-2")}>
              <h2>OUR's</h2>
              <ul className={cx("list-unstyled")}>
                <li>Which features user like the most ?</li>
                <li>What information user is probably looking for in your website ?</li>
                <li>Why one user clicked <i>"buy"</i> but another didn't ?</li>
              </ul>
            </div>
            <div className={cx("col-md-5")}>
              <h2>Other's</h2>
              <ul className={cx("list-unstyled")}>
                <li>How users interact using heat map ?</li>
                <li>How many users bounced of the website ?</li>
                <li>How many users clicked <i>"buy"</i> ?</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Answers