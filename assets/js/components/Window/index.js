import React, {Component} from 'react'
import './style.css'

class Window extends Component {

  constructor(props){
    super(props);
  }

  propTypes:{
    width: React.PropTypes.integer,
    height: React.PropTypes.integer
  }



  render() {
    let styles = {
      width: this.props.width,
      height: this.props.height
    };

    return (
      <div className="modal-overflow">
        <div className="window" style={styles}></div>
      </div>
    )
  }
}

export default Window;
