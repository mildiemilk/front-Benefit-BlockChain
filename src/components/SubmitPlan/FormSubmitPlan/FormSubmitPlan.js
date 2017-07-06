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
    this.state = {
      planName: '',
      employeeOfPlan: '',
    }
  }

  static propTypes = {}

  handleReset = () => {
    this.setState({ planName: '' })
    this.setState({ employeeOfPlan: '' })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleClick = () => {
    console.log(this.props.planList)
    if (this.props.nowPlan === -1) {
      this.props.createPlan(this.state)
      this.props.handlePlan(this.props.planList.length)
    } else {
      this.props.editPlan(
        this.state,
        this.props.planList[this.props.nowPlan].planId,
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
                onClick={() => this.handleReset()}
              />
              <span className="headLogo">Reset</span>
            </div>
          </div>
          <div className="row">
            <div className="large-4 columns">
              <div className="paragraph-step1">
                <p>ชื่อแพลน</p>
                <br />
                <p>จำนวนพนักงานในแพลน</p>
              </div>
            </div>
            <div className="large-8 columns">
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    placeholder="ชื่อแพลน"
                    name="planName"
                    value={this.state.planName}
                    onChange={this.handleChange}
                    style={{ marginTop: '7%' }}
                    required
                  />
                  <br />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Select
                    placeholder="เท่า"
                    options={moneyOptions}
                    value={this.state.employeeOfPlan}
                    name="employeeOfPlan"
                    id="employeeOfPlan"
                    onChange={this.handleChange}
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
                    marginRight: '5%',
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

FormSubmitPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({
  createPlan: data => dispatch(createPlan(data)),
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
})
const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSubmitPlan)
