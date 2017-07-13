import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createPlan, editPlan } from '../../../api/setPlan'
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
import '../../../styles/SubmitPlan.scss'
import erase from '../../image/icons-8-erase.png'

const moneyOptions = [{ text: '100', value: 100 }, { text: '200', value: 200 }]

class FormSubmitPlan extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleClick = () => {
    const { planName, employeeOfPlan } = this.props
    if (this.props.activePlan === -1) {
      this.props.handleModalFinish()
      this.props.createPlan({ planName, employeeOfPlan })
      this.props.handlePlan(this.props.planList.length)
    } else {
      this.props.editPlan(
        { planName, employeeOfPlan },
        this.props.planList[this.props.activePlan].planId,
        'profilePlan',
      )
    }
  }

  render() {
    return (
      <div>
        <div className="fillBox">
          <div className="headBox">
            <span className="headLogo">
              ขั้นตอนที่ 1 : Choose High Level Plan{' '}
            </span>
            <div className="box-in-head-box">
              <img
                src={erase}
                className="image-erase"
                onClick={() => this.props.handleResetProfilePlan()}
              />
              <span className="headLogo">Reset</span>
            </div>
          </div>
          <div className="row">
            <div className="large-4 columns">
              <div className="paragraph-step1">
                <p className="p-in-modal">ชื่อแพลน</p>
                <br />
                <p className="p-in-modal">จำนวนพนักงานในแพลน</p>
              </div>
            </div>
            <div className="large-8 columns" style={{ paddingRight: '4%' }}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    placeholder="ชื่อแพลน"
                    name="planName"
                    value={this.props.planName}
                    onChange={this.props.handleChange}
                    style={{ marginTop: '7%' }}
                    required
                  />
                  <br />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Select
                    placeholder="เท่า"
                    options={moneyOptions}
                    value={this.props.employeeOfPlan}
                    name="employeeOfPlan"
                    id="employeeOfPlan"
                    onChange={this.props.handleChange}
                  />
                  <br />
                </Form.Group>
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPlan: data => dispatch(createPlan(data)),
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
})
const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSubmitPlan)
