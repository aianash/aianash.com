import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';
import Scroll from 'react-scroll';

import { ishan, gaurav, neeraj } from 'images';

const Element = Scroll.Element;
const cx = classNames.bind(styles);

const Team = () => {
  return(
    <Element name="team" id="aian-team" data-section="team">
      <div className={cx("container")}>
        <div className={cx("col-md-6", "col-md-offset-3", "text-center", "hd-row")}>
          <a href="#team" className={cx("box-heading")}>Meet the team</a>
        </div>
        <div className={cx("col-md-4")}>
          <div className={cx("person")}>
            <img src={ishan} alt="" className={cx("img-responsive")}/>
            <h3>Kumar Ishan</h3>
            <h4>Founder</h4>
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
            <p>Tech enthusiast. AI researcher. Android addict. Movie buff. Love puzzles. Ex-Oraclite.</p>
            <ul className={cx("social")}>
              <li><a href="https://about.me/gaurav-gupta">about.me/gaurav-gupta</a></li>
              <li><a href="https://in.linkedin.com/in/gauravguptaiitr"><i className={cx("icon-linkedin")}></i></a></li>
              <li><a href="https://twitter.com/ravmon1"><i className={cx("icon-twitter")}></i></a></li>
            </ul>
          </div>
        </div>
        <div className={cx("col-md-4")}>
          <div className={cx("person")}>
            <img src={neeraj} alt="" className={cx("img-responsive")}/>
            <h3>Neeraj Gangwar</h3>
            <h4>Co-Founder</h4>
            <p>Software Developer. Finds CSS pretty tough and Akka awesome. Trying to make machines learn. Ex-Commonfloor.</p>
            <ul className={cx("social")}>
              <li><a href="https://about.me/neeraj.gangwar">about.me/neeraj.gangwar</a></li>
              <li><a href="https://in.linkedin.com/in/gangwarneeraj"><i className={cx("icon-linkedin")}></i></a></li>
              <li><a href="https://twitter.com/neeraj_gangwar"><i className={cx("icon-twitter")}></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Team;