import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Header from './Header'
import SettingProfile from './Auth/SettingProfile/SettingProfile'
import Postbox from './PostBox/PostBox'
import simpleRQ from './SimpleRQ'
import Dashboard from './Dashboard'
import Login from './Auth/Login'
import Signup from './Auth/Signup'

import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'

const App = ({ isAuthenticated }) => (
  <div>
    <Header />
    {isAuthenticated
      ? <Switch>
          <Route path="/postbox" component={Postbox} />
          <Route path="/login" component={Login} />
          <Route path="/simplerequirement" component={simpleRQ} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/settingprofile" component={SettingProfile} />
        </Switch>
      : <Switch>
          <Route path="/login" component={Login} />
          <Route path="/postbox" component={Postbox} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to={{ pathname: '/login' }} />
        </Switch>}
  </div>
)

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.token != null,
})

const Container = connect(mapStateToProps)(App)
export default withRouter(Container)
