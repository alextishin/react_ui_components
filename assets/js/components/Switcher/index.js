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

  toggle(){
    var elem = this.refs.switcContainer;

    this.setState({
      value: !this.state.value
    }, function () {
      if(this.state.value) {
        elem.style.marginLeft = "0";
      } else {
        elem.style.marginLeft = "-50px";
      }
    });
  }


  render() {
    return (
      <div className="switcher">
        <div className="switcher__overflow">
          <div className="switcher__container" onClick={this.toggle} ref="switcContainer">
            <span className="switcher__btn switcher__btn--on">
              <span className="switcher__text">ON</span>
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
