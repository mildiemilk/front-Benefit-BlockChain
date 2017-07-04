import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router';
import { BrowserRouter,Redirect } from 'react-router-dom'
import Async from 'react-code-splitting'
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
import Sidebar from './Sidebar'
import MainLayout from './MainLayout';
import EmptyLayout from './EmptyLayout';
import NavLayout from './NavLayout';
import Uploadfile from './uploadfile'
import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
import ViewAllPlan from './ViewAllPlan'

const App = ({ isAuthenticated }) => (
    <BrowserRouter>
      <Switch>
        <EmptyLayout>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <NavLayout>
              <Switch>
                <Route
                  path="/confirm_identity"
                  component={confirm_identity}
                />
              </Switch>
              </NavLayout>
            <MainLayout>
              <Switch>
                <Route path="/postbox" component={Postbox} />
                <Route
                  path="/dashboard/simplerequirement"
                  component={simpleRQ}
                />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/submitplan" component={SubmitPlan} />
                <Route path="/settingprofile" component={SettingProfile} />
                <Route path="/ipd" component={IPD} />
                
                <Route path="/view" component={ViewAllPlan} />
                <Route path="/chooseinsurer" component={ChooseInsurer} />
                <Route component={EmptyLayout}/>
                </Switch>
            </MainLayout>
          </Switch>
        </EmptyLayout> 
      </Switch>
    </BrowserRouter>
)

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.token != null,
})

const Container = connect(mapStateToProps)(App)
export default Container