import React, { Component } from 'react';
import { connect } from "react-redux";

import Ad from './Ad';

let comp;

class AdList extends Component {
  constructor(props) {
    super(props);
    comp = this;
    this.state={
      loading:false,
      list:[],
    }
  }
  componentDidMount() {
    $('#search-form').submit(function(event) {
      event.preventDefault();
      comp.setState({loading:true})
      axios.get('/api/items/get', $(this).serialize())
      .then(function(response){
        console.log(response.data)
        comp.setState({list:response.data})
        comp.setState({loading:false})
      })
    });
  }
  render() {
    if(this.state.loading == true) {
      return(
        <h1>Loading</h1>
      );
    }
    else {
      if(this.state.list.length > 0) {
        return(
          <div className="search-list">
            <h3>Search results</h3>
            {this.state.list.map((item) =>
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
                />
              </div>
            )}
          </div>
        );
      }
      else {
        return <div className="search-list-empty">List Empty</div>
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    category: state.category
  };
}

export default connect(mapStateToProps)(AdList);
