import React, { Component } from 'react';
import { withRouter, Link  } from 'react-router-dom';

let comp = null;

class FormLogin extends Component {
  constructor(props) {
    super(props);
    comp = this;
  }
  componentDidMount() {
    setTimeout(function () {
      $('.card-signup').addClass('animated fadeInDown')
    }, 1000);
    $('#login_form').submit(function(event) {
      event.preventDefault();
      axios.post('/api/user/login', $(this).serialize())
      .then(function(response) {
        console.log(response);
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
            <Link to="/" className="btn btn-block btn-facebook btn-round">
              <span className="fa fa-facebook"></span>&nbsp;&nbsp;Login with Facebook
            </Link>
            <Link to="/" className="btn btn-block btn-twitter btn-round">
              <span className="fa fa-twitter"></span>&nbsp;&nbsp;Login with Twitter
            </Link>
            <Link to="/" className="btn btn-block btn-google btn-round">
              <span className="fa fa-google"></span>&nbsp;&nbsp;Login with Google
            </Link>
            <hr className="hr-text" data-content="OR" />
            <Link to="/register" className="btn btn-primary btn-round btn-block">Register now!</Link>
          </div>
        </form>
      </div>
    )
  }
}
export default withRouter(FormLogin);
