import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';

class Tips extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $.material.init();
  }
  render() {
    return(
      <div className="content-wrapper">
        <div className="container">
          <div className="col-sm-9">
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
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="card">
              <div className="card-heading">
                <h3 className="card-title">Tips for sellers</h3>
                <hr/>
              </div>
              <div className="card-body">
                <ul className="list">
                  <li>Use a brief title and description of the item</li>
                  <li>Make sure you post in the correct category</li>
                  <li>Add nice photos to your ad</li>
                  <li>Put a reasonable price</li>
                  <li>Check the item before publish</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Tips);
