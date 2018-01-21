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
            <li>Meet the seller inside the campus and inspect the item carefully.</li>
            <li>The best way to transact is to collect the item and pay at the same time.</li>
            <li>Always insist on getting clear information about the various aspects of the item.</li>
            <Link to="/tips">Read more..</Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdBuyerTips;
