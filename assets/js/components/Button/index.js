import React, {Component} from 'react';

import './style.css'

class Button extends Component {

  static propTypes = {
    value: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
  }

  render() {
    return (
      <div>
        <input
          onClick={this.props.onClick}
          className="text-button"
          type={this.props.type}
          value={this.props.value}
        />
      </div>

    )
  }

}


export default Button;
