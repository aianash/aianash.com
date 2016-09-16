import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';
import Scroll from 'react-scroll';
import axios from 'axios'

const Element = Scroll.Element;
const cx = classNames.bind(styles);

var emailValidation = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export default class Newsletter extends Component {
  constructor(props) {
    super(props)

    this.onEmailEnter = this.onEmailEnter.bind(this)
    this.onSubscribe = this.onSubscribe.bind(this)
  }

  state = {
    notValid: false,
    subscribed: false
  }

  onEmailEnter(event) {
    this.setState({notValid: !emailValidation.test(event.target.value)})
  }

  onSubscribe(event) {
    const email = this.refs.email.value
    if(emailValidation.test(email)) {
      this.setState({subscribed: true})
      axios.post('/api/subscribe', {email})
           .then((resp) => this.setState({subscribed: true}))
           .catch((err) => this.setState({subscribed: false}))
    } else
      this.setState({notValid: true})
    event.preventDefault()
  }

  render() {
    const {notValid, subscribed} = this.state
    return (
      <Element name="subscribe" id="aian-subscribe">
        <div className={cx("container")}>
          <div className={cx("row", "text-center", "")}>
            <div className={cx("col-md-12")}>
              <h2>Be the first to get access when it goes live</h2>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("col-md-8", "col-md-offset-2")}>
              <form className={cx("form-inline")}>
                <div className={cx("col-md-8", "col-sm-8")}>
                  <div className={cx("form-group")}>
                    <label htmlFor="email" className={cx("sr-only")}>Email</label>
                    <input type="email" className={cx("email", {error: notValid})} id="email" placeholder="Email" ref="email" onChange={this.onEmailEnter}/>
                  </div>
                </div>
                <div className={cx("col-md-4", "col-sm-4")}>
                  <button type="submit" className={cx("btn", "btn-default", "btn-block", {disabled: subscribed})} onClick={this.onSubscribe}>Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}