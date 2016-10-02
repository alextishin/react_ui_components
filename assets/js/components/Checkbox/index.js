/**
 * Created by alextishin on 01.10.16.
 */
import React, {Component} from 'react'

import './style.css'

class Checkbox extends Component {

  constructor(props) {
    super(props);

    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  propTypes: {
    name: React.PropTypes.string.isRequired,
    labelText: React.PropTypes.string.isRequired
    }

  state = {
    value: false
  }

  static contextTypes = {
    attachToForm: React.PropTypes.func
  }

  componentWillMount() {
    this.context.attachToForm(this);
  }

  getValue() {
    return this.state.value;
  }

  setValue(e) {
    this.setState({
      value: e.target.checked
    });
  }

  render() {
    return (
      <div className="checkbox">
        <label className="checkbox__label">
          <input type="checkbox" className="checkbox__input" onChange={this.setValue}/>
          <span className="checkbox__check"></span>
          <span className="checkbox__text">{this.props.labelText}</span>
        </label>
      </div>
    )
  }
}

export default Checkbox;
