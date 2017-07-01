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
import Dashboard from './Dashboard'
import Login from './Auth/Login'
import IPD from './SubmitPlan/IPD/IPD'
import OPD from './SubmitPlan/OPD/OPD'
import Life from './SubmitPlan/Life/life'
import Dental from './SubmitPlan/Dental/dental'
import Signup from './Auth/Signup'
import confirm_identity from './confirm_identity'
import ChooseInsurer from './ChooseInsurer'
import FormSubmitPlan from './SubmitPlan/FormSubmitPlan/FormSubmitPlan'
import SubmitPlan from './SubmitPlan'
import MenuPlan from './SubmitPlan/MenuPlan/MenuPlan'
import welcomePage from './welcome'

import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'

import ViewAllPlan from './ViewAllPlan'

const App = ({ isAuthenticated }) => (
  <div>
    <Header />
    <SidebarLeft />
    {isAuthenticated
      ? <Switch>
          <Route path="/postbox" component={Postbox} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard/simplerequirement" component={simpleRQ} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/submitplan" component={SubmitPlan} />
          <Route path="/settingprofile" component={SettingProfile} />
          <Route path="/ipd" component={IPD} />
          <Route path="/confirm_identity" component={confirm_identity} />
        </Switch>
      : <Switch>
          <Route path="/settingprofile" component={SettingProfile} />
          <Route path="/welcome" component={welcomePage} />
          <Route path="/postbox" component={Postbox} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/simplerequirement" component={simpleRQ} />
          <Route path="/submitplan" component={SubmitPlan} />
          <Route path="/chooseinsurer" component={ChooseInsurer} />
          <Route path="/simplerequirement" component={simpleRQ} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/confirm_identity" component={confirm_identity} />
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
