import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

import {
  ecommerce,
  services,
  product
} from 'images';

const cx = classNames.bind(styles);

const ec = {
  backgroundImage: 'url(' + ecommerce + ')',
};

const sr = {
  backgroundImage: 'url(' + services + ')'
};

const pd = {
  backgroundImage: 'url(' + product + ')'
};

const CustomerSegment = () => {
  return (
    <div id="aian-portfolio-section">
      <div className={cx("portfolio-row-half")}>
        <div className={cx("portfolio-grid-item-color")}>
          <div className={cx("desc")}>
            <h2>Analytics that suits your need</h2>
            <p><i className={cx("icon-arrow-right22")}></i></p>
          </div>
        </div>
        <a className={cx("portfolio-grid-item", "aianash")} style={ec}>
          <div className={cx("desc2")}>
            <h3>Ecommerce</h3>
            <p>Find what users are looking for in a product</p>
            <p>Use the prediction to strategize product placement</p>
          </div>
        </a>
        <a className={cx("portfolio-grid-item", "aianash")} style={sr}>
          <div className={cx("desc2")}>
            <h3>Web Services</h3>
            <p>How users analyze your services</p>
          </div>
        </a>
        <a className={cx("portfolio-grid-item", "aianash")} style={pd}>
          <div className={cx("desc2")}>
            <h3>Product</h3>
            <p>What features of your product do users like</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default CustomerSegment;