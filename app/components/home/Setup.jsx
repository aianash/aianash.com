import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';
import dashboard1 from 'images/dashboard_1.png';

const cx = classNames.bind(styles);

ex Setup = () => {
  return (
    <div className={cx("aian-bg-section")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div id="aian-features-2">
            <div className={cx("col-feature-9")}>
              <div className={cx("row")}>
                <div className={cx("col-md-12", "aian-heading", "animate-box")}>
                  <h2>Core Features</h2>
                  <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                </div>
              </div>
              <div className={cx("row")}>
                <div className={cx("col-md-7", "col-sm-7", "col-md-pull-2", "col-sm-pull-2", "animate-box")}>
                  <div className={cx("feature-image")}>
                    <img src={dashboard1} alt="work"/>
                  </div>
                </div>
                <div className={cx("col-md-5 col-sm-5")}>
                  <div className={cx("feature-left", "animate-box")}>
                    <span className={cx("icon")}>
                      <i className={cx("icon-check")}></i>
                    </span>
                    <div className={cx("feature-copy")}>
                      <h3>Retina Ready</h3>
                      <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    </div>
                  </div>

                  <div className={cx("feature-left", "animate-box")}>
                    <span className={cx("icon")}>
                      <i className={cx("icon-check")}></i>
                    </span>
                    <div className={cx("feature-copy")}>
                      <h3>Fully Responsive</h3>
                      <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    </div>
                  </div>

                  <div className={cx("feature-left")}>
                    <span className={cx("icon")}>
                      <i className={cx("icon-check")}></i>
                    </span>
                    <div className={cx("feature-copy")}>
                      <h3>Ready To Use</h3>
                      <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx("col-feature-3")}>
              <div id="aian-counter" className={cx("aian-bg aian-counter")}>
                <div className={cx("row")}>
                  {[...Array(3)].map((x, i) =>
                    <div className={cx("col-md-12")}>
                      <div className={cx("steps")}>
                        <a className={cx("btn")} onClick={this.showStep}>{i + 1}</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setup;