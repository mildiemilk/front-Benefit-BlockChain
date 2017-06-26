import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Header from './Header'
import SettingProfile from './Auth/SettingProfile/SettingProfile'
import Postbox from './PostBox/PostBox'

import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'

const App = ({ user }) => (
  <div>
    <Header />
    <Route path="/postbox" component={Postbox} />
    <Route path="/setting-profile" component={SettingProfile} />
  </div>
)

App.propTypes = {
  
}

export default withRouter(connect(state => ({  }))(App))
