import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

const cx = classNames.bind(styles);

const Newsletter = () => {
  return (
    <div id="aian-subscribe">
      <div className={cx("container")}>
        <div className={cx("row", "text-center", "")}>
          <div className={cx("col-md-12")}>
            <h2>Be the first to get access when it goes live</h2>
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("col-md-8", "col-md-offset-2")}>
            <form className={cx("form-inline")}>
              <div className={cx("col-md-8", "col-sm-8")}>
                <div className={cx("form-group")}>
                  <label htmlFor="email" className={cx("sr-only")}>Email</label>
                  <input type="email" className={cx("email")} id="email" placeholder="Email"/>
                </div>
              </div>
              <div className={cx("col-md-4", "col-sm-4")}>
                <button type="submit" className={cx("btn", "btn-default", "btn-block")}>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;