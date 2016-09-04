import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';
import {hiw} from 'images';

const cx = classNames.bind(styles);

const HowItWorks = () => {
  return  (
    <div id='aian-answers' className={cx('aian-answers')}>
      <div className={cx('container')}>
          <div className={cx("row", "hd-row")}>
            <div className={cx("col-md-12", "text-center")}>
              <a href="#" className={cx("box-heading", "light")}>how it works</a>
            </div>
          </div>
          <div className={cx("row", "ques")}>
            <div className={cx("col-md-6", "col-md-offset-3")}>
              <img className={cx("img-responsive")} src={hiw}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HowItWorks;