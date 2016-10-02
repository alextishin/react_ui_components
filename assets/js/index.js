'use strict'

import '../css/reset.css'
import '../css/register/application.less'
import '../css/font-awesome.min.css'
import '../css/style.css'



import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import routes from './routes'
import configureStore from './store/configureStore.js'


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
