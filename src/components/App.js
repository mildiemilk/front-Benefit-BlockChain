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
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import test from './test'
import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'

const App = ({ isAuthenticated }) => (
  <div>
    <Header />
     <Route path="/setting-profile" component={SettingProfile} />
    {/*{isAuthenticated
      ? <Switch>
      <Route path="/postbox" component={Postbox} />
      <Route path="/setting-profile" component={SettingProfile} />
      <Route path="/dashboard/simpleRQ" component={simpleRQ} />
      <Route path="/dashboard" component={dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/Signup" component={Signup} />
      <Route path="/test" component={test} />
        </Switch>
      : <Switch>
          <Route path="/login" component={Login} />
          <Redirect to={{ pathname: '/login' }} />
        </Switch>}*/}
  </div>
)

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token != null,
})

const Container = connect(mapStateToProps)(App)
export default withRouter(Container)
