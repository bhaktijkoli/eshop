import React, { Component } from 'react';
import { withRouter, Link  } from 'react-router-dom';


import CardMessage from '../CardMessage';

let comp = null;

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);
    comp = this;
    this.state={
      success:false,
      type:'',
      icon:'',
      title:'',
      message:'',
    }
  }
  render() {
    if(this.state.success == true) {
      return(
        <CardMessage type={this.state.type} title={this.state.title} icon={this.state.icon}>
          <div className="text-center">
            {this.state.message}
          </div>
          <Link to="/login" className="btn btn-primary btn-round btn-block btn-simple">Proceed to login</Link>
        </CardMessage>
      )
    }
    return(
      <div className="card card-signup animated fadeInDown">
        <form id="form_register" method="POST" action="">
          <div className="card-title header header-primary text-center">
            <h4><i className="fa fa-lock">&nbsp;&nbsp;</i>Forgot password</h4>
          </div>
          <div className="login-form">
            <p>
              Please enter your email address. We will send you an email to reset your password.
            </p>
            <div className="form-group has-feedback">
              <input type="email" className="form-control input-lg" id="email" name="email" placeholder="Email"/>
              <i className="fa fa-envelope form-control-feedback"></i>
              <p className="help-block"></p>
            </div>
            <button className="btn btn-primary btn-round btn-block">send password reset email</button>
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
        email: {
          required: true
        }
      },
      messages:
      {
        email: {
          required: "Email is required."
        }
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
        axios.post("/api/user/forgotpassword", new FormData(form))
        .then(function (response) {
          var data = response.data;
          if(fh.is_success(data)) {
            comp.setState({
              success:true,
              type:'success',
              icon:'fa fa-check',
              title:'Success!',
              message:data.messages,
            })
          }
          else {
            fh.set_multierrors(data);
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
export default withRouter(ForgotPasswordForm);
