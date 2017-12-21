import React, { Component } from 'react';
import { withRouter, Link  } from 'react-router-dom';


import CardMessage from '../CardMessage';

let comp = null;

class ResetPasswordForm extends Component {
  constructor(props) {
    super(props);
    comp = this;
    this.state={
      success:false,
      type:'',
      icon:'',
      title:'',
      message:'',
      link:'',
      button:'',
    }
  }
  render() {
    if(this.state.success == true) {
      return(
        <CardMessage type={this.state.type} title={this.state.title} icon={this.state.icon}>
          <div className="text-center">
            {this.state.message}
          </div>
          <Link to={this.state.link} className="btn btn-primary btn-round btn-block btn-simple">{this.state.button}</Link>
        </CardMessage>
      )
    }
    return(
      <div className="card card-signup animated fadeInDown">
        <form id="form_register" method="POST" action="">
          <div className="card-title header header-primary text-center">
            <h4><i className="fa fa-lock">&nbsp;&nbsp;</i>Reset Password</h4>
          </div>
          <div className="login-form">
            <p>
              Enter your new password below.
            </p>
            <div className="form-group has-feedback">
              <input type="password" className="form-control input-lg" id="password" name="password" placeholder="Password"/>
              <i className="fa fa-lock form-control-feedback"></i>
              <p className="help-block"></p>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control input-lg" id="confirm_password" name="confirm_password" placeholder="Confirm password"/>
              <i className="fa fa-lock form-control-feedback"></i>
              <p className="help-block"></p>
            </div>
            <button className="btn btn-primary btn-round btn-block">Reset password</button>
            <hr className="hr-text" data-content="OR" />
            <Link to="/login" className="btn btn-primary btn-round btn-block">Login</Link>
          </div>
        </form>
      </div>
    )
  }
  componentDidMount() {
    setTimeout(function () {
      $('.card-signup').addClass('animated fadeInDown')
    }, 1000);

    $("#form_register").validate({
      rules:
      {
        password: {
          required: true
        },
        password_confirmation: {
          required: true,
          equalTo: '#password'
        },
      },
      messages:
      {
        password: {
          required: "Password is required."
        },
        password_confirmation: {
          required: "Retype your password.",
          equalTo: "Passwords did not Match."
        },
      },
      errorPlacement : function(error, element) {
        fh.set_error(element, error.html());
      },
      unhighlight: function(element, errorClass, validClass) {
        fh.remove_error(element);
      },
      submitHandler: function(form) {
        var form = event.target;
        fh.hide_button();
        axios.post("/api/user/resetpassword", new FormData(form))
        .then(function (response) {
          var data = response.data;
          if(fh.is_success(data)) {
            comp.setState({
              success:true,
              type:'success',
              icon:'fa fa-check',
              title:'Success!',
              message:data.messages,
              link:'/login',
              button:'proceed to login',
            })
          }
          else {
            comp.setState({
              success:true,
              type:'danger',
              icon:'fa fa-times',
              title:'Session Expire!',
              message:data.messages,
              link:'/forgotpassword',
              button:'resend password reset email',
            })
          }
          fh.show_button();
        })
        .catch(function (error) {
          fh.show_errorpage(error);
        });
      }
    });
  }
}
export default withRouter(ResetPasswordForm);
