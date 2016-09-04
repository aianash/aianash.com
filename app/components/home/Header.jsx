import React, {Component} from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from 'css/main';

import slide1bg from 'images/slide_bg_1.jpg'
import slide2bg from 'images/slide_bg_2.jpg'
import slide3bg from 'images/slide_bg_3.jpg'

const cx = classNames.bind(styles);

class Header extends Component {
  componentDidMount() {
    this.refs['slider'].refs['innerSlider'].refs.list.style.height = window.innerHeight + 'px';
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 10000,
      // pauseOnHover: true
    };

    var slide1style = {
      'backgroundImage' : 'url(' + slide1bg + ')'
    }

    var slide2style = {
      'backgroundImage' : 'url(' + slide2bg + ')'
    }

    var slide3style = {
      'backgroundImage' : 'url(' + slide3bg + ')'
    }

                  // <p><a href="#" className={cx("btn btn-primary btn-lg")}>Get started</a></p>
    return (
      <header id="aian-header" className={cx("aian-cover")}>
        <Slider {...settings} ref="slider">
          <div style={slide1style}>
            <div className={cx("container")}>
              <div className={cx("col-md-8", "js-fullheight", "slider-text")}>
                <div className={cx("slider-text-inner")}>
                  <h2><span>An Arificial Intelligence</span><br/> that understands how users acquire information <br/>on website.</h2>
                </div>
              </div>
            </div>
          </div>

          <div style={slide2style}>
            <div className={cx("container")}>
              <div className={cx("col-md-8", "js-fullheight", "col-md-offset-4", "right", "slider-text")}>
                <div className={cx("slider-text-inner")}>
                  <h2><span>Analyze how information</span><br/> affects user's actions.</h2>
                </div>
              </div>
            </div>
          </div>

          <div style={slide3style}>
            <div className={cx("container")}>
              <div className={cx("col-md-8", "js-fullheight", "slider-text")}>
                <div className={cx("slider-text-inner")}>
                  <h2><span>A Deeper Analytics</span><br/>that tells user's story.</h2>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </header>
    )
  }
}

export default Header;