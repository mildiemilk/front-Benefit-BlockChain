import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { setTimeOut, chooseInsurer } from '../../api/chooseInsurer'
import styled from 'react-sc'
import NavInsure from '../NavInsure'
import Sidebar from '../sidebar'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'
const format = 'h:mm a'
const now = moment().hour(0).minute(0)
import 'react-datepicker/dist/react-datepicker.css'
import {
  Detail,
  Head,
  Side,
  SideIn,
  Card,
  HeadIn,
  Submit,
  SubmitInsure,
  Next,
} from './styled'
import CardInsure from './CardInsure'

class InsurerSelect extends Component {
  constructor() {
    super()
    this.state = {
      step: 4,
      num: 0,
      date: null,
      insurers: [],
    }
  }
  handleTimeOut = () => {
    const { date } = this.state
    this.props.setTimeOut(date)
  }

  handleDate = date => {
    this.setState({
      date: date,
    })
  }

  handleTime = time => {
    time._d.setDate(this.state.date._d.getDate())
    this.state.date._d.setTime(time._d.getTime())
  }

  handleCheck = e => {
    if (e.target.checked) {
      this.setState({
        num: this.state.num + 1,
        insurers: this.state.insurers.concat(
          this.props.insurerList[e.target.id],
        ),
      })
    } else {
      let index = this.state.insurers.indexOf(
        this.props.insurerList[e.target.id],
      )
      this.setState({
        num: this.state.num - 1,
        insurers: this.state.insurers.splice(index, 1),
      })
    }
  }

  handleSubmit = () => {
    this.props.chooseInsurer(this.state.insurers)
  }

  render() {
    return (
      <div className="ChooseInsurer">
        <NavInsure step={this.state.step} />
        <div className="row">
          <Detail className="large-12 columns">
            <div className="row">
              <Side className="large-10 columns">
                <Head>เลือกบริษัทประกันภัยที่ต้องการ</Head>
              </Side>
            </div>
            <div className="row">
              <SideIn>
                <HeadIn className="row">
                  <span>
                    {' '}จำนวนบริษัทประกันที่เลือก {this.state.num} บริษัท
                  </span>
                  <SubmitInsure onClick={this.handleSubmit}>
                    บันทึก
                  </SubmitInsure>
                </HeadIn>
                <div className="row">
                  <CardInsure handleCheck={this.handleCheck} />
                </div>
              </SideIn>
              <SideIn>
                <p>ตั้งระยะเวลาการเสนอราคาของประกัน</p>
                <p className="insure">
                  บริษัทประกันสามารถเสนอราคาได้ภายในวันที่ &nbsp;
                </p>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.handleDate}
                  minDate={moment()}
                />
                <span>&nbsp;เวลา&nbsp;</span>
                <TimePicker
                  onChange={this.handleTime}
                  selected={this.state.time}
                  showSecond={false}
                />
                <br />
                <Submit onClick={this.handleTimeOut}>บันทึกก</Submit>

              </SideIn>
            </div>
          </Detail>
          <Next>ต่อไป</Next>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setTimeOut: timeout => dispatch(setTimeOut(timeout)),
  chooseInsurer: insurers => dispatch(chooseInsurer(insurers)),
})

const mapStateToProps = state => ({
  insurerList: state.getAllInsurer,
})

export default connect(mapStateToProps, mapDispatchToProps)(InsurerSelect)
