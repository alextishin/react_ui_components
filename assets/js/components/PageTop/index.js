import React, { Component } from 'react';
import { Link } from 'react-router';
import Person from '../../../img/person.svg';

class PageTop extends Component {

  renderLogo() {
    return (
      <Link to="/" className="clearfix">FRAMEWORK</Link>
    );
  }

  renderUserSection() {
    return (
        <div className="">
          sdsd
        </div>
    );
  }


  render() {
    return (
      <div className="page-top clearfix" scroll-position="scrolled" max-height="50">
        {this.renderLogo()}
        {this.renderUserSection()}

      </div>
    )
  }
}

export default PageTop;
