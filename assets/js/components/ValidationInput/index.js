import React, {Component} from 'react';
import './style.css'


class ValidationInput extends Component {

  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  static defaultProps () {
    return {
      required: false
    };
  }

  static propTypes = {
    inputId:  React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    labelText: React.PropTypes.string.isRequired,
    required: React.PropTypes.boolean

  }

  state = {
    empty: false,
    focus: false,
    valid: false,
    pristine: true,
    value: ""
  }

  
  static contextTypes = {
    attachToForm: React.PropTypes.func,
    validate: React.PropTypes.func
  }

  componentWillMount() {
    this.context.attachToForm(this);
  }

  setValue (e) {
    this.setState({
      value: e.target.value
    }, function () {
      this.context.validate(this);
    });
  }

  getValue() {
    return this.state.value;
  }

  isRequired() {
    return this.props.required;
  }

  isValid() {
    return (!this.state.valid && !this.state.pristine) ? 'input--invalid' : '';
  }

  handleFocus() {
    this.setState({
      focus: true
    })
  }

  handleBlur() {
    this.setState({
      focus: false
    })
  }

  isFocused(){
    return this.state.focus ? 'input--focused' : '';
  }

  render() {
    return (
        <div className="form-group clearfix">
          <label className="col-sm-3 input__label" htmlFor={this.props.inputId}>{this.props.text}</label>
          <div className="col-sm-9">
            <input className={`input ${this.isFocused()} ${this.isValid()}`}
                   id={this.props.inputId}
                   placeholder={this.props.text}
                   onFocus={this.handleFocus}
                   onBlur={this.handleBlur}
                   onChange={this.setValue}
                   value={this.getValue()}
                   name={this.props.name}

            />
          </div>
        </div>
      )
  }
}

export default ValidationInput;
