import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../styles/employee-style/main.scss';
import employeeVerify from './Employee/employee-verify';
import EmployeeFixPlan from './Employee/employee-fixplan';
import DashboardStart from './Employee/dashboard-start';
import FlexyPlan from './Employee/flexy-plan';
import ClaimInsurance from './Employee/claim-insurance';
import CongratSelectPlan from './Employee/congrats-select-plan';
import HeadLayout from './head-layout-mobile';
import ClaimStatusDetail from './Employee/ClaimStatusDetail';
import YourBenefit from './Employee/YourBenefit';
import FindHospital from './Employee/find-hospital';
import Logout from './Auth/logout';
import claimStatus from './Employee/claim-status';
import HomeDashboard from './Employee/HomeDashboard';
import Profile from './Employee/Profile';

const AppMobile = () => (
  <BrowserRouter>
    <div style={{ height: '100%' }}>
      <HeadLayout>
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/employeeverify" component={employeeVerify} />
          <Route path="/employeefixplan" component={EmployeeFixPlan} />
          <Route path="/congratselectplan" component={CongratSelectPlan} />
          <Route path="/dashboardstart" component={DashboardStart} />
          <Route path="/flexyplan" component={FlexyPlan} />
          <Route path="/findhospital" component={FindHospital} />
          <Route path="/claiminsurance" component={ClaimInsurance} />
          <Route path="/yourbenefit" component={YourBenefit} />
          <Route path="/claimstatus" component={claimStatus} />
          <Route path="/claimstatusdetail" component={ClaimStatusDetail} />
          <Route path="/homedashboard" component={HomeDashboard} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </HeadLayout>
    </div>
  </BrowserRouter>
);

AppMobile.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.token != null,
});

const Container = connect(mapStateToProps)(AppMobile);
export default Container;
