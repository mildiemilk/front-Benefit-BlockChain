import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Header from './Header'
import SettingProfile from './Auth/SettingProfile'

import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'

const App = ({  }) => (
  <div>
    <Header />

    <Switch>
      <Route path="/setting-profile" component={SettingProfile} />
    
    </Switch>

  </div>
)

App.propTypes = {
  
}

export default withRouter(connect(state => ({  }))(App))
