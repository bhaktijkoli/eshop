import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';
import { connect } from "react-redux"

class TemplateRedux extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $.material.init();
  }
  render() {
    return(

    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    category: state.category
  };
}

export default withRouter(connect(mapStateToProps)(TemplateRedux));
