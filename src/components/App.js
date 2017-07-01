import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import SidebarLeft from './sidebar'
import Header from './Header'
import SettingProfile from './SettingProfile/SettingProfile'
import Postbox from './PostBox'
import simpleRQ from './SimpleRQ'
import Dashboard from './Dashboard'
import Login from './Auth/Login'
import IPD from './Submitplan/IPD/IPD'
import Signup from './Auth/Signup'
import confirm_identity from './confirm_identity'

import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'

import ViewAllPlan from './ViewAllPlan'

const App = ({ isAuthenticated }) => (
  <div>
    <Header />
    {isAuthenticated
      ? <Switch>
          <Route path="/postbox" component={Postbox} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard/simplerequirement" component={simpleRQ} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/settingprofile" component={SettingProfile} />
          <Route path="/ipd" component={IPD} />
          <Route path="/confirm_identity" component={confirm_identity} />
        </Switch>
      : <Switch>
          <Route path="/dashboard/simplerequirement" component={simpleRQ} />
          <Route path="/confirm_identity" component={confirm_identity} />
          <Route path="/ipd" component={IPD} />
          <Route path="/login" component={Login} />
          <Route path="/postbox" component={Postbox} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/settingprofile" component={SettingProfile} />
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
