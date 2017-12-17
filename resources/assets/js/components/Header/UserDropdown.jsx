import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux"

class UserDropDown extends Component {
  render() {
    const auth = this.props.auth;
    const user = this.props.user;
    if(auth.check == 1) {
      return (
        <ul className="nav navbar-nav pull-right">
          <li className="dropdown">
            <a className="profile-photo dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <div className="profile-photo-small">
                <img src="http://via.placeholder.com/40x40" alt="Circle Image" className="img-circle img-responsive"/>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#"><i className="fa fa-list-alt" aria-hidden="true">&nbsp;</i>My Ads</a></li>
              <li><a href="#"><i className="fa fa-envelope" aria-hidden="true">&nbsp;</i>Messages</a></li>
              <li><a href="#"><i className="fa fa-heart" aria-hidden="true"></i>&nbsp;Favourite Ads</a></li>
              <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i>&nbsp;Profile</a></li>
              <li><a href="/logout"><i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout</a></li>
            </ul>
          </li>
          <li><Link to="/new-ad" className="btn btn-primary btn-nav"><i className="fa fa-pencil-square-o" aria-hidden="true"></i>POST AN AD</Link></li>
        </ul>
      );
    }
    else {
      return (
        <ul className="nav navbar-nav pull-right">
          <li><a href="/loginv/dev" className="btn btn-primary"><i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Login</a></li>
        </ul>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(UserDropDown));
