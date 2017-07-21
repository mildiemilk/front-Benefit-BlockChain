import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { BrowserRouter, Redirect } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import employeeLogin from './Employee/employee-login'
import employeeVerify from './Employee/employee-verify'
import HealthDetail from './Employee/health-detail'
import GenaralExpense from './Employee/genaral-expense'
import EmployeeFixPlan from './Employee/employee-fixplan'
import '../styles/employee-style/main.scss'

const AppMobile = () => (
  <div>
    {true
      ? <Switch>
          <Route path="/employeelogin" component={employeeLogin} />
          <Route path="/employeeverify" component={employeeVerify} />
          <Route path="/healthdetail" component={HealthDetail} />
          <Route path="/genaralexpense" component={GenaralExpense} />
          <Route path="/employeefixplan" component={EmployeeFixPlan} />
        </Switch>
      : <Switch />}
  </div>
)

AppMobile.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.token != null,
})

const Container = connect(mapStateToProps)(AppMobile)
export default Container
