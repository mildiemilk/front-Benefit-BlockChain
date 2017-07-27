import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Checkbox, Icon } from 'semantic-ui-react'
import MenuPlan from './MenuPlan/menu-plan'
import FormSubmitPlan from './FormSubmitPlan/form-submit-plan'
import AllPlan from './all-plan'
import NavInsure from '../NavInsure'
import { getAllPlan, copyPlan, deletePlan } from '../../api/set-plan'

import '../../styles/submit-plan.scss'

class SubmitPlan extends Component {
  static propTypes = {
    ipdType: PropTypes.string.isRequired,
    ipdLumsumPerYear: PropTypes.string.isRequired,
    ipdLumsumPerTime: PropTypes.string.isRequired,
    ipdLumsumTimeNotExceedPerYear: PropTypes.string.isRequired,
    rbLumsumRoomPerNight: PropTypes.string.isRequired,
    rbLumsumNigthNotExceedPerYear: PropTypes.string.isRequired,
    rbLumsumPayNotExceedPerNight: PropTypes.string.isRequired,
    rbLumsumPayNotExceedPerYear: PropTypes.string.isRequired,
    rbSchedulePatient: PropTypes.string.isRequired,
    rbScheduleIntensiveCarePatient: PropTypes.string.isRequired,
    rbScheduleDoctor: PropTypes.string.isRequired,
    rbScheduleSurgerySchedule: PropTypes.string.isRequired,
    rbScheduleSurgeryNonSchedule: PropTypes.string.isRequired,
    rbScheduleService: PropTypes.string.isRequired,
    rbScheduleSmallSurgery: PropTypes.string.isRequired,
    rbScheduleAdviser: PropTypes.string.isRequired,
    rbScheduleAmbulance: PropTypes.string.isRequired,
    rbScheduleAccident: PropTypes.string.isRequired,
    rbScheduleTreatment: PropTypes.string.isRequired,
    rbScheduleTransplant: PropTypes.string.isRequired,
    ipdCoPlay: PropTypes.string.isRequired,
    ipdCoPlayQuota: PropTypes.string.isRequired,
    ipdCoPlayDeductable: PropTypes.string.isRequired,
    ipdCoPlayMixPercentage: PropTypes.string.isRequired,
    ipdCoPlayMixNotExceed: PropTypes.string.isRequired,
    ipdCoPlayMixYear: PropTypes.string.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    getAllPlan: PropTypes.func.isRequired,
    copyPlan: PropTypes.func.isRequired,
    deletePlan: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      step: 3,
      activePlan: -1,
      nextPage: false,
      canGoToNextPage: true,
      warningModal: false,
      firstTime: this.props.planList.length === 0,
      openModalForm: false,
      newPlan: false,
      canBuildNewPlan: true,
      planName: '',
      employeeOfPlan: '',
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
    }
    setInterval(() => {
      props.getAllPlan()
    }, 2000)
  }

  componentDidMount() {
    if (!this.state.firstTime) this.handlePlan(0)
  }

  onClickhandler = e => {
    this.setState({ nextPage: true })
    if (this.state.canGoToNextPage) {
      e.preventDefault()
      window.location.href = '/chooseinsurer'
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleChangeToNull = name => this.setState({ [name]: null })

  handleToggle = () => {}

  handleToggleOpdCoPlay = () => {
    if (this.state.opdCoPlay) {
      this.setState({
        opdCoPlay: !this.state.opdCoPlay,
        opdCoPlayQuota: null,
        opdCoPlayDeductable: null,
        opdCoPlayMixPercentage: null,
        opdCoPlayMixNotExceed: null,
        opdCoPlayMixYear: null,
      })
    } else {
      this.setState({ opdCoPlay: !this.state.opdCoPlay })
    }
  }

  handleToggleIpdCoPlay = () => {
    if (this.state.ipdCoPlay) {
      this.setState({
        ipdCoPlay: !this.state.ipdCoPlay,
        ipdCoPlayQuota: null,
        ipdCoPlayDeductable: null,
        ipdCoPlayMixPercentage: null,
        ipdCoPlayMixNotExceed: null,
        ipdCoPlayMixYear: null,
      })
    } else {
      this.setState({ ipdCoPlay: !this.state.ipdCoPlay })
    }
  }

  handleNewPlan = () => {
    this.setState({
      activePlan: -1,
      newPlan: true,
      planName: '',
      employeeOfPlan: '',
    })
    if (this.state.canGoToNextPage) this.setState({ openModalForm: true })
  }

  handleEdit = e => {
    this.handlePlan(e.target.id)
  }

  handleCopy = e => {
    this.handlePlan(e.target.id)
    this.props.copyPlan(this.props.planList[e.target.id].planId)
  }

  handleDelete = e => {
    this.props.deletePlan(this.props.planList[e.target.id].planId)
    if (this.props.planList.length === 1) this.setState({ firstTime: true })
  }

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
    })
  }

  handlePlan = val => {
    if (val !== -1) {
      this.setState({
        activePlan: val,
        firstTime: false,
        planName: this.props.planList[val].planName,
        employeeOfPlan: this.props.planList[val].employeeOfPlan,
        dentalPerYear: this.props.planList[val].dentalPerYear,
        lifePerYear: this.props.planList[val].lifePerYear,
        lifeTimeOfSalary: this.props.planList[val].lifeTimeOfSalary,
        lifeNotExceed: this.props.planList[val].lifeNotExceed,
        opdCoPlay: this.props.planList[val].opdCoPlay,
        opdPerYear: this.props.planList[val].opdPerYear,
        opdPerTime: this.props.planList[val].opdPerTime,
        opdTimeNotExceedPerYear: this.props.planList[val]
          .opdTimeNotExceedPerYear,
        opdCoPlayQuota: this.props.planList[val].opdCoPlayQuota,
        opdCoPlayDeductable: this.props.planList[val].opdCoPlayDeductable,
        opdCoPlayMixPercentage: this.props.planList[val].opdCoPlayMixPercentage,
        opdCoPlayMixNotExceed: this.props.planList[val].opdCoPlayMixNotExceed,
        opdCoPlayMixYear: this.props.planList[val].opdCoPlayMixYear,
        ipdType: this.props.planList[val].ipdType,
        ipdLumsumPerYear: this.props.planList[val].ipdLumsumPerYear,
        ipdLumsumPerTime: this.props.planList[val].ipdLumsumPerTime,
        ipdLumsumTimeNotExceedPerYear: this.props.planList[val]
          .ipdLumsumTimeNotExceedPerYear,
        rbLumsumRoomPerNight: this.props.planList[val].rbLumsumRoomPerNight,
        rbLumsumNigthNotExceedPerYear: this.props.planList[val]
          .rbLumsumNigthNotExceedPerYear,
        rbLumsumPayNotExceedPerNight: this.props.planList[val]
          .rbLumsumPayNotExceedPerNight,
        rbLumsumPayNotExceedPerYear: this.props.planList[val]
          .rbLumsumPayNotExceedPerYear,
        rbSchedulePatient: this.props.planList[val].rbSchedulePatient,
        rbScheduleIntensiveCarePatient: this.props.planList[val]
          .rbScheduleIntensiveCarePatient,
        rbScheduleDoctor: this.props.planList[val].rbScheduleDoctor,
        rbScheduleSurgerySchedule: this.props.planList[val]
          .rbScheduleSurgerySchedule,
        rbScheduleSurgeryNonSchedule: this.props.planList[val]
          .rbScheduleSurgeryNonSchedule,
        rbScheduleService: this.props.planList[val].rbScheduleService,
        rbScheduleSmallSurgery: this.props.planList[val].rbScheduleSmallSurgery,
        rbScheduleAdviser: this.props.planList[val].rbScheduleAdviser,
        rbScheduleAmbulance: this.props.planList[val].rbScheduleAmbulance,
        rbScheduleAccident: this.props.planList[val].rbScheduleAccident,
        rbScheduleTreatment: this.props.planList[val].rbScheduleTreatment,
        rbScheduleTransplant: this.props.planList[val].rbScheduleTransplant,
        ipdCoPlay: this.props.planList[val].ipdCoPlay,
        ipdCoPlayQuota: this.props.planList[val].ipdCoPlayQuota,
        ipdCoPlayDeductable: this.props.planList[val].ipdCoPlayDeductable,
        ipdCoPlayMixPercentage: this.props.planList[val].ipdCoPlayMixPercentage,
        ipdCoPlayMixNotExceed: this.props.planList[val].ipdCoPlayMixNotExceed,
        ipdCoPlayMixYear: this.props.planList[val].ipdCoPlayMixYear,
      })
    }
  }

  handleCloseModal = () =>
    this.setState({
      openModalForm: false,
    })

  handleSetGoToNextPage = () => {
    this.setState({ canGoToNextPage: false })
  }

  handleMoveToNextPage = () => {
    if (this.state.warningModal) {
      this.setState({ canGoToNextPage: true })
      this.setState({ warningModal: false })
      window.location.href = '/chooseinsurer'
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

  handleModalFinish = () => {
    this.setState({ openModalForm: false })
    this.setState({ newPlan: false })
  }

  handleBuildNewPlan = () => {
    this.setState({ canBuildNewPlan: true })
  }

  handleUnBuildNewPlan = () => {
    this.setState({ canBuildNewPlan: false })
  }

  handleResetPlan = () => {
    this.setState({ newPlan: false })
  }

  render() {
    return (
      <div className="SubmitPlan">
        <NavInsure step={this.state.step} />
        <div className="big-box">
          <div className="row">
            <div className="large-3 columns">
              <MenuPlan
                activePlan={this.state.activePlan}
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
                planList={this.props.planList}
                planName={this.state.planName}
                employeeOfPlan={this.state.employeeOfPlan}
              />
            </div>
            <div className="large-9 columns" style={{ paddingRight: '2.5%' }}>
              <div style={{ marginLeft: '70%', marginTop: '9%' }}>
                <span>อนุญาติให้โบรกเกอร์</span>
                <Checkbox toggle onClick={this.handleToggle} />
                <p>สามารถแก้ไขแพลนได้</p>
              </div>
              {!this.state.firstTime
                ? <div>
                    <FormSubmitPlan
                      activePlan={this.state.activePlan}
                      handlePlan={this.handlePlan}
                      handleChange={this.handleChange}
                      planName={this.state.planName}
                      employeeOfPlan={this.state.employeeOfPlan}
                      handleResetProfilePlan={this.handleResetProfilePlan}
                    />
                    <div className="fillBox">
                      <AllPlan
                        activePlan={this.state.activePlan}
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
                        handleToggleIpdCoPlay={this.handleToggleIpdCoPlay}
                        handleToggleOpdCoPlay={this.handleToggleOpdCoPlay}
                        handleResetPlan={this.handleResetPlan}
                        handleResetDental={this.handleResetDental}
                        handleResetLife={this.handleResetLife}
                        handleResetOPD={this.handleResetOPD}
                        handleResetIPD={this.handleResetIPD}
                        opdCoPlay={this.state.opdCoPlay}
                        opdPerYear={this.state.opdPerYear}
                        opdPerTime={this.state.opdPerTime}
                        opdTimeNotExceedPerYear={
                          this.state.opdTimeNotExceedPerYear
                        }
                        opdCoPlayQuota={this.state.opdCoPlayQuota}
                        opdCoPlayDeductable={this.state.opdCoPlayDeductable}
                        opdCoPlayMixPercentage={
                          this.state.opdCoPlayMixPercentage
                        }
                        opdCoPlayMixNotExceed={this.state.opdCoPlayMixNotExceed}
                        opdCoPlayMixYear={this.state.opdCoPlayMixYear}
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
                        ipdCoPlay={this.state.ipdCoPlay}
                        ipdCoPlayQuota={this.state.ipdCoPlayQuota}
                        ipdCoPlayDeductable={this.state.ipdCoPlayDeductable}
                        ipdCoPlayMixPercentage={
                          this.state.ipdCoPlayMixPercentage
                        }
                        ipdCoPlayMixNotExceed={this.state.ipdCoPlayMixNotExceed}
                        ipdCoPlayMixYear={this.state.ipdCoPlayMixYear}
                      />
                    </div>

                    <Button
                      style={{
                        marginLeft: '70%',
                        marginTop: '5%',
                        marginBottom: '5%',
                        width: '164px',
                        height: '40px',
                        borderRadius: '20px',
                        color: '#ffffff',
                        backgroundColor: '#f7555f',
                      }}
                      onClick={this.onClickhandler}
                    >
                      {' '}ต่อไป
                    </Button>
                  </div>
                : <div className="start-box">
                    <div className="box-in-start-box">
                      <Icon
                        name="calendar plus"
                        size="huge"
                        style={{ marginLeft: '9%' }}
                      />
                      <p>ยังไม่มีการสร้างแพลนใหม่</p>
                    </div>
                  </div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SubmitPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({
  getAllPlan: () => dispatch(getAllPlan()),
  deletePlan: planId => dispatch(deletePlan(planId)),
  copyPlan: planId => dispatch(copyPlan(planId)),
})

const mapStateToProps = state => ({
  planList: state.plan.planList,
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPlan)
