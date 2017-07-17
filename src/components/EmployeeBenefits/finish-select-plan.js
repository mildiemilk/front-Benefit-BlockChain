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
  Container,
  Dropdown,
  Radio,
} from 'semantic-ui-react'
import '../../styles/employee-benefits.scss'
import SelectOptionPlan from './select-option-plan'
const planOptions = [
  { text: 'Fixed', value: 'Fixed' },
  { text: 'Flex', value: 'Flex' },
]

class FinishSelectPlan extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="employeeBenefits-select-box">
        <div className="employeeBenefits-select-head-box">
          <p>กลุ่ม A</p>
        </div>
        <div className="employeeBenefits-select-plan">
          <div className="row">
            <div className="large-8 columns">
              <p>จำนวนพนักงานในกลุ่มนี้</p>
              <p>รูปแบบของแผนสิทธิประโยชน์ที่ต้องการ</p>
              <p>แผนสิทธิประโยชน์ที่เลือกใช้กับกลุ่มนี้</p>
            </div>
            <div className="large-4  columns">
              <p>120คน</p>
              <p>Fixed</p>
            </div>
          </div>
          <div style={{ marginTop: '5%' }}>
            <div className="plan-box">
              แผนประโยชน์ 1
            </div>
          </div>
        </div>
      </div>
    )
  }
}

FinishSelectPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FinishSelectPlan)
