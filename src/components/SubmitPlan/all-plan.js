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
import bedRecord from '../image/icons-8-single-bed-record.png'
import bedActive from '../image/icons-8-single-bed.jpg'
import bed from '../image/icons-8-single-bed1.jpg'
import stethoscopeRecord from '../image/icons-8-stethoscope-record.png'
import stethoscope from '../image/icons-8-stethoscope1.jpg'
import stethoscopeActive from '../image/icons-8-stethoscope.jpg'
import toothRecord from '../image/icons-8-tooth-record.png'
import toothActive from '../image/icons-8-tooth.jpg'
import tooth from '../image/icons-8-toot1.jpg'
import heartRecord from '../image/icons-8-like-record.png'
import heart from '../image/icons-8-like1.jpg'
import heartActive from '../image/icons-8-like.jpg'
import erase from '../image/icons-8-erase.png'
import IPD from './IPD/ipd'
import Life from './Life/life'
import OPD from './OPD/opd'
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
      ipdRecord: false,
      opdRecord: false,
      dentalRecord: false,
      lifeRecord: false,
      checkInput: false,
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

  handleOpenModalNextPage = () => {
    this.setState({ openModal: true })
    this.props.handleWarningModal()
  }

  handleCloseModal = () => {
    this.setState({ openModal: false })
  }

  handleVerifyState = name => {
    this.setState({ verifyState: false })
    this.setState({ checkInput: true })
    this.setState({ changeToRecord: false })
    this.setState({ isChange: true })
    this.setState({ [name]: false })
    this.props.handleSetGoToNextPage()
    this.handleText(name)
    this.props.handleUnBuildNewPlan()
  }

  handleRecordVerifyState = name => {
    this.setState({ verifyState: true })
    this.setState({ isChange: true })
    this.setState({ changeToRecord: true })
    this.setState({ [name]: true })
    this.props.handleMoveToNextPage()
    this.props.handleBuildNewPlan()
  }

  handleText = value => {
    if (value === 'ipdRecord') {
      this.setState({ textIpd: 'text-menu' })
      this.setState({ textIpdActive: 'text-menu-active' })
    } else if (value === 'opdRecord') {
      this.setState({ textOpd: 'text-menu' })
      this.setState({ textOpdActive: 'text-menu-active' })
    } else if (value === 'dentalRecord') {
      this.setState({ textDental: 'text-menu' })
      this.setState({ textDentalActive: 'text-menu-active' })
    } else {
      this.setState({ textLife: 'text-menu' })
      this.setState({ textLifeActive: 'text-menu-active' })
    }
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
      this.setState({ nextPlan: value })
    }
  }

  handleImageActive = value => {
    if (value === 'IPD') {
      if (this.state.ipdRecord) return bedRecord
      else return bedActive
    } else if (value === 'OPD') {
      if (this.state.opdRecord) return stethoscopeRecord
      else return stethoscopeActive
    } else if (value === 'Dental') {
      if (this.state.dentalRecord) return toothRecord
      else return toothActive
    } else {
      if (this.lifeRecord) return heartRecord
      else return heartActive
    }
  }

  handleImage = value => {
    if (value === 'IPD') {
      if (this.state.ipdRecord) return bedRecord
      else return bed
    } else if (value === 'OPD') {
      if (this.state.opdRecord) return stethoscopeRecord
      else return stethoscope
    } else if (value === 'Dental') {
      if (this.state.dentalRecord) return toothRecord
      else return tooth
    } else {
      if (this.lifeRecord) return heartRecord
      else return heart
    }
  }

  handleNextPlan = () => {
    this.setState({ setPlan: this.state.nextPlan })
  }

  handleReset = () => {
    this.setState({ reset: true })
    this.setState({ verifyState: true })
    this.setState({ checkInput: false })
    this.props.handleMoveToNextPage()
    this.props.handleBuildNewPlan()
  }

  handleNewReset = () => {
    this.setState({ reset: false })
  }
  handleChangeToNull = name => this.setState({ [name]: null })

  componentDidUpdate() {
    if (this.state.isChange) {
      if (this.state.changeToRecord) {
        if (this.state.ipdRecord && this.state.checkInput) {
          this.setState({ textIpd: 'text-menu-record' })
          this.setState({ textIpdActive: 'text-menu-record' })
          this.setState({ checkInput: false })
          this.setState({ isChange: false })
        } else if (this.state.opdRecord && this.state.checkInput) {
          this.setState({ textOpd: 'text-menu-record' })
          this.setState({ textOpdActive: 'text-menu-record' })
          this.setState({ checkInput: false })
          this.setState({ isChange: false })
        } else if (this.state.dentalRecord && this.state.checkInput) {
          this.setState({ textDental: 'text-menu-record' })
          this.setState({ textDentalActive: 'text-menu-record' })
          this.setState({ checkInput: false })
          this.setState({ isChange: false })
        } else {
          this.setState({ textLife: 'text-menu-record' })
          this.setState({ textLifeActive: 'text-menu-record' })
          this.setState({ checkInput: false })
          this.setState({ isChange: false })
        }
      }
    }

    if (this.props.nextPage && this.state.verifyState === false) {
      this.handleOpenModalNextPage()
      this.props.handleNextPage()
    }

    if (this.props.newPlan && this.state.verifyState === false) {
      this.handleOpenModal()
      this.props.handleResetPlan()
    }
  }

  render() {
    console.log(this.state.verifyState)
    return (
      <div>
        <div className="fillBox">
          <div className="headBox">
            <span className="headLogo">ขั้นตอนที่ 2 : กรอกรายละเอียดแพลน</span>
            <div className="box-in-head-box" onClick={() => this.handleReset()}>
              <img src={erase} className="image-erase" />
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
                    <img
                      src={this.handleImageActive('IPD')}
                      className="imageMenu"
                    />
                    <span className={this.state.textIpdActive}>IPD</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('IPD')}
                  >
                    <img src={this.handleImage('IPD')} className="imageMenu" />
                    <span className={this.state.textIpd}>IPD</span>
                  </div>
                </div>}
            {this.state.setPlan === 'OPD'
              ? <div className="large-3 columns">
                  <div
                    className="x-tab-active"
                    onClick={() => this.handleClick('OPD')}
                  >
                    <img
                      src={this.handleImageActive('OPD')}
                      className="imageMenu"
                    />
                    <span className={this.state.textOpdActive}>OPD</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('OPD')}
                  >
                    <img src={this.handleImage('OPD')} className="imageMenu" />
                    <span className={this.state.textOpd}>OPD</span>
                  </div>
                </div>}
            {this.state.setPlan === 'Dental'
              ? <div className="large-3 columns">
                  <div
                    className="x-tab-active"
                    onClick={() => this.handleClick('Dental')}
                  >
                    <img
                      src={this.handleImageActive('Dental')}
                      className="imageMenu"
                    />
                    <span className={this.state.textDentalActive}>Dental</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('Dental')}
                  >
                    <img
                      src={this.handleImage('Dental')}
                      className="imageMenu"
                    />
                    <span className={this.state.textDental}>Dental</span>
                  </div>
                </div>}
            {this.state.setPlan === 'Life'
              ? <div className="large-3 columns">
                  <div
                    className="x-tab-active"
                    onClick={() => this.handleClick('Life')}
                  >
                    <img
                      src={this.handleImageActive('Life')}
                      className="imageMenu"
                    />
                    <span className={this.state.textLifeActive}>Life</span>
                  </div>
                </div>
              : <div className="large-3 columns">
                  <div
                    className="x-tab"
                    onClick={() => this.handleClick('Life')}
                  >
                    <img src={this.handleImage('Life')} className="imageMenu" />
                    <span className={this.state.textLife}>Life</span>
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
                  handleReset={this.handleReset}
                  reset={this.state.reset}
                  setPlan={this.state.setPlan}
                  activePlan={this.props.activePlan}
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
                  handleReset={this.handleReset}
                  reset={this.state.reset}
                  setPlan={this.state.setPlan}
                  activePlan={this.props.activePlan}
                  handleChange={this.props.handleChange}
                  opdCoPlay={this.props.opdCoPlay}
                  opdPerYear={this.props.opdPerYear}
                  opdPerTime={this.props.opdPerTime}
                  opdTimeNotExceedPerYear={this.props.opdTimeNotExceedPerYear}
                  opdCoPlayQuota={this.props.opdCoPlayQuota}
                  opdCoPlayDeductable={this.props.opdCoPlayDeductable}
                  opdCoPlayMixPercentage={this.props.opdCoPlayMixPercentage}
                  opdCoPlayMixNotExceed={this.props.opdCoPlayMixNotExceed}
                  opdCoPlayMixYear={this.props.opdCoPlayMixYear}
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
    )
  }
}

AllsetPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AllsetPlan)
