import React, {Component} from 'react'
import './style.css'
import '../../components/ValidationInput/style.css'

class Combo extends Component {

  render(){
    return (
      <div className="combo">
        <div className="clearfix">
          <label className="col-sm-3 combo__label" htmlFor={this.props.inputId}>{this.props.labelText}</label>
          <div className="col-sm-9">
            <div className="combo-input">
              <input  className="combo-input__field"
                      id={this.props.inputId}
                      placeholder={this.props.labelText}
              />
              <div className="combo-input__btn">
                <div className="combo-input__icon">
                  <i className="fa fa-angle-down fa-2x" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list"></div>
      </div>
    )
  }
}

export default Combo;
