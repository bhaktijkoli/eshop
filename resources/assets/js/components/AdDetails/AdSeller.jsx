import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';
import { connect } from "react-redux"

class AdSeller extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $.material.init();
  }
  render() {
    const seller = this.props.seller;
    return(
      <div className="card">
        <div className="card-heading">
          <h3 className="card-title">Contact seller</h3>
          <hr/>
        </div>
        <div className="card-body">
          {/* <div className="media">
          <div className="media-left">
          <img ref="avatar" src={seller.avatar} alt="Circle Image" className="media-object img-circle img-responsive" width="40"/>
        </div>
        <div className="media-body">
        <h5 className="media-heading">{seller.name}</h5>
        <p>Lorem ipsum...</p>
      </div>
    </div> */}
    <div className="media">
      <div className="media-left media-top">
        <img src={seller.avatar} className="media-object img-circle" style={{width:'60px'}}/>
        </div>
        <div className="media-body">
          <h5 className="media-heading">{seller.name}</h5>
          <small>Member since {seller.datetime}</small>
        </div>
        <button className="btn btn-primary btn-block"><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;Message</button>
      </div>
    </div>
  </div>
);
}
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default withRouter(connect(mapStateToProps)(AdSeller));
