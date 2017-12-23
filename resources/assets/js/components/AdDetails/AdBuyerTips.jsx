import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdBuyerTips extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="card">
        <div className="card-heading">
          <h3 className="card-title">Tips for buyers</h3>
          <hr/>
        </div>
        <div className="card-body">
          <ul className="list">
            <li>Meet seller at a public place</li>
            <li>Check the item before you buy</li>
            <li>Pay only after collecting the item</li>
            <a href="#">Read more..</a>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdBuyerTips;
