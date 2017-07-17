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
                <Checkbox toggle />
              </ToggleBox>
            </div>
            <Inputs action="บาท/ปี" placeholder="จำนวนเงิน" />
          </PlanBox>

          <PlanBox>
            <PlanImg src="../../../setbenefit/4.png" />
            <PlanTopic> ค่าใช้จ่ายทั่วไป (General Expense) </PlanTopic>
            <div className="toggle">
              <ToggleBox>
                <Checkbox toggle />
              </ToggleBox>
            </div>
            <Inputs action="บาท/ปี" placeholder="จำนวนเงิน" />
          </PlanBox>

        </Blogs>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps)(SettingPlan)
