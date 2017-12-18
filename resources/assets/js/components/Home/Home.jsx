import React, { Component } from 'react';
import { connect } from "react-redux";

import FlashMessages from './../FlashMessages';

class Home extends Component {
  constructor(props) {
    super(props);
    document.title = "EShop";
  }
  componentDidMount() {
    $.material.init();
    this.checkScroll();
    $(window).on('scroll', this.checkScroll);
    $('#category').select2({
      theme: "bootstrap"
    });
  }
  componentWillUnmount() {
    $('#nav-main').removeClass('navbar-transparent');
    $(window).off('scroll', this.checkScroll);
  }
  checkScroll() {
    if($(window).scrollTop() > 50)
    {
      $('#nav-main').removeClass('navbar-transparent');
    }
    else {
      $('#nav-main').addClass('navbar-transparent');

    }
  }
  render() {
    var auth = this.props.auth;
    var categories = this.props.category.categories;
    var categoryLsit = categories.map((category) =>
    <option value={category.id} key={category.id}>
      {category.name}
    </option>  );
    return (
      <div>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="banner-search">
                <form id="search-form">
                  <div className="col-sm-3 nomargin">
                    <div className="form-group">
                      <select id="category" className="form-control input-lg">
                        <option>All Categories</option>
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
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="container">

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

export default connect(mapStateToProps)(Home);
