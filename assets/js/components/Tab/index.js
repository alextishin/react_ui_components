import React, {Component} from 'react'
import './styles.css'

class Tab extends Component {

  constructor(props){
    super(props);
  }

  static propTypes = {
    tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.oneOfType([
        React.PropTypes.integer,
        React.PropTypes.string
      ]).isRequired,
      title: React.PropTypes.string.isRequired
    })).isRequired
  }

  renderBar() {
    return this.props.tabs.map(function (tab) {
      return (
        <li key={tab.id} className="tab-bar__item">
          <span className="tab-bar__title">{tab.title}</span>
        </li>
      )
    });
  }
  

  render() {
    return (
      <div className="tab">
        <ul className="tab-bar">
          {this.renderBar()}
        </ul>
        <div className="tab-content">

        </div>
      </div>
    )
  }
}

export default Tab;
