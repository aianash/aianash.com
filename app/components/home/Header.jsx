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
      autoplaySpeed: 10000
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

    return (
      <header id="aian-header" className={cx("aian-cover")}>
        <Slider {...settings} ref="slider">
          <div style={slide1style}>
            <div className={cx("container")}>
              <div className={cx("col-md-10", "col-md-offset-1", "text-center", "js-fullheight", "slider-text")}>
                <div className={cx("slider-text-inner")}>
                  <h2>We tell a deeper story of users</h2>
                  <p><a href="#" className={cx("btn btn-primary btn-lg")}>Get started</a></p>
                </div>
              </div>
            </div>
          </div>

          <div style={slide2style}>
            <div className={cx("container")}>
              <div className={cx("col-md-10", "col-md-offset-1", "text-center", "js-fullheight", "slider-text")}>
                <div className={cx("slider-text-inner")}>
                  <h2>Understand how information affect your users</h2>
                  <p><a href="#" className={cx("btn btn-primary btn-lg")}>Get started</a></p>
                </div>
              </div>
            </div>
          </div>

          <div style={slide3style}>
            <div className={cx("container")}>
              <div className={cx("col-md-10", "col-md-offset-1", "text-center", "js-fullheight", "slider-text")}>
                <div className={cx("slider-text-inner")}>
                  <h2>We Think Different That Others Can't</h2>
                  <p><a href="#" className={cx("btn btn-primary btn-lg")}>Get started</a></p>
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
      // <div className={cx("overlay")}></div>
      // <div className={cx("container")}>
      //   <div className={cx("row")}>
      //     <div className={cx("col-md-10", "col-md-offset-1", "text-center")}>
      //       <div className={cx("display-t")}>
      //         <div className={cx("display-tc", "animate-box")} data-animate-effect="fadeIn">
      //           <h1>We are Creative Studio</h1>
      //           <h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>
      //           <p><a href="#" className={cx("btn", "btn-default")}>View Our Work</a></p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>