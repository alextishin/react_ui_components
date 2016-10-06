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

  propTypes: {
    name: React.PropTypes.string.isRequired
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
      <div className="switcher" name={this.props.name} onClick={this.toggle} ref="switcher">
        <div className="switcher__overflow">
          <div className="switcher__container" ref="switchContainer">
            <span className="switcher__btn switcher__btn--on">
              <span className="switcher__text switcher__text--on">ON</span>
            </span>
            <span className="switcher__btn"></span>
            <span className="switcher__btn switcher__btn--off">
              <span className="switcher__text">OFF</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Switcher;
