/**
 * Created by alextishin on 06.09.16.
 */
import React, {Component} from 'react'
import PageTop from '../../components/PageTop'





class App extends Component {
  render () {
    return <div style={{height: '100%', width: '100%'}}>
      <PageTop />
      <div className="mainWrapper">
        {this.props.children}
      </div>
    </div>

  }
}


export default App
