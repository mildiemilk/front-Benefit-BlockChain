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
import bedActive from '../image/icons-8-single-bed.jpg'
import bed from '../image/icons-8-single-bed1.jpg'
import stethoscope from '../image/icons-8-stethoscope1.jpg'
import stethoscopeActive from '../image/icons-8-stethoscope.jpg'
import toothActive from '../image/icons-8-tooth.jpg'
import tooth from '../image/icons-8-toot1.jpg'
import heart from '../image/icons-8-like1.jpg'
import heartActive from '../image/icons-8-like.jpg'
import erase from '../image/icons-8-erase.png'
import IPD from './IPD/IPD'
import Life from './Life/life'
import OPD from './OPD/OPD'
import Dental from './Dental/dental'

class AllsetPlan extends Component {
  constructor() {
    super()
    this.state = {
      showCoPlay: false,
      showForm: 1,
      value: '',
      box: 'fillBox1',
      results: '',
      setPlan: 'IPD',
      verifyState: true,
      openModal: false,
      reset: false,
      nextPlan: '',
    }
  }

  static propTypes = {}

  handleToggle = () => {
    if (this.state.showCoPlay) {
      this.setState({ showCoPlay: false })
    } else {
      this.setState({ showCoPlay: true })
    }
  }

  handleOpenModal = () => {
    this.setState({ openModal: true })
  }

  handleCloseModal = () => {
    this.setState({ openModal: false })
  }

  handleVerifyState = () => {
    this.setState({ verifyState: false })
  }

  handleRecordVerifyState = () => {
    this.setState({ verifyState: true })
  }

  handleRadio = (e, { value }) => {
    this.setState({ value })
  }

  handleClick = value => {
    if (this.state.verifyState === false) {
      this.handleOpenModal()
      this.setState({ nextPlan: value })
    } else {
      this.setState({ setPlan: value })
    }
  }

  handleNextPlan = () => {
    this.setState({ setPlan: this.state.nextPlan })
  }

  handleReset = () => {
    this.setState({ reset: true })
  }

  handleNewReset = () => {
    this.setState({ reset: false })
  }
  handleChangeToNull = name => this.setState({ [name]: null })

  render() {
    return (
      <div>
        <div className="fillBox">
          <div className="headBox">
            <span className="headLogo">ขั้นตอนที่ 2 : กรอกรายละเอียดแพลน</span>
            <div className="box-in-head-box">
              <img
                src={erase}
                className="image-erase"
                onClick={() => this.handleReset()}
              />
              <span className="headLogo">Reset</span>
            </div>
          </div>
          <div className="row">
            {this.state.setPlan === 'IPD'
              ? <div className="large-3 columns">
                  <div
                    className="x-tab-active"
                    onClick={() => this.handleClick('IPD')}
                  >
                    <img src={bedActive} className="imageMenu" />
                    <span className="text-menu-active">IPD</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('IPD')}
                  >
                    <img src={bed} className="imageMenu" />
                    <span className="text-menu">IPD</span>
                  </div>
                </div>}
            {this.state.setPlan === 'OPD'
              ? <div className="large-3 columns">
                  <div
                    className="x-tab-active"
                    onClick={() => this.handleClick('OPD')}
                  >
                    <img src={stethoscopeActive} className="imageMenu" />
                    <span className="text-menu-active">OPD</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('OPD')}
                  >
                    <img src={stethoscope} className="imageMenu" />
                    <span className="text-menu">OPD</span>
                  </div>
                </div>}
            {this.state.setPlan === 'Dental'
              ? <div className="large-3 columns">
                  <div
                    className="x-tab-active"
                    onClick={() => this.handleClick('Dental')}
                  >
                    <img src={toothActive} className="imageMenu" />
                    <span className="text-menu-active">Dental</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('Dental')}
                  >
                    <img src={tooth} className="imageMenu" />
                    <span className="text-menu">Dental</span>
                  </div>
                </div>}
            {this.state.setPlan === 'Life'
              ? <div className="large-3 columns">
                  <div
                    className="x-tab-active"
                    onClick={() => this.handleClick('Life')}
                  >
                    <img src={heartActive} className="imageMenu" />
                    <span className="text-menu-active">Life</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('Life')}
                  >
                    <img src={heart} className="imageMenu" />
                    <span className="text-menu">Life</span>
                  </div>
                </div>}
          </div>
          <div className="paragraph">
            {this.state.setPlan === 'IPD'
              ? <IPD
                  handleVerifyState={this.handleVerifyState}
                  handleCloseModal={this.handleCloseModal}
                  handleRecordVerifyState={this.handleRecordVerifyState}
                  handleNextPlan={this.handleNextPlan}
                  handleNewReset={this.handleNewReset}
                  openModal={this.state.openModal}
                  reset={this.state.reset}
                  setPlan={this.state.setPlan}
                  nowPlan={this.props.nowPlan}
                />
              : null}
            {this.state.setPlan === 'OPD'
              ? <OPD
                  handleVerifyState={this.handleVerifyState}
                  handleCloseModal={this.handleCloseModal}
                  handleRecordVerifyState={this.handleRecordVerifyState}
                  handleNextPlan={this.handleNextPlan}
                  handleNewReset={this.handleNewReset}
                  openModal={this.state.openModal}
                  reset={this.state.reset}
                  setPlan={this.state.setPlan}
                  nowPlan={this.props.nowPlan}
                />
              : null}
            {this.state.setPlan === 'Dental'
              ? <Dental
                  handleVerifyState={this.handleVerifyState}
                  handleCloseModal={this.handleCloseModal}
                  handleRecordVerifyState={this.handleRecordVerifyState}
                  handleNextPlan={this.handleNextPlan}
                  handleNewReset={this.handleNewReset}
                  openModal={this.state.openModal}
                  reset={this.state.reset}
                  setPlan={this.state.setPlan}
                  nowPlan={this.props.nowPlan}
                />
              : null}
            {this.state.setPlan === 'Life'
              ? <Life
                  handleVerifyState={this.handleVerifyState}
                  handleCloseModal={this.handleCloseModal}
                  handleRecordVerifyState={this.handleRecordVerifyState}
                  handleNextPlan={this.handleNextPlan}
                  handleNewReset={this.handleNewReset}
                  openModal={this.state.openModal}
                  reset={this.state.reset}
                  setPlan={this.state.setPlan}
                  nowPlan={this.props.nowPlan}
                />
              : null}
          </div>
        </div>
      </div>
    )
  }
}

AllsetPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AllsetPlan)
