/**
 * Created by alextishin on 10.09.16.
 */
import React, {Component} from 'react'

import SignUpForm from '../../components/SignUpForm'
import Header from '../../components/Header'



class SignUp extends Component {
  render () {
    return <div>
      <Header type="auth"/>
      <div className="application_wrapper">
        <div className="application_routeHandler">
          <SignUpForm/>
        </div>
      </div>
    </div>
  }
}

export default SignUp;



