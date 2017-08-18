import React, { Component } from 'react';
import FlexyPlanDetail from './FlexyPlanDetail';
import InsuranceDetail from '../InsuranceDetail';
import HealthDetail from '../health-detail';
import GeneralExpense from '../genaral-expense';

class FlexyPlan extends Component {
  constructor() {
    super();
    this.state = {
      flexyPlanDetail: true,
      insuranceDetail: false,
      healthDetail: false,
      generalExpense: false,
      plan: 0,
    };
  }

  handleClickInsurance = () => {
    this.setState({
      flexyPlanDetail: false,
      insuranceDetail: true,
    });
  }

  handleClickHealth = () => {
    this.setState({
      flexyPlanDetail: false,
      healthDetail: true,
    });
  }

  handleClickGeneralExpense = () => {
    this.setState({
      flexyPlanDetail: false,
      generalExpense: true,
    });
  }

  handleClickBack = () => {
    this.setState({
      flexyPlanDetail: true,
      insuranceDetail: false,
      healthDetail: false,
      generalExpense: false,
    });
  }

  handleChangePlan = index => this.setState({ plan: index });

  render() {
    const {
      flexyPlanDetail,
      insuranceDetail,
      healthDetail,
      generalExpense,
      plan,
    } = this.state;
    return (
      <div>
        {
          flexyPlanDetail ?
            <FlexyPlanDetail
              handleClickInsurance={this.handleClickInsurance}
              handleClickHealth={this.handleClickHealth}
              handleClickGeneralExpense={this.handleClickGeneralExpense}
              handleChangePlan={this.handleChangePlan}
            /> :
            <div />
        }
        {
          insuranceDetail ?
            <InsuranceDetail
              handleClickBack={this.handleClickBack}
              plan={plan}
            />
            : <div />
        }
        {
          healthDetail ?
            <HealthDetail
              handleClickBack={this.handleClickBack}
              plan={plan}
            />
            : <div />
        }
        {
          generalExpense ?
            <GeneralExpense
              handleClickBack={this.handleClickBack}
              plan={plan}
            />
            : <div />
        }
      </div>
    );
  }
}

export default FlexyPlan;
