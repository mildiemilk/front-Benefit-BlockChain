import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import {
  BackHome,
  RecComparePlan,
  CompareHeader,
  ViewButton,
  TopicCompareTable,
  CompareImg,
  HiddenBox,
  LifeTopic,
  OPDTopic,
  Note,
} from './styled';
import NavInsure from '../NavInsure';
import IPDDropBox from './ipd-dropbox';
import life from '../../../assets/compare/life.png';
import dental from '../../../assets/compare/1.png';
import opd from '../../../assets/compare/opd.png';
import ipd from '../../../assets/compare/2.png';

const Icons = styled(Icon) `
  &&&{
    position: absolute;
    font-size: 18px;
    margin-top: 33px;
    margin-left: -17px;
  }
`;

class ComparePlan extends Component {
  static propTypes = {
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      lifeBox: false,
      dentalBox: false,
      OPDBox: false,
      IPDBox: false,
    };
  }

  handleToggleLife = () => {
    if (this.state.lifeBox) {
      this.setState({ lifeBox: false });
    } else {
      this.setState({ lifeBox: true });
    }
  }

  handleToggleDental = () => {
    if (this.state.dentalBox) {
      this.setState({ dentalBox: false });
    } else {
      this.setState({ dentalBox: true });
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

  renderPlanName = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.planName}
      </th>
    ));
  }

  renderLife = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.lifePerYear + plan.lifeTimeOfSalary + plan.lifeNotExceed === 0
          ? '-'
          : plan.lifePerYear + plan.lifeTimeOfSalary + plan.lifeNotExceed}
      </th>
    ));
  }

  renderDental = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.dentalPerYear === null ? '-' : plan.dentalPerYear}
      </th>
    ));
  }

  renderOPD = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.opdPerYear +
          plan.opdPerTime +
          plan.opdTimeNotExceedPerYear +
          plan.opdCoPayQuota +
          plan.opdCoPayDeductable +
          plan.opdCoPayMixPercentage +
          plan.opdCoPayMixNotExceed +
          plan.opdCoPayMixYear ===
          0
          ? '-'
          : plan.opdPerYear +
          plan.opdPerTime +
          plan.opdTimeNotExceedPerYear +
          plan.opdCoPayQuota +
          plan.opdCoPayDeductable +
          plan.opdCoPayMixPercentage +
          plan.opdCoPayMixNotExceed +
          plan.opdCoPayMixYear}
      </th>
    ));
  }

  renderIPD = () => {
    const plans = this.props.planList;
    return plans.map((plan, i) => (
      <th key={i.toString()}>
        {plan.ipdLumsumPerYear +
          plan.ipdLumsumPerTime +
          plan.ipdLumsumTimeNotExceedPerYear +
          plan.rbLumsumRoomPerNight +
          plan.rbLumsumNigthNotExceedPerYear +
          plan.rbLumsumPayNotExceedPerNight +
          plan.rbLumsumPayNotExceedPerYear +
          plan.rbSchedulePatient +
          plan.rbScheduleIntensiveCarePatient +
          plan.rbScheduleDoctor +
          plan.rbScheduleSurgerySchedule +
          plan.rbScheduleSurgeryNonSchedule +
          plan.rbScheduleService +
          plan.rbScheduleSmallSurgery +
          plan.rbScheduleAdviser +
          plan.rbScheduleAmbulance +
          plan.rbScheduleAccident +
          plan.rbScheduleTreatment +
          plan.rbScheduleTransplant +
          plan.ipdCoPayQuota +
          plan.ipdCoPayDeductable +
          plan.ipdCoPayMixPercentage +
          plan.ipdCoPayMixNotExceed +
          plan.ipdCoPayMixYear ===
          0
          ? '-'
          : plan.ipdLumsumPerYear +
          plan.ipdLumsumPerTime +
          plan.ipdLumsumTimeNotExceedPerYear +
          plan.rbLumsumRoomPerNight +
          plan.rbLumsumNigthNotExceedPerYear +
          plan.rbLumsumPayNotExceedPerNight +
          plan.rbLumsumPayNotExceedPerYear +
          plan.rbSchedulePatient +
          plan.rbScheduleIntensiveCarePatient +
          plan.rbScheduleDoctor +
          plan.rbScheduleSurgerySchedule +
          plan.rbScheduleSurgeryNonSchedule +
          plan.rbScheduleService +
          plan.rbScheduleSmallSurgery +
          plan.rbScheduleAdviser +
          plan.rbScheduleAmbulance +
          plan.rbScheduleAccident +
          plan.rbScheduleTreatment +
          plan.rbScheduleTransplant +
          plan.ipdCoPayQuota +
          plan.ipdCoPayDeductable +
          plan.ipdCoPayMixPercentage +
          plan.ipdCoPayMixNotExceed +
          plan.ipdCoPayMixYear}
      </th>
    ));
  }

  render() {
    return (
      <div className="ComparePlan">
        <NavInsure step={this.state.step} />
        <div className="row">
          <RecComparePlan>
            <div className="row">
              <div className="large-5 large-offset-1 columns">
                <CompareHeader> เปรียบเทียบแผนประกันภัย </CompareHeader>
                <Link to="/submitplan/0">
                  <BackHome>&lt; กลับหน้าหลัก </BackHome>
                </Link>
              </div>
              <div className="large-3 large-offset-1 columns">
                <Link to="/view">
                  <ViewButton>
                    <Icon disabled name="add to calendar" />
                    ดูแผนทั้งหมด
                  </ViewButton>
                </Link>
              </div>
            </div>

            <div style={{ marginTop: '2%' }} className="row">
              <div className="large-10 large-offset-1 columns">
                <div className="CompareHead">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <TopicCompareTable>
                            ผลประโยชน์ความคุ้มครอง (Benefits)
                          </TopicCompareTable>
                        </th>
                        {this.renderPlanName()}
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="large-10 large-offset-1 columns">
                <div style={{ marginTop: '2%' }} className="CompareLife">
                  <table>
                    <tr>
                      <th>
                        <CompareImg src={life} />
                        <LifeTopic> ประกันชีวิต (Life) </LifeTopic>
                        <Icons
                          onClick={this.handleToggleLife}
                          disabled
                          name="caret down"
                        />
                      </th>
                      {this.renderLife()}
                    </tr>
                    {this.state.lifeBox
                      ? <HiddenBox>
                        <br />
                        &nbsp;&nbsp;ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้
                          {' '}
                        <br />
                        &nbsp;&nbsp;จ่ายสำหรับการตรวจทางห้องปฏิบัติการ
                          (วันละ 1 ครั้ง <br />&nbsp; ไม่เกิน 30 ต่อปี)
                        </HiddenBox>
                      : null}
                  </table>
                </div>

                <div style={{ marginTop: '2%' }} className="CompareLife">
                  <table>
                    <tr>
                      <th>
                        <CompareImg src={dental} />
                        <LifeTopic> ค่ารักษาทันตกรรม (Dental) </LifeTopic>
                        <Icons
                          onClick={this.handleToggleDental}
                          disabled
                          name="caret down"
                        />
                      </th>
                      {this.renderDental()}
                    </tr>
                    {this.state.dentalBox
                      ? <HiddenBox>
                        <br />
                        &nbsp;&nbsp;ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้
                          {' '}
                        <br />
                        &nbsp;&nbsp;จ่ายสำหรับการตรวจทางห้องปฏิบัติการ
                          (วันละ 1 ครั้ง <br />&nbsp; ไม่เกิน 30 ต่อปี)
                        </HiddenBox>
                      : null}
                  </table>
                </div>

                <div style={{ marginTop: '2%' }} className="CompareLife">
                  <table>
                    <tr>
                      <th>
                        <CompareImg src={opd} />
                        <OPDTopic>
                          {' '}ค่ารักษาพยาบาลกรณีผู้ป่วยนอก <br />
                          (Out Patient Department : OPD){' '}
                        </OPDTopic>
                        <Icons
                          onClick={this.handleToggleOPD}
                          disabled
                          name="caret down"
                        />
                      </th>
                      {this.renderOPD()}
                    </tr>
                    {this.state.OPDBox
                      ? <HiddenBox>
                        <br />
                        &nbsp;&nbsp;ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้
                          {' '}
                        <br />
                        &nbsp;&nbsp;จ่ายสำหรับการตรวจทางห้องปฏิบัติการ
                          (วันละ 1 ครั้ง <br />&nbsp; ไม่เกิน 30 ต่อปี)
                        </HiddenBox>
                      : null}
                  </table>
                </div>

                <div style={{ marginTop: '2%' }} className="CompareLife">
                  <table>
                    <tr>
                      <th>
                        <CompareImg src={ipd} />
                        <OPDTopic>
                          {' '}ค่ารักษาพยาบาลกรณีผู้ป่วยใน <br />
                          (In-Patient Department : IPD){' '}
                        </OPDTopic>
                        <Icons
                          onClick={this.handleToggleIPD}
                          disabled
                          name="caret down"
                        />
                      </th>
                      {this.renderIPD()}
                    </tr>
                  </table>
                </div>
                {this.state.IPDBox
                  ? <IPDDropBox planList={this.props.planList} />
                  : null}

                <div style={{ marginTop: '5%' }}>
                  <Note>
                    * ค่าใช้จ่ายในข้อ 4.1-4.6 นับรวมจ่ายในผลประโยชน์ ค่ารักษาพยาบาลทั่วไป
                    <br />
                    {' '}
                    ** ค่าใช้จ่ายข้อ 5 คือ จำนวนเงินสูงสุดที่จ่าย ข้อ 1-4 รวมกัน
                    สำหรับการรักษากรณี ปลูกถ่ายไขกระดูก,
                    เปลี่ยนถ่ายอวัยวะ, การฟอกไต
                    สูงสุดต่อปีกรมธรรม์
                    <br />
                    {' '}
                    - บริการช่วยเหลือฉุกเฉินทางการแพทย์ทั่วโลก
                    เคลื่อนย้ายผู้ป่วยจากโรงพยาบาลเพื่อกลับไปพักฟื้นยังภูมิลำเนา
                    บริการเคลื่อนย้ายศพ
                    ในวงเงินสูงสุดถึง 1,000,000 บาท
                    <br />
                    {' '}
                    - อัตราเบี้ยประกันข้างต้นนี้ มีผลบังคับใช้ตั้งแต่วันที่ XXXXXXX - XXXXXXX
                    <br />
                    {' '}
                    - เอกสารชุดนี้ไม่ใช่สัญญาประกันภัย
                    รายละเอียดเงื่อนไขความคุ้มครองและ
                    ข้อยกเว้นที่สมบูรณ์จะระบุในกรมธรรม์ประกันภัย
                    ผู้ซื้อควรทำความเข้าใจรายละเอียดเงื่อนไขก่อนตัดสินใจทำประกันภัยทุกครั้ง
                  </Note>
                </div>

              </div>
            </div>

          </RecComparePlan>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  planList: state.menuplanReducer,
});

export default connect(mapStateToProps, null)(ComparePlan);
