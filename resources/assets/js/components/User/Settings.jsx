import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';

import UploadImage from '../NewAd/UploadImage'

class Settings extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title ="User Settings";
    this.callFunctions();
  }
  render() {
    const user = this.props.auth.user;
    return(
      <div className="card">
        <div className="card-heading">
          <h3 className="card-title">User Profile</h3>
          <hr/>
        </div>
        <div className="card-body">
          <div className="form-group label-floating">
            <label className="control-label" htmlFor="name">Name</label>
            <input type="text" className="form-control" value={user.name} readOnly/>
          </div>
          <div className="form-group label-floating">
            <label className="control-label" htmlFor="email">Email</label>
            <input type="email" className="form-control" value={user.email} readOnly/>
          </div>
          <div className="form-break">
            <h4>Avatar</h4>
            <img className="img-circle image" width="128" height="128" src={user.avatar}/><br/>
            <button type="button" className="btn btn-primary btn-wide">Change</button>
          </div>
        </div>
        <div className="card-heading">
          <h3 className="card-title">Update Email</h3>
          <hr/>
        </div>
        <div className="card-body">
          <form id="form_update_email">
            <div className="form-group label-floating">
              <label className="control-label" htmlFor="email">New Email</label>
              <input type="email" className="form-control" id="email" name="email"/>
              <p className="help-block"></p>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-wide">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  callFunctions() {
    var comp = this;
    $("#form_update_email").submit(function(event) {
      event.preventDefault();
      modal.showPasswordModal(() =>{
        axios.post("/api/user/update-email", $(this).serialize())
        .then(function (response) {
          var data = response.data;
          if(fh.is_success(data)) {
            modal.showModalDefault("Email Update", data.messages,"Ok", function(){
              comp.props.history.push("/");
            });
          }
          else {
            fh.set_multierrors(data);
          }
        })
        .catch(function (error) {
          fh.show_errorpage(error);
        });
      })
    });
  }
}

export default withRouter(Settings);
