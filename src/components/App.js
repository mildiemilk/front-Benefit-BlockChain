import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {
  Route,
  Redirect,
  withRouter,
  Switch,
  HashRouter,
  BrowserRouter,
  Router,
} from 'react-router-dom'
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
import Sidebar from './sidebar'
import MainLayout from './MainLayout'
import EmptyLayout from './EmptyLayout'
import Uploadfile from './uploadfile'
import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'

import ViewAllPlan from './ViewAllPlan'

const App = ({ isAuthenticated }) => (
  <div>
    <Header />
    <div className="row">
      <div className="large-2 columns">
        <Sidebar />
      </div>
      <div className="large-10 columns">
        <div className="row" style={{ marginTop: 75 }}>
          <div className="large-10 large-offset-1 columns">
            {isAuthenticated
              ? <Switch>
                  <Route path="/postbox" component={Postbox} />
                  <Route path="/login" component={Login} />
                  <Route
                    path="/dashboard/simplerequirement"
                    component={simpleRQ}
                  />
                  <Route path="/signup" component={Signup} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/submitplan" component={SubmitPlan} />
                  <Route path="/settingprofile" component={SettingProfile} />
                  <Route path="/ipd" component={IPD} />
                  <Route
                    path="/confirm_identity"
                    component={confirm_identity}
                  />
                  <Route path="/view" component={ViewAllPlan} />
                  <Route path="/chooseinsurer" component={ChooseInsurer} />
                </Switch>
              : <Switch>
                  <Route path="/view" component={ViewAllPlan} />
                  <Route path="/settingprofile" component={SettingProfile} />
                  <Route path="/welcome" component={welcomePage} />
                  <Route path="/postbox" component={Postbox} />
                  <Route
                    path="/dashboard/simplerequirement"
                    component={simpleRQ}
                  />
                  <Route path="/dashboard" component={Dashboard} />

                  <Route path="/submitplan" component={SubmitPlan} />
                  <Route path="/chooseinsurer" component={ChooseInsurer} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Route
                    path="/confirm_identity"
                    component={confirm_identity}
                  />
                  <Route path="/uploadfile" component={Uploadfile} />
                  <Redirect to={{ pathname: '/login' }} />
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
