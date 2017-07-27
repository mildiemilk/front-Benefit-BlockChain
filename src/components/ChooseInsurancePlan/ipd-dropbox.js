import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IPDTopic, Sub, IPDDetail } from './styled'

const Icons = styled(Icon) `
  &&&{
    position: absolute;
    left: 88%;
  }
`

export default class IPDDropBox extends Component {
  static propTypes = {
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor() {
    super()
    this.state = {
      lifeBox: false,
      dentalBox: false,
      OPDBox: false,
      IPDBox: false,
      firstIPDBox: false,
      fourthIPDBox: false,
    }
  }

  handleToggleFirstIPD = () => {
    if (this.state.firstIPDBox) {
      this.setState({ firstIPDBox: false })
    } else {
      this.setState({ firstIPDBox: true })
    }
  }

  handleToggleFourthIPD = () => {
    if (this.state.fourthIPDBox) {
      this.setState({ fourthIPDBox: false })
    } else {
      this.setState({ fourthIPDBox: true })
    }
  }

  handleToggleOPD = () => {
    if (this.state.OPDBox) {
      this.setState({ OPDBox: false })
    } else {
      this.setState({ OPDBox: true })
    }
  }

  handleToggleIPD = () => {
    if (this.state.IPDBox) {
      this.setState({ IPDBox: false })
    } else {
      this.setState({ IPDBox: true })
    }
  }

  // renderFirstIPD = () => {
  //   const plans = this.props.planList
  //   return plans.map(plan => <th>""</th>)
  // }

  // renderRbSchedulePatient = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbSchedulePatient === null ? '-' : plan.rbSchedulePatient}
  //       <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
  //     </th>
  //   ))
  // }

  // renderRbScheduleIntensiveCarePatient = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbScheduleIntensiveCarePatient === null
  //         ? '-'
  //         : plan.rbScheduleIntensiveCarePatient}
  //       <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
  //     </th>
  //   ))
  // }

  // renderRbScheduleDoctor = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbScheduleDoctor === null ? '-' : plan.rbScheduleDoctor}
  //       <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
  //     </th>
  //   ))
  // }

  // renderRbScheduleSurgery = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbScheduleSurgerySchedule === null
  //         ? plan.rbScheduleSurgeryNonSchedule === null
  //             ? '-'
  //             : plan.rbScheduleSurgeryNonSchedule
  //         : plan.rbScheduleSurgerySchedule}
  //     </th>
  //   ))
  // }

  // renderRbScheduleAllService = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbScheduleService +
  //         plan.rbScheduleSmallSurgery +
  //         plan.rbScheduleAdviser +
  //         plan.rbScheduleAmbulance +
  //         plan.rbScheduleAccident +
  //         plan.rbScheduleTreatment ===
  //         0
  //         ? ''
  //         : plan.rbScheduleService +
  //             plan.rbScheduleSmallSurgery +
  //             plan.rbScheduleAdviser +
  //             plan.rbScheduleAmbulance +
  //             plan.rbScheduleAccident +
  //             plan.rbScheduleTreatment}
  //     </th>
  //   ))
  // }

  // renderRbScheduleService = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbScheduleService === null ? '-' : plan.rbScheduleService}
  //       <Sub>
  //         <br /> คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
  //       </Sub>
  //     </th>
  //   ))
  // }

  // renderRbScheduleSmallSurgery = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbScheduleSmallSurgery === null
  //         ? '-'
  //         : plan.rbScheduleSmallSurgery}
  //       <Sub>
  //         <br /> คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
  //       </Sub>
  //     </th>
  //   ))
  // }

  // renderRbScheduleAdviser = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbScheduleAdviser === null ? '-' : plan.rbScheduleAdviser}
  //     </th>
  //   ))
  // }

  // renderRbScheduleAmbulance = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbScheduleAmbulance === null ? '-' : plan.rbScheduleAmbulance}
  //     </th>
  //   ))
  // }

  // renderRbScheduleAccident = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbScheduleAccident === null ? '-' : plan.rbScheduleAccident}
  //     </th>
  //   ))
  // }

  // renderRbScheduleTreatment = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbScheduleTreatment === null ? '-' : plan.rbScheduleTreatment}
  //       <Sub>
  //         <br /> คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
  //       </Sub>
  //     </th>
  //   ))
  // }

  // renderRbScheduleTransplant = () => {
  //   let plans = this.props.planList
  //   return plans.map((plan, index) => (
  //     <th>
  //       {plan.rbScheduleTransplant === null ? '-' : plan.rbScheduleTransplant}
  //     </th>
  //   ))
  // }

  render() {
    return (
      <div className="ModalPlanTable">

        <div className="PlanIPD">
          <table>
            <tr>
              <th>
                <IPDTopic> 1. ค่าห้อง ค่าอาหาร และค่าบริการ </IPDTopic>
                <Icons
                  onClick={this.handleToggleFirstIPD}
                  disabled
                  name="caret down"
                />
              </th>
              <th />
            </tr>
          </table>
        </div>

        {this.state.firstIPDBox
          ? <div className="SubPlanIPD">
            <table>
              <tr>
                <th>
                  <IPDDetail>
                    {' '}
                    1.1 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยธรรมดา
                      {' '}
                    <br />
                    (สูงสุดต่อวัน)
                    </IPDDetail>
                </th>
                <th>
                  2,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                </th>
              </tr>

              <tr style={{ borderBottom: '1px solid #9b9b9b' }}>
                <th>
                  <IPDDetail>
                    {' '}
                    1.2 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยหนัก
                      {' '}
                    <br />
                    (สูงสุดต่อวัน)
                    </IPDDetail>
                </th>
                <th>
                  4,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                </th>
              </tr>
            </table>
          </div>
          : null}

        <div className="PlanIPD">
          <table>
            <tr>
              <th>
                <IPDTopic>
                  {' '}2. ค่าแพทย์เยี่ยมไข้ สูงสุดไม่เกินวันละ 1 ครั้ง/วัน{' '}
                </IPDTopic>
              </th>
              <th>
                800
                <Sub><br /> สูงสุด 60 วัน </Sub>
              </th>
            </tr>
          </table>
        </div>

        <div className="PlanIPD">
          <table>
            <tr>
              <th>
                <IPDTopic>
                  {' '}3. การรักษาพยาบาลโดยการผ่าตัด ค่าแพทย์ผ่าตัด <br />
                  และหัตถการ ตามตารางผ่าตัด{' '}
                </IPDTopic>
              </th>
              <th>
                40,000
              </th>
            </tr>
          </table>
        </div>

        <div className="PlanIPD">
          <table>
            <tr>
              <th>
                <IPDTopic> 4. ค่ารักษาพยาบาลและค่าบริการทั่วไป* </IPDTopic>
                <Icons
                  onClick={this.handleToggleFourthIPD}
                  disabled
                  name="caret down"
                />
              </th>
              <th>
                40,000
              </th>
            </tr>
          </table>
        </div>

        {this.state.fourthIPDBox
          ? <div className="SubPlanIPD">
            <table>
              <tr>
                <th>
                  <IPDDetail>
                    4.1 ค่ายาและสารอาหารทางเส้นเลือด ค่าบริการโลหิต และส่วนประกอบของโลหิต
                      ค่าตรวจทางห้องปฏิบัติ การอุปกรณ์ทางการแพทย์ ค่าห้องผ่าตัดและอุปกรณ์
                      ค่ายากลับบ้าน ค่ากายภาพบำบัด/กิจกรรมบำบัด ค่าแพทย์วิสัญญี/พยาบาลวิสัญญี
                      คุ้มครองสูงสุดต่อครั้ง
                    </IPDDetail>
                </th>
                <th>
                  <Sub>
                    คุ้มครองค่าใช้จ่ายตามจริง
                      <br /> ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                </th>
              </tr>

              <tr>
                <th>
                  <IPDDetail>
                    {' '}
                    4.2 ค่าใช้จ่ายสำหรับหัตถการหรือการผ่าตัดเล็กต่อครั้ง
                      {' '}
                  </IPDDetail>
                </th>
                <th>
                  <Sub>
                    คุ้มครองค่าใช้จ่ายตามจริง
                      <br /> ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                </th>
              </tr>

              <tr>
                <th>
                  <IPDDetail>
                    {' '}4.3 ค่าแพทย์ที่ปรึกษาทางการผ่าตัด กรณีไม่มีการ
                      ผ่าตัดต่อครั้ง
                    </IPDDetail>
                </th>
                <th>
                  4,000
                  </th>
              </tr>

              <tr>
                <th>
                  <IPDDetail> 4.4 ค่าบริการรถพยาบาลต่อครั้ง </IPDDetail>
                </th>
                <th>
                  1,000
                  </th>
              </tr>

              <tr>
                <th>
                  <IPDDetail>
                    {' '}4.5 ค่ารักษาพยาบาลอุบัติเหตุฉุกเฉิน ภายใน 24
                      ช.ม. หลังเกิดอุบัติเหตุต่อครั้ง
                    </IPDDetail>
                </th>
                <th>
                  4,000
                  </th>
              </tr>

              <tr style={{ borderBottom: '1px solid #9b9b9b' }}>
                <th>
                  <IPDDetail>
                    {' '}
                    4.6 ค่าใช้จ่ายที่เกิดจากการรักษาพยาบาลต่อเนื่องภาย
                      หลังจากการออกจากโรงพยาบาลรวมถึงค่ารักษา
                      พยาบาลแบบผู้ป่วยนอก และค่ากายภาพบำบัดที่ต่อ
                      เนื่องจากผู้ป่วยใน (สูงสุดไม่เกิน 30 วัน) คุ้มครอง
                      สูงสุดต่อครั้ง
                    </IPDDetail>
                </th>
                <th>
                  <Sub>
                    คุ้มครองค่าใช้จ่ายตามจริง <br />
                    ตามความต้องการของแพทย์ <br />
                    ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                </th>
              </tr>
            </table>
          </div>
          : null}

        <div className="PlanIPD">
          <table>
            <tr>
              <th>
                <IPDTopic>
                  {' '}
                  5. ค่ารักษากรณี ปลูกถ่ายไขกระดูก, เปลี่ยนถ่ายอวัยวะ,
                  {' '}
                  <br />
                  การฟอกไต (ไม่รวมค่าใช้จ่ายของผู้บริจาคอวัยวะ) <br />
                  (ปีละไม่เกิน)**{' '}
                </IPDTopic>
              </th>
              <th>
                40,000
              </th>
            </tr>
          </table>
        </div>

      </div>
    )
  }
}
