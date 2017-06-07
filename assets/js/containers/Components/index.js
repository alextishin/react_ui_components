/**
 * Created by alextishin on 17.09.16.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Sidebar from '../../components/Sidebar'

class Components extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  // componentWillMount () {
  //   let user = this.props.user;
  //
  //   if(user.status !== 'authenticated') {
  //     this.context.router.push('/signin');
  //   }
  // }
  

  render () {
    return (
      <main className='clearfix' style={{height: '100%'}}>
        <Sidebar />
        {this.props.children}
      </main>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}


export default connect(mapStateToProps)(Components);
