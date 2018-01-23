import React, { Component } from 'react';
import { Route, withRouter, Link  } from 'react-router-dom';
import { connect } from "react-redux"

import Settings from './Settings'
import Messages from './Messages'
import MyAds from './MyAds'
import Pending from './Pending'
import Favorites from './Favorites'

class User extends Component {
  constructor(props) {
    super(props);
    if(this.props.auth.check == false) {
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    $(window).scrollTop(0);
    $.material.init();
  }

  render() {
    const user = this.props.auth.user;
    return(
      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-heading">
                  <div className="media">
                    <div className="media-left media-top">
                      <img src={user.avatar} className="media-object img-circle" style={{width:'60px'}}/>
                    </div>
                    <div className="media-body">
                      <h5 className="media-heading">{user.name}</h5>
                      <small>Member since {user.datetime}</small>
                    </div>
                  </div>
                  <hr/>
                </div>
                <div className="card-body">
                  <ul className="nav nav-pills nav-stacked">
                    <li className={this.getMenuClassName('ads')}><Link to="/user/ads"><span className="fa fa-list-alt" aria-hidden="true"></span>&nbsp;&nbsp;My Ads</Link></li>
                    <li className={this.getMenuClassName('pending')}><Link to="/user/pending"><span className="fa fa-hourglass" aria-hidden="true"></span>&nbsp;&nbsp;Pending Ads</Link></li>
                    <li className={this.getMenuClassName('messages')}><Link to="/user/messages"><span className="fa fa-comments" aria-hidden="true"></span>&nbsp;&nbsp;Messages</Link></li>
                    <li className={this.getMenuClassName('favorites')}><Link to="/user/favorites"><span className="fa fa-heart" aria-hidden="true"></span>&nbsp;&nbsp;Favourites</Link></li>
                    <li className={this.getMenuClassName('settings')}><Link to="/user/settings"><span className="fa fa-user" aria-hidden="true"></span>&nbsp;&nbsp;Settings</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="tab-content">
                <div id="ads" className={this.getTabClassName('ads')}>
                  <MyAds/>
                </div>
                <div id="ads" className={this.getTabClassName('pending')}>
                  <Pending/>
                </div>
                <div id="messages" className={this.getTabClassName('messages')}>
                  <Messages/>
                </div>
                <div id="favorites" className={this.getTabClassName('favorites')}>
                  <Favorites/>
                </div>
                <div id="settings" className={this.getTabClassName('settings')}>
                  <Settings auth={this.props.auth}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  getMenuClassName(menu) {
    if(menu == this.props.match.params.url) return "active";
    return "";
  }
  getTabClassName(menu) {
    if(menu == this.props.match.params.url) return "tab-pane fade in active";
    return "tab-pane fade in";
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default withRouter(connect(mapStateToProps)(User));
