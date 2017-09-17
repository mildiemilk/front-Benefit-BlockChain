import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Plan from './Plan';
import InsuranceDetail from '../InsuranceDetail';
import HealthDetail from '../health-detail';
import GeneralExpense from '../genaral-expense';
import { getAllBenefit, confirmPlan, currentPlan } from '../../../api/Employee/plan';

class FlexyPlan extends Component {
  static propTypes = {
    getAllBenefit: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
    confirmPlan: PropTypes.func.isRequired,
    match: PropTypes.shape({ params: PropTypes.companyId }),
    currentPlan: PropTypes.func.isRequired,
    // match: PropTypes.shape({}),
  }
  static defaultProps = {
    match: {
      params: null,
    },
  }
  constructor(props) {
    super(props);
    props.getAllBenefit();
    props.confirmPlan();
    props.currentPlan();
    this.state = {
      flexyPlanDetail: true,
      insuranceDetail: false,
      healthDetail: false,
      generalExpense: false,
      plan: 0,
      fixPlan: false,
      fixPlanNextYear: false,
      flexyPlan: true,
      flexyPlanNextYear: false,
      renderHomeDashboard: null,
      renderDashboardStart: null,
      renderCongratSelectPlan: null,
      timeUp: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { match } = this.props;
    const { data } = nextProps;
    const currentDate = new Date();
    if (currentDate.toISOString() > data.allBenefit[0].timeout) { // time is up
      if (data.confirm) { // confirm
        if (currentDate.toISOString() < data.allBenefit[0].effectiveDate) { // policy don't start
          this.setState({ renderDashboardStart: true });
        } else {
          this.setState({ renderHomeDashboard: true });
        }
      } else { // user don't confirm and make user confirm plan
        this.setState({
          fixPlan: true,
          flexyPlan: false,
          timeUp: true,
        });
      }
    } else { // in time
      if (data.confirm) {
        if (data.allBenefit.length > 1) { // that's flex
          if (match.params.check) {
            data.allBenefit.forEach((item, i) => {
              if (item._id === data.currentSelect) {
                this.setState({ plan: i });
              }
            });
            this.setState({
              renderCongratSelectPlan: false,
              flexyPlan: true,
            });
          } else {
            this.setState({ renderCongratSelectPlan: true });
          }
        } else { // that's fix
          if (currentDate.toISOString() < data.allBenefit[0].effectiveDate) { // policy don't start
            this.setState({ renderDashboardStart: true });
          } else {
            this.setState({ renderHomeDashboard: true });
          }
        }
      } else {
        if (data.allBenefit.length > 1) { // that's flex
          this.setState({
            fixPlan: false,
            flexyPlan: true,
          });
        } else { // that's fix
          this.setState({
            fixPlan: true,
            flexyPlan: false,
          });
        }
      }
    }
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

  handleClickNextYearSelectPlan = () => this.setState({ flexyPlan: true });

  render() {
    const {
      flexyPlanDetail,
      insuranceDetail,
      healthDetail,
      generalExpense,
      plan,
      fixPlanNextYear,
      flexyPlan,
      flexyPlanNextYear,
      renderHomeDashboard,
      renderDashboardStart,
      renderCongratSelectPlan,
      timeUp,
    } = this.state;
    const { data } = this.props;
    if (renderHomeDashboard) {
      return <Redirect to={{ pathname: '/homedashboard' }} />;
    } else if (renderDashboardStart) {
      return <Redirect to={{ pathname: '/dashboardstart' }} />;
    } else if (renderCongratSelectPlan) {
      return <Redirect to={{ pathname: '/congratselectplan' }} />;
    }
    if (data !== undefined && data.allBenefit.length > 0) {
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
                handleClickNextYearSelectPlan={this.handleClickNextYearSelectPlan}
                plan={plan}
                fixPlanNextYear={fixPlanNextYear}
                flexyPlan={flexyPlan}
                flexyPlanNextYear={flexyPlanNextYear}
                data={this.props.data}
                timeUp={timeUp}
              /> :
              <div />
          }
          {
            insuranceDetail ?
              <InsuranceDetail
                handleClickBack={this.handleClickBack}
                plan={plan}
                data={this.props.data}
              />
              : <div />
          }
          {
            healthDetail ?
              <HealthDetail
                handleClickBack={this.handleClickBack}
                plan={plan}
                data={this.props.data}
              />
              : <div />
          }
          {
            generalExpense ?
              <GeneralExpense
                handleClickBack={this.handleClickBack}
                plan={plan}
                data={this.props.data}
              />
              : <div />
          }
        </div>
      );
    }
    return (<div />);
  }
}

const mapDispatchToProps = dispatch => ({
  getAllBenefit: () => dispatch(getAllBenefit()),
  confirmPlan: () => dispatch(confirmPlan()),
  currentPlan: () => dispatch(currentPlan()),
});
const mapStateToProps = state => ({
  data: {
    ...state.getAllBenefitReducer,
    ...state.confirmPlanReducer,
    ...state.currentPlanReducer,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FlexyPlan);
