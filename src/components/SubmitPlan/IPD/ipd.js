import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { editPlan } from '../../../api/set-plan'
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
import '../../../styles/submit-plan.scss'
import CoPlay from './coplay'
import IPD1 from './ipd1'
import IPD2 from './ipd2'
import IPD3 from './ipd3'
import bed from '../../image/icons-8-single-bed.jpg'
import stethoscope from '../../image/icons-8-stethoscope1.jpg'
import tooth from '../../image/icons-8-toot1.jpg'
import heart from '../../image/icons-8-like1.jpg'
import erase from '../../image/icons-8-erase.png'
import IpdModal from './ipd-modal'

class IPD extends Component {
  constructor() {
    super()
    this.state = {
      ipdCoPlay: false,
      showForm: 1,
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
      rbScheduleSurgery: null,
      rbScheduleService: null,
      rbScheduleSmallSurgery: null,
      rbScheduleAdviser: null,
      rbScheduleAmbulance: null,
      rbScheduleAccident: null,
      rbScheduleTreatment: null,
      rbScheduleTransplant: null,
      ipdCoPlayQuota: null,
      ipdCoPlayDeductable: null,
      ipdCoPlayMixPercentage: null,
      ipdCoPlayMixNotExceed: null,
      ipdCoPlayMixYear: null,
    }
  }

  static propTypes = {}

  handleToggle = () => {
    if (this.state.ipdCoPlay) {
      this.setState({ ipdCoPlay: false })
    } else {
      this.setState({ ipdCoPlay: true })
    }
  }

  handleRadio = (e, { ipdType }) => {
    this.setState({ ipdType })
  }

  handleChangeToNull = name => this.setState({ [name]: null })

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
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
      rbScheduleSurgery,
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
    } = this.state
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
        rbScheduleSurgery,
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
    this.setState({ ipdType: '' })
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
                    name="IPDGroup"
                    ipdType="Lumsum"
                    checked={this.state.ipdType === 'Lumsum'}
                    onChange={this.handleRadio}
                  />
                </Form.Field>
              </div>
              <div className="large-4 columns">
                <Form.Field>
                  <Radio
                    label="R&B Lumsum"
                    name="IPDGroup"
                    ipdType="R&B Lumsum"
                    checked={this.state.ipdType === 'R&B Lumsum'}
                    onChange={this.handleRadio}
                  />
                </Form.Field>
              </div>
              <div className="large-4 columns">
                <Form.Field>
                  <Radio
                    label="R&B Schedule"
                    name="IPDGroup"
                    ipdType="R&B Schedule"
                    checked={this.state.ipdType === 'R&B Schedule'}
                    onChange={this.handleRadio}
                  />
                </Form.Field>
              </div>
            </Form.Group>
          </Form>
          <br />
          <p className="head">ระบุรูปแบบประกันที่ต้องการ</p>
          <Form>
            {this.state.ipdType === 'Lumsum'
              ? <IPD1
                  handleVerifyState={this.props.handleVerifyState}
                  handleChange={this.handleChange}
                  handleChangeToNull={this.handleChangeToNull}
                  handleNewReset={this.props.handleNewReset}
                  reset={this.props.reset}
                  setPlan={this.props.setPlan}
                />
              : null}
            {this.state.ipdType === 'R&B Lumsum'
              ? <IPD2
                  handleChange={this.handleChange}
                  handleChangeToNull={this.handleChangeToNull}
                  handleNewReset={this.props.handleNewReset}
                  reset={this.props.reset}
                  setPlan={this.props.setPlan}
                />
              : null}
            {this.state.ipdType === 'R&B Schedule'
              ? <IPD3
                  handleChange={this.handleChange}
                  handleNewReset={this.props.handleNewReset}
                  handleChangeToNull={this.handleChangeToNull}
                  reset={this.props.reset}
                  setPlan={this.props.setPlan}
                />
              : null}
            <br />
            <Checkbox toggle label="Co-Play" onClick={this.handleToggle} />
            {this.state.ipdCoPlay
              ? <CoPlay
                  handleChange={this.handleChange}
                  handleChangeToNull={this.handleChangeToNull}
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
