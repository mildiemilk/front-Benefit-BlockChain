import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Icon, Modal } from 'semantic-ui-react';
import styled from 'styled-components';
import MenuPlan from './MenuPlan/menu-plan';
import FormSubmitPlan from './FormSubmitPlan/form-submit-plan';
import AllPlan from './all-plan';
import NavInsure from '../NavInsure';
import { getAllPlan, copyPlan, deletePlan } from '../../api/set-plan';

const ModalContents = styled(Modal.Content)`
&&&{
  max-width: 550px;
  margin: 0 auto;
  padding-left: 4%;
}
`;

const Modals = styled(Modal)`
&&&{
  background: transparent !important;
  margin-top: -120px;
  box-shadow: none;
}
`;

class SubmitPlan extends Component {
  static propTypes = {
    planList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    getAllPlan: PropTypes.func.isRequired,
    // copyPlan: PropTypes.func.isRequired,
    // deletePlan: PropTypes.func.isRequired,
    havePlan: PropTypes.bool.isRequired,
    match: PropTypes.shape({ params: PropTypes.index }),
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      activePlan: -1,
      nextPage: false,
      canGoToNextPage: true,
      warningModal: false,
      openModalForm: false,
      newPlan: false,
      canBuildNewPlan: true,
      planName: '',
      employeeOfPlan: 0,
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
      val: props.match.params.index,
      checkUpdate: false,
      newActivePlan: -1,
      showModalConfirm: false,
    };
    props.getAllPlan();
  }

  componentWillReceiveProps(newProps) {
    if (this.state.newActivePlan !== -1) {
      const val = this.state.newActivePlan;
      const { planList } = newProps;
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
        newActivePlan: -1,
      });
    } else if (newProps.planList.length === 0) {
      this.setState({
        step: 1,
        activePlan: -1,
        nextPage: false,
        canGoToNextPage: true,
        warningModal: false,
        openModalForm: false,
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
        val: this.props.match.params.index,
        checkUpdate: false,
        newActivePlan: -1,
        showModalConfirm: false,
      });
    } else {
      const val = this.props.match.params.index;
      const { planList } = newProps;
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

  componentWillUpdate(nextProps, nextState) {
    if (nextState.checkUpdate) {
      this.setState({
        checkUpdate: false,
      });
      this.props.getAllPlan();
    }
  }

  onClickhandler = () => {
    this.setState({ nextPage: true });
    if (this.state.canGoToNextPage) {
      window.location.href = '/chooseinsurer';
    }
    return '';
  }

  handleOpenModalConfirm = () => this.setState({ showModalConfirm: true });

  handleCloseModalConfirm = () => this.setState({ showModalConfirm: false });

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  // handleChangeTarget = (e, { name, value }) => this.setState({ [name]: value });

  handleChangeToNull = name => this.setState({ [name]: null });

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

  handleNewPlan = () => {
    this.setState({
      activePlan: -1,
      newPlan: true,
      planName: '',
      employeeOfPlan: '',
    });
    if (this.state.canGoToNextPage) this.setState({ openModalForm: true });
  }

  handleEdit = e => {
    this.handlePlan(e.target.id);
  }

  handleUpdateEditData = newActivePlan =>
    this.setState({
      checkUpdate: true,
      newActivePlan,
    });

  handleUpdateData = () => this.setState({ checkUpdate: true });

  handleCopy = e => {
    const { planList } = this.props;
    this.handlePlan(e.target.id);
    copyPlan([this.props.planList[e.target.id].planId])
    .then(() => {
      // this.handleUpdateData();
      this.setState({ checkUpdate: true, newActivePlan: planList.length });
    });
  }

  handleDelete = e => {
    deletePlan([this.props.planList[e.target.id].planId])
    .then(() => {
      this.setState({ checkUpdate: true, newActivePlan: -1 });
    });
    this.setState({ activePlan: -1 });
  }

  handleResetProfilePlan = () => {
    this.setState({
      planName: '',
      employeeOfPlan: '',
    });
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
    });
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

  handleCloseModal = () => {
    this.setState({ openModalForm: false, warningModal: false });
    if (this.props.havePlan) {
      this.handlePlan(0);
    }
  }

  handleSetGoToNextPage = () => {
    this.setState({ canGoToNextPage: false });
  }

  handleMoveToNextPage = () => {
    if (this.state.warningModal) {
      this.setState({
        canGoToNextPage: true,
        warningModal: false,
      });
      window.location.href = '/chooseinsurer';
    }
    this.setState({ canGoToNextPage: true });
    return '';
  }

  handleWarningModal = () => {
    this.setState({ warningModal: true });
  }

  handleNextPage = () => {
    this.setState({ nextPage: false });
  }

  handleModalFinish = () => {
    const { planList } = this.props;
    this.setState({
      openModalForm: false,
      newPlan: false,
      checkUpdate: true,
      newActivePlan: planList.length,
    });
  }

  handleBuildNewPlan = () => {
    this.setState({ canBuildNewPlan: true });
  }

  handleUnBuildNewPlan = () => {
    this.setState({ canBuildNewPlan: false });
  }

  handleResetPlan = () => {
    this.setState({ newPlan: false });
  }

  render() {
    const activePlan = parseInt(this.state.activePlan, 10);
    return (
      <div className="SubmitPlan">
        <NavInsure step={this.state.step} />
        <div className="big-box">
          <div className="small-10 small-centered columns">
            <div className="row">
              <div className="submit-plan-header-box">
                <p className="menu-header">จัดแผนประกันภัย</p>
                <Link to="/view"><span className="menu-text">ดูแผนทั้งหมด</span></Link>
              </div>
              <div className="large-3 medium-3 small-3 columns submit-plan-delete-padding-left">
                <MenuPlan
                  handleUpdateEditData={this.handleUpdateEditData}
                  activePlan={activePlan}
                  handlePlan={this.handlePlan}
                  handleNewPlan={this.handleNewPlan}
                  openModalForm={this.state.openModalForm}
                  handleCloseModal={this.handleCloseModal}
                  handleModalFinish={this.handleModalFinish}
                  handleResetProfilePlan={this.handleResetProfilePlan}
                  handleEdit={this.handleEdit}
                  handleCopy={this.handleCopy}
                  handleDelete={this.handleDelete}
                  handleChange={this.handleChange}
                  handleUpdateData={this.handleUpdateData}
                  planList={this.props.planList}
                  planName={this.state.planName}
                  employeeOfPlan={this.state.employeeOfPlan}
                />
              </div>
              <div className="large-9 medium-9 small-9 columns">
                {this.props.havePlan
                  ? <div>
                    <FormSubmitPlan
                      handleUpdateEditData={this.handleUpdateEditData}
                      activePlan={activePlan}
                      handlePlan={this.handlePlan}
                      handleChange={this.handleChange}
                      planName={this.state.planName}
                      employeeOfPlan={this.state.employeeOfPlan}
                      handleResetProfilePlan={this.handleResetProfilePlan}
                      handleUpdateData={this.handleUpdateData}
                      planList={this.props.planList}
                    />
                    <div className="fillBox">
                      <AllPlan
                        handleUpdateEditData={this.handleUpdateEditData}
                        planList={this.props.planList}
                        activePlan={activePlan}
                        handlePlan={this.handlePlan}
                        nextPage={this.state.nextPage}
                        handleNextPage={this.handleNextPage}
                        handleSetGoToNextPage={this.handleSetGoToNextPage}
                        handleWarningModal={this.handleWarningModal}
                        handleMoveToNextPage={this.handleMoveToNextPage}
                        newPlan={this.state.newPlan}
                        handleBuildNewPlan={this.handleBuildNewPlan}
                        handleUnBuildNewPlan={this.handleUnBuildNewPlan}
                        handleChange={this.handleChange}
                        handleChangeToNull={this.handleChangeToNull}
                        handleToggleIpdCoPay={this.handleToggleIpdCoPay}
                        handleToggleOpdCoPay={this.handleToggleOpdCoPay}
                        handleResetPlan={this.handleResetPlan}
                        handleResetDental={this.handleResetDental}
                        handleResetLife={this.handleResetLife}
                        handleResetOPD={this.handleResetOPD}
                        handleResetIPD={this.handleResetIPD}
                        opdCoPay={this.state.opdCoPay}
                        opdPerYear={this.state.opdPerYear}
                        opdPerTime={this.state.opdPerTime}
                        opdTimeNotExceedPerYear={
                          this.state.opdTimeNotExceedPerYear
                        }
                        opdCoPayQuota={this.state.opdCoPayQuota}
                        opdCoPayDeductable={this.state.opdCoPayDeductable}
                        opdCoPayMixPercentage={
                          this.state.opdCoPayMixPercentage
                        }
                        opdCoPayMixNotExceed={this.state.opdCoPayMixNotExceed}
                        opdCoPayMixYear={this.state.opdCoPayMixYear}
                        dentalPerYear={this.state.dentalPerYear}
                        lifePerYear={this.state.lifePerYear}
                        lifeTimeOfSalary={this.state.lifeTimeOfSalary}
                        lifeNotExceed={this.state.lifeNotExceed}
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
                        rbLumsumPayNotExceedPerYear={
                          this.state.rbLumsumPayNotExceedPerYear
                        }
                        rbSchedulePatient={this.state.rbSchedulePatient}
                        rbScheduleIntensiveCarePatient={
                          this.state.rbScheduleIntensiveCarePatient
                        }
                        rbScheduleDoctor={this.state.rbScheduleDoctor}
                        rbScheduleSurgerySchedule={
                          this.state.rbScheduleSurgerySchedule
                        }
                        rbScheduleSurgeryNonSchedule={
                          this.state.rbScheduleSurgeryNonSchedule
                        }
                        rbScheduleService={this.state.rbScheduleService}
                        rbScheduleSmallSurgery={
                          this.state.rbScheduleSmallSurgery
                        }
                        rbScheduleAdviser={this.state.rbScheduleAdviser}
                        rbScheduleAmbulance={this.state.rbScheduleAmbulance}
                        rbScheduleAccident={this.state.rbScheduleAccident}
                        rbScheduleTreatment={this.state.rbScheduleTreatment}
                        rbScheduleTransplant={this.state.rbScheduleTransplant}
                        ipdCoPay={this.state.ipdCoPay}
                        ipdCoPayQuota={this.state.ipdCoPayQuota}
                        ipdCoPayDeductable={this.state.ipdCoPayDeductable}
                        ipdCoPayMixPercentage={
                          this.state.ipdCoPayMixPercentage
                        }
                        ipdCoPayMixNotExceed={this.state.ipdCoPayMixNotExceed}
                        ipdCoPayMixYear={this.state.ipdCoPayMixYear}
                      />
                    </div>
                    <div className="submit-plan-next-step-btn">
                      <div className="row">
                        <Button
                          className="submit-plan-btn-form-submit-plan btn-red"
                          onClick={this.handleOpenModalConfirm}
                        >
                          ขั้นตอนถัดไป
                        </Button>
                      </div>
                    </div>
                  </div>
                  : <div
                    style={{ cursor: 'pointer' }}
                    className="start-box"
                    role="button"
                    aria-hidden
                    onClick={this.handleNewPlan}
                  >
                    <div className="box-in-start-box">
                      <Icon
                        name="calendar plus"
                        size="huge"
                      />
                      <p className="submit-plan-text-new-plan">สร้างแผนใหม่</p>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
        <Modals
          trigger={<div />}
          open={this.state.showModalConfirm}
          onClose={this.handleCloseModalConfirm}
        >
          <ModalContents>
            <Modal.Header>
              <p style={{ textAlign: 'center' }}>
                คุณจัดแผนประกันเสร็จแล้วและต้องการเลือกบริษัทประกันใช่หรือไม่ ?
              </p>
            </Modal.Header>
            <Modal.Content className="submit-plan-btn-box-modal">
              <Button
                className="submit-plan-btn-form-submit-plan btn-red"
                onClick={this.handleCloseModalConfirm}
              >
                ยกเลิก
              </Button>
              <Button
                className="submit-plan-btn-form-submit-plan btn-blue"
                onClick={this.onClickhandler}
                type="submit"
              >
                ยืนยัน
              </Button>
            </Modal.Content>
          </ModalContents>
        </Modals>
      </div>
    );
  }
}

SubmitPlan.propTypes = {};

const mapDispatchToProps = dispatch => ({
  getAllPlan: () => dispatch(getAllPlan()),
});

const mapStateToProps = state => ({
  planList: state.plan.planList,
  havePlan: state.plan.planList.length !== 0,
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPlan);
