import React, { Component } from 'react';
import { withRouter, Link  } from 'react-router-dom';

let comp = null;

class FormRegister extends Component {
  constructor(props) {
    super(props);
    comp = this;
  }
  render() {
    return(
      <div className="card card-signup animated fadeInDown">
        <form id="form_register" method="POST" action="">
          <div className="card-title header header-primary text-center">
            <h4><i className="fa fa-user">&nbsp;&nbsp;</i>Register</h4>
          </div>
          <div className="login-form">
            <div className="form-group has-feedback">
              <input type="text" className="form-control input-lg" id="fullname" name="fullname" placeholder="Fullname"/>
              <i className="fa fa-user form-control-feedback"></i>
              <p className="help-block"></p>
            </div>
            <div className="form-group has-feedback">
              <input type="email" className="form-control input-lg" id="email" name="email" placeholder="Email"/>
              <i className="fa fa-envelope form-control-feedback"></i>
              <p className="help-block"></p>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control input-lg" id="password" name="password" placeholder="Password"/>
              <i className="fa fa-lock form-control-feedback"></i>
              <p className="help-block"></p>
            </div>
            <button className="btn btn-primary btn-round btn-block">Register now</button>
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
        fullname: {
          required: true
        },
        email: {
          required: true
        },
        password: {
          required: true
        }
      },
      messages:
      {
        fullname: {
          required: "Fullname is required."
        },
        email: {
          required: "Email is required."
        },
        password:{
          required: "Password is required.",
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
        axios.post("/api/user/register", new FormData(form))
        .then(function (response) {
          var data = response.data;
          console.log(data);
          if(fh.is_success(data)) {
            comp.props.history.push("/");
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
export default withRouter(FormRegister);
