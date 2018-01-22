import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class MobileNav extends Component {
  componentDidMount() {
    $('.navmenu li a').click(function(event) {
      $('#mob-menu').offcanvas('hide');
    });
  }
  render() {
    const auth = this.props.auth;
    const user = auth.user;
    return(
      <nav id="mob-menu" className="navmenu navmenu-inverse navmenu-fixed-left offcanvas" role="navigation">
        <div className="user-details">
          <img src={user.avatar} className="media-object img-circle" style={{width:'60px'}}/>
          <h5>{user.name}</h5>
        </div>
        <ul className="nav navbar-nav">
          <li className="divider"></li>
          <li><Link to="/new-ad"><i className="fa fa-pencil-square-o" aria-hidden="true"></i>POST AN AD</Link></li>
          <li><Link to="/user/ads"><i className="fa fa-list-alt" aria-hidden="true">&nbsp;</i>My Ads</Link></li>
          <li><Link to="/user/pending"><i className="fa fa-hourglass" aria-hidden="true">&nbsp;</i>Pending Ads</Link></li>
          <li><Link to="/user/messages"><i className="fa fa-comments" aria-hidden="true">&nbsp;</i>Messages</Link></li>
          <li><Link to="/user/favorites"><i className="fa fa-heart" aria-hidden="true"></i>&nbsp;Favourite Ads</Link></li>
          <li><Link to="/user/settings"><i className="fa fa-user" aria-hidden="true"></i>&nbsp;Settings</Link></li>
          <li><a href="/logout"><i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout</a></li>
        </ul>
      </nav>
    )
  }
  avatarError() {
    alert("error !");
  }
}

export default withRouter(MobileNav);
