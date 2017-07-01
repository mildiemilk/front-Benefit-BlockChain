import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import SidebarLeft from './sidebar'
import Header from './Header'
import SettingProfile from './SettingProfile'
import Postbox from './PostBox'
import simpleRQ from './SimpleRQ'
import dashboard from './Dashboard'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import ChooseInsurer from './ChooseInsurer'

import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'

import ViewAllPlan from './ViewAllPlan'

const App = ({ isAuthenticated }) => (
  <div>
    <Header />
    {/*<SidebarLeft />*/}
    {isAuthenticated
      ? <Switch>
          <Route path="/postbox" component={Postbox} />
          <Route path="/login" component={Login} />
          <Route path="/simplerequirement" component={simpleRQ} />
          <Route path="/settingprofile" component={SettingProfile} />
        </Switch>
      : <Switch>
        <Route path="/chooseinsurer" component={ChooseInsurer} />
        <Route path="/simplerequirement" component={simpleRQ} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
           <Route path="/settingprofile" compornent={SettingProfile} />
           
          {/*<Redirect to={{ pathname: '/login' }} />*/}
        </Switch>}
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
