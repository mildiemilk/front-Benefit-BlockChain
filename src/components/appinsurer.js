import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../styles/InsurerStyle/main.scss';
// import Header from './Insurer/Header';
import Welcome from './Insurer/welcome';
import Dashboard from './Insurer/dashboard-insurer';
import Bidding from './Insurer/Bidding';
import BiddingList from './Insurer/Bidding/BiddingList';
import MainLayout from './Insurer/main-layout';
import ClaimList from './Insurer/Claim/claim-list';
import ClaimDetail from './Insurer/Claim/claim-detail';
import ClaimAnalysis from './Insurer/Claim/claim-analysis';
import Claim from './Insurer/Claim';
import Logout from './Auth/logout';
import InsurerLogin from './Insurer/insurer-login';
import manageEmployee from './Insurer/customer/allcustomer/manageEmployee';
import AllCustomer from './Insurer/customer/allcustomer';
import AllPlanData from './Insurer/customer/allcustomer/allPlanData';
import ViewPlan from './Insurer/customer/CustomerManage/ViewPlan';
import Download from './Insurer/customer/CustomerManage/DownloadEmployeeData';
import Upload from './Insurer/customer/CustomerManage/UploadPolicyNumber';
import Benefits from './Insurer/customer/CustomerManage/Benefits';
// import waitingSendData from './Insurer/customer/waitingSendData';
// const hamburgerMen = false;
// const handleHamburgerMenu = () => this.setState({ hamburgerMenu: !hamburgerMen });
// const handleCloseHamburgerMenu = () => this.setState({ hamburgerMenu: false });
const AppInsurer = () => (
  <BrowserRouter>
    <div style={{ height: '100%' }}>
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/insurerlogin" component={InsurerLogin} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/logout" component={Logout} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <MainLayout>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/biddinglist" component={BiddingList} />
            <Route path="/biddingdetali/:companyId" component={Bidding} />
            <Route path="/claimlist/:companyId" component={Claim} />
            <Route path="/claimdetail/:companyId/:index" component={ClaimDetail} />
            <Route path="/claim" component={ClaimList} />
            <Route path="/claimanalysis" component={ClaimAnalysis} />
            <Route path="/allcustomer" component={AllCustomer} />
            <Route path="/stepmanagement/:index/:companyId" component={ViewPlan} />
            <Route path="/empmanagement/:index/:companyId" component={manageEmployee} />
            <Route path="/customerplan/:index/:companyId" component={AllPlanData} />
            <Route path="/stepdownload/:index/:companyId" component={Download} />
            <Route path="/stepupload/:index/:companyId" component={Upload} />
            <Route path="/stepbenefits/:index/:companyId" component={Benefits} />
            {/* <Route path="/empmanagement/:companyId" component={manageEmployee} />
            <Route path="/customerplan/:companyId" component={AllPlanData} /> */}
          </Switch>
        </MainLayout>
      </Switch>
    </div>
  </BrowserRouter>
);
AppInsurer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.token != null,
});
const Container = connect(mapStateToProps)(AppInsurer);
export default Container;
