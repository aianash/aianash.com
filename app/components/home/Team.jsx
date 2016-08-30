import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

import ishan from 'images/ishan.jpg';
import gaurav from 'images/gaurav.jpg';
import neeraj from 'images/neeraj.jpg';

const cx = classNames.bind(styles);

const Team = () => {
  return(
    <div id="aian-team" data-section="team">
      <div className={cx("container")}>
        <div className={cx("col-md-6", "col-md-offset-3", "text-center", "aian-heading")}>
          <h2>Meet The Team</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam itaque ipsam iste provident quo ipsam iste provident.</p>
        </div>
        <div className={cx("col-md-4")}>
          <div className={cx("person")}>
            <img src={ishan} alt="" className={cx("img-responsive")}/>
            <h3>Kumar Ishan</h3>
            <h4>Co-Founder, Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam itaque ipsam iste provident quo ipsam iste provident.</p>
            <ul className={cx("social")}>
              <li><a href="#"><i className={cx("icon-facebook")}></i></a></li>
              <li><a href="#"><i className={cx("icon-twitter")}></i></a></li>
              <li><a href="#"><i className={cx("icon-dribbble")}></i></a></li>
              <li><a href="#"><i className={cx("icon-instagram")}></i></a></li>
            </ul>
          </div>
        </div>
        <div className={cx("col-md-4")}>
          <div className={cx("person")}>
            <img src={gaurav} alt="" className={cx("img-responsive")}/>
            <h3>Gaurav Gupta</h3>
            <h4>Co-Founder, Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam itaque ipsam iste provident quo ipsam iste provident.</p>
            <ul className={cx("social")}>
              <li><a href="#"><i className={cx("icon-facebook")}></i></a></li>
              <li><a href="#"><i className={cx("icon-twitter")}></i></a></li>
              <li><a href="#"><i className={cx("icon-dribbble")}></i></a></li>
              <li><a href="#"><i className={cx("icon-instagram")}></i></a></li>
            </ul>
          </div>
        </div>
        <div className={cx("col-md-4")}>
          <div className={cx("person")}>
            <img src={neeraj} alt="" className={cx("img-responsive")}/>
            <h3>Neeraj Gangwar</h3>
            <h4>Co-Founder, Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam itaque ipsam iste provident quo ipsam iste provident.</p>
            <ul className={cx("social")}>
              <li><a href="#"><i className={cx("icon-facebook")}></i></a></li>
              <li><a href="#"><i className={cx("icon-twitter")}></i></a></li>
              <li><a href="#"><i className={cx("icon-dribbble")}></i></a></li>
              <li><a href="#"><i className={cx("icon-instagram")}></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;