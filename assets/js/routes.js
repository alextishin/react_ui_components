import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/App/index'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'
import Dashboard from './containers/Dashboard'
import FormElements from './containers/FormElements'
import TabsContainer from './containers/TabsContainer'
import TablesContainer from './containers/TablesContainer'



export default (
  <Route path="/" component={App}>
    <IndexRedirect to="dashboard" />
    <Route path="dashboard" component={Dashboard}>
      <Route path="form_elements" component={FormElements}></Route>
      <Route path="tabs" component={TabsContainer}></Route>
      <Route path="tables" component={TablesContainer}></Route>
    </Route>
    <Route path="signup" component={SignUp} />
    <Route path="signin" component={SignIn} />
  </Route>
)
