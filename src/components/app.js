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
import Login from './Auth/login'
import IPD from './SubmitPlan/IPD/ipd'
import OPD from './SubmitPlan/OPD/opd'
import Life from './SubmitPlan/Life/life'
import Dental from './SubmitPlan/Dental/dental'
import Signup from './Auth/signup'
import confirm_identity from './confirm_identity'
import ChooseInsurer from './ChooseInsurer'
import FormSubmitPlan from './SubmitPlan/FormSubmitPlan/form-submit-plan'
import SubmitPlan from './SubmitPlan'
import MenuPlan from './SubmitPlan/MenuPlan/menu-plan'
import welcomePage from './welcome'
import Sidebar from './sidebar'
import Sendrequest from './sendrequest'
import MainLayout from './main-layout'
import Uploadfile from './uploadfile'
import NavLayout from './nav-layout'
import Bidding from './Bidding'
import EmployeeBenefits from './EmployeeBenefits/'
import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'
import createBrowserHistory from 'history/createBrowserHistory'
import ViewAllPlan from './ViewAllPlan'
import ComparePlan from './ComparePlan'
import AddBenefit from './AddBenefit'
import SettingBenefit from './SettingBenefit'
import Logout from './Auth/logout'
import SettingPlan from './SettingBenefit/setting-plan.js'
import Download from './Download'
import Congrat from './congrat'
import Congrat2 from './congratStep4'
import ChooseInsuranceplan from './ChooseInsurancePlan'
import PieChart from './PieChart'
import SelectRealTime from './SelectRealTime'
import SendFlexPlan from './SendFlexPlan'
import Appmobile from './appmobile'
import EmployeeLogin from './Employee/employee-login'

const App = ({ isAuthenticated, role }) => {
  console.log(role)
  return (
    <BrowserRouter>
      <div>
        {isAuthenticated
          ? role === 'HR'
              ? <NavLayout>
                  <Switch>
                    <Route
                      path="/confirm_identity"
                      component={confirm_identity}
                    />
                    <Route path="/welcome" component={welcomePage} />
                    <Route path="/settingprofile" component={SettingProfile} />
                    <Route path="/logout" component={Logout} />
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
                        <Route
                          path="/chooseinsurer"
                          component={ChooseInsurer}
                        />
                        <Route path="/uploadfile" component={Uploadfile} />
                        <Route
                          path="/settingbenefit"
                          component={SettingBenefit}
                        />
                        <Route path="/settingplan" component={SettingPlan} />
                        <Route path="/congrat" component={Congrat} />
                        <Route path="/congratStep4" component={Congrat2} />
                        <Route
                          path="/employeeBenefits"
                          component={EmployeeBenefits}
                        />
                        <Route path="/Download" component={Download} />
                        <Route
                          path="/Selectrealtime"
                          component={SelectRealTime}
                        />
                        <Route
                          path="/chooseinsuranceplan"
                          component={ChooseInsuranceplan}
                        />
                        <Route path="/sendflexplan" component={SendFlexPlan} />
                        <Route path="/piechart" component={PieChart} />
                      </Switch>
                    </MainLayout>
                  </Switch>
                </NavLayout>
              : role === 'Employee' ? <Appmobile /> : null
          : <Switch>
              <Route path="/employeelogin" component={EmployeeLogin} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Redirect to={{ pathname: '/login' }} />
            </Switch>}

      </div>
    </BrowserRouter>
  )
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.token != null,
  role: state.authReducer.role,
})

const Container = connect(mapStateToProps)(App)
export default Container
