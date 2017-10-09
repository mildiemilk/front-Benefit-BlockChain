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
    templatePlan: PropTypes.arrayOf(PropTypes.object).isRequired,
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
          planName: planList[index].benefitPlanName,
          plan: planList[index].benefitPlan.plan.planId._id,
          isHealth: planList[index].benefitPlan.isHealth,
          isExpense: planList[index].benefitPlan.isExpense,
          health: planList[index].benefitPlan.health,
          expense: planList[index].benefitPlan.expense,
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
      planName: planList[index].benefitPlanName,
      plan: planList[index].benefitPlan.plan.planId._id,
      isHealth: planList[index].benefitPlan.isHealth,
      isExpense: planList[index].benefitPlan.isExpense,
      health: planList[index].benefitPlan.health,
      expense: planList[index].benefitPlan.expense,
    });
  }
  renderOption = (optionPlan, templatePlan) => {
    const allplan = optionPlan.choosePlan.insurer.concat(optionPlan.choosePlan.master);
    if (allplan !== undefined && allplan.length >= 1) {
      console.log('allplanfilter', allplan);
      console.log('templateplan==', templatePlan);
      const newplan =
      templatePlan.filter(plan => allplan.map(
        option => option.planId === plan.plan._id).indexOf(true) !== -1);
      console.log('newoption', newplan);
      return newplan;
    }
    return '';
  }

  render() {
    const isReadOnly = true;
    console.log('statebe', this.state);
    console.log('props-setting', this.props);
    console.log('optionPlan', this.props.optionPlan, 'template', this.props.templatePlan)
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
          {this.props.templatePlan.length >= 1
          ? <SettingPlan
            option={this.renderOption(this.props.optionPlan, this.props.templatePlan)}
            optionPlan={this.props.optionPlan}
            planName={this.state.planName}
            plan={this.state.plan}
            isHealth={this.state.isHealth}
            isExpense={this.state.isExpense}
            health={this.state.health}
            expense={this.state.expense}
            handleSave={'none-DisplaySave'}
            isReadOnly={isReadOnly}
            width="51%"
          />
          : <div />
          }
          {/* {this.renderOption(this.props.optionPlan, this.props.templatePlan)} */}
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
