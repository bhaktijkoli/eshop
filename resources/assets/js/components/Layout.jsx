import React, { Component } from 'react';
import { Route, withRouter  } from 'react-router-dom';
import { connect } from "react-redux"

import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import NewAd from './NewAd/NewAd.jsx';
import AdDetails from './AdDetails/AdDetails.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import ForgotPassword from './Login/ForgotPassword.jsx';
import ResetPassword from './Login/ResetPassword.jsx';

import Spinner from './Spinner.jsx';

import {getAuthUser} from '../actions/authActions'
import {getCategories} from '../actions/categoryActions'

class Layout extends Component {
  constructor(props) {
    super(props);
    getAuthUser(this.props)
    getCategories(this.props)
  }
  render() {
    if(this.props.auth.loading == true) {
      return(
        <Spinner/>
      )
    }
    else {
      return(
        <div className="wrapper animated fadeIn">
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/new-ad" component={NewAd}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/forgotpassword" component={ForgotPassword}/>
          <Route exact path="/user/resetpassword" component={ResetPassword}/>
          <Route exact path="/ad/:adurl" component={AdDetails}/>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    categories: state.categories
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
