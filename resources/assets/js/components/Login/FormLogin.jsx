import React, { Component } from 'react';
import { withRouter, Link  } from 'react-router-dom';

let comp = null;

class FormLogin extends Component {
  constructor(props) {
    super(props);
    comp = this;
    this.state = {errorMessage:''}
  }
  componentDidMount() {
    setTimeout(function () {
      $('.card-signup').addClass('animated fadeInDown')
    }, 1000);
    $('#error-result').hide();
    $('#login_form').submit(function(event) {
      event.preventDefault();
      fh.hide_button();
      $('#error-result').hide();
      axios.post('/api/user/login', $(this).serialize())
      .then(function(response) {
        var data = response.data;
        if(fh.is_success(data)) {
          fh.redirect(data);
        }
        else {
          fh.set_single_error(data);
          fh.show_button();
        }
      });
    });
  }
  render() {
    return(
      <div className="card card-signup animated fadeInDown">
        <form id="login_form" className="form" method="" action="">
          <div className="card-title header header-primary text-center">
            <h4><i className="fa fa-user">&nbsp;&nbsp;</i>Login</h4>
          </div>
          <div className="login-form">
            <div id="error-result" className="alert alert-danger">

            </div>
            <div className="form-group has-feedback">
              <input type="text" className="form-control input-lg" id="email" name="email" placeholder="Email"/>
              <i className="fa fa-envelope form-control-feedback"></i>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control input-lg" id="password" name="password" placeholder="Password"/>
              <i className="fa fa-lock form-control-feedback"></i>
            </div>
            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" id="remember_me" name="remember_me"/>
                  Remember me
                </label>
              </div>
              <Link to="/register" style={{float:'right', marginTop:'-35px'}}>Forgot password ?</Link>
            </div>
            <button className="btn btn-primary btn-round btn-block">Login</button>
             <hr className="hr-text" data-content="OR" />
            <a href="/login/facebook" className="btn btn-block btn-facebook btn-round">
              <span className="fa fa-facebook"></span>&nbsp;&nbsp;Login with Facebook
            </a>
            <a href="/login/twitter" className="btn btn-block btn-twitter btn-round">
              <span className="fa fa-twitter"></span>&nbsp;&nbsp;Login with Twitter
            </a>
            <a href="/login/google" className="btn btn-block btn-google btn-round">
              <span className="fa fa-google"></span>&nbsp;&nbsp;Login with Google
            </a>
            <hr className="hr-text" data-content="OR" />
            <Link to="/register" className="btn btn-primary btn-round btn-block">Register now!</Link>
          </div>
        </form>
      </div>
    )
  }
}
export default withRouter(FormLogin);
