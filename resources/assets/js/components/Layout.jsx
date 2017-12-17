import React, { Component } from 'react';
import { Route, withRouter  } from 'react-router-dom';
import { connect } from "react-redux"

import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import NewAd from './NewAd/NewAd.jsx';

import {getAuthUser} from '../actions/authActions'
import {getCategories} from '../actions/categoryActions'

class Layout extends Component {
  constructor(props) {
    super(props);
    getAuthUser(this.props)
    getCategories(this.props)
  }
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/new-ad" component={NewAd}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    categories: state.categories
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
