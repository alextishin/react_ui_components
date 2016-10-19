import React, {Component} from 'react'
import './style.css'

class Panel extends Component {
  
  static propTypes = {
    headerText: React.PropTypes.string,
    header: React.PropTypes.boolean
  }
  
  isHeaderVisible() {
    return !this.props.header ? "hidden" : "";
  }

  render() {
    return (
      <div className="panel" style={this.props.styles}>
        <div className={`panel__header ${this.isHeaderVisible()}`}>
          <h2 className="panel__title">{this.props.headerText}</h2>
        </div>
        <div className="panel__body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Panel;
