import React, { Component } from 'react'
import './style.css'

class Radio extends Component {
  constructor(props) {
    super(props);
    
    this.setValue = this.setValue.bind(this);
  }



  propTypes: {
    name: React.PropTypes.string.isRequired,
    labelText: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired
  }

  static contextTypes = {
    setGroupValue: React.PropTypes.func,
  }
  

  setValue() {
    this.context.setGroupValue(this.props.value);
  }

  getValue() {
    return this.state.value;
  }

  render() {
    return (
      <div className="radio">
        <label className="radio__label">
          <input
            className="radio__input"
            type="radio"
            name={this.props.name}
            onChange={this.setValue}
            value={this.props.value}
          />
          <span className="radio__check"></span>
          <span className="radio__text">{this.props.labelText}</span>
        </label>
      </div>
    )
  }
}

export default Radio;

