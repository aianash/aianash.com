import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer id="aian-footer" role="contentinfo">
      <div className={cx("container")}>
        <div className={cx("row", "row-pb-md")}>
          <div className={cx("col-md-4", "aian-widget")}>
            <h3>The Company</h3>
            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
            <p><a href="#">Learn More</a></p>
          </div>
          <div className={cx("col-md-2", "col-sm-4", "col-xs-6", "col-md-push-1")}>
            <ul className={cx("aian-footer-links")}>
              <li><a href="#">About</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Meetups</a></li>
            </ul>
          </div>

          <div className={cx("col-md-2", "col-sm-4", "col-xs-6", "col-md-push-1")}>
            <ul className={cx("aian-footer-links")}>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Handbook</a></li>
              <li><a href="#">Held Desk</a></li>
            </ul>
          </div>

          <div className={cx("col-md-2", "col-sm-4", "col-xs-6", "col-md-push-1")}>
            <ul className={cx("aian-footer-links")}>
              <li><a href="#">Find Designers</a></li>
              <li><a href="#">Find Developers</a></li>
              <li><a href="#">Teams</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
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
    </footer>
  )
};

export default Footer;