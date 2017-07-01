import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
      ipdCoPlayMixipdCoPlayMixYear: null,
    }
    const ipdType = ''
    const results = ''
  }

  static propTypes = {}

  onInputChange(e) {
    this.setState({ nameInput: e.target.ipdType })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.authenticate(email, password)
    console.log(this.state)
  }

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
                />
              : null}
            {this.state.ipdType === 'R&B Lumsum'
              ? <IPD2 handleChange={this.handleChange} />
              : null}
            {this.state.ipdType === 'R&B Schedule'
              ? <IPD3 handleChange={this.handleChange} />
              : null}
            <br />
            <Checkbox toggle label="Co-Play" onClick={this.handleToggle} />
            {this.state.ipdCoPlay
              ? <CoPlay handleChange={this.handleChange} />
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
            >
              บันทึก
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

IPD.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(IPD)
