import React, { Component } from 'react';

class FlashMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }
  componentDidMount() {
    axios.get('/api/flash')
    .then(function (response) {
      if(response.data.length > 0) {
        this.setState({messages: response.data});
      }
    }.bind(this));
  }
  render() {
    var count = 0;
    const getClass = (type) => {
      return "alert alert-" + type;
    }
    var list = this.state.messages.map((message) =>
    <div key={count++} className="animated fadeInDown">
      <div className={getClass(message.type)}>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        {message.message}
      </div>
    </div> );

    if(this.state.messages.length == 0) {
      return(<div></div> );
    }
    else {
      return (
        <div className="messages" style={this.props.style}>
          {list}
        </div>
      );
    }
  }
}

export default FlashMessages;
