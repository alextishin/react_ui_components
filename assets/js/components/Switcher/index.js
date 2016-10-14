import React, {Component} from 'react'
import './style.css'

class Switcher extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: false
    }

    this.toggle = this.toggle.bind(this);
  }

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string
  }

  static contextTypes = {
    attachToForm: React.PropTypes.func
  }

  componentWillMount() {
    this.context.attachToForm(this);
  }

  toggle(){
    var switcher = this.refs.switcher;
    var container = this.refs.switchContainer;

    this.setState({
      value: !this.state.value
    }, function () {
      if(this.state.value) {
        container.style.marginLeft = "0";
        switcher.style.borderColor = "#209e91"
      } else {
        container.style.marginLeft = "-50px";
        switcher.style.borderColor = "#fff"
      }
    });
  }

  getValue(){
    return this.state.value;
  }


  render() {
    return (
      <div className="switcher">
        <div className="switcher__label col-md-3">{this.props.label}</div>
        <div className="switcher-btn col-md-9" name={this.props.name} onClick={this.toggle} ref="switcher">
          <div className="switcher-btn__overflow">
            <div className="switcher-btn__container" ref="switchContainer">
            <span className="switcher-btn__toggle switcher-btn__toggle--on">
              <span className="switcher-btn__text switcher-btn__text--on">ON</span>
            </span>
              <span className="switcher-btn__toggle"></span>
            <span className="switcher-btn__toggle switcher-btn__toggle--off">
              <span className="switcher-btn__text">OFF</span>
            </span>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Switcher;
