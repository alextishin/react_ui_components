/**
 * Created by alextishin on 17.09.16.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import PageTop from '../../components/PageTop'
import Sidebar from '../../components/Sidebar'

class Dashboard extends Component {

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
    return <div>
      <main className=''>
        <PageTop />
        <Sidebar />
        {this.props.children}
      </main>
    </div>
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}


export default connect(mapStateToProps)(Dashboard);
