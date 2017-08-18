import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlanBar from './plan-bar';
import SettingPlan from '../../SettingBenefit/setting-plan';
import {
  getBenefitPlan,
} from '../../../api/benefit-plan';

class SettingBenefit extends Component {
  static propTypes = {
    // plan: PropTypes.arrayOf(PropTypes.object).isRequired,
    // activePlan: PropTypes.string.isRequired,
    getBenefitPlan: PropTypes.func.isRequired,
    // getOptionPlan: PropTypes.func.isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor() {
    super();
    this.state = {
      activePlan: '',
      planName: '',
      plan: '',
      isHealth: false,
      isExpense: false,
      health: '',
      expense: '',
      planList: [],
    };
  }
  componentDidMount() {
    this.props.getBenefitPlan();
  }
  componentWillReceiveProps(newProps) {
    if (newProps.benefitPlan.length !== 0) {
      if (this.state.activePlan === '') {
        const planList = newProps.benefitPlan;
        const index = 0;
        this.setState({
          activePlan: index,
          planName: planList[index].planName,
          plan: planList[index].plan,
          isHealth: planList[index].isHealth,
          isExpense: planList[index].isExpense,
          health: planList[index].health,
          expense: planList[index].expense,
        });
      }
    }

    if (newProps.benefitPlan !== this.props.benefitPlan) {
      this.setState({ planList: newProps.benefitPlan });
    }
  }
  handleActivePlan = index => {
    const { planList } = this.state;
    this.setState({
      activePlan: index,
      planName: planList[index].planName,
      plan: planList[index].plan,
      isHealth: planList[index].isHealth,
      isExpense: planList[index].isExpense,
      health: planList[index].health,
      expense: planList[index].expense,
    });
    console.log('activeplan', this.state.plan);
  }

  render() {
    console.log('settingbenefit', this.props);
    console.log('state-plan', this.state.plan);
    return (
      <div className="row SettingBenefit">
        <div className="large-3 columns">
          <PlanBar
            handleActivePlan={this.handleActivePlan}
            activePlan={this.state.activePlan}
            plan={this.props.benefitPlan}
          />
        </div>
        <div className="large-9 columns">
          <SettingPlan
            optionPlan={this.props.optionPlan}
            planName={this.state.planName}
            plan={this.state.plan}
            isHealth={this.state.isHealth}
            isExpense={this.state.isExpense}
            health={this.state.health}
            expense={this.state.expense}
            handleSave={'none-DisplaySave'}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getBenefitPlan: () => dispatch(getBenefitPlan()),
});

const mapStateToProps = state => ({
  optionPlan: state.choosePlan,
  benefitPlan: state.benefitPlan.plan,
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingBenefit);
