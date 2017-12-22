import React, { Component } from 'react';
import { connect } from "react-redux";

import {getList} from './../../actions/searchActions'

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $.material.init();
    $('#category').select2({
      theme: "bootstrap"
    });
  }
  render() {
    var auth = this.props.auth;
    var categories = this.props.category.categories;
    var categoryLsit = categories.map((category) =>
    <option value={category.id} key={category.id}>
      {category.name}
    </option>  );
    return (
      <form id="search-form" className="search-form" onSubmit={this.doSearch.bind(this)}>
        <div className="col-sm-3 nomargin">
          <div className="form-group">
            <select id="category" name="category" className="form-control input-lg">
              <option value="-1">All Categories</option>
              {categoryLsit}
            </select>
          </div>
        </div>
        <div className="col-sm-8 nomargin">
          <div className="form-group">
            <input type="text" className="form-control input-lg" id="search" name="search" placeholder="Keyword"/>
          </div>
        </div>
        <div className="col-sm-1 nomargin">
          <div className="form-group">
            <button className="btn btn-primary"><i className="fa fa-search"></i></button>
          </div>
        </div>
      </form>
    );
  }
  doSearch(event) {
    event.preventDefault();
    getList(this.props, $('#search-form').serialize());
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    category: state.category
  };
}

export default connect(mapStateToProps)(Home);
