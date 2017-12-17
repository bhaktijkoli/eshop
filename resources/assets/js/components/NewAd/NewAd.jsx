import React, { Component } from 'react';
import { connect } from "react-redux"

import UploadImage from "./UploadImage"
import FormNewAd from "./FormNewAd"
import QuickSellTips from "./QuickSellTips"

class NewAd extends Component {
  constructor(props) {
    super(props);
    document.title = "New Ad";
  }
  componentDidMount() {
    $.material.init();
  }
  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <div className="col-sm-9">
            <FormNewAd />
          </div>
          <div className="col-sm-3">
            <QuickSellTips />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    category: state.category
  };
}

export default connect(mapStateToProps)(NewAd);