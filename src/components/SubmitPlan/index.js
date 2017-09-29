import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import MenuPlan from './MenuPlan/menu-plan';
import FormSubmitPlan from './FormSubmitPlan/form-submit-plan';
import AllPlan from './all-plan';
import NavInsure from '../NavInsure';
import { getAllPlan, copyPlan, deletePlan } from '../../api/set-plan';


class SubmitPlan extends Component {
  static propTypes = {
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
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
      val: props.match.params.index,
    };
    setInterval(() => {
      props.getAllPlan();
    }, 2000);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.havePlan && (this.state.activePlan === -1) && !this.state.newPlan) {
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

  onClickhandler = () => {
    this.setState({ nextPage: true });
    if (this.state.canGoToNextPage) {
      window.location.href = '/chooseinsurer';
    }
    return '';
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleChangeToNull = name => this.setState({ [name]: null })

  handleToggle = () => { }

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

  handleCopy = e => {
    this.handlePlan(e.target.id);
    copyPlan([this.props.planList[e.target.id].planId]);
  }

  handleDelete = e => {
    deletePlan([this.props.planList[e.target.id].planId]);
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
      console.log('planList', planList);
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
    this.setState({
      openModalForm: false,
      newPlan: false,
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
    return (
      <div className="SubmitPlan">
        <NavInsure step={this.state.step} />
        <div className="big-box">
          <div className="small-10 small-centered columns">
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
              <div className="large-9 columns">
                {this.props.havePlan
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
