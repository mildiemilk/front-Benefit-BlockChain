import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FormSubmitPlan from '../../SubmitPlan/FormSubmitPlan/form-submit-plan';
import AllPlan from '../../SubmitPlan/all-plan';

const ModalContents = styled(Modal.Content)`
  &&&{
    width: 800px;
    position: relative;
    margin: 0 auto;
    padding: 0px 40px 0px 40px;
    text-align: initial;
  }
`;
const ModalContentsWithBottom = ModalContents.extend`
  padding-bottom: 21px !important;
`
const ModalHeaders = styled(Modal.Header)`
  &&&{
    width: 800px;
    position: relative;
    margin: 0 auto;
    border: none;
    padding-left: 4%;
    padding-right: 4%;
  }
`;

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    margin-top: -120px;
    z-index: 2;
    box-shadow: none;
    padding: 0px;
    height: auto;
    position: absolute;
  }
`;
const CustomHead = styled.div`
  text-align: center;
  font-family: kanit;
`
class PlanBoxModal extends Component {
  static propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor() {
    super();
    this.state = {
      closeOnEscape: false,
      closeOnRootNodeClick: true,
      activePlan: -1,
      nextPage: false,
      canGoToNextPage: true,
      warningModal: false,
      newPlan: false,
      canBuildNewPlan: true,
      planName: '',
      employeeOfPlan: '',
      ipdType: null,
      ipdLumsumPerYear: null,
      ipdLumsumPerTime: null,
      ipdLumsumTimeNotExceedPerYear: null,
      rbLumsumRoomPerNight: null,
      rbLumsumNigthNotExceedPerYear: null,
      rbLumsumPayNotExceedPerNight: null,
      rbLumsumPayNotExceedPerYear: null,
      rbSchedulePatient: null,
      rbScheduleIntensiveCarePatient: null,
      rbScheduleDoctor: null,
      rbScheduleSurgerySchedule: null,
      rbScheduleSurgeryNonSchedule: null,
      rbScheduleService: null,
      rbScheduleSmallSurgery: null,
      rbScheduleAdviser: null,
      rbScheduleAmbulance: null,
      rbScheduleAccident: null,
      rbScheduleTreatment: null,
      rbScheduleTransplant: null,
      ipdCoPay: false,
      ipdCoPayQuota: null,
      ipdCoPayDeductable: null,
      ipdCoPayMixPercentage: null,
      ipdCoPayMixNotExceed: null,
      ipdCoPayMixYear: null,
      opdPerYear: null,
      opdPerTime: null,
      opdTimeNotExceedPerYear: null,
      opdCoPay: false,
      opdCoPayQuota: null,
      opdCoPayDeductable: null,
      opdCoPayMixPercentage: null,
      opdCoPayMixNotExceed: null,
      opdCoPayMixYear: null,
      dentalPerYear: null,
      lifePerYear: null,
      lifeTimeOfSalary: null,
      lifeNotExceed: null,
    };
  }

  componentWillReceiveProps(newProps) {
    const { planList, activePlan } = newProps;
    if (newProps.modalOpen !== this.props.modalOpen) {
      this.handleUpdate(planList, activePlan);
    }
  }

  handlePlan = val => {
    if (val !== -1) {
      const { planList } = this.props;
      this.setState({
        activePlan: val,
        planName: planList[val].planName,
        employeeOfPlan: planList[val].employeeOfPlan,
        dentalPerYear: planList[val].dentalPerYear,
        lifePerYear: planList[val].lifePerYear,
        lifeTimeOfSalary: planList[val].lifeTimeOfSalary,
        lifeNotExceed: planList[val].lifeNotExceed,
        opdCoPay: planList[val].opdCoPay,
        opdPerYear: planList[val].opdPerYear,
        opdPerTime: planList[val].opdPerTime,
        opdTimeNotExceedPerYear: planList[val]
          .opdTimeNotExceedPerYear,
        opdCoPayQuota: planList[val].opdCoPayQuota,
        opdCoPayDeductable: planList[val].opdCoPayDeductable,
        opdCoPayMixPercentage: planList[val].opdCoPayMixPercentage,
        opdCoPayMixNotExceed: planList[val].opdCoPayMixNotExceed,
        opdCoPayMixYear: planList[val].opdCoPayMixYear,
        ipdType: planList[val].ipdType,
        ipdLumsumPerYear: planList[val].ipdLumsumPerYear,
        ipdLumsumPerTime: planList[val].ipdLumsumPerTime,
        ipdLumsumTimeNotExceedPerYear: planList[val]
          .ipdLumsumTimeNotExceedPerYear,
        rbLumsumRoomPerNight: planList[val].rbLumsumRoomPerNight,
        rbLumsumNigthNotExceedPerYear: planList[val]
          .rbLumsumNigthNotExceedPerYear,
        rbLumsumPayNotExceedPerNight: planList[val]
          .rbLumsumPayNotExceedPerNight,
        rbLumsumPayNotExceedPerYear: planList[val]
          .rbLumsumPayNotExceedPerYear,
        rbSchedulePatient: planList[val].rbSchedulePatient,
        rbScheduleIntensiveCarePatient: planList[val]
          .rbScheduleIntensiveCarePatient,
        rbScheduleDoctor: planList[val].rbScheduleDoctor,
        rbScheduleSurgerySchedule: planList[val]
          .rbScheduleSurgerySchedule,
        rbScheduleSurgeryNonSchedule: planList[val]
          .rbScheduleSurgeryNonSchedule,
        rbScheduleService: planList[val].rbScheduleService,
        rbScheduleSmallSurgery: planList[val].rbScheduleSmallSurgery,
        rbScheduleAdviser: planList[val].rbScheduleAdviser,
        rbScheduleAmbulance: planList[val].rbScheduleAmbulance,
        rbScheduleAccident: planList[val].rbScheduleAccident,
        rbScheduleTreatment: planList[val].rbScheduleTreatment,
        rbScheduleTransplant: planList[val].rbScheduleTransplant,
        ipdCoPay: planList[val].ipdCoPay,
        ipdCoPayQuota: planList[val].ipdCoPayQuota,
        ipdCoPayDeductable: planList[val].ipdCoPayDeductable,
        ipdCoPayMixPercentage: planList[val].ipdCoPayMixPercentage,
        ipdCoPayMixNotExceed: planList[val].ipdCoPayMixNotExceed,
        ipdCoPayMixYear: planList[val].ipdCoPayMixYear,
      });
    }
  }

  handleUpdate = (planList, activePlan) => {
    this.setState({
      activePlan,
      planName: planList[activePlan].planName,
      employeeOfPlan: planList[activePlan].employeeOfPlan,
      ipdType: planList[activePlan].ipdType,
      ipdLumsumPerYear: planList[activePlan].ipdLumsumPerYear,
      ipdLumsumPerTime: planList[activePlan].ipdLumsumPerTime,
      ipdLumsumTimeNotExceedPerYear: planList[activePlan]
        .ipdLumsumTimeNotExceedPerYear,
      rbLumsumRoomPerNight: planList[activePlan].rbLumsumRoomPerNight,
      rbLumsumNigthNotExceedPerYear: planList[activePlan]
        .rbLumsumNigthNotExceedPerYear,
      rbLumsumPayNotExceedPerNight: planList[activePlan]
        .rbLumsumPayNotExceedPerNight,
      rbLumsumPayNotExceedPerYear: planList[activePlan]
        .rbLumsumPayNotExceedPerYear,
      rbSchedulePatient: planList[activePlan].rbSchedulePatient,
      rbScheduleIntensiveCarePatient: planList[activePlan]
        .rbScheduleIntensiveCarePatient,
      rbScheduleDoctor: planList[activePlan].rbScheduleDoctor,
      rbScheduleSurgerySchedule: planList[activePlan]
        .rbScheduleSurgerySchedule,
      rbScheduleSurgeryNonSchedule: planList[activePlan]
        .rbScheduleSurgeryNonSchedule,
      rbScheduleService: planList[activePlan].rbScheduleService,
      rbScheduleSmallSurgery: planList[activePlan].rbScheduleSmallSurgery,
      rbScheduleAdviser: planList[activePlan].rbScheduleAdviser,
      rbScheduleAmbulance: planList[activePlan].rbScheduleAmbulance,
      rbScheduleAccident: planList[activePlan].rbScheduleAmbulance,
      rbScheduleTreatment: planList[activePlan].rbScheduleTreatment,
      rbScheduleTransplant: planList[activePlan].rbScheduleTransplant,
      ipdCoPay: planList[activePlan].ipdCoPay,
      ipdCoPayQuota: planList[activePlan].ipdCoPayQuota,
      ipdCoPayDeductable: planList[activePlan].ipdCoPayDeductable,
      ipdCoPayMixPercentage: planList[activePlan].ipdCoPayMixPercentage,
      ipdCoPayMixNotExceed: planList[activePlan].ipdCoPayMixNotExceed,
      ipdCoPayMixYear: planList[activePlan].ipdCoPayMixYear,
      opdPerYear: planList[activePlan].opdPerYear,
      opdPerTime: planList[activePlan].opdPerTime,
      opdTimeNotExceedPerYear: planList[activePlan].opdTimeNotExceedPerYear,
      opdCoPay: planList[activePlan].opdCoPay,
      opdCoPayQuota: planList[activePlan].opdCoPayQuota,
      opdCoPayDeductable: planList[activePlan].opdCoPayDeductable,
      opdCoPayMixPercentage: planList[activePlan].opdCoPayMixPercentage,
      opdCoPayMixNotExceed: planList[activePlan].opdCoPayMixNotExceed,
      opdCoPayMixYear: planList[activePlan].opdCoPayMixYear,
      dentalPerYear: planList[activePlan].dentalPerYear,
      lifePerYear: planList[activePlan].lifePerYear,
      lifeTimeOfSalary: planList[activePlan].lifeTimeOfSalary,
      lifeNotExceed: planList[activePlan].lifeNotExceed,
    });
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleChangeToNull = name => this.setState({ [name]: null })

  handleResetProfilePlan = () => {
    this.setState({ planName: '' });
    this.setState({ employeeOfPlan: '' });
  }

  handleResetDental = () => {
    this.setState({ dentalPerYear: null });
  }

  handleResetLife = () => {
    this.setState({
      lifePerYear: null,
      lifeTimeOfSalary: null,
      lifeNotExceed: null,
    });
  }

  handleResetOPD = () => {
    this.setState({
      opdPerYear: null,
      opdPerTime: null,
      opdTimeNotExceedPerYear: null,
      opdCoPayQuota: null,
      opdCoPayDeductable: null,
      opdCoPayMixPercentage: null,
      opdCoPayMixNotExceed: null,
      opdCoPayMixYear: null,
    });
  }

  handleResetIPD = () => {
    this.setState({
      ipdType: null,
      ipdLumsumPerYear: null,
      ipdLumsumPerTime: null,
      ipdLumsumTimeNotExceedPerYear: null,
      rbLumsumRoomPerNight: null,
      rbLumsumNigthNotExceedPerYear: null,
      rbLumsumPayNotExceedPerNight: null,
      rbLumsumPayNotExceedPerYear: null,
      rbSchedulePatient: null,
      rbScheduleIntensiveCarePatient: null,
      rbScheduleDoctor: null,
      rbScheduleSurgerySchedule: null,
      rbScheduleSurgeryNonSchedule: null,
      rbScheduleService: null,
      rbScheduleSmallSurgery: null,
      rbScheduleAdviser: null,
      rbScheduleAmbulance: null,
      rbScheduleAccident: null,
      rbScheduleTreatment: null,
      rbScheduleTransplant: null,
      ipdCoPay: false,
      ipdCoPayQuota: null,
      ipdCoPayDeductable: null,
      ipdCoPayMixPercentage: null,
      ipdCoPayMixNotExceed: null,
      ipdCoPayMixYear: null,
      opdPerYear: null,
      opdPerTime: null,
      opdTimeNotExceedPerYear: null,
      opdCoPay: false,
      opdCoPayQuota: null,
      opdCoPayDeductable: null,
      opdCoPayMixPercentage: null,
      opdCoPayMixNotExceed: null,
      opdCoPayMixYear: null,
      dentalPerYear: null,
      lifePerYear: null,
      lifeTimeOfSalary: null,
      lifeNotExceed: null,
    });
  }

  handleToggleIpdCoPay = () => {
    if (this.state.ipdCoPay) {
      this.setState({
        ipdCoPay: !this.state.ipdCoPay,
        ipdCoPayQuota: null,
        ipdCoPayDeductable: null,
        ipdCoPayMixPercentage: null,
        ipdCoPayMixNotExceed: null,
        ipdCoPayMixYear: null,
      });
    } else {
      this.setState({ ipdCoPay: !this.state.ipdCoPay });
    }
  }

  handleToggleOpdCoPay = () => {
    if (this.state.opdCoPay) {
      this.setState({
        opdCoPay: !this.state.opdCoPay,
        opdCoPayQuota: null,
        opdCoPayDeductable: null,
        opdCoPayMixPercentage: null,
        opdCoPayMixNotExceed: null,
        opdCoPayMixYear: null,
      });
    } else {
      this.setState({ opdCoPay: !this.state.opdCoPay });
    }
  }

  handleSetGoToNextPage = () => {
    this.setState({ canGoToNextPage: false });
  }

  handleMoveToNextPage = () => {
    if (this.state.warningModal) {
      this.setState({ canGoToNextPage: true });
      this.setState({ warningModal: false });
    } else {
      this.setState({ canGoToNextPage: true });
    }
  }

  handleWarningModal = () => {
    this.setState({ warningModal: true });
  }

  handleNextPage = () => {
    this.setState({ nextPage: false });
  }

  handleBuildNewPlan = () => {
    this.setState({ canBuildNewPlan: true });
  }

  handleUnBuildNewPlan = () => {
    this.setState({ canBuildNewPlan: false });
  }

  handleClose = () => {
    this.props.handleCloseModal();
  }

  render() {
    return (
      <Modals
        trigger={<div />}
        open={this.props.modalOpen}
        onClose={this.handleClose}
        closeOnEscape={this.state.closeOnEscape}
        closeOnRootNodeClick={this.state.closeOnRootNodeClick}
        className="SubmitPlan"
      >
        <ModalHeaders>
          <CustomHead>ดูแพลน</CustomHead>
        </ModalHeaders>
        <ModalContents>
          <FormSubmitPlan
            activePlan={this.state.activePlan}
            handleChange={this.handleChange}
            planName={this.state.planName}
            employeeOfPlan={this.state.employeeOfPlan}
            handleResetProfilePlan={this.handleResetProfilePlan}
          />
        </ModalContents>
        <ModalContentsWithBottom>
          <AllPlan
            activePlan={this.state.activePlan}
            handlePlan={this.handlePlan}
            nextPage={this.state.nextPage}
            handleNextPage={this.handleNextPage}
            handleSetGoToNextPage={this.handleSetGoToNextPage}
            handleWarningModal={this.handleWarningModal}
            handleMoveToNextPage={this.handleMoveToNextPage}
            handleBuildNewPlan={this.handleBuildNewPlan}
            handleUnBuildNewPlan={this.handleUnBuildNewPlan}
            handleToggleIpdCoPay={this.handleToggleIpdCoPay}
            handleToggleOpdCoPay={this.handleToggleOpdCoPay}
            handleChangeToNull={this.handleChangeToNull}
            handleChange={this.handleChange}
            handleResetDental={this.handleResetDental}
            handleResetLife={this.handleResetLife}
            handleResetOPD={this.handleResetOPD}
            handleResetIPD={this.handleResetIPD}
            ipdType={this.state.ipdType}
            ipdLumsumPerYear={this.state.ipdLumsumPerYear}
            ipdLumsumPerTime={this.state.ipdLumsumPerTime}
            ipdLumsumTimeNotExceedPerYear={
              this.state.ipdLumsumTimeNotExceedPerYear
            }
            rbLumsumRoomPerNight={this.state.rbLumsumRoomPerNight}
            rbLumsumNigthNotExceedPerYear={
              this.state.rbLumsumNigthNotExceedPerYear
            }
            rbLumsumPayNotExceedPerNight={
              this.state.rbLumsumPayNotExceedPerNight
            }
            rbLumsumPayNotExceedPerYear={this.state.rbLumsumPayNotExceedPerYear}
            rbSchedulePatient={this.state.rbSchedulePatient}
            rbScheduleIntensiveCarePatient={
              this.state.rbScheduleIntensiveCarePatient
            }
            rbScheduleDoctor={this.state.rbScheduleDoctor}
            rbScheduleSurgerySchedule={this.state.rbScheduleSurgerySchedule}
            rbScheduleSurgeryNonSchedule={
              this.state.rbScheduleSurgeryNonSchedule
            }
            rbScheduleService={this.state.rbScheduleService}
            rbScheduleSmallSurgery={this.state.rbScheduleSmallSurgery}
            rbScheduleAdviser={this.state.rbScheduleAdviser}
            rbScheduleAmbulance={this.state.rbScheduleAmbulance}
            rbScheduleAccident={this.state.rbScheduleAccident}
            rbScheduleTreatment={this.state.rbScheduleTreatment}
            rbScheduleTransplant={this.state.rbScheduleTransplant}
            ipdCoPay={this.state.ipdCoPay}
            ipdCoPayQuota={this.state.ipdCoPayQuota}
            ipdCoPayDeductable={this.state.ipdCoPayDeductable}
            ipdCoPayMixPercentage={this.state.ipdCoPayMixPercentage}
            ipdCoPayMixNotExceed={this.state.ipdCoPayMixNotExceed}
            ipdCoPayMixYear={this.state.ipdCoPayMixYear}
            opdCoPay={this.state.opdCoPay}
            opdPerYear={this.state.opdPerYear}
            opdPerTime={this.state.opdPerTime}
            opdTimeNotExceedPerYear={this.state.opdTimeNotExceedPerYear}
            opdCoPayQuota={this.state.opdCoPayQuota}
            opdCoPayDeductable={this.state.opdCoPayDeductable}
            opdCoPayMixPercentage={this.state.opdCoPayMixPercentage}
            opdCoPayMixNotExceed={this.state.opdCoPayMixNotExceed}
            opdCoPayMixYear={this.state.opdCoPayMixYear}
            dentalPerYear={this.state.dentalPerYear}
            lifePerYear={this.state.lifePerYear}
            lifeTimeOfSalary={this.state.lifeTimeOfSalary}
            lifeNotExceed={this.state.lifeNotExceed}
          />
        </ModalContentsWithBottom>
      </Modals>
    );
  }
}

export default connect(null, null)(PlanBoxModal);
