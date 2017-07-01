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
import ChooseInsurer from './ChooseInsurer'
import FormSubmitPlan from './SubmitPlan/FormSubmitPlan/FormSubmitPlan'
import SubmitPlan from './SubmitPlan'
import MenuPlan from './SubmitPlan/MenuPlan/MenuPlan'
import welcomePage from './welcome'

import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'

import ViewAllPlan from './ViewAllPlan'
import Sidebar from './Sidebar'

const App = ({ isAuthenticated }) => (
  <div>
    <Header />
    <div className="row">
      <div className="large-2 columns">
        <Sidebar />
      </div>
      <div className="large-10 columns">
        <div className="row" style={{marginTop: 75}}>
          <div className="large-10 large-offset-1 columns">
          {isAuthenticated
          ? <Switch>
              <Route path="/postbox" component={Postbox} />
              <Route path="/login" component={Login} />
              <Route path="/simplerequirement" component={simpleRQ} />
              <Route path="/signup" component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/settingprofile" component={SettingProfile} />
              <Route path="/IPD" component={IPD} />
              <Route path="/OPD" component={OPD} />
              <Route path="/Dental" component={Dental} />
              <Route path="/Life" component={Life} />
            </Switch>
          : <Switch>
            <Route path="/postbox" component={Postbox} />
            <Route path="/chooseinsurer" component={ChooseInsurer} />
            <Route path="/simplerequirement" component={simpleRQ} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/settingprofile" component={SettingProfile} />
              
              {/*<Redirect to={{ pathname: '/login' }} />*/}
            </Switch>}
        </div>
      </div>
      </div>
    </div>
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
