import React, { Component } from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ModalHeader,
  ModalContent,
  ModalTopic,
  BackButton,
  LineModal,
  TableHeader,
  LifeTopic,
  OPDTopic,
  HiddenBox,
  HiddenContent,
  Img,
  ImageIcon2,
} from './styled';
import IPDDropBox from './ipd-dropbox';
import icon2 from '../image/icons-8-view-file.png';
import life from '../../../assets/compare/life.png';
import dental from '../../../assets/compare/1.png';
import opd from '../../../assets/compare/opd.png';
import ipd from '../../../assets/compare/2.png';

const ModalContents = styled(Modal.Content) `
  &&&{
    width: 800px;
    position: relative;
    margin: 0 auto;
    text-align: initial;
    padding: 20px 0px;    
  }
`;

const Modals = styled(Modal) `
  &&&{
    background: transparent;
    margin-top: -120px;
    z-index: 2;
    box-shadow: none;
    padding: 0px;
    height: auto;
    position: absolute;
    left: 55%;
    top: 40%;
  }
`;
// background: transparent;
// box-shadow: none;
// position: absolute;
// text-align: justify;
// padding: 0px;
// height: auto;
const Icons = styled(Icon) `
  &&&{
    position: absolute;
    margin-top: 2.5%;
  }
`;

class ModalModalExample extends Component {
  static propTypes = {
    plan: PropTypes.shape.isRequired,
  }

  constructor() {
    super();
    this.state = {
      modalOpen: false,
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

  handleClose = () => this.setState({ modalOpen: false })

  handleOpen = () => this.setState({ modalOpen: true })

  render() {
    const { plan } = this.props;
    return (
      <Modals
        trigger={
          <ImageIcon2 src={icon2} size="mini" onClick={this.handleOpen} />
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <ModalContents>
          <div className="row">
            <ModalHeader>
              {plan.planName}
              <br />
            </ModalHeader>
            <LineModal />
            <div className="row">
              <div className="large-4 columns">
                <ModalTopic>
                  จำนวนพนักงานในแผน :
                </ModalTopic>
                <ModalTopic>
                  ราคาต่อหัว :
                </ModalTopic>
              </div>
              <div className="large-8 columns">
                <ModalContent>
                  1,200 คน
                </ModalContent>
                <ModalContent>
                  12,000 บาท
                </ModalContent>
              </div>
            </div>

            <div className="ModalPlanTable">

              <div className="PlanHeader">
                <table>
                  <tr>
                    <th>
                      <TableHeader>
                        ผลประโยชน์ความคุ้มครอง (Benefits)
                      </TableHeader>
                    </th>

                    <th>
                      <TableHeader>
                        รายละเอียด
                      </TableHeader>
                    </th>
                  </tr>
                </table>
              </div>

              <div
                style={{
                  marginTop: '1%',
                }}
                className="PlanLife"
              >
                <table>
                  <tr>
                    <th>
                      <Img src={life} />
                      <LifeTopic>
                        ประกันชีวิต (Life)
                      </LifeTopic>
                      <Icons
                        onClick={this.handleToggleLife}
                        disabled
                        name="caret down"
                      />
                    </th>
                    <th>
                      {plan.lifePerYear + plan.lifeTimeOfSalary + plan.lifeNotExceed === 0
                        ? '-'
                        : plan.lifePerYear + plan.lifeTimeOfSalary + plan.lifeNotExceed}
                    </th>

                  </tr>
                </table>
                {this.state.lifeBox
                  ? <HiddenBox>
                    <HiddenContent>
                      ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้จ่ายสำหรับ
                        <br /> {' '}
                      การตรวจทางห้องปฏิบัติการ (วันละ 1 ครั้ง ไม่เกิน 30 ต่อปี)
                      </HiddenContent>
                  </HiddenBox>
                  : null}
              </div>

              <div
                style={{
                  marginTop: '1%',
                }}
                className="PlanLife"
              >
                <table>
                  <tr>
                    <th>
                      <Img src={dental} />
                      <LifeTopic>
                        ค่ารักษาทันตกรรม (Dental)
                      </LifeTopic>
                      <Icons
                        onClick={this.handleToggleDental}
                        disabled
                        name="caret down"
                      />
                    </th>
                    <th>
                      {plan.dentalPerYear === null ? '-' : plan.dentalPerYear}
                    </th>

                  </tr>
                </table>
                {this.state.dentalBox
                  ? <HiddenBox>
                    <HiddenContent>
                      ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้จ่ายสำหรับ
                        <br /> {' '}
                      การตรวจทางห้องปฏิบัติการ (วันละ 1 ครั้ง ไม่เกิน 30 ต่อปี)
                      </HiddenContent>
                  </HiddenBox>
                  : null}
              </div>

              <div
                style={{
                  marginTop: '1%',
                }}
                className="PlanLife"
              >
                <table>
                  <tr>
                    <th>
                      <Img src={opd} />
                      <OPDTopic>
                        {' '}ค่ารักษาพยาบาลกรณีผู้ป่วยนอก
                        <br />
                        (Out Patient Department : OPD){' '}
                      </OPDTopic>
                      <Icons
                        onClick={this.handleToggleOPD}
                        disabled
                        name="caret down"
                      />
                    </th>
                    <th>
                      { plan.opdPerYear +
                        plan.opdPerTime +
                        plan.opdTimeNotExceedPerYear +
                        plan.opdCoPayQuota +
                        plan.opdCoPayDeductable +
                        plan.opdCoPayMixPercentage +
                        plan.opdCoPayMixNotExceed +
                        plan.opdCoPayMixYear === 0
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

                  </tr>
                </table>
                {this.state.OPDBox
                  ? <HiddenBox>
                    <HiddenContent>
                      ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้จ่ายสำหรับ
                        <br /> {' '}
                      การตรวจทางห้องปฏิบัติการ (วันละ 1 ครั้ง ไม่เกิน 30 ต่อปี)
                      </HiddenContent>
                  </HiddenBox>
                  : null}
              </div>

              <div
                style={{
                  marginTop: '1%',
                }}
                className="PlanLife"
              >
                <table>
                  <tr>
                    <th>
                      <Img src={ipd} />
                      <OPDTopic>
                        ค่ารักษาพยาบาลกรณีผู้ป่วยใน
                        <br />
                        (In-Patient Department : IPD){' '}
                      </OPDTopic>
                      <Icons
                        onClick={this.handleToggleIPD}
                        disabled
                        name="caret down"
                      />
                    </th>
                    <th>
                      { plan.ipdLumsumPerYear +
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
                        plan.ipdCoPayMixYear === 0
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

                  </tr>
                </table>
              </div>
              {this.state.IPDBox ? <IPDDropBox plan={plan} /> : null}

            </div>

            <div className="row">
              <div className="large-4 large-offset-8 columns">
                <BackButton onClick={this.handleClose}>
                  กลับ
                </BackButton>
              </div>
            </div>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ModalModalExample;
