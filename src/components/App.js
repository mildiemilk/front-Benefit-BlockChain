import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Header from './Header'
import SettingProfile from './Auth/SettingProfile/SettingProfile'
import Postbox from './PostBox/PostBox'
import simpleRQ from './SimpleRQ'
import dashboard from './Dashboard'

import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'

const App = ({ user }) => (
  <div>
    <Header />
    <Switch>
    <Route path="/postbox" component={Postbox} />
    <Route path="/setting-profile" component={SettingProfile} />
    <Route path="/dashboard/simpleRQ" component={simpleRQ} />
    <Route path="/dashboard" component={dashboard} />
    <Route path="/login" component={login} />
    <Route path="/signup" component={signup} />
    </Switch>
  </div>
)

App.propTypes = {
  
}

export default withRouter(connect(state => ({  }))(App))
