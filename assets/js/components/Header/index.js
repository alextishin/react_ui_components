import React, { Component } from 'react'
import { Link } from 'react-router'

import './style.css'

class Header extends Component {



  renderAuthLinks() {
    return (
      <header className="header-auth">
        <nav>
          <ul className="main-menu">
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </nav>
      </header>
    )
  }


  render () {
    const {type} = this.props;

    if(type === "auth")
      return this.renderAuthLinks();
    else
      return this.renderLinks();
  }
}


export default Header;
