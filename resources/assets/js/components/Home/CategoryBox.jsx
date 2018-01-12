import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';

class CategoryBox extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    console.log(this.props);
    var no = 0;
    return(
      <div className="card card-nav-tabs">
        <div className={this.getClassName()}>
          <center>
            <i className={this.props.icon} aria-hidden="true"></i>&nbsp;&nbsp;
            {this.props.name}
          </center>
        </div>
        <div className="card-body">
          <ul>
            {this.props.items.map( (item) =>
              <li key={no++}>{item}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
  getClassName() {
    return "header header-"+this.props.class;
  }
}
export default withRouter(CategoryBox);
