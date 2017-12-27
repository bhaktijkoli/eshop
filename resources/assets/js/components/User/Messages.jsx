import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    }
  }
  componentDidMount() {
    axios.get('/api/user/get/coversations')
    .then(function (response) {
      this.setState({list:response.data});
    }.bind(this));
  }
  render() {
    var no = 0;
    return(
      <div className="card">
        <div className="card-heading">
          <h3 className="card-title">Messages</h3>
          <hr/>
        </div>
        <div className="card-body nopadding">
          {this.state.list.map((item) =>
            <div key={no++} className="media conversation-list">
              <div className="media-body">
                <h5 className="media-heading">
                  <span className="name">{item.name}</span>
                  <span>({item.type})</span>-
                  <span>{item.item}</span>&nbsp;
                  <span className="label label-primary">{item.unread}</span>
                  <small style={{float:'right'}}>{item.datetime}</small>
                </h5>
                <p className="message-body">{item.lastname}: {item.lastmessage}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Messages);
