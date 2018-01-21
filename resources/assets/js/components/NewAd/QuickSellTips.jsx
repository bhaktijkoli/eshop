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
            <li>Add a title, appropriate to the product.</li>
            <li>Add a suitable description, covering the much of the details about the product.</li>
            <li>Select a suitable category of your product.</li>
            <li>Add an appropriate price to the product.</li>
            <Link to="/tips">Read more..</Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(QuickSellTips);
