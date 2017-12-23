import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';
import { connect } from "react-redux";

import AdAbout from './AdAbout';
import AdSeller from './AdSeller';

import Spinner from './../Spinner';

class AdDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.match.params.adurl,
      loading: true,
      item:[],
    }
  }
  componentDidMount() {
    $(window).scrollTop(0);
    $.material.init();
    axios.get('/api/item/get/'+this.state.url)
    .then(function(response){
      if(response.data.length < 1) {
        this.props.history.push("/");
      }
      this.setState({
        loading:false,
        item:response.data,
      });
    }.bind(this));
  }
  render() {
    if(this.state.loading == true) {
      return(
        <div style={{marginTop:'200px'}}>
          <Spinner />
        </div>
      );
    } else {
      document.title = this.state.item.title;
      return (
        <div className="content-wrapper">
          <div className="container">
            <div className="col-sm-9">
              <AdAbout item={this.state.item} />
            </div>
            <div className="col-sm-3">
              <AdSeller seller={this.state.item.seller}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    category: state.category
  };
}

export default withRouter(connect(mapStateToProps)(AdDetails));
