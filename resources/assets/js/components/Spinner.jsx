import React, { Component } from 'react';

class Spinner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    );
  }
}

export default Spinner;
