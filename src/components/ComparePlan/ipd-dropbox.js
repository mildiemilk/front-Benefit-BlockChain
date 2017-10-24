import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { IPDTopic, Sub, IPDDetail } from './styled';

const Icons = styled(Icon) `
&&&{
  font-size: 1.2vw;
  position: absolute;
  right: 1vw;
  top: 50%;
  transform: translateY(-50%);
  @media screen and (max-width: 1439px) {
    top: 0.5vw !important;
    bottom: 0 !important;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    right: 15px;
  }
}
`;

export default class IPDDropBox extends Component {
  static propTypes = {
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      lifeBox: false,
      dentalBox: false,
      OPDBox: false,
      IPDBox: false,
      firstIPDBox: false,
      fourthIPDBox: false,
    };
  }

  handleToggleFirstIPD = () => {
    if (this.state.firstIPDBox) {
      this.setState({ firstIPDBox: false });
    } else {
      this.setState({ firstIPDBox: true });
    }
  }

  handleToggleFourthIPD = () => {
    if (this.state.fourthIPDBox) {
      this.setState({ fourthIPDBox: false });
    } else {
      this.setState({ fourthIPDBox: true });
    }
  }

  handleToggleOPD = () => {
    if (this.state.OPDBox) {
      this.setState({ OPDBox: false });
    } else {
      this.setState({ OPDBox: true });
    }
  }

  handleToggleIPD = () => {
    if (this.state.IPDBox) {
      this.setState({ IPDBox: false });
    } else {
      this.setState({ IPDBox: true });
    }
  }

  renderFirstIPD = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => <th key={i.toString()} />);
  }

  renderRbSchedulePatient = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.rbSchedulePatient === null ? '-' : plan.rbSchedulePatient}
        <br />
        <Sub>ไม่จำกัดจำนวนวัน </Sub>
      </th>
    ));
  }

  renderRbScheduleIntensiveCarePatient = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {
          plan.rbScheduleIntensiveCarePatient === null
          ? '-'
          : plan.rbScheduleIntensiveCarePatient
        }
        <br />
        <Sub>ไม่จำกัดจำนวนวัน</Sub>
      </th>
    ));
  }

  renderRbScheduleDoctor = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.rbScheduleDoctor === null ? '-' : plan.rbScheduleDoctor}
        <br />
        <Sub>ไม่จำกัดจำนวนวัน</Sub>
      </th>
    ));
  }

  renderRbScheduleSurgery = () => {
    const plans = this.props.planList;
    const rbScheduleSurgery = plans.map((plan, i) => {
      let head;
      if (plan.rbScheduleSurgerySchedule !== null) {
        head = <th key={i.toString()}>{plan.rbScheduleSurgerySchedule}</th>;
      } else if (plan.rbScheduleSurgeryNonSchedule !== null) {
        head = <th key={i.toString()}>{plan.rbScheduleSurgeryNonSchedule}</th>;
      } else {
        head = <th key={i.toString()}>-</th>;
      }
      return head;
    });
    return rbScheduleSurgery;
  }

  renderRbScheduleAllService = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.rbScheduleService +
          plan.rbScheduleSmallSurgery +
          plan.rbScheduleAdviser +
          plan.rbScheduleAmbulance +
          plan.rbScheduleAccident +
          plan.rbScheduleTreatment ===
          0
          ? ''
          : plan.rbScheduleService +
          plan.rbScheduleSmallSurgery +
          plan.rbScheduleAdviser +
          plan.rbScheduleAmbulance +
          plan.rbScheduleAccident +
          plan.rbScheduleTreatment}
      </th>
    ));
  }

  renderRbScheduleService = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.rbScheduleService === null ? '-' : plan.rbScheduleService}
        <br />
        <Sub>
          คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
        </Sub>
      </th>
    ));
  }

  renderRbScheduleSmallSurgery = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {
          plan.rbScheduleSmallSurgery === null
          ? '-'
          : plan.rbScheduleSmallSurgery
        }
        <br />
        <Sub>
          คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
        </Sub>
      </th>
    ));
  }

  renderRbScheduleAdviser = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.rbScheduleAdviser === null ? '-' : plan.rbScheduleAdviser}
      </th>
    ));
  }

  renderRbScheduleAmbulance = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.rbScheduleAmbulance === null ? '-' : plan.rbScheduleAmbulance}
      </th>
    ));
  }

  renderRbScheduleAccident = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.rbScheduleAccident === null ? '-' : plan.rbScheduleAccident}
      </th>
    ));
  }

  renderRbScheduleTreatment = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.rbScheduleTreatment === null ? '-' : plan.rbScheduleTreatment}
        <br />
        <Sub>
          คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
        </Sub>
      </th>
    ));
  }

  renderRbScheduleTransplant = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.rbScheduleTransplant === null ? '-' : plan.rbScheduleTransplant}
      </th>
    ));
  }

  render() {
    return (
      <div className="ComparePlan">
        <div className="CompareIPD">
          <table>
            <tr
              className={this.state.firstIPDBox ? 'compare-rm-border-bt' : ''}
            >
              <th>
                <IPDTopic> 1. ค่าห้อง ค่าอาหาร และค่าบริการ </IPDTopic>
                <Icons
                  onClick={this.handleToggleFirstIPD}
                  disabled
                  name="caret down"
                />
              </th>
              {this.renderFirstIPD()}
            </tr>
            {
              this.state.firstIPDBox
              ? <tr className="compare-rm-border-bt">
                <th>
                  <IPDDetail>
                    1.1 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยธรรมดา (สูงสุดต่อวัน)
                  </IPDDetail>
                </th>
                {this.renderRbSchedulePatient()}
              </tr>
              : <div />
            }
            {
              this.state.firstIPDBox
              ? <tr>
                <th>
                  <IPDDetail>
                    1.2 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยหนัก (สูงสุดต่อวัน)
                  </IPDDetail>
                </th>
                {this.renderRbScheduleIntensiveCarePatient()}
              </tr>
              : <div />
            }
            <tr>
              <th>
                <IPDTopic>
                  2. ค่าแพทย์เยี่ยมไข้ สูงสุดไม่เกินวันละ 1 ครั้ง/วัน
                </IPDTopic>
              </th>
              {this.renderRbScheduleDoctor()}
            </tr>
            <tr>
              <th>
                <IPDTopic>
                  3. การรักษาพยาบาลโดยการผ่าตัด ค่าแพทย์ผ่าตัดและหัตถการ ตามตารางผ่าตัด
                </IPDTopic>
              </th>
              {this.renderRbScheduleSurgery()}
            </tr>
            <tr
              className={this.state.fourthIPDBox ? 'compare-rm-border-bt' : ''}
            >
              <th>
                <IPDTopic>4. ค่ารักษาพยาบาลและค่าบริการทั่วไป*</IPDTopic>
                <Icons
                  onClick={this.handleToggleFourthIPD}
                  disabled
                  name="caret down"
                />
              </th>
              {this.renderRbScheduleAllService()}
            </tr>
            {
              this.state.fourthIPDBox
              ? <tr className="compare-rm-border-bt">
                <th>
                  <IPDDetail>
                    4.1 ค่ายาและสารอาหารทางเส้นเลือด ค่าบริการโลหิต
                    และส่วนประกอบของโลหิตค่าตรวจทางห้องปฏิบัติ
                    การอุปกรณ์ทางการแพทย์ ค่าห้องผ่าตัดและ
                    อุปกรณ์ ค่ายากลับบ้าน ค่ากายภาพบำบัด/กิจกรรมบำบัด
                    ค่าแพทย์วิสัญญี/พยาบาลวิสัญญี คุ้มครองสูงสุดต่อครั้ง
                    </IPDDetail>
                </th>
                {this.renderRbScheduleService()}
              </tr>
              : <div />
            }
            {
              this.state.fourthIPDBox
              ? <tr className="compare-rm-border-bt">
                <th>
                  <IPDDetail>
                    4.2 ค่าใช้จ่ายสำหรับหัตถการหรือการผ่าตัดเล็กต่อครั้ง
                  </IPDDetail>
                </th>
                {this.renderRbScheduleSmallSurgery()}
              </tr>
              : <div />
            }
            {
              this.state.fourthIPDBox
              ? <tr className="compare-rm-border-bt">
                <th>
                  <IPDDetail>
                    4.3 ค่าแพทย์ที่ปรึกษาทางการผ่าตัด กรณีไม่มีการผ่าตัดต่อครั้ง
                    </IPDDetail>
                </th>
                {this.renderRbScheduleAdviser()}
              </tr>
              : <div />
            }
            {
              this.state.fourthIPDBox
              ? <tr className="compare-rm-border-bt">
                <th>
                  <IPDDetail> 4.4 ค่าบริการรถพยาบาลต่อครั้ง </IPDDetail>
                </th>
                {this.renderRbScheduleAmbulance()}
              </tr>
              : <div />
            }
            {
              this.state.fourthIPDBox
              ? <tr className="compare-rm-border-bt">
                <th>
                  <IPDDetail>
                     4.5 ค่ารักษาพยาบาลอุบัติเหตุฉุกเฉิน ภายใน 24 ช.ม. หลังเกิดอุบัติเหตุต่อครั้ง
                    </IPDDetail>
                </th>
                {this.renderRbScheduleAccident()}
              </tr>
              : <div />
            }
            {
              this.state.fourthIPDBox
              ? <tr>
                <th>
                  <IPDDetail>
                    4.6 ค่าใช้จ่ายที่เกิดจากการรักษาพยาบาลต่อเนื่องภาย
                    หลังจากการออกจากโรงพยาบาลรวมถึงค่ารักษา
                    พยาบาลแบบผู้ป่วยนอก และค่ากายภาพบำบัดที่ต่อ
                    เนื่องจากผู้ป่วยใน (สูงสุดไม่เกิน 30 วัน) คุ้มครอง
                    สูงสุดต่อครั้ง
                  </IPDDetail>
                </th>
                {this.renderRbScheduleTreatment()}
              </tr>
              : <div />
            }
            <tr className="border-last-tr-th">
              <th>
                <IPDTopic>
                  5. ค่ารักษากรณี ปลูกถ่ายไขกระดูก, เปลี่ยนถ่ายอวัยวะ,
                  การฟอกไต (ไม่รวมค่าใช้จ่ายของผู้บริจาคอวัยวะ) (ปีละไม่เกิน)**
                </IPDTopic>
              </th>
              {this.renderRbScheduleTransplant()}
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
