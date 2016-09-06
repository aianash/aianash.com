import React, { Component, PropTypes } from 'react';
import {
  Navigation,
  Header,
  CustomerSegment,
  Answers,
  HowItWorks,
  Features,
  Upcoming,
  Setup,
  Newsletter,
  Team,
  Footer} from 'components/home';

class Home extends Component {
  componentDidMount() {
    // skrollr.init();
  }

  static need = []

  render() {
    return (
      <div id="page">
        <Navigation/>
        <Header/>
        <CustomerSegment/>
        <Answers/>
        <HowItWorks/>
        <Features/>
        <Upcoming/>
        <Setup/>
        <Newsletter/>
        <Team/>
        <Footer/>
      </div>
    )
  }
}

export default Home;