import React, {Component} from 'react'
import './style.css'
import '../../components/ValidationInput/style.css'

class Combo extends Component {

  constructor(props){
    super(props);

    this.state = {
      open: false,
      value: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  propTypes: {
    options: React.PropTypes.array.isRequired
  }

  isOpen() {
    return !this.state.open ? "list--hidden" : "";
  }

  handleClick () {
    this.setState({
      open: !this.state.open
    })
  }

  renderItems() {
    return this.props.options.map((option) => {
      return (
        <li key={option.id} className="list__item">
          <span onClick={this.setValue} className="list__item-text">{option.value}</span>
        </li>
      )
    })
  }

  setValue(e) {
    this.setState({
      value: e.target.innerText
    })
  }

  getValue() {
    return this.state.value;
  }

  render(){
    return (
      <div className="combo">
        <div className="clearfix">
          <label className="col-sm-3 combo__label" htmlFor={this.props.inputId}>{this.props.labelText}</label>
          <div className="col-sm-9">
            <div className="combo-input">
              <button onClick={this.handleClick} type="button" className="combo-input__field">
                {this.getValue()}
                <div className="combo-input__btn">
                  <div className="combo-input__icon">
                    <i className="fa fa-angle-down fa-2x" aria-hidden="true"></i>
                  </div>
                </div>
                <div className={`list ${this.isOpen()}`}>
                  <ul className="list__body">
                    {this.renderItems()}
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Combo;
