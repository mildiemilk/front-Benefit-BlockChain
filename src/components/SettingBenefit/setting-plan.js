import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Select, Checkbox, Input } from 'semantic-ui-react'
import {
  Rec,
  Header,
  AddPlan,
  AddContent,
  HeaderSpace,
  Blog,
  Blogs,
  BlogImg,
  BlogContent,
  BackButton,
  NextButton,
  SaveButton,
  PlanName,
  NameInput,
  Line,
  PlanContent,
  PlanBox,
  PlanImg,
  PlanTopic,
  ToggleBox,
} from './styled'
import styled from 'react-sc'
import NavBenefit from '../NavBenefit'

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

export class SettingPlan extends Component {
  constructor() {
    super()
    this.state = {
      healthToggle: false,
      expenseToggle: false,
    }
  }

  handleToggleHealth = () => {
    if (this.state.healthToggle) {
      this.setState({ healthToggle: false })
    } else {
      this.setState({ healthToggle: true })
    }
  }

  handleExpenseToggle = () => {
    if (this.state.expenseToggle) {
      this.setState({ expenseToggle: false })
    } else {
      this.setState({ expenseToggle: true })
    }
  }

  render() {
    return (
      <div>
        <Blogs>
          <PlanName> ชื่อแผนสิทธิประโยชน์ </PlanName>
          <NameInput placeholder="ชื่อแผนสิทธิประโยชน์" />
          <Line />
          <PlanContent> กรุณาระบุสิทธิประโยชน์ที่ต้องการ </PlanContent>
          <PlanBox>
            <PlanImg src="../../../setbenefit/3.png" />
            <PlanTopic> แผนประกันภัย (Insurance) </PlanTopic>
            <Selects placeholder="เลือกแพลนที่ต้องการ" />
          </PlanBox>

          <PlanBox>
            <PlanImg src="../../../setbenefit/5.png" />
            <PlanTopic> ค่าใช้จ่ายสุขภาพ (Health) </PlanTopic>
            <div className="toggle">
              <ToggleBox>
                <Checkbox toggle onClick={this.handleToggleHealth} />
              </ToggleBox>
            </div>
            {this.state.healthToggle
              ? <Inputs action="บาท/ปี" placeholder="จำนวนเงิน" />
              : <Inputs action="บาท/ปี" placeholder="จำนวนเงิน" readOnly />}
          </PlanBox>

          <PlanBox>
            <PlanImg src="../../../setbenefit/4.png" />
            <PlanTopic> ค่าใช้จ่ายทั่วไป (General Expense) </PlanTopic>
            <div className="toggle">
              <ToggleBox>
                <Checkbox toggle onClick={this.handleExpenseToggle} />
              </ToggleBox>
            </div>
            {this.state.expenseToggle
              ? <Inputs action="บาท/ปี" placeholder="จำนวนเงิน" />
              : <Inputs action="บาท/ปี" placeholder="จำนวนเงิน" readOnly />}
          </PlanBox>

          <SaveButton> บันทึก </SaveButton>

        </Blogs>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps)(SettingPlan)
