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
import '../../styles/employeeBenefits.scss'
import SelectOptionPlan from './SelectOptionPlan'
const moneyOptions = [
  { text: 'Fixed', value: 'Fixed' },
  { text: 'Flex', value: 'Flex' },
]

class SelectBox extends Component {
  constructor() {
    super()
    this.state = {
      plan: '',
      selectOption: Checkbox,
      columnsLenght: 'large-11 columns',
    }
  }

  handleSelecPlan = value => {
    console.log(value)
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
    if (value === 'Fixed') {
      this.setState({ selectOption: Radio })
      this.setState({ columnsLenght: 'large-11 columns' })
    } else {
      this.setState({ selectOption: Checkbox })
      this.setState({ columnsLenght: 'large-7 columns' })
    }
  }

  render() {
    console.log(this.state.plan)
    return (
      <div className="employeeBenefits-select-box">
        <div className="employeeBenefits-select-head-box">
          <p>กลุ่ม A</p>
        </div>
        <div className="employeeBenefits-select-plan">
          <span>รูปแบบของแผนสิทธิประโยชน์ที่ต้องการ</span>
          <Dropdown
            placeholder="Fixed/Flex"
            selection
            options={moneyOptions}
            name="plan"
            value={this.state.plan}
            style={{ marginLeft: '5%' }}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <p>แผนสิทธิประโยชน์ที่เลือกใช้กับกลุ่มนี้</p>
          {this.state.plan != ''
            ? <SelectOptionPlan
                plan={this.state.plan}
                selectOption={this.state.selectOption}
                columnsLenght={this.state.columnsLenght}
                planName={this.props.planName}
              />
            : null}
        </div>
      </div>
    )
  }
}

SelectBox.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SelectBox)
