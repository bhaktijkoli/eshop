import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux"

class UserDropDown extends Component {
  onImageLoadFail() {
    alert("Working");
    console.log(this.props.refs);
  }
  render() {
    const auth = this.props.auth;
    if(auth.check == 1) {
      const user = auth.user;
      return (
        <ul className="nav navbar-nav pull-right">
          <li><Link to="/new-ad" className="btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i>POST AN AD</Link></li>
          <li className="dropdown">
            <a className="profile-photo dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <div className="profile-photo-small">
                <img ref="avatar" src={user.avatar} alt="Circle Image" className="img-circle img-responsive" onError={this.onImageLoadFail.bind(this)}/>
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
        </ul>
      );
    }
    else {
      return (
        <ul className="nav navbar-nav pull-right">
          <li><Link to="/login" className="btn"><i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Login</Link></li>
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
