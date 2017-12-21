import React, { Component } from 'react';
import { Route, withRouter  } from 'react-router-dom';

class Ad extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $.material.init();
  }

  render() {
    return (
      <div className="item">
        <div className="col-sm-2">
          <div className="thumb">
            <a href={this.props.image} data-fancybox={this.props.title} data-caption={this.props.title}>
              <img src={this.props.thumb} width="150"/>
            </a>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="content">
            <h4>{this.props.title} <span className="label label-primary">{this.props.category}</span></h4>
            <p className="content-body">{this.props.description}</p>
            <hr/>
            <div className="footer">
              <small><i className="fa fa-clock-o" aria-hidden="true">&nbsp;</i>{this.props.datetime}</small>
              <div className="action">
                  <button className="btn btn-white btn-xs btn-round"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                  <button className="btn btn-info btn-xs btn-round" data-link={"/ad/" + this.props.url}>Details</button>
              </div>

            </div>
          </div>
        </div>
        <div className="col-sm-1">
          <h4><i className="fa fa-inr" aria-hidden="true"></i>&nbsp;{this.props.price}</h4>
          {this.printNegotiable()}
        </div>
      </div>
    );
  }
  printNegotiable() {
    console.log(this.props);
    if(this.props.negotiable == 1) {
      return  <span><i className="fa fa-check" aria-hidden="true"></i>Negotiable</span>
    }
    else {
      return <span></span>;
    }
  }
  getUrl() {
    return "/ad/" + this.props.url;
  }
}

export default withRouter(Ad);
