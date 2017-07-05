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
    }
  }
  onClickhandler = e => {
    e.preventDefault()
    window.location.href = '/chooseinsurer'
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleToggle = () => {}
  handlePlan = val => {
    this.setState({ planId: val })
  }
  render() {
    return (
      <div>
        <NavInsure step={this.state.step} />
        <div className="big-box">
          <div className="row">
            <div className="large-3 columns">
              <MenuPlan handlePlan={this.handlePlan} />
            </div>
            <div className="large-9 columns">
              <div style={{ marginLeft: '70%', marginTop: '9%' }}>
                <span>อนุญาติให้โบรกเกอร์</span>
                <Checkbox toggle onClick={this.handleToggle} />
                <p>สามารถแก้ไขแพลนได้</p>
              </div>

              <FormSubmitPlan
                nowPlan={this.state.planId}
                handlePlan={this.handlePlan}
              />
              <div className="fillBox">
                <AllPlan nowPlan={this.state.planId} />
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
