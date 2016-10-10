import React, {Component} from 'react'
import './styles.css'

class Tabs extends Component {

  constructor(props){
    super(props);

    this.state = {
      active: this.props.active
    }
  }

  static propTypes = {
    active: React.PropTypes.integer

  }

  static defaultProps = {
      active: 0
  }



  renderBar() {
    return this.props.children.map(function (child, index) {
      if(child.type.name !== "TabPanel")
        return child;

      let activeClass = this.state.active === index ? "tab-bar__item--active" : "";

      return (
        <li
          key={index}
          className={`tab-bar__item ${activeClass}`}
          onClick={this.handleClick.bind(this, index)}>
          <span className="tab-bar__title">{child.props.title}</span>
        </li>
      )
    }.bind(this))
  }

  renderContent () {
    return this.props.children[this.state.active];
  }

  handleClick(index, e) {
    e.preventDefault();
    this.setState({
      active: index
    })
  }


  render() {
    return (
      <div className="tab">
        <ul className="tab-bar">
          {this.renderBar()}
        </ul>
        <div className="tab-content">
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

export default Tabs;
