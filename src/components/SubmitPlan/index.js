import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MenuPlan from './MenuPlan/MenuPlan'
import FormSubmitPlan from './FormSubmitPlan/FormSubmitPlan'
import AllPlan from './AllPlan'
import NavInsure from '../NavInsure'
import { getAllPlan } from '../../api/setPlan'
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
  constructor() {
    super()
    this.state = {
      step: 3,
      planName: '',
      employeeOfPlan: '',
      planId: -1,
      nextPage: false,
      canGoToNextPage: true,
      warningModal: false,
      firstTime: false,
      openModalForm: false,
      newPlan: false,
      canBuildNewPlan: true,
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
  handlePlan = val => {
    this.setState({ planId: val })
    this.setState({ newPlan: true })
    if (this.state.canGoToNextPage) this.setState({ openModalForm: true })
  }

  handleCloseModal = e =>
    this.setState({
      openModalForm: false,
      firstTime: false,
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
    console.log(this.state.canBuildNewPlan)
    return (
      <div>
        <NavInsure step={this.state.step} />
        <div className="big-box">
          <div className="row">
            <div className="large-3 columns">
              <MenuPlan
                handlePlan={this.handlePlan}
                openModalForm={this.state.openModalForm}
                handleCloseModal={this.handleCloseModal}
                handleModalFinish={this.handleModalFinish}
              />
            </div>
            <div className="large-9 columns">
              <div style={{ marginLeft: '70%', marginTop: '9%' }}>
                <span>อนุญาติให้โบรกเกอร์</span>
                <Checkbox toggle onClick={this.handleToggle} />
                <p>สามารถแก้ไขแพลนได้</p>
              </div>
              {this.state.firstTime === false
                ? <div>
                    <FormSubmitPlan
                      nowPlan={this.state.planId}
                      handlePlan={this.handlePlan}
                    />
                    <div className="fillBox">
                      <AllPlan
                        nowPlan={this.state.planId}
                        nextPage={this.state.nextPage}
                        handleNextPage={this.handleNextPage}
                        handleSetGoToNextPage={this.handleSetGoToNextPage}
                        handleWarningModal={this.handleWarningModal}
                        handleMoveToNextPage={this.handleMoveToNextPage}
                        newPlan={this.state.newPlan}
                        handleBuildNewPlan={this.handleBuildNewPlan}
                        handleUnBuildNewPlan={this.handleUnBuildNewPlan}
                        handleResetPlan={this.handleResetPlan}
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
})

const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPlan)
