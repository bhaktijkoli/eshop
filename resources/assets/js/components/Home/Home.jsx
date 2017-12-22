import React, { Component } from 'react';
import { connect } from "react-redux";

import FlashMessages from './../FlashMessages';

import HomeSearchForm from './HomeSearchForm';
import AdList from './AdList';

class Home extends Component {
  constructor(props) {
    super(props);
    document.title = "EShop";
  }
  componentDidMount() {
    $.material.init();
    this.checkScroll();
    $(window).on('scroll', this.checkScroll);
  }
  componentWillUnmount() {
    $('#nav-main').removeClass('navbar-transparent');
    $(window).off('scroll', this.checkScroll);
  }
  checkScroll() {
    if($(window).scrollTop() > 50)
    {
      $('#nav-main').removeClass('navbar-transparent');
    }
    else {
      $('#nav-main').addClass('navbar-transparent');

    }
  }
  render() {
    var auth = this.props.auth;
    return (
      <div className="banner-intro">
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="banner-search">
                <h2 className="title">Find what you are looking for</h2>
                <h4 className="subtitle">Search from over 99,00,000 Active ads</h4>
                <HomeSearchForm/>
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper-search">
          <div className="container">
            <AdList/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    category: state.category
  };
}

export default connect(mapStateToProps)(Home);
