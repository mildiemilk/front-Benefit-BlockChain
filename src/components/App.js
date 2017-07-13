import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { BrowserRouter, Redirect } from 'react-router-dom'
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
import Sidebar from './sidebar'
import Sendrequest from './sendrequest'
import MainLayout from './MainLayout'
import EmptyLayout from './EmptyLayout'
import Uploadfile from './uploadfile'
import NavLayout from './NavLayout'
import Bidding from './Bidding'
import EmployeeBenefits from './EmployeeBenefits/'
import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'
import createBrowserHistory from 'history/createBrowserHistory'
import ViewAllPlan from './ViewAllPlan'
import ComparePlan from './ComparePlan'
import AddBenefit from './AddBenefit'
import SettingBenefit from './SettingBenefit'
const history = createBrowserHistory()

const App = ({ isAuthenticated }) => (
  <BrowserRouter>
    <div>
      <EmptyLayout>
        {true
          ? <NavLayout>
              <Switch>
                <Route path="/confirm_identity" component={confirm_identity} />
                <Route path="/welcome" component={welcomePage} />
                <Route path="/settingprofile" component={SettingProfile} />
                <MainLayout>
                  <Switch>
                    <Route path="/postbox" component={Postbox} />
                    <Route
                      path="/dashboard/simplerequirement"
                      component={simpleRQ}
                    />
                    <Route path="/addbenefit" component={AddBenefit} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/compareplan" component={ComparePlan} />
                    <Route path="/submitplan" component={SubmitPlan} />
                    <Route path="/ipd" component={IPD} />
                    <Route path="/sendrequest" component={Sendrequest} />
                    <Route path="/view" component={ViewAllPlan} />
                    <Route path="/bidding" component={Bidding} />
                    <Route path="/chooseinsurer" component={ChooseInsurer} />
                    <Route path="/uploadfile" component={Uploadfile} />
                    <Route path="/settingbenefit" component={SettingBenefit} />
                    <Route
                      path="/EmployeeBenefits"
                      component={EmployeeBenefits}
                    />
                  </Switch>
                </MainLayout>
              </Switch>
            </NavLayout>
          : <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Redirect to={{ pathname: '/login' }} />
            </Switch>}
      </EmptyLayout>
    </div>
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
