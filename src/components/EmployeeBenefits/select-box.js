import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'
import '../../styles/employee-benefits.scss'
import SelectOptionPlan from './select-option-plan'

const planOptions = [
  { text: 'Fixed', value: 'Fixed' },
  { text: 'Flex', value: 'Flex' },
]

class SelectBox extends Component {
  static propTypes = {
    plan: PropTypes.string.isRequired,
    handleChangePlan: PropTypes.func.isRequired,
    selectOption: PropTypes.string.isRequired,
    columnsLenght: PropTypes.string.isRequired,
    planName: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleFixedChange: PropTypes.func.isRequired,
    handleFlexChange: PropTypes.func.isRequired,
    handleActivePlan: PropTypes.func.isRequired,
    defualtPlan: PropTypes.string.isRequired,
    valueFixed: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }
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
          <span>รูปแบบของแผนสิทธิประโยชน์ที่ต้องการ</span>
          <Dropdown
            placeholder="Fixed/Flex"
            selection
            options={planOptions}
            name="plan"
            value={this.props.plan}
            style={{ marginLeft: '5%' }}
            onChange={this.props.handleChangePlan}
          />
          <br />
          <br />
          <p>แผนสิทธิประโยชน์ที่เลือกใช้กับกลุ่มนี้</p>
          <br />
          {this.props.plan !== ''
            ? <SelectOptionPlan
              plan={this.props.plan}
              selectOption={this.props.selectOption}
              columnsLenght={this.props.columnsLenght}
              planName={this.props.planName}
              handleFixedChange={this.props.handleFixedChange}
              handleFlexChange={this.props.handleFlexChange}
              handleActivePlan={this.props.handleActivePlan}
              defualtPlan={this.props.defualtPlan}
              valueFixed={this.props.valueFixed}
              handleSubmit={this.props.handleSubmit}
            />
            : null}
        </div>
      </div>
    )
  }
}

SelectBox.propTypes = {}

export default SelectBox
