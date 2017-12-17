import React, { Component } from 'react';

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
            <a href="#">Read more..</a>
          </ul>
        </div>
      </div>
    );
  }
}

export default QuickSellTips;
