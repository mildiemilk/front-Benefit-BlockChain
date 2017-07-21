import React, { Component } from 'react'
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
  Input,
  Icon,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'react-sc'
import { connect } from 'react-redux'
import FormSubmitPlan from '../../SubmitPlan/FormSubmitPlan/form-submit-plan'
import AllPlan from '../../SubmitPlan/all-plan'

const ModalContents = styled(Modal.Content)`
  &&&{
    width: 800px;
    position: relative;
    margin: 0 auto;
    padding-left: 6.4%;
    padding-right: 4%;
  }
`
const ModalHeaders = styled(Modal.Header)`
  &&&{
    width: 800px;
    position: relative;
    margin: 0 auto;
    padding-left: 4%;
    padding-right: 4%;
  }
`

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    margin-top: -120px;
    z-index: 2;
    box-shadow: none;
  }
`

const Inputs = styled(Input)`
  &&&{
    font-family: Kanit;
  }
`
class PlanBoxModal extends Component {
  constructor(props) {
    super(props)
    const { planList, activePlan } = this.props
    this.state = {
      closeOnEscape: false,
      closeOnRootNodeClick: true,
      activePlan: activePlan,
      nextPage: false,
      canGoToNextPage: true,
      warningModal: false,
      newPlan: false,
      canBuildNewPlan: true,
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
      rbScheduleSurgerySchedule: planList[activePlan].rbScheduleSurgerySchedule,
      rbScheduleSurgeryNonSchedule: planList[activePlan]
        .rbScheduleSurgeryNonSchedule,
      rbScheduleService: planList[activePlan].rbScheduleService,
      rbScheduleSmallSurgery: planList[activePlan].rbScheduleSmallSurgery,
      rbScheduleAdviser: planList[activePlan].rbScheduleAdviser,
      rbScheduleAmbulance: planList[activePlan].rbScheduleAmbulance,
      rbScheduleAccident: planList[activePlan].rbScheduleAmbulance,
      rbScheduleTreatment: planList[activePlan].rbScheduleTreatment,
      rbScheduleTransplant: planList[activePlan].rbScheduleTransplant,
      ipdCoPlay: planList[activePlan].ipdCoPlay,
      ipdCoPlayQuota: planList[activePlan].ipdCoPlayQuota,
      ipdCoPlayDeductable: planList[activePlan].ipdCoPlayDeductable,
      ipdCoPlayMixPercentage: planList[activePlan].ipdCoPlayMixPercentage,
      ipdCoPlayMixNotExceed: planList[activePlan].ipdCoPlayMixNotExceed,
      ipdCoPlayMixYear: planList[activePlan].ipdCoPlayMixYear,
      opdPerYear: planList[activePlan].opdPerYear,
      opdPerTime: planList[activePlan].opdPerTime,
      opdTimeNotExceedPerYear: planList[activePlan].opdTimeNotExceedPerYear,
      opdCoPlay: planList[activePlan].opdCoPlay,
      opdCoPlayQuota: planList[activePlan].opdCoPlayQuota,
      opdCoPlayDeductable: planList[activePlan].opdCoPlayDeductable,
      opdCoPlayMixPercentage: planList[activePlan].opdCoPlayMixPercentage,
      opdCoPlayMixNotExceed: planList[activePlan].opdCoPlayMixNotExceed,
      opdCoPlayMixYear: planList[activePlan].opdCoPlayMixYear,
      dentalPerYear: planList[activePlan].dentalPerYear,
      lifePerYear: planList[activePlan].lifePerYear,
      lifeTimeOfSalary: planList[activePlan].lifeTimeOfSalary,
      lifeNotExceed: planList[activePlan].lifeNotExceed,
    }
  }

  handleClose = e => {
    this.props.handleCloseModal()
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleChangeToNull = name => this.setState({ [name]: null })

  handleResetProfilePlan = () => {
    this.setState({ planName: '' })
    this.setState({ employeeOfPlan: '' })
  }

  handleResetDental = () => {
    this.setState({ dentalPerYear: null })
  }

  handleResetLife = () => {
    this.setState({
      lifePerYear: null,
      lifeTimeOfSalary: null,
      lifeNotExceed: null,
    })
  }

  handleResetOPD = () => {
    this.setState({
      opdPerYear: null,
      opdPerTime: null,
      opdTimeNotExceedPerYear: null,
      opdCoPlayQuota: null,
      opdCoPlayDeductable: null,
      opdCoPlayMixPercentage: null,
      opdCoPlayMixNotExceed: null,
      opdCoPlayMixYear: null,
    })
  }

  handleResetIPD = () => {
    this.setState({
      ipdType: '',
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
      ipdCoPlay: false,
      ipdCoPlayQuota: null,
      ipdCoPlayDeductable: null,
      ipdCoPlayMixPercentage: null,
      ipdCoPlayMixNotExceed: null,
      ipdCoPlayMixYear: null,
      opdPerYear: null,
      opdPerTime: null,
      opdTimeNotExceedPerYear: null,
      opdCoPlay: false,
      opdCoPlayQuota: null,
      opdCoPlayDeductable: null,
      opdCoPlayMixPercentage: null,
      opdCoPlayMixNotExceed: null,
      opdCoPlayMixYear: null,
      dentalPerYear: null,
      lifePerYear: null,
      lifeTimeOfSalary: null,
      lifeNotExceed: null,
    })
  }

  handleToggleIpdCoPlay = () => {
    if (this.state.ipdCoPlay)
      this.setState({
        ipdCoPlay: !this.state.ipdCoPlay,
        ipdCoPlayQuota: null,
        ipdCoPlayDeductable: null,
        ipdCoPlayMixPercentage: null,
        ipdCoPlayMixNotExceed: null,
        ipdCoPlayMixYear: null,
      })
    else this.setState({ ipdCoPlay: !this.state.ipdCoPlay })
  }

  handleToggleOpdCoPlay = () => {
    if (this.state.opdCoPlay)
      this.setState({
        opdCoPlay: !this.state.opdCoPlay,
        opdCoPlayQuota: null,
        opdCoPlayDeductable: null,
        opdCoPlayMixPercentage: null,
        opdCoPlayMixNotExceed: null,
        opdCoPlayMixYear: null,
      })
    else this.setState({ opdCoPlay: !this.state.opdCoPlay })
  }

  handleSetGoToNextPage = () => {
    this.setState({ canGoToNextPage: false })
  }

  handleMoveToNextPage = () => {
    if (this.state.warningModal) {
      this.setState({ canGoToNextPage: true })
      this.setState({ warningModal: false })
    } else {
      this.setState({ canGoToNextPage: true })
    }
  }

  handleWarningModal = () => {
    this.setState({ warningModal: true })
  }

  handleNextPage = () => {
    this.setState({ nextPage: false })
  }

  handleBuildNewPlan = () => {
    this.setState({ canBuildNewPlan: true })
  }

  handleUnBuildNewPlan = () => {
    this.setState({ canBuildNewPlan: false })
  }

  componentDidUpdate() {
    const { planList, activePlan } = this.props
    if (this.state.activePlan !== activePlan) {
      this.setState({
        activePlan: activePlan,
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
        ipdCoPlay: planList[activePlan].ipdCoPlay,
        ipdCoPlayQuota: planList[activePlan].ipdCoPlayQuota,
        ipdCoPlayDeductable: planList[activePlan].ipdCoPlayDeductable,
        ipdCoPlayMixPercentage: planList[activePlan].ipdCoPlayMixPercentage,
        ipdCoPlayMixNotExceed: planList[activePlan].ipdCoPlayMixNotExceed,
        ipdCoPlayMixYear: planList[activePlan].ipdCoPlayMixYear,
        opdPerYear: planList[activePlan].opdPerYear,
        opdPerTime: planList[activePlan].opdPerTime,
        opdTimeNotExceedPerYear: planList[activePlan].opdTimeNotExceedPerYear,
        opdCoPlay: planList[activePlan].opdCoPlay,
        opdCoPlayQuota: planList[activePlan].opdCoPlayQuota,
        opdCoPlayDeductable: planList[activePlan].opdCoPlayDeductable,
        opdCoPlayMixPercentage: planList[activePlan].opdCoPlayMixPercentage,
        opdCoPlayMixNotExceed: planList[activePlan].opdCoPlayMixNotExceed,
        opdCoPlayMixYear: planList[activePlan].opdCoPlayMixYear,
        dentalPerYear: planList[activePlan].dentalPerYear,
        lifePerYear: planList[activePlan].lifePerYear,
        lifeTimeOfSalary: planList[activePlan].lifeTimeOfSalary,
        lifeNotExceed: planList[activePlan].lifeNotExceed,
      })
    }
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
          <p style={{ textAlign: 'center' }}>ดูแพลน</p>
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
        <ModalContents>
          <AllPlan
            activePlan={this.state.activePlan}
            nextPage={this.state.nextPage}
            handleNextPage={this.handleNextPage}
            handleSetGoToNextPage={this.handleSetGoToNextPage}
            handleWarningModal={this.handleWarningModal}
            handleMoveToNextPage={this.handleMoveToNextPage}
            handleBuildNewPlan={this.handleBuildNewPlan}
            handleUnBuildNewPlan={this.handleUnBuildNewPlan}
            handleToggleIpdCoPlay={this.handleToggleIpdCoPlay}
            handleToggleOpdCoPlay={this.handleToggleOpdCoPlay}
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
            ipdCoPlay={this.state.ipdCoPlay}
            ipdCoPlayQuota={this.state.ipdCoPlayQuota}
            ipdCoPlayDeductable={this.state.ipdCoPlayDeductable}
            ipdCoPlayMixPercentage={this.state.ipdCoPlayMixPercentage}
            ipdCoPlayMixNotExceed={this.state.ipdCoPlayMixNotExceed}
            ipdCoPlayMixYear={this.state.ipdCoPlayMixYear}
            opdCoPlay={this.state.opdCoPlay}
            opdPerYear={this.state.opdPerYear}
            opdPerTime={this.state.opdPerTime}
            opdTimeNotExceedPerYear={this.state.opdTimeNotExceedPerYear}
            opdCoPlayQuota={this.state.opdCoPlayQuota}
            opdCoPlayDeductable={this.state.opdCoPlayDeductable}
            opdCoPlayMixPercentage={this.state.opdCoPlayMixPercentage}
            opdCoPlayMixNotExceed={this.state.opdCoPlayMixNotExceed}
            opdCoPlayMixYear={this.state.opdCoPlayMixYear}
            dentalPerYear={this.state.dentalPerYear}
            lifePerYear={this.state.lifePerYear}
            lifeTimeOfSalary={this.state.lifeTimeOfSalary}
            lifeNotExceed={this.state.lifeNotExceed}
          />
        </ModalContents>
      </Modals>
    )
  }
}

PlanBoxModal.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(PlanBoxModal)
