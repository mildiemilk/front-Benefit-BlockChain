import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Select, Checkbox, Input } from 'semantic-ui-react'
import styled from 'react-sc'
import {
  Blogs,
  SaveButton,
  PlanName,
  Line,
  PlanContent,
  PlanBox,
  PlanImg,
  PlanTopic,
  ToggleBox,
} from './styled'

const Selects = styled(Select)`
    &&&{
      margin-left: 51%;
      margin-top: 3.5%;
      width: 47.5%;
    }
`

const Inputs = styled(Input)`
    &&&{
      position: absolute;
      top: 25%;
      margin-left: 60.5%;
      color: transparent;
    }
`

const NameInput = styled(Input)`
    &&&{

      border-radius: 3px;
      background-color: #ffffff;
      padding: 1%;
      margin-left: 1%;
      width: 77%;
    }
`

class SettingPlan extends Component {
  static propTypes = {
    optionPlan: PropTypes.arrayof(PropTypes.object).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    planName: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    isHealth: PropTypes.bool.isRequired,
    health: PropTypes.string.isRequired,
    isExpense: PropTypes.bool.isRequired,
    expense: PropTypes.string.isRequired,
  }
  constructor() {
    super()
    this.state = {
      optionPlan: [],
    }
  }

  componentDidMount() {
    this.renderOption()
  }

  renderOption = () => {
    const options = this.props.optionPlan.choosePlan
    const optionPlan = []
    options.map((option, index) => {
      optionPlan.push({
        key: index,
        text: option.planName,
        value: option._id,
      })
      return option
    })
    this.setState({ optionPlan })
  }

  render() {
    return (
      <div>
        <Blogs>
          <form onSubmit={this.props.handleSubmit}>
            <PlanName>
              ชื่อแผนสิทธิประโยชน์
            </PlanName>
            <NameInput
              required
              type="text"
              name="planName"
              value={this.props.planName}
              placeholder="แผนสิทธิประโยชน์"
              onChange={this.props.handleChange}
            />
            <Line />
            <PlanContent>
              กรุณาระบุสิทธิประโยชน์ที่ต้องการ
            </PlanContent>
            <PlanBox>
              <PlanImg src="../../../setbenefit/3.png" />
              <PlanTopic>
                แผนประกันภัย (Insurance)
              </PlanTopic>
              <Selects
                required
                name="plan"
                options={this.state.optionPlan}
                value={this.props.plan}
                placeholder="เลือกแพลนที่ต้องการ"
                onChange={this.props.handleChange}
              />
            </PlanBox>

            {this.props.optionPlan.isHealth
              ? <PlanBox>
                  <PlanImg src="../../../setbenefit/5.png" />
                  <PlanTopic>
                    ค่าใช้จ่ายสุขภาพ (Health)
                  </PlanTopic>
                  <div className="toggle">
                    <ToggleBox>
                      <Checkbox
                        name="isHealth"
                        checked={this.props.isHealth}
                        toggle
                        onClick={this.props.handleToggle}
                      />
                    </ToggleBox>
                  </div>
                  {this.props.isHealth
                    ? <Inputs
                        required
                        type="number"
                        name="health"
                        value={this.props.health}
                        action="บาท/ปี"
                        placeholder="จำนวนเงิน"
                        onChange={this.props.handleChange}
                      />
                    : <Inputs
                        type="number"
                        name="health"
                        value=""
                        action="บาท/ปี"
                        placeholder="จำนวนเงิน"
                        readOnly
                      />}
                </PlanBox>
              : null}

            {this.props.optionPlan.isExpense
              ? <PlanBox>
                  <PlanImg src="../../../setbenefit/4.png" />
                  <PlanTopic>
                    ค่าใช้จ่ายทั่วไป (General Expense)
                  </PlanTopic>
                  <div className="toggle">
                    <ToggleBox>
                      <Checkbox
                        name="isExpense"
                        checked={this.props.isExpense}
                        toggle
                        onClick={this.props.handleToggle}
                      />
                    </ToggleBox>
                  </div>
                  {this.props.isExpense
                    ? <Inputs
                        required
                        type="text"
                        name="expense"
                        value={this.props.expense}
                        action="บาท/ปี"
                        placeholder="จำนวนเงิน"
                        onChange={this.props.handleChange}
                      />
                    : <Inputs
                        type="number"
                        name="expense"
                        value=""
                        action="บาท/ปี"
                        placeholder="จำนวนเงิน"
                        readOnly
                      />}
                </PlanBox>
              : null}

            <SaveButton type="submit">
              บันทึก
            </SaveButton>
          </form>

        </Blogs>
      </div>
    )
  }
}

export default SettingPlan
