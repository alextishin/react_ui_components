import React, {Component} from 'react'

class RadioGroup extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: ""
    }
  }

  componentWillMount () {
    this.radio = [];
  }

  static childContextTypes = {
    setGroupValue: React.PropTypes.func
  }

  getChildContext () {
    return {
      setGroupValue: this.setGroupValue.bind(this)
    }
  }


  setGroupValue(value) {
    this.setState({
      value: value
    })
  }

  getValue() {
    return this.state.value;
  }

  render() {
    return (
      <div>
        {this.props.children}
        <button type="button" onClick={() => {console.log(this.getValue())}}>Test</button>
      </div>
    )
  }
}

export default RadioGroup;
