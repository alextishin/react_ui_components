import React, { Component } from 'react';
import Menu from '../Menu';
import './styles.css'


class PageTop extends Component {

  render() {
    return (
      <div className="pageHeader">
        <Menu
          items={[
            {name: 'Home', pathname: '/home'},
            {name: 'Components', pathname: '/components'}
          ]}
        />
      </div>
    )

  }
}

export default PageTop;
