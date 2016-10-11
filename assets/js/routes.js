import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/App/index'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'
import Dashboard from './containers/Dashboard'
import FormElements from './containers/FormElements'



export default (
  <Route path="/" component={App}>
    <IndexRedirect to="dashboard" />
    <Route path="dashboard" component={Dashboard}>
      <Route path="form_elements" component={FormElements}></Route>
    </Route>
    <Route path="signup" component={SignUp} />
    <Route path="signin" component={SignIn} />
  </Route>
)
