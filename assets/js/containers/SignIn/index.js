import React, {Component} from 'react'
import SignInForm from '../../components/SignInForm'
import Header from '../../components/Header'


class SignIn extends Component {
  render () {
    return <div>
      <Header type="auth"/>
      <div className="application_wrapper">
        <div className="application_routeHandler">
          <SignInForm/>
        </div>
      </div>
    </div>
  }
}

export default SignIn;
