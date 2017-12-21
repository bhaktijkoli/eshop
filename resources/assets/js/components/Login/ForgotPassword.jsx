import React, { Component } from 'react';
import { Route, withRouter, Link  } from 'react-router-dom';
import { connect } from "react-redux"

import ForgotPasswordForm from './ForgotPasswordForm'

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    if(this.props.auth.check==true) this.props.history.push('/');
    window.title = "Register now!"
  }
  componentDidMount() {
    $(window).scrollTop(0);
    $.material.init();
    $('#nav-main').addClass('navbar-transparent');
    $('body').addClass('login-background');
  }
  componentWillUnmount() {
    $('#nav-main').removeClass('navbar-transparent');
    $('body').removeClass('login-background');
  }
  render() {
    return(
      <div className="container login-content">
        <div className="filter"></div>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <ForgotPasswordForm />
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

export default withRouter(connect(mapStateToProps)(ForgotPassword));
