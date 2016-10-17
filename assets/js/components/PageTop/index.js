import React, { Component } from 'react';
import { Link } from 'react-router';

class PageTop extends Component {

  renderLogo() {
    return (
      <div></div>
    );
  }

  renderUserSection() {
    return (
        <div className="">
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
