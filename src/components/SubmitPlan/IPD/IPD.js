import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { editPlan } from '../../../api/setPlan'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Radio,
  Segment,
  Dropdown,
  Search,
} from 'semantic-ui-react'
import '../../../styles/SubmitPlan.scss'
import CoPlay from './CoPlay'
import IPD1 from './IPD1'
import IPD2 from './IPD2'
import IPD3 from './IPD3'
import bed from '../../image/icons-8-single-bed.jpg'
import stethoscope from '../../image/icons-8-stethoscope1.jpg'
import tooth from '../../image/icons-8-toot1.jpg'
import heart from '../../image/icons-8-like1.jpg'
import erase from '../../image/icons-8-erase.png'
import IpdModal from './IpdModal'

class IPD extends Component {
  constructor() {
    super()
    this.state = {}
  }

  static propTypes = {}

  handleRadio = (e, { name, value }) => {
    this.handleResetdata()
    this.props.handleChange(e, { name, value })
  }

  handleChange = (e, { name, value }) => {
    this.props.handleChange(e, { name, value })
    this.props.handleVerifyState('ipdRecord')
  }

  handleClick = () => {
    this.props.handleRecordVerifyState('ipdRecord')
    const {
      ipdCoPlay,
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
      ipdCoPlayQuota,
      ipdCoPlayDeductable,
      ipdCoPlayMixPercentage,
      ipdCoPlayMixNotExceed,
      ipdCoPlayMixYear,
    } = this.props
    this.props.editPlan(
      {
        ipdCoPlay,
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
        ipdCoPlayQuota,
        ipdCoPlayDeductable,
        ipdCoPlayMixPercentage,
        ipdCoPlayMixNotExceed,
        ipdCoPlayMixYear,
      },
      this.props.planList[this.props.activePlan].planId,
      'ipd',
    )
  }

  handleResetdata = () => {
    this.props.handleResetIPD()
    this.props.handleNewReset()
    this.props.handleVerifyState('ipdRecord')
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'IPD' && this.props.reset === true) {
      this.handleResetdata()
    }
  }

  render() {
    return (
      <div>
        <br />
        <p className="head">
          <u>
            ค่ารักษาพยาบาลกรณีผู้ป่วยใน (In-Patient Department : IPD)
          </u>
        </p>
        <br />
        <p className="head">เลือกแผนที่ต้องการ </p>
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
                    onChange={this.handleRadio}
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
                    onChange={this.handleRadio}
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
                    onChange={this.handleRadio}
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
                  handleVerifyState={this.props.handleVerifyState}
                  handleChange={this.handleChange}
                  handleChangeToNull={this.props.handleChangeToNull}
                  handleNewReset={this.props.handleNewReset}
                  reset={this.props.reset}
                  setPlan={this.props.setPlan}
                  ipdLumsumPerYear={this.props.ipdLumsumPerYear}
                  ipdLumsumPerTime={this.props.ipdLumsumPerTime}
                  ipdLumsumTimeNotExceedPerYear={
                    this.props.ipdLumsumTimeNotExceedPerYear
                  }
                />
              : null}
            {this.props.ipdType === 'R&B Lumsum'
              ? <IPD2
                  handleChange={this.handleChange}
                  handleChangeToNull={this.props.handleChangeToNull}
                  handleNewReset={this.props.handleNewReset}
                  reset={this.props.reset}
                  setPlan={this.props.setPlan}
                  rbLumsumRoomPerNight={this.props.rbLumsumPayNotExceedPerNight}
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
                  handleChange={this.handleChange}
                  handleNewReset={this.props.handleNewReset}
                  handleChangeToNull={this.props.handleChangeToNull}
                  reset={this.props.reset}
                  setPlan={this.props.setPlan}
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
            <br />
            <Checkbox
              toggle
              label="Co-Play"
              checked={this.props.ipdCoPlay}
              onClick={this.props.handleToggle}
            />
            {this.props.ipdCoPlay
              ? <CoPlay
                  handleChange={this.handleChange}
                  handleChangeToNull={this.props.handleChangeToNull}
                  handleNewReset={this.props.handleNewReset}
                  reset={this.props.reset}
                  setPlan={this.props.setPlan}
                />
              : null}
            <br />
            <Button
              style={{
                marginTop: '3%',
                textAlign: 'center',
                width: '164px',
                height: '40px',
                backgroundColor: '#3A7BD5',
                color: 'white',
                float: 'right',
                borderRadius: '20px',
                marginRight: '5%',
                marginBottom: '3%',
              }}
              type="submit"
              onClick={this.handleClick}
            >
              บันทึก
            </Button>
          </Form>
          <IpdModal
            openModal={this.props.openModal}
            handleCloseModal={this.props.handleCloseModal}
            handleClick={this.handleClick}
            handleNextPlan={this.props.handleNextPlan}
            handleReset={this.props.handleReset}
          />
        </div>
      </div>
    )
  }
}

IPD.propTypes = {}

const mapDispatchToProps = dispatch => ({
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
})
const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(IPD)
