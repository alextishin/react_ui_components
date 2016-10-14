import React, {Component} from 'react';
import Button from '../../components/Button'

import './style.css'


class ValidationForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      isValid: true,
      isSumbitting: false,
    }

    this.getValues = this.getValues.bind(this);
  }


  static propTypes = {
    onSuccess: React.PropTypes.func,
    onErrot: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onValidSubmit: React.PropTypes.func,
    onInvalidSubmit: React.PropTypes.func,
    onValid: React.PropTypes.func,
    onInvalid: React.PropTypes.func,
    onChange: React.PropTypes.func,
    rules: React.PropTypes.object
  }
  

  static childContextTypes = {
    attachToForm: React.PropTypes.func,
    validate: React.PropTypes.func
  }

  hasRules(component){
    let key = component.props.name;
    let rules = this.props.rules;

    if(rules[key] && (typeof(rules[key]) === "function")) {
      return true;
    }

    return false;
  }

  getRules(component) {
    return this.props.rules[component.props.name];
  }

  runRules(component) {
    let value = component.getValue();
    let rulesFunction = this.getRules(component);

    return rulesFunction(value);
  }

  validate(component) {
    //проверяем наличие правила валидации для поля
    //если его нет проверяем обязательность поля
    //если оно не обязательно и без правила, то ничего не делаем
    if(this.hasRules(component)) {
      let valid = this.runRules(component);

      component.setState({
        pristine: false,
        valid: valid
      });
    } else if(component.isRequired()) {
      if(!component.getValue()){
        component.setState({
          pristine: false,
          valid: false
        });
      } else {
        component.setState({
          pristine: false,
          valid: true
        });
      }
    }
  }

  getChildContext () {
    return {
      attachToForm: this.attachToForm.bind(this),
      validate: this.validate.bind(this)
    }
  }

  componentWillMount () {
    this.inputs = [];
  }

  attachToForm (component) {

    if(this.inputs.indexOf(component) === -1) {
      this.inputs.push(component);
    }

  }

  getValues() {
    return this.inputs.reduce((data, component) => {
      var name = component.props.name;

      data[name] = component.getValue();
      return data;
    }, {});
  }


  render () {
    return (
      <form>
        {this.props.children}
        <button type="button" onClick={()=>{console.log(this.getValues())}}>TEST</button>
      </form>
    )
  }


}

export default ValidationForm;
