import React, {Component} from 'react'
import './style.css'

class Window extends Component {

  constructor(props){
    super(props);
  }

  static propTypes ={
    width: React.PropTypes.integer,
    height: React.PropTypes.integer,
    modal: React.PropTypes.boolean
  }

  static defaultProps = {
    modal: false
  };

  renderModal(styles){
    return (
      <div className="modal-overflow">
        <div className="window" style={styles}>
          {this.props.children}
        </div>
      </div>
    )
  }

  renderDefault(styles) {

    return (
      <div className="window window--notmodal" style={styles}>
        {this.props.children}
      </div>
    )
  }


  isModal () {
    return this.props.modal;

  }

  render() {
    let styles = {
      width: this.props.width,
      height: this.props.height
    };

    let window = this.isModal() ?
      this.renderModal(styles) :
      this.renderDefault(styles);

    return window;
  }
}

export default Window;
