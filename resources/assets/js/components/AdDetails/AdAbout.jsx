import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';
import { connect } from "react-redux"

import AdCarousel from './AdCarousel';

class AdAbout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $.material.init();
  }
  render() {
    const item = this.props.item;
    return(
      <div className="card">
        <div className="card-heading">
          <h3 className="card-title">{this.props.item.title}&nbsp;&nbsp;<span className="label label-primary">{item.category}</span></h3>
          {/* <small className="card-subtitle"><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;{item.datetime}</small> */}
          <hr/>
        </div>
        <AdCarousel images={item.images} />
        <div className="card-body" style={{marginTop:'50px'}}>
          <h4><label>Price:</label>&nbsp;&nbsp;<i className="fa fa-inr" aria-hidden="true"></i>&nbsp;{item.price}&nbsp;&nbsp;{this.printNegotiable()}</h4>
          <h4><label>Description:</label></h4>
          {item.description}
        </div>
      </div>
    );
  }
  printNegotiable() {
    if(this.props.item.negotiable == 1) {
      return  <small><i className="fa fa-check" aria-hidden="true"></i>Negotiable</small>
    }
    else {
      return "";
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    category: state.category
  };
}

export default withRouter(connect(mapStateToProps)(AdAbout));
