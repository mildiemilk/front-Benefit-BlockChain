import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Checkbox, Form, Radio } from 'semantic-ui-react';
import { editPlan } from '../../../../../api/set-plan';
import '../../../../../styles/submit-plan.scss';
import CoPay from './copay';
import IPD1 from './ipd1';
import IPD2 from './ipd2';
import IPD3 from './ipd3';
// import IpdModal from './ipd-modal';

const Checkboxs = styled(Checkbox)`
  margin-bottom: 15px;
`;
class IPD extends Component {
  static propTypes = {
    handleVerifyState: PropTypes.func.isRequired,
    // handleCloseModal: PropTypes.func.isRequired,
    handleRecordVerifyState: PropTypes.func.isRequired,
    handleNewReset: PropTypes.func.isRequired,
    // openModal: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    // handleChangeMasterplan: PropTypes.func.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    handleResetIPD: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    reset: PropTypes.string.isRequired,
    setPlan: PropTypes.string.isRequired,
    activePlan: PropTypes.number.isRequired,
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
    ipdCoPay: PropTypes.bool.isRequired,
    ipdCoPayQuota: PropTypes.string.isRequired,
    ipdCoPayDeductable: PropTypes.string.isRequired,
    ipdCoPayMixPercentage: PropTypes.string.isRequired,
    ipdCoPayMixNotExceed: PropTypes.string.isRequired,
    ipdCoPayMixYear: PropTypes.string.isRequired,
    editPlan: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    // handleNextPlan: PropTypes.func.isRequired,
    styletabPrice: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      ipdType: this.props.ipdType,
    };
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'IPD' && this.props.reset === true) {
      this.handleResetdata();
    }
  }

  handleRadio = (e, { name, value }) => {
    this.props.handleChange(e, { name, value });
    this.handleResetdata();
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    const MP = this.state.DetailMP;
    MP[name] = value;
    this.props.handleChange(e, { name, value });
    this.props.handleVerifyState('ipdRecord');
  }

  handleClick = () => {
    this.props.handleRecordVerifyState('ipdRecord');
    const {
      ipdCoPay,
      ipdType,
      ipdLumsumPerYear,
      ipdLumsumPerTime,
      ipdLumsumTimeNotExceedPerYear,
      rbLumsumRoomPerNight,
      rbLumsumNigthNotExceedPerYear,
      rbLumsumPayNotExceedPerNight,
      rbLumsumPayNotExceedPerYear,
      rbSchedulePatient,
      rbScheduleIntensiveCarePatient,
      rbScheduleDoctor,
      rbScheduleSurgerySchedule,
      rbScheduleSurgeryNonSchedule,
      rbScheduleService,
      rbScheduleSmallSurgery,
      rbScheduleAdviser,
      rbScheduleAmbulance,
      rbScheduleAccident,
      rbScheduleTreatment,
      rbScheduleTransplant,
      ipdCoPayQuota,
      ipdCoPayDeductable,
      ipdCoPayMixPercentage,
      ipdCoPayMixNotExceed,
      ipdCoPayMixYear,
    } = this.props;
    this.props.editPlan(
      {
        ipdCoPay,
        ipdType,
        ipdLumsumPerYear,
        ipdLumsumPerTime,
        ipdLumsumTimeNotExceedPerYear,
        rbLumsumRoomPerNight,
        rbLumsumNigthNotExceedPerYear,
        rbLumsumPayNotExceedPerNight,
        rbLumsumPayNotExceedPerYear,
        rbSchedulePatient,
        rbScheduleIntensiveCarePatient,
        rbScheduleDoctor,
        rbScheduleSurgerySchedule,
        rbScheduleSurgeryNonSchedule,
        rbScheduleService,
        rbScheduleSmallSurgery,
        rbScheduleAdviser,
        rbScheduleAmbulance,
        rbScheduleAccident,
        rbScheduleTreatment,
        rbScheduleTransplant,
        ipdCoPayQuota,
        ipdCoPayDeductable,
        ipdCoPayMixPercentage,
        ipdCoPayMixNotExceed,
        ipdCoPayMixYear,
      },
      this.props.planList[this.props.activePlan].planId,
      'ipd',
    );
  }

  handleResetdata = () => {
    this.props.handleResetIPD();
    this.props.handleNewReset();
    this.props.handleVerifyState('ipdRecord');
  }

  render() {
    // console.log('', this.state);
    return (
      <div>
        <br />
        <p className="head">
          <u>
            ค่ารักษาพยาบาลกรณีผู้ป่วยใน (In-Patient Department : IPD)
          </u>
        </p>
        <br />
        <p className="head">เลือกแผนที่ต้องการ</p>
        <div className="row">
          <Form>
            <Form.Group inline>
              <div className="large-4 columns">
                <Form.Field>
                  <Radio
                    label="Lumsum"
                    name="ipdType"
                    value="Lumsum"
                    checked={this.props.ipdType === 'Lumsum'}
                    onClick={this.handleRadio}
                  />
                </Form.Field>
              </div>
              <div className="large-4 columns">
                <Form.Field>
                  <Radio
                    label="R&B Lumsum"
                    name="ipdType"
                    value="R&B Lumsum"
                    checked={this.props.ipdType === 'R&B Lumsum'}
                    onClick={this.handleRadio}
                  />
                </Form.Field>
              </div>
              <div className="large-4 columns">
                <Form.Field>
                  <Radio
                    label="R&B Schedule"
                    name="ipdType"
                    value="R&B Schedule"
                    checked={this.props.ipdType === 'R&B Schedule'}
                    onClick={this.handleRadio}
                  />
                </Form.Field>
              </div>
            </Form.Group>
          </Form>
          <br />
          <p className="head">ระบุรูปแบบประกันที่ต้องการ</p>
          <Form>
            {this.props.ipdType === 'Lumsum'
              ? <IPD1
                styletabPrice={this.props.styletabPrice}
                handleVerifyState={this.props.handleVerifyState}
                handleChange={this.handleChange}
                handleChangeToNull={this.props.handleChangeToNull}
                handleNewReset={this.props.handleNewReset}
                reset={this.props.reset}
                setPlan={this.props.setPlan}
                activePlan={this.props.activePlan}
                ipdLumsumPerYear={this.props.ipdLumsumPerYear}
                ipdLumsumPerTime={this.props.ipdLumsumPerTime}
                ipdLumsumTimeNotExceedPerYear={
                  this.props.ipdLumsumTimeNotExceedPerYear
                }
              />
              : null}
            {this.props.ipdType === 'R&B Lumsum'
              ? <IPD2
                handleChange={this.props.handleChange}
                styletabPrice={this.props.styletabPrice}
                handleChangeToNull={this.props.handleChangeToNull}
                handleNewReset={this.props.handleNewReset}
                reset={this.props.reset}
                setPlan={this.props.setPlan}
                activePlan={this.props.activePlan}
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
              />
              : null}
            {this.props.ipdType === 'R&B Schedule'
              ? <IPD3
                styletabPrice={this.props.styletabPrice}
                handleChange={this.props.handleChange}
                handleNewReset={this.props.handleNewReset}
                handleChangeToNull={this.props.handleChangeToNull}
                reset={this.props.reset}
                setPlan={this.props.setPlan}
                activePlan={this.props.activePlan}
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
              />
              : null}
            <div>
              <Checkboxs
                toggle
                label="Co-Pay"
                checked={this.props.ipdCoPay === true}
                onClick={this.props.handleToggle}
                value={this.props.ipdCoPay}
                name="ipdCoPay"
                onChange={this.handleChange}
              />
            </div>
            {this.props.ipdCoPay
              ? <CoPay
                styletabPrice={this.props.styletabPrice}
                handleChange={this.handleChange}
                handleChangeToNull={this.props.handleChangeToNull}
                handleNewReset={this.props.handleNewReset}
                reset={this.props.reset}
                setPlan={this.props.setPlan}
                activePlan={this.props.activePlan}
                ipdCoPay={this.props.ipdCoPay}
                ipdCoPayQuota={this.props.ipdCoPayQuota}
                ipdCoPayDeductable={this.props.ipdCoPayDeductable}
                ipdCoPayMixPercentage={this.props.ipdCoPayMixPercentage}
                ipdCoPayMixNotExceed={this.props.ipdCoPayMixNotExceed}
                ipdCoPayMixYear={this.props.ipdCoPayMixYear}
              />
              : null}
            <br />
            {/* <Button
              style={{
                marginTop: '3%',
                textAlign: 'center',
                width: '164px',
                height: '40px',
                backgroundColor: '#3A7BD5',
                color: 'white',
                float: 'right',
                borderRadius: '20px',
                marginBottom: '3%',
              }}
              type="submit"
              onClick={this.handleClick}
            >
              บันทึก
            </Button> */}
          </Form>
          {/* <IpdModal
            openModal={this.props.openModal}
            handleCloseModal={this.props.handleCloseModal}
            handleClick={this.handleClick}
            handleNextPlan={this.props.handleNextPlan}
          /> */}
        </div>
      </div>
    );
  }
}

IPD.propTypes = {};

const mapDispatchToProps = dispatch => ({
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
});
const mapStateToProps = state => ({
  planList: state.plan.planList,
});

export default connect(mapStateToProps, mapDispatchToProps)(IPD);
