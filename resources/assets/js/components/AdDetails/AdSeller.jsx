import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';
import { connect } from "react-redux"

import AdMessage from './AdMessage';

class AdSeller extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $.material.init();
  }
  render() {
    const seller = this.props.seller;
    if(this.props.auth.check == 0) {
      return(
        <div className="card">
          <div className="card-heading">
            <h3 className="card-title">Contact seller</h3>
            <hr/>
          </div>
          <div className="card-body nopadding">
          <Link to="/login" className="btn btn-primary btn-block"><i className="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Login</Link>
          </div>
        </div>
      );
    }
    else {
      return(
        <div className="card">
          <div className="card-heading">
            <h3 className="card-title">Contact seller</h3>
            <hr/>
          </div>
          <div className="card-body nopadding">
            <div className="media">
              <div className="media-left media-top">
                <img src={seller.avatar} className="media-object img-circle" style={{width:'60px'}}/>
              </div>
              <div className="media-body">
                <h5 className="media-heading">{seller.name}</h5>
                <small>Member since {seller.datetime}</small>
              </div>
              <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#modelMessage"><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;Message</button>
              <AdMessage id="modelMessage" seller={seller}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default withRouter(connect(mapStateToProps)(AdSeller));
