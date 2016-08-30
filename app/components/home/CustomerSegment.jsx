import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

import {
  dashboard1
} from 'images';

const cx = classNames.bind(styles);


const CustomerSegment = () => {
  return (
    <div id="aian-portfolio-section">
      <div className={cx("portfolio-row-half")}>
        <div className={cx("portfolio-grid-item-color")}>
          <div className={cx("desc")}>
            <h2>Our Project</h2>
            <p>Far far away, behind the word mountains, far from the countries</p>
            <p><a href="#" className={cx("btn btn-primary btn-outline with-arrow")}>Learn More<i className={cx("icon-arrow-right22")}></i></a></p>
          </div>
        </div>
        <a href="#" className={cx("portfolio-grid-item")}>
          <div className={cx("desc2")}>
            <h3>Ecommerce</h3>
            <span>Travel</span>
            <i className={cx("sl-icon-heart")}></i>
          </div>
        </a>
        <a href="#" className={cx("portfolio-grid-item")}>
          <div className={cx("desc2")}>
            <h3>Product</h3>
            <span>Travel</span>
            <i className={cx("sl-icon-heart")}></i>
          </div>
        </a>
        <a href="#" className={cx("portfolio-grid-item")}>
          <div className={cx("desc2")}>
            <h3>Services</h3>
            <span>Travel</span>
            <i className={cx("sl-icon-heart")}></i>
          </div>
        </a>
      </div>
    </div>
  )
}

export default CustomerSegment;
    // <div className={cx("container")}>
    //   <div className={cx("row")}>
    //     <div id="aian-section")}>
    //       <div className={cx("col-nineth")}>
    //         <div className={cx("row")}>
    //           <div className={cx("col-third")}>
    //             <div className={cx("col-md-12")}>
    //               <span className={cx("icon")}>
    //                 <i className={cx("icon-eye")}></i>
    //               </span>
    //               <div className={cx("desc")}>
    //                 <h3>Retina Ready</h3>
    //                 <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
    //                 <p><a href="#" className={cx("btn", "btn-primary")}>Learn More</a></p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className={cx("col-third")}>
    //             <div className={cx("col-md-12")}>
    //               <span className={cx("icon")}>
    //                 <i className={cx("icon-power")}></i>
    //               </span>
    //               <div className={cx("desc")}>
    //                 <h3>Web Starter</h3>
    //                 <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
    //                 <p><a href="#" className={cx("btn", "btn-primary")}>Learn More</a></p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className={cx("col-third")}>
    //             <div className={cx("col-md-12")}>
    //               <span className={cx("icon")}>
    //                 <i className={cx("icon-laptop")}></i>
    //               </span>
    //               <div className={cx("desc")}>
    //                 <h3>Fully Responsive</h3>
    //                 <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
    //                 <p><a href="#" className={cx("btn", "btn-primary")}>Learn More</a></p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={cx("col-forth", "aian-video", "aian-bg")} style={videoStyle}>
    //         <a href="https://vimeo.com/channels/staffpicks/93951774" className={cx("popup-vimeo")}>
    //           <i className={cx("icon-video2")}></i>
    //         </a>
    //         <div className={cx("overlay")}></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>