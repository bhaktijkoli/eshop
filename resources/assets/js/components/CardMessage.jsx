import React, { Component } from 'react';

class CardMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var titleClass = "card-title text-center header header-" + this.props.type
    return(
      <div className="card card-signup animated fadeInDown">
        <div className={titleClass}>
          <h4><i className={this.props.icon}>&nbsp;&nbsp;</i>{this.props.title}</h4>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default CardMessage;
