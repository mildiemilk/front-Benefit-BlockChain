import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SettingPlans from '../SettingBenefit/setting-plan';
import '../../styles/employee-benefits.scss';

const ModalContents = styled(Modal.Content)`
  &&&{
    width: 100%;
    position: relative;
    margin: 0 auto;
    padding: 0px;
  }
`;

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    position: relative;
    margin-top: -400px;
    height: 200px;
    z-index: 2;
    box-shadow: none;
  }
`;

class SettingBenefitModal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    openSettingBenefit: PropTypes.func.isRequired,
    optionPlan: PropTypes.shape({}).isRequired,
    templatePlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    index: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      closeOnEscape: false,
      closeOnRootNodeClick: true,
      activePlan: '',
      planName: '',
      plan: '',
      isHealth: false,
      isExpense: false,
      health: '',
      expense: '',
    };
  }
  componentWillReceiveProps(newProps) {
    if (newProps.benefitPlan.length !== 0) {
      console.log('benefitPlan==>settingBenefitModal', newProps.benefitPlan);
      console.log('index--> settingBenefitModal', this.props.index, 'new', newProps.index);
      console.log('active-->', this.state.activePlan);
      const planList = newProps.benefitPlan;
      console.log('index--->settingBenefitModal After', newProps.index);
      const index = newProps.index;
      console.log('index setstate', index);
      this.setState({
        activePlan: index,
        planName: planList[index].benefitPlanName,
        plan: planList[index].benefitPlan.plan.planId._id,
        isHealth: planList[index].benefitPlan.isHealth,
        isExpense: planList[index].benefitPlan.isExpense,
        health: planList[index].benefitPlan.health,
        expense: planList[index].benefitPlan.expense,
      }, () => console.log('aftersetState->', this.state));
    }

    if (newProps.benefitPlan !== this.props.benefitPlan) {
      this.setState({ planList: newProps.benefitPlan });
    }
  }
  handleClose = () => {
    this.props.closeModal();
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
    console.log('optionPlan===>settingBenefitModal', this.props.optionPlan);
    console.log('state==>settingBenefitModal', this.state);
    return (
      <Modals
        trigger={<div />}
        open={this.props.openSettingBenefit}
        closeOnEscape={this.state.closeOnEscape}
        closeOnRootNodeClick={this.state.closeOnRootNodeClick}
        onClose={this.handleClose}
      >
        <ModalContents>
          <SettingPlans
            option={this.renderOption(this.props.optionPlan, this.props.templatePlan)}
            optionPlan={this.props.optionPlan}
            planName={this.state.planName}
            plan={this.state.plan}
            isHealth={this.state.isHealth}
            isExpense={this.state.isExpense}
            health={this.state.health}
            templatePlan={this.props.templatePlan}
            expense={this.state.expense}
            handleSave={'none-DisplaySave'}
            isReadOnly={isReadOnly}
          />
        </ModalContents>
        <ModalContents>
          <div className="row">
            <button
              className="back-button"
              onClick={() => this.props.closeModal()}
            >
              กลับ
            </button>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

SettingBenefitModal.propTypes = {};

export default connect(null, null)(SettingBenefitModal);
