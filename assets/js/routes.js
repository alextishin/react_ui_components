import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/App/index'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'
import Home from './containers/Home'
import Components from './containers/Components'
import FormElements from './containers/FormElements'
import TabsContainer from './containers/TabsContainer'
import TablesContainer from './containers/TablesContainer'
import TreesContainer from './containers/TreesContainer'



export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home}/>
    <Route path="components" component={Components}>
      <Route path="form_elements" component={FormElements}></Route>
      <Route path="tabs" component={TabsContainer}></Route>
      <Route path="tables" component={TablesContainer}></Route>
      <Route path="trees" component={TreesContainer}></Route>
    </Route>
    <Route path="signup" component={SignUp} />
    <Route path="signin" component={SignIn} />
  </Route>

)
