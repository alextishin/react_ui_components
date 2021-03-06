import React, { Component } from 'react'
import './styles.css'

class TabPanel extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  render() {
    return <div className="tab-panel">
      {this.props.children}
    </div>
  }
}

export default TabPanel;
