import React, { Component } from 'react';
import { withRouter, Link  } from 'react-router-dom';
class QuickSellTips extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="card-heading">
          <h3 className="card-title">Quick Selling Tips</h3>
          <hr/>
        </div>
        <div className="card-body">
          <ul className="list">
            <li>Use a brief title and description of the item</li>
            <li>Make sure you post in the correct category</li>
            <li>Add nice photos to your ad</li>
            <li>Put a reasonable price</li>
            <li>Check the item before publish</li>
            <Link to="/tips">Read more..</Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(QuickSellTips);
