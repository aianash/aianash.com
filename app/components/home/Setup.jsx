import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';
import { tags, f1w, embed } from 'images';

const cx = classNames.bind(styles);

//
const StepOne = ({step}) => (
  <div className={cx("aianash", {'hidden': (step != 1)})}>
    <div className={cx("row")}>
      <div className={cx("col-md-7", "col-sm-7", "col-md-pull-2", "col-sm-pull-2", "animate-box")}>
        <div className={cx("steps-image")}>
          <img src={embed} alt="work"/>
        </div>
      </div>
      <div className={cx("col-md-5", "col-sm-5")}>
        <div className={cx("step-desc")}>
          <h3>Login and Setup</h3>
          <span className={cx("icon")}>
            <i className={cx("icon-check")}></i>
          </span>
          <div className={cx("step-txt")}>
            <p>Add a small javascript code to your page</p>
          </div>
        </div>

        <div className={cx("step-desc")}>
          <span className={cx("icon")}>
            <i className={cx("icon-check")}></i>
          </span>
          <div className={cx("step-txt")}>
            <p>Mark important sections by adding "aianash" class to html divs</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

StepOne.propTypes = {
  step: PropTypes.number
};

//
const StepTwo = ({step}) => (
  <div className={cx("aianash", {'hidden': (step != 2)})}>
    <div className={cx("row")}>
      <div className={cx("col-md-7", "col-sm-7", "col-md-pull-2", "col-sm-pull-2", "animate-box")}>
        <div className={cx("steps-image")}>
          <img src={tags} alt="work"/>
        </div>
      </div>
      <div className={cx("col-md-5 col-sm-5")}>
        <div className={cx("step-desc", "animate-box")}>
          <h3>Add Information Tags</h3>
          <span className={cx("icon")}>
            <i className={cx("icon-check")}></i>
          </span>
          <div className={cx("step-txt")}>
            <p>Use our browser plugin to add information tags to your sections</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

StepTwo.propTypes = {
  step: PropTypes.number
};

//
const StepThree = ({step}) => (
  <div className={cx("aianash", {'hidden': (step != 3)})}>
    <div className={cx("row")}>
      <div className={cx("col-md-7", "col-sm-7", "col-md-pull-2", "col-sm-pull-2", "animate-box")}>
        <div className={cx("steps-image")}>
          <img src={f1w} alt="work"/>
        </div>
      </div>
      <div className={cx("col-md-5 col-sm-5")}>
        <div className={cx("step-desc", "animate-box")}>
          <h3>Done</h3>
          <span className={cx("icon")}>
            <i className={cx("icon-check")}></i>
          </span>
          <div className={cx("step-txt")}>
            <p>Our analytics will automatically start showing result after enough data is collected</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

StepThree.propTypes = {
  step: PropTypes.number
};

//
export default class Setup extends Component {
  constructor(props) {
    super(props);
    this.showStep = this.showStep.bind(this);
  }

  state = {
    step: 1,
    stepTitle : ['Embed', 'Add', 'Done']
  }

  showStep(event) {
    this.setState({ step: parseInt(event.currentTarget.dataset.step) });
  }

  render() {
    return (
      <div className={cx("aian-setup")}>
        <div className={cx("container")}>
          <div className={cx("row", "hd-row")}>
            <div className={cx("col-md-12", "text-center")}>
              <a href="#" className={cx("box-heading", "light")}>3 Easy Steps</a>
            </div>
          </div>
          <div className={cx("row", "steps-full")}>
            <div className={cx("col-md-9")}>
              <StepOne step={this.state.step}/>
              <StepTwo step={this.state.step}/>
              <StepThree step={this.state.step}/>
            </div>

            <div className={cx("col-md-3")}>
              <div id="aian-counter" className={cx("aian-bg", "aian-counter")}>
                <div className={cx("row")}>
                  {[...Array(3)].map((x, i) =>
                    <div className={cx("col-md-12")} key={i + 1}>
                      <div className={cx("steps")}>
                        <a className={cx("btn", {'selected' : (this.state.step == (i + 1))})}
                           data-step={i + 1}
                           onClick={this.showStep}>
                          {this.state.stepTitle[i]}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}