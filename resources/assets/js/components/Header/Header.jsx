import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"

import UserDropdown from './UserDropdown';
import MobileNav from './MobileNav';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <nav id="nav-main" className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
      {this.getNavbarToggle()}
              <Link className="navbar-brand" to="/">Eshop</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <UserDropdown auth={this.props.auth}/>
            </div>
          </div>
        </nav>
        {this.getMobileNav()}
      </header>
    );
  }
  getMobileNav() {
    if(this.props.auth.check == 1) {
      return( <MobileNav auth={this.props.auth}/> )
    }
    else {
      return "";
    }
  }
  getNavbarToggle() {
    if(this.props.auth.check == 1) {
      return(
        <button type="button" className="navbar-toggle pull-left" data-toggle="offcanvas" data-target="#mob-menu" data-canvas="body">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      );
    }
    else {
      return(<Link to="/login" className="mob-nav-btn"><i className="fa fa-sign-in" aria-hidden="true"></i></Link>);
    }
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Header);
