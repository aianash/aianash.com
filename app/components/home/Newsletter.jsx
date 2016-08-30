import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

const cx = classNames.bind(styles);

const Newsletter = () => {
  return (
    <div id="aian-started">
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-md-8", "col-md-offset-2", "text-center", "aian-heading")}>
            <h2>Newsletter</h2>
            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("col-md-8", "col-md-offset-2")}>
            <form className={cx("form-inline")}>
              <div className={cx("col-md-6", "col-sm-6")}>
                <div className={cx("form-group")}>
                  <label htmlFor="email" className={cx("sr-only")}>Email</label>
                  <input type="email" className={cx("form-control")} id="email" placeholder="Email"/>
                </div>
              </div>
              <div className={cx("col-md-6", "col-sm-6")}>
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