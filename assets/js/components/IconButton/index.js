import React, {Component} from 'react'
import './style.css'

class IconButton extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    icon: React.PropTypes.string.isRequired,
    color: React.PropTypes.string
  }

  render = () => {
    return (
      <div className="icon-button">
        <button style={{backgroundColor: this.props.color}} className="icon-button__btn">
          <i className={`fa fa-${this.props.icon}`}></i>
          <span className={`icon-button__text ${!this.props.value ? 'hidden' : ''}`}>{this.props.value}</span>
        </button>
      </div>

    )
  }
}


export default IconButton;
