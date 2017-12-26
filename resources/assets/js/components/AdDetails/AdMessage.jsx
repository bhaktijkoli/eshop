import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';

class AdMessage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $.material.init();
  }
  render() {
    const seller = this.props.seller;
    return(
      <div className="modal fade" id={this.props.id} role="dialog">
        <form id="message-form">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Message Seller</h4>
                <span>To: {seller.name}</span>
                <hr />
              </div>
              <div className="modal-body" style={{paddingTop:'0px'}}>
                <div className="form-group label-floating">
                  <textarea className="form-control" id="message" name="message"/>
                  <p className="help-block">Write a suitable title for your ad.</p>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success btn-wide" data-dismiss="modal"><i className="fa fa-paper-plane" aria-hidden="true"></i>&nbsp;&nbsp;Send</button>
                <button type="button" className="btn btn-primary btn-wide" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(AdMessage);
