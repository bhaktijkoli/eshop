import React, { Component } from 'react';
import { Route, withRouter  } from 'react-router-dom';
import { connect } from "react-redux"

import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import NewAd from './NewAd/NewAd.jsx';
import Login from './Login/Login.jsx';

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
