import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MenuPlan from './MenuPlan/MenuPlan'
import FormSubmitPlan from './FormSubmitPlan/FormSubmitPlan'
import AllPlan from './AllPlan'
import ModalPlanListBidding from './ModalPlanListBidding'
import NavInsure from '../NavInsure'
import { getAllPlan, copyPlan, deletePlan } from '../../api/setPlan'
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
  Icon,
} from 'semantic-ui-react'
import '../../styles/SubmitPlan.scss'

class SubmitPlan extends Component {
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
      opdCoPlay: false,
      opdPerYear: null,
      opdPerTime: null,
      opdTimeNotExceedPerYear: null,
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
  }

  onClickhandler = e => {
    this.setState({ nextPage: true })
    if (this.state.canGoToNextPage) {
      e.preventDefault()
      window.location.href = '/chooseinsurer'
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleToggle = () => {}

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
    this.handlePlan(-1)
    this.props.deletePlan(this.props.planList[e.target.id].planId)
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
      lifePerYear: null,
      lifeTimeOfSalary: null,
      lifeNotExceed: null,
    })
  }

  handlePlan = val => {
    this.setState({ activePlan: val })
    if (val !== -1)
      this.setState({
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
      })
  }

  handleCloseModal = e =>
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
    this.setState({ firstTime: false })
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
    {
      this.props.getAllPlan()
    }
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
                        handleResetPlan={this.handleResetPlan}
                        handleResetDental={this.handleResetDental}
                        handleResetLife={this.handleResetLife}
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
  planList: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPlan)
