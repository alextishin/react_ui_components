import React, {Component} from 'react'
import './styles.css'

class ContentContainer extends Component {

  static propTypes = {
    title: React.PropTypes.string
  }

  render = () => {
    return (
      <div className="content">
        <div className="content__block">
          <h1 className="content__header">{this.props.title}</h1>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export  default ContentContainer;
