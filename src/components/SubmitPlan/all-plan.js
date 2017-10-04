import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bedRecord from '../image/icons-8-single-bed-record.png';
import bedActive from '../image/icons-8-single-bed.jpg';
import bed from '../image/icons-8-single-bed1.jpg';
import stethoscopeRecord from '../image/icons-8-stethoscope-record.png';
import stethoscope from '../image/icons-8-stethoscope1.jpg';
import stethoscopeActive from '../image/icons-8-stethoscope.jpg';
import toothRecord from '../image/icons-8-tooth-record.png';
import toothActive from '../image/icons-8-tooth.jpg';
import tooth from '../image/icons-8-toot1.jpg';
import heartRecord from '../image/icons-8-like-record.png';
import heartActive from '../image/icons-8-like.jpg';
import heart from '../image/icons-8-like1.jpg';
import erase from '../image/icons-8-erase.png';
import IPD from './IPD/ipd';
import Life from './Life/life';
import OPD from './OPD/opd';
import Dental from './Dental/dental';

class AllsetPlan extends Component {
  static propTypes = {
    handleUpdateData: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    activePlan: PropTypes.number.isRequired,
    nextPage: PropTypes.bool.isRequired,
    handleNextPage: PropTypes.func.isRequired,
    handleSetGoToNextPage: PropTypes.func.isRequired,
    handleWarningModal: PropTypes.func.isRequired,
    handleMoveToNextPage: PropTypes.func.isRequired,
    newPlan: PropTypes.bool.isRequired,
    handleBuildNewPlan: PropTypes.func.isRequired,
    handleUnBuildNewPlan: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    handleToggleIpdCoPay: PropTypes.func.isRequired,
    handleToggleOpdCoPay: PropTypes.func.isRequired,
    handleResetPlan: PropTypes.func.isRequired,
    handleResetDental: PropTypes.func.isRequired,
    handleResetLife: PropTypes.func.isRequired,
    handleResetOPD: PropTypes.func.isRequired,
    handleResetIPD: PropTypes.func.isRequired,
    opdCoPay: PropTypes.bool.isRequired,
    opdPerYear: PropTypes.number,
    opdPerTime: PropTypes.string,
    opdTimeNotExceedPerYear: PropTypes.string,
    opdCoPayQuota: PropTypes.string,
    opdCoPayDeductable: PropTypes.string,
    opdCoPayMixPercentage: PropTypes.string,
    opdCoPayMixNotExceed: PropTypes.string,
    opdCoPayMixYear: PropTypes.string,
    dentalPerYear: PropTypes.string,
    lifePerYear: PropTypes.string,
    lifeTimeOfSalary: PropTypes.string,
    lifeNotExceed: PropTypes.string,
    ipdType: PropTypes.string,
    ipdLumsumPerYear: PropTypes.string,
    ipdLumsumPerTime: PropTypes.string,
    ipdLumsumTimeNotExceedPerYear: PropTypes.string,
    rbLumsumRoomPerNight: PropTypes.string,
    rbLumsumNigthNotExceedPerYear: PropTypes.string,
    rbLumsumPayNotExceedPerNight: PropTypes.string,
    rbLumsumPayNotExceedPerYear: PropTypes.string,
    rbSchedulePatient: PropTypes.string,
    rbScheduleIntensiveCarePatient: PropTypes.string,
    rbScheduleDoctor: PropTypes.string,
    rbScheduleSurgerySchedule: PropTypes.string,
    rbScheduleSurgeryNonSchedule: PropTypes.string,
    rbScheduleService: PropTypes.string,
    rbScheduleSmallSurgery: PropTypes.string,
    rbScheduleAdviser: PropTypes.string,
    rbScheduleAmbulance: PropTypes.string,
    rbScheduleAccident: PropTypes.string,
    rbScheduleTreatment: PropTypes.string,
    rbScheduleTransplant: PropTypes.string,
    ipdCoPay: PropTypes.bool.isRequired,
    ipdCoPayQuota: PropTypes.string,
    ipdCoPayDeductable: PropTypes.string,
    ipdCoPayMixPercentage: PropTypes.string,
    ipdCoPayMixNotExceed: PropTypes.string,
    ipdCoPayMixYear: PropTypes.string,
    handlePlan: PropTypes.func.isRequired,
  }
  static defaultProps = {
    opdPerYear: null,
    opdPerTime: null,
    opdTimeNotExceedPerYear: null,
    opdCoPayQuota: null,
    opdCoPayDeductable: null,
    opdCoPayMixPercentage: null,
    opdCoPayMixNotExceed: null,
    opdCoPayMixYear: null,
    dentalPerYear: null,
    lifePerYear: null,
    lifeTimeOfSalary: null,
    lifeNotExceed: null,
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
    ipdCoPayQuota: null,
    ipdCoPayDeductable: null,
    ipdCoPayMixPercentage: null,
    ipdCoPayMixNotExceed: null,
    ipdCoPayMixYear: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      setPlan: 'IPD',
      verifyState: true,
      openModal: false,
      reset: false,
      nextPlan: '',
      ipdRecord: false,
      opdRecord: false,
      dentalRecord: false,
      lifeRecord: false,
      textOpd: 'text-menu',
      textOpdActive: 'text-menu-active',
      textIpd: 'text-menu',
      textIpdActive: 'text-menu-active',
      textDental: 'text-menu',
      textDentalActive: 'text-menu-active',
      textLife: 'text-menu',
      textLifeActive: 'text-menu-active',
      isChange: false,
      changeToRecord: false,
    };
  }

  componentWillReceiveProps(newProps) {
    this.handleUpdate(newProps);
  }

  componentDidUpdate() {
    this.handleDidUpdate();
  }

  handleDidUpdate = () => {
    const { isChange, changeToRecord, ipdRecord, opdRecord,
      dentalRecord, lifeRecord, setPlan, verifyState } = this.state;
    if (isChange) {
      if (changeToRecord) {
        if (ipdRecord && setPlan === 'IPD') {
          this.setState({
            textIpd: 'text-menu-record',
            textIpdActive: 'text-menu-record',
            isChange: false,
          });
        } else if (opdRecord && setPlan === 'OPD') {
          this.setState({
            textOpd: 'text-menu-record',
            textOpdActive: 'text-menu-record',
            isChange: false,
          });
        } else if (dentalRecord && setPlan === 'Dental') {
          this.setState({
            textDental: 'text-menu-record',
            textDentalActive: 'text-menu-record',
            isChange: false,
          });
        } else if (lifeRecord && setPlan === 'Life') {
          this.setState({
            textLife: 'text-menu-record',
            textLifeActive: 'text-menu-record',
            isChange: false,
          });
        }
      }
    }

    if (this.props.nextPage && verifyState === false) {
      this.handleOpenModalNextPage();
      this.props.handleNextPage();
    }

    if (this.props.newPlan && verifyState === false) {
      this.handleOpenModal();
      this.props.handleResetPlan();
    }
  }

  handleUpdate = newProps => {
    if (newProps.activePlan !== this.props.activePlan) {
      this.setState({
        setPlan: 'IPD',
        ipdRecord: false,
        opdRecord: false,
        dentalRecord: false,
        lifeRecord: false,
        textOpd: 'text-menu',
        textOpdActive: 'text-menu-active',
        textIpd: 'text-menu',
        textIpdActive: 'text-menu-active',
        textDental: 'text-menu',
        textDentalActive: 'text-menu-active',
        textLife: 'text-menu',
        textLifeActive: 'text-menu-active',
      });
    }
  }

  handleOpenModal = () => {
    this.setState({ openModal: true });
  }

  handleOpenModalNextPage = () => {
    this.setState({ openModal: true });
    this.props.handleWarningModal();
  }

  handleCloseModal = () => {
    this.setState({ openModal: false });
    this.setState({ verifyState: true });
    this.setState({ isChange: false });
    this.setState({ changeToRecord: false });
    this.setState({ [name]: false });
    this.props.handleMoveToNextPage();
    this.props.handleBuildNewPlan();
  }

  handleVerifyState = name => {
    this.setState({
      verifyState: false,
      changeToRecord: false,
      isChange: true,
      [name]: false,
    });
    this.props.handleSetGoToNextPage();
    this.handleText(name);
    this.props.handleUnBuildNewPlan();
  }

  handleRecordVerifyState = name => {
    this.setState({
      verifyState: true,
      isChange: true,
      changeToRecord: true,
      [name]: true,
    });
    this.props.handleMoveToNextPage();
    this.props.handleBuildNewPlan();
  }

  handleText = value => {
    if (value === 'ipdRecord') {
      this.setState({
        textIpd: 'text-menu',
        textIpdActive: 'text-menu-active',
      });
    } else if (value === 'opdRecord') {
      this.setState({
        textOpd: 'text-menu',
        textOpdActive: 'text-menu-active',
      });
    } else if (value === 'dentalRecord') {
      this.setState({
        textDental: 'text-menu',
        textDentalActive: 'text-menu-active',
      });
    } else {
      this.setState({
        textLife: 'text-menu',
        textLifeActive: 'text-menu-active',
      });
    }
  }

  handleRadio = (e, { value }) => {
    this.setState({ value });
  }

  handleClick = value => {
    if (this.state.verifyState === false) {
      this.handleOpenModal();
      this.setState({ nextPlan: value });
    } else {
      const { handlePlan, activePlan } = this.props;
      this.setState({ setPlan: value, nextPlan: value });
      handlePlan(activePlan);
    }
  }

  handleImageActive = value => {
    if (value === 'IPD') {
      if (this.state.ipdRecord) return bedRecord;
      return bedActive;
    }
    if (value === 'OPD') {
      if (this.state.opdRecord) return stethoscopeRecord;
      return stethoscopeActive;
    }
    if (value === 'Dental') {
      if (this.state.dentalRecord) return toothRecord;
      return toothActive;
    }
    if (value === 'Life') {
      if (this.state.lifeRecord) return heartRecord;
      return heartActive;
    }
    return null;
  }

  handleImage = value => {
    if (value === 'IPD') {
      if (this.state.ipdRecord) return bedRecord;
      return bed;
    }
    if (value === 'OPD') {
      if (this.state.opdRecord) return stethoscopeRecord;
      return stethoscope;
    }
    if (value === 'Dental') {
      if (this.state.dentalRecord) return toothRecord;
      return tooth;
    }
    if (this.state.lifeRecord) {
      return heartRecord;
    }
    return heart;
  }

  handleNextPlan = () => {
    this.setState({ setPlan: this.state.nextPlan });
  }

  handleReset = () => {
    this.setState({
      reset: true,
      verifyState: true,
    });
    this.props.handleMoveToNextPage();
    this.props.handleBuildNewPlan();
  }

  handleNewReset = () => {
    this.setState({ reset: false });
  }

  render() {
    return (
      <div>
        <div className="fillBox2">
          <div className="headBox">
            <span className="headLogo">ขั้นตอนที่ 2 : กรอกรายละเอียดแผน</span>
            <div
              className="box-in-head-box"
              onClick={() => this.handleReset()}
              role="button"
              aria-hidden
            >
              <img src={erase} className="image-erase" alt="erase" />
              <span className="headLogo">Reset</span>
            </div>
          </div>
          <div className="row">
            {this.state.setPlan === 'IPD'
              ? <div className="large-3 columns">
                <div
                  className="x-tab-active"
                  onClick={() => this.handleClick('IPD')}
                  role="button"
                  aria-hidden
                >
                  <img
                    src={this.handleImageActive('IPD')}
                    className="imageMenu"
                    alt="Menu"
                  />
                  <span className={this.state.textIpdActive}>IPD</span>
                </div>
              </div>
              : <div className="large-3 columns">
                <div
                  className="x-tab"
                  onClick={() => this.handleClick('IPD')}
                  role="button"
                  aria-hidden
                >
                  <img
                    src={this.handleImage('IPD')}
                    className="imageMenu"
                    alt="Menu"
                  />
                  <span className={this.state.textIpd}>IPD</span>
                </div>
              </div>}
            {this.state.setPlan === 'OPD'
              ? <div className="large-3 columns">
                <div
                  className="x-tab-active"
                  onClick={() => this.handleClick('OPD')}
                  role="button"
                  aria-hidden
                >
                  <img
                    src={this.handleImageActive('OPD')}
                    className="imageMenu"
                    alt="Menu"
                  />
                  <span className={this.state.textOpdActive}>OPD</span>
                </div>
              </div>
              : <div className="large-3 columns">
                <div
                  className="x-tab"
                  onClick={() => this.handleClick('OPD')}
                  role="button"
                  aria-hidden
                >
                  <img
                    src={this.handleImage('OPD')}
                    className="imageMenu"
                    alt="Menu"
                  />
                  <span className={this.state.textOpd}>OPD</span>
                </div>
              </div>}
            {this.state.setPlan === 'Dental'
              ? <div className="large-3 columns">
                <div
                  className="x-tab-active"
                  onClick={() => this.handleClick('Dental')}
                  role="button"
                  aria-hidden
                >
                  <img
                    src={this.handleImageActive('Dental')}
                    className="imageMenu"
                    alt="Menu"
                  />
                  <span className={this.state.textDentalActive}>Dental</span>
                </div>
              </div>
              : <div className="large-3 columns">
                <div
                  className="x-tab"
                  onClick={() => this.handleClick('Dental')}
                  role="button"
                  aria-hidden
                >
                  <img
                    src={this.handleImage('Dental')}
                    className="imageMenu"
                    alt="Menu"
                  />
                  <span className={this.state.textDental}>Dental</span>
                </div>
              </div>}
            {this.state.setPlan === 'Life'
              ? <div className="large-3 columns">
                <div
                  className="x-tab-active"
                  onClick={() => this.handleClick('Life')}
                  role="button"
                  aria-hidden
                >
                  <img
                    src={this.handleImageActive('Life')}
                    className="imageMenu"
                    alt="Menu"
                  />
                  <span className={this.state.textLifeActive}>Life</span>
                </div>
              </div>
              : <div className="large-3 columns">
                <div
                  className="x-tab"
                  onClick={() => this.handleClick('Life')}
                  role="button"
                  aria-hidden
                >
                  <img
                    src={this.handleImage('Life')}
                    className="imageMenu"
                    alt="Menu"
                  />
                  <span className={this.state.textLife}>Life</span>
                </div>
              </div>}
          </div>
          <div className="paragraph">
            {this.state.setPlan === 'OPD'
              ? <OPD
                handleUpdateData={this.props.handleUpdateData}
                planList={this.props.planList}
                handleVerifyState={this.handleVerifyState}
                handleCloseModal={this.handleCloseModal}
                handleRecordVerifyState={this.handleRecordVerifyState}
                handleNextPlan={this.handleNextPlan}
                handleNewReset={this.handleNewReset}
                openModal={this.state.openModal}
                handleReset={this.handleReset}
                handleResetOPD={this.props.handleResetOPD}
                handleToggle={this.props.handleToggleOpdCoPay}
                reset={this.state.reset}
                setPlan={this.state.setPlan}
                activePlan={this.props.activePlan}
                handleChange={this.props.handleChange}
                handleChangeToNull={this.props.handleChangeToNull}
                opdCoPay={this.props.opdCoPay}
                opdPerYear={this.props.opdPerYear}
                opdPerTime={this.props.opdPerTime}
                opdTimeNotExceedPerYear={this.props.opdTimeNotExceedPerYear}
                opdCoPayQuota={this.props.opdCoPayQuota}
                opdCoPayDeductable={this.props.opdCoPayDeductable}
                opdCoPayMixPercentage={this.props.opdCoPayMixPercentage}
                opdCoPayMixNotExceed={this.props.opdCoPayMixNotExceed}
                opdCoPayMixYear={this.props.opdCoPayMixYear}
              />
              : null}
            {this.state.setPlan === 'IPD'
              ? <IPD
                handleUpdateData={this.props.handleUpdateData}
                planList={this.props.planList}
                handleVerifyState={this.handleVerifyState}
                handleCloseModal={this.handleCloseModal}
                handleRecordVerifyState={this.handleRecordVerifyState}
                handleNextPlan={this.handleNextPlan}
                handleNewReset={this.handleNewReset}
                openModal={this.state.openModal}
                handleChange={this.props.handleChange}
                handleChangeToNull={this.props.handleChangeToNull}
                handleReset={this.handleReset}
                handleResetIPD={this.props.handleResetIPD}
                handleToggle={this.props.handleToggleIpdCoPay}
                reset={this.state.reset}
                setPlan={this.state.setPlan}
                activePlan={this.props.activePlan}
                lifePerYear={this.props.lifePerYear}
                lifeTimeOfSalary={this.props.lifeTimeOfSalary}
                lifeNotExceed={this.props.lifeNotExceed}
                ipdType={this.props.ipdType}
                ipdLumsumPerYear={this.props.ipdLumsumPerYear}
                ipdLumsumPerTime={this.props.ipdLumsumPerTime}
                ipdLumsumTimeNotExceedPerYear={
                  this.props.ipdLumsumTimeNotExceedPerYear
                }
                rbLumsumRoomPerNight={this.props.rbLumsumRoomPerNight}
                rbLumsumNigthNotExceedPerYear={
                  this.props.rbLumsumNigthNotExceedPerYear
                }
                rbLumsumPayNotExceedPerNight={
                  this.props.rbLumsumPayNotExceedPerNight
                }
                rbLumsumPayNotExceedPerYear={
                  this.props.rbLumsumPayNotExceedPerYear
                }
                rbSchedulePatient={this.props.rbSchedulePatient}
                rbScheduleIntensiveCarePatient={
                  this.props.rbScheduleIntensiveCarePatient
                }
                rbScheduleDoctor={this.props.rbScheduleDoctor}
                rbScheduleSurgerySchedule={
                  this.props.rbScheduleSurgerySchedule
                }
                rbScheduleSurgeryNonSchedule={
                  this.props.rbScheduleSurgeryNonSchedule
                }
                rbScheduleService={this.props.rbScheduleService}
                rbScheduleSmallSurgery={this.props.rbScheduleSmallSurgery}
                rbScheduleAdviser={this.props.rbScheduleAdviser}
                rbScheduleAmbulance={this.props.rbScheduleAmbulance}
                rbScheduleAccident={this.props.rbScheduleAccident}
                rbScheduleTreatment={this.props.rbScheduleTreatment}
                rbScheduleTransplant={this.props.rbScheduleTransplant}
                ipdCoPay={this.props.ipdCoPay}
                ipdCoPayQuota={this.props.ipdCoPayQuota}
                ipdCoPayDeductable={this.props.ipdCoPayDeductable}
                ipdCoPayMixPercentage={this.props.ipdCoPayMixPercentage}
                ipdCoPayMixNotExceed={this.props.ipdCoPayMixNotExceed}
                ipdCoPayMixYear={this.props.ipdCoPayMixYear}
              />
              : null}
            {this.state.setPlan === 'Dental'
              ? <Dental
                handleUpdateData={this.props.handleUpdateData}
                planList={this.props.planList}
                handleVerifyState={this.handleVerifyState}
                handleCloseModal={this.handleCloseModal}
                handleRecordVerifyState={this.handleRecordVerifyState}
                handleNextPlan={this.handleNextPlan}
                handleNewReset={this.handleNewReset}
                openModal={this.state.openModal}
                handleReset={this.handleReset}
                reset={this.state.reset}
                setPlan={this.state.setPlan}
                activePlan={this.props.activePlan}
                dentalPerYear={this.props.dentalPerYear}
                handleChange={this.props.handleChange}
                handleResetDental={this.props.handleResetDental}
              />
              : null}
            {this.state.setPlan === 'Life'
              ? <Life
                handleUpdateData={this.props.handleUpdateData}
                planList={this.props.planList}
                handleVerifyState={this.handleVerifyState}
                handleCloseModal={this.handleCloseModal}
                handleRecordVerifyState={this.handleRecordVerifyState}
                handleNextPlan={this.handleNextPlan}
                handleNewReset={this.handleNewReset}
                openModal={this.state.openModal}
                handleReset={this.handleReset}
                reset={this.state.reset}
                setPlan={this.state.setPlan}
                activePlan={this.props.activePlan}
                handleChange={this.props.handleChange}
                lifePerYear={this.props.lifePerYear}
                lifeTimeOfSalary={this.props.lifeTimeOfSalary}
                lifeNotExceed={this.props.lifeNotExceed}
                handleResetLife={this.props.handleResetLife}
              />
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(AllsetPlan);
