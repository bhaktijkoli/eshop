import React, { Component } from 'react';
import { Route, withRouter, Link  } from 'react-router-dom';
import { connect } from "react-redux"

import FormRegister from './FormRegister'

class Login extends Component {
  constructor(props) {
    super(props);
    if(this.props.auth.check == true) {
      this.props.history.push("/");
    }
    window.title = "Register now!"
  }
  componentDidMount() {
    $(window).scrollTop(0);
    $.material.init();
    $('#nav-main').addClass('navbar-transparent');
    $('body').addClass('login-background');
    $('.footer').addClass('footer-transparent');
  }
  componentWillUnmount() {
    $('#nav-main').removeClass('navbar-transparent');
    $('body').removeClass('login-background');
    $('.footer').removeClass('footer-transparent');
  }
  render() {
    return(
      <div className="container login-content">
      <div className="filter"></div>
      <div className="row">
      <div className="col-sm-4 col-sm-offset-4">
      <FormRegister />
      </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default withRouter(connect(mapStateToProps)(Login));
