import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

import { ishan, gaurav, neeraj } from 'images';

const cx = classNames.bind(styles);

const Team = () => {
  return(
    <div id="aian-team" data-section="team">
      <div className={cx("container")}>
        <div className={cx("col-md-6", "col-md-offset-3", "text-center", "hd-row")}>
          <a href="#team" className={cx("box-heading")}>Meet the team</a>
        </div>
        <div className={cx("col-md-4")}>
          <div className={cx("person")}>
            <img src={ishan} alt="" className={cx("img-responsive")}/>
            <h3>Kumar Ishan</h3>
            <h4>Co-Founder</h4>
            <p>Versatile Developer. Deep into Machine Learning. Life Long Learner. Bibliophile. Ex-Amazonian.</p>
            <ul className={cx("social")}>
              <li><a href="https://about.me/kumarishan">about.me/kumarishan</a></li>
              <li><a href="https://in.linkedin.com/in/kumarishan"><i className={cx("icon-linkedin")}></i></a></li>
              <li><a href="https://twitter.com/kumar_ishan"><i className={cx("icon-twitter")}></i></a></li>
            </ul>
          </div>
        </div>
        <div className={cx("col-md-4")}>
          <div className={cx("person")}>
            <img src={gaurav} alt="" className={cx("img-responsive")}/>
            <h3>Gaurav Gupta</h3>
            <h4>Co-Founder</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam itaque ipsam iste provident quo ipsam iste provident.</p>
            <ul className={cx("social")}>
              <li><a href="#"><i className={cx("icon-linkedin")}></i></a></li>
              <li><a href="#"><i className={cx("icon-twitter")}></i></a></li>
            </ul>
          </div>
        </div>
        <div className={cx("col-md-4")}>
          <div className={cx("person")}>
            <img src={neeraj} alt="" className={cx("img-responsive")}/>
            <h3>Neeraj Gangwar</h3>
            <h4>Co-Founder</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam itaque ipsam iste provident quo ipsam iste provident.</p>
            <ul className={cx("social")}>
              <li><a href="#"><i className={cx("icon-linkedin")}></i></a></li>
              <li><a href="#"><i className={cx("icon-twitter")}></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;