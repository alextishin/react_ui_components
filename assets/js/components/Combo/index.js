import React, {Component} from 'react'
import './style.css'
import '../../components/ValidationInput/style.css'

class Combo extends Component {

  constructor(props){
    super(props);

    this.state = {
      open: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  isOpen() {
    return !this.state.open ? "list--hidden" : "";
  }

  handleClick () {
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    return (
      <div className="combo">
        <div className="clearfix">
          <label className="col-sm-3 combo__label" htmlFor={this.props.inputId}>{this.props.labelText}</label>
          <div className="col-sm-9">
            <div className="combo-input">
              <button onClick={this.handleClick} type="button" className="combo-input__field">
                <div className="combo-input__btn">
                  <div className="combo-input__icon">
                    <i className="fa fa-angle-down fa-2x" aria-hidden="true"></i>
                  </div>
                </div>
                <div className={`list ${this.isOpen()}`}></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Combo;
