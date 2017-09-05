import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../styles/employee-style/main.scss';
import Header from './Insurer/Header';
import Welcome from './Insurer/welcome';
import Dashboard from './Insurer/dashboard-insurer';
import BiddingList from './Insurer/Bidding';
import MainLayout from './Insurer/main-layout';

const AppInsurer = () => (
  <BrowserRouter>
    <div style={{ height: '100%' }}>
      <Header />
      <Switch>
        <Route path="/idashboard" component={Dashboard} />
        <Route path="/welcome" component={Welcome} />
        <MainLayout>
          <Switch>
            <Route path="/biddinglist" component={BiddingList} />
          </Switch>
        </MainLayout>
        {/* <Route path="/biddinglist" component={BiddingList} />
        <Route path="/bidding" component={Bidding} />
        <Route path="/companyclaimlist" component={CompanyClaimList} />
        <Route path="/viewclaim" component={ViewClaimList} /> */}
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
