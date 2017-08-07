import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { BrowserRouter, Redirect } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import SettingProfile from './SettingProfile'
import Postbox from './PostBox'
import simpleRQ from './SimpleRQ'
import Dashboard from './Dashboard'
import Login from './Auth/login'
import IPD from './SubmitPlan/IPD/ipd'
import Signup from './Auth/signup'
import confirmIdentity from './confirm_identity'
import ChooseInsurer from './ChooseInsurer'
import SubmitPlan from './SubmitPlan'
import welcomePage from './welcome'
import Sendrequest from './sendrequest'
import MainLayout from './main-layout'
import Uploadfile from './uploadfile'
import NavLayout from './nav-layout'
import Bidding from './Bidding'
import EmployeeBenefits from './EmployeeBenefits/'
import '../styles/main.scss'
import ComparePlan from './ComparePlan'
import AddBenefit from './AddBenefit'
import SettingBenefit from './SettingBenefit'
import Logout from './Auth/logout'
import SettingPlan from './SettingBenefit/setting-plan'
import Download from './Download'
import Congrat from './congrat'
import CongratStep3 from './congratStep3'
import CongratStep4 from './congratStep4'
import ChooseInsuranceplan from './ChooseInsurancePlan'
import PieChart from './PieChart'
import SelectRealTime from './SelectRealTime'
import SendFlexPlan from './SendFlexPlan'
import Appmobile from './appmobile'
import EmployeeLogin from './Employee/employee-login'
import EmployeeList from './EmployeeList'
import ViewAllPlan from './ViewAllPlan'

class App extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    role: PropTypes.string,
  }

  static defaultProps = {
    role: '',
  }

  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { isAuthenticated, role } = this.props
    let route
    if (isAuthenticated) {
      if (role === 'HR') {
        route = (
          <NavLayout>
            <Switch>
              <Route path="/addbenefit" component={AddBenefit} />
              <Route path="/confirm_identity" component={confirmIdentity} />
              <Route path="/compareplan" component={ComparePlan} />
              <Route path="/chooseinsurer" component={ChooseInsurer} />
              <Route path="/congrat" component={Congrat} />
              <Route path="/congratstep3" component={CongratStep3} />
              <Route path="/congratstep4" component={CongratStep4} />
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
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/submitplan" component={SubmitPlan} />
                  <Route path="/ipd" component={IPD} />
                  <Route path="/sendrequest" component={Sendrequest} />
                  <Route path="/bidding" component={Bidding} />
                  <Route path="/uploadfile" component={Uploadfile} />
                  <Route path="/settingbenefit" component={SettingBenefit} />
                  <Route path="/settingplan" component={SettingPlan} />
                  <Route
                    path="/employeeBenefits"
                    component={EmployeeBenefits}
                  />
                  <Route path="/Download" component={Download} />
                  <Route path="/Selectrealtime" component={SelectRealTime} />
                  <Route
                    path="/chooseinsuranceplan"
                    component={ChooseInsuranceplan}
                  />
                  <Route path="/sendflexplan" component={SendFlexPlan} />
                  <Route path="/piechart" component={PieChart} />
                  <Route path="/EmployeeList" component={EmployeeList} />
                  <Route path="/view" component={ViewAllPlan} />
                </Switch>
              </MainLayout>
            </Switch>
          </NavLayout>
        )
      } else if (role === 'Employee') {
        route = <Appmobile />
      } else {
        route = null
      }
    } else {
      route = (
        <Switch>
          <Route path="/employeelogin" component={EmployeeLogin} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Redirect to={{ pathname: '/login' }} />
        </Switch>
      )
    }
    return (
      <BrowserRouter>
        <div style={{ height: '100%' }}>
          {route}
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.token != null,
  role: state.authReducer.role,
})

const Container = connect(mapStateToProps)(App)
export default Container
