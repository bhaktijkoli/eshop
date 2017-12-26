import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';

class AdMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const item = this.props.item;
    const seller = item.seller;
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
              <input type="hidden" name="seller_id" id="seller_id" value={seller.id}/>
              <input type="hidden" name="item_id" id="item_id" value={item.id}/>
              <div className="modal-body" style={{paddingTop:'0px'}}>
                <div className="form-group label-floating">
                  <textarea className="form-control" id="message" name="message"/>
                  <p className="help-block">Write a suitable title for your ad.</p>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-success btn-wide"><i className="fa fa-paper-plane" aria-hidden="true"></i>&nbsp;&nbsp;Send</button>
                <button type="button" className="btn btn-primary btn-wide" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
  componentDidMount() {
    $('#message-form').submit(function(event) {
      event.preventDefault();
      fh.hide_button();
      axios.post('/api/user/message', $('#message-form').serialize())
      .then(function(response) {
        var data =response.data;
        fh.show_button();
        if(fh.is_success(data)) {
          $('#'+this.props.id).modal("hide");
          modal.showModalDefault("Message Seller","Message send successfully, you can manage your messages from <a href='/user/messages'>here</a>","Ok");
        }
        fh.set_multierrors(data);
      }.bind(this));
    }.bind(this));
    $('#'+this.props.id).on('hide.bs.modal', function () {
      $('#message').val("");
    });
  }
}

export default withRouter(AdMessage);
