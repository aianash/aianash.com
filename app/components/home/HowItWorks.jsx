import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';
import skrolConfig from 'skrollrconfig';

const cx = classNames.bind(styles);
const skrMainCfg = skrolConfig('aian-hiw');

const HowItWorks = () => {
  return  (
    <div id='aian-hiw' className={cx('aian-hiw')} {...skrMainCfg}>
      <div className={cx('container')}>
          <div className={cx("row", "hd-row")}>
            <div className={cx("col-md-12", "text-center")}>
              <a href="#" className={cx("box-heading", "light")}>How It Works</a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HowItWorks