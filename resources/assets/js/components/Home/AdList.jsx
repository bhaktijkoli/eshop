import React, { Component } from 'react';
import { connect } from "react-redux";

import Spinner from './../Spinner';

import Ad from './Ad';

class AdList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    if(this.props.loading == true) {
      return(
        <Spinner/>
      );
    }
    else {
      if(this.props.list.length > 0) {
        return(
          <div id="search-list" className="search-list">
            <h3>Search results</h3>
            {this.props.list.map((item) =>
              <div key={item.id} className="col-sm-12">
                <Ad title={item.title}
                  item_id={item.id}
                  category={item.category}
                  thumb={item.thumb}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  negotiable={item.negotiable}
                  datetime={item.datetime}
                  url={item.url}
                  favorite={item.favorite}
                  auth={this.props.auth.check}
                />
              </div>
            )}
          </div>
        );
      }
      else {
        if(this.props.searched==true) {
          return(
            <div className="search-list-empty">
              <div className="text-center">
                <h3>No results found</h3>
                <span>We couldn't find any results for <b>{$("#search").val()}</b>.</span><br />
                <span>Please make sure that your keywords are spelled correctly.</span>
              </div>
            </div>);
          }
          else {
            return <div className="search-list-empty"></div>
          }
        }
      }
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth,
      category: state.category,
      search: state.search,
      loading: state.search.loading,
      searched: state.search.searched,
      list: state.search.list,
    };
  }

  export default connect(mapStateToProps)(AdList);
