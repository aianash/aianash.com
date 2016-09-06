import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer id="aian-footer" role="contentinfo">
      <div className={cx("container")}>
        <div className={cx("row", "row-pb-md")}>
          <div className={cx("col-md-2", "col-sm-4", "col-xs-6", "col-md-push-1")}>
            <ul className={cx("aian-footer-links")}>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Ph: +91 7799899984</a></li>
              <li><a href="#">founders@aianash.com</a></li>
            </ul>
          </div>
          <div className={cx("row", "copyright")}>
            <div className={cx("col-md-12", "text-center")}>
              <p>
                <small className={cx("block")}>&copy; 2016 AIANash. All Rights Reserved.</small>
              </p>
              <ul className={cx("aian-social-icons")}>
                <li><a href="#"><i className={cx("icon-twitter")}></i></a></li>
                <li><a href="#"><i className={cx("icon-facebook")}></i></a></li>
                <li><a href="#"><i className={cx("icon-linkedin")}></i></a></li>
                <li><a href="#"><i className={cx("icon-dribbble")}></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;