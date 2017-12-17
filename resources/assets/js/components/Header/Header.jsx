import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserDropdown from './UserDropdown';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <nav id="nav-main" className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle pull-left" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">Eshop</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li ><Link to="/">Home</Link></li>
                <li ><Link to="/products">Products</Link></li>
                <li ><Link to="/pricing">Pricing</Link></li>
              </ul>
               <UserDropdown/>

            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
