import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';
import { connect } from "react-redux"

import UploadImage from '../NewAd/UploadImage'

class Settings extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    const user = this.props.auth.user;
    return(
      <div className="card">
        <div className="card-heading">
          <h3 className="card-title">User Settings</h3>
          <hr/>
        </div>
        <div className="card-body">
          <form id="form_usersettings" encType="multipart/form-data">
          <div className="form-group label-floating">
            <label className="control-label" htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={user.name} readOnly/>
          </div>
          <div className="form-group label-floating">
            <label className="control-label" htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={user.email} readOnly/>
            <button type="button" className="btn btn-primary btn-wide">Change email</button>
          </div>
          <div className="form-break">
            <h4>Avatar</h4>
            <img className="img-circle image" width="128" height="128" src={user.avatar}/><br/>
            <button type="button" className="btn btn-primary btn-wide">Change</button>
          </div>
        </form>
      </div>
    </div>
  );
}
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default withRouter(connect(mapStateToProps)(Settings));
