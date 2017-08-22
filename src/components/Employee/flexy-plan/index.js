import React, { Component } from 'react';
import Plan from './Plan';
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
      fixPlan: false,
      fixPlanNextYear: false,
      flexyPlan: true,
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

  handleChangePlan = index => {
    const data = parseInt(index, 10);
    this.setState({ plan: data });
  }

  handleClickButton = ({ target: { dataset: { tag } } }) => {
    const data = parseInt(tag, 10);
    this.setState({
      plan: data,
      checkClickBTN: true,
    }, () => this.handleChangeCheckBTN());
  }

  handleChangeCheckBTN = () => this.setState({ checkClickBTN: false });

  render() {
    const {
      flexyPlanDetail,
      insuranceDetail,
      healthDetail,
      generalExpense,
      plan,
      fixPlanNextYear,
      flexyPlan,
    } = this.state;
    return (
      <div>
        {
          flexyPlanDetail ?
            <Plan
              handleClickInsurance={this.handleClickInsurance}
              handleClickHealth={this.handleClickHealth}
              handleClickGeneralExpense={this.handleClickGeneralExpense}
              handleChangePlan={this.handleChangePlan}
              handleClickButton={this.handleClickButton}
              plan={plan}
              fixPlanNextYear={fixPlanNextYear}
              flexyPlan={flexyPlan}
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
