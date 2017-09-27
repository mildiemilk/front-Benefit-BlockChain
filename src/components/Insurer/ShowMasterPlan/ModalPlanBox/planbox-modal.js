import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FormSubmitPlan from '../SubmitPlan/FormSubmitPlan';
import AllPlan from '../SubmitPlan/all-plan';

const ModalContents = styled(Modal.Content) `
  &&&{
    width: 800px;
    position: relative;
    margin: 0 auto;
    padding: 0px 40px 0px 40px;
    text-align: initial;
  }
`;
const ModalContentsWithBottom = ModalContents.extend`
  padding-bottom: 21px !important;
`;
const ModalHeaders = styled(Modal.Header) `
  &&&{
    width: 800px;
    position: relative;
    margin: 0 auto;
    border: none;
    padding-left: 4%;
    padding-right: 4%;
  }
`;
// const ModalChange = styled(Modal.Header) `
// &&&{
//   width: 800px;
//   position: relative;
//   margin: 0;
//   border: none;
//   padding: 32px 40px;
//   background-color: #c0ccda;
// }
// `;
const ModalPriceBox = styled(Modal.Header) `
&&&{
  width: 800px;
  position: relative;
  margin: 0 auto;
  border: none;
  padding-left: 4%;
  padding-right: 4%;
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
const CustomHead = styled.div`
  text-align: center;
  font-family: kanit;
`;
class PlanBoxModal extends Component {
  static propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
    handleSubmitEditPlan: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeMasterplan: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool.isRequired,
    planType: PropTypes.string.isRequired,
    // ipdType: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    planIndex: PropTypes.number.isRequired,
    // handleChangeInput: PropTypes.func.isRequired,
    // DetailMP: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    DetailMP: PropTypes.shape({}).isRequired,
    // DataCompany: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      DetailMP: this.props.DetailMP,
      planType: this.props.planType,
      planIndex: this.props.planIndex,
      closeOnEscape: false,
      closeOnRootNodeClick: true,
      activePlan: -1,
      nextPage: false,
      canGoToNextPage: true,
      warningModal: false,
      newPlan: false,
      canBuildNewPlan: true,
      planName: '',
      employeeOfPlan: '',
      ipdType: null,
      ipdLumsumPerYear: null,
      ipdLumsumPerTime: null,
      ipdLumsumTimeNotExceedPerYear: null,
      rbLumsumRoomPerNight: null,
      rbLumsumNigthNotExceedPerYear: null,
      rbLumsumPayNotExceedPerNight: null,
      rbLumsumPayNotExceedPerYear: null,
      rbSchedulePatient: null,
      rbScheduleIntensiveCarePatient: null,
      rbScheduleDoctor: null,
      rbScheduleSurgerySchedule: null,
      rbScheduleSurgeryNonSchedule: null,
      rbScheduleService: null,
      rbScheduleSmallSurgery: null,
      rbScheduleAdviser: null,
      rbScheduleAmbulance: null,
      rbScheduleAccident: null,
      rbScheduleTreatment: null,
      rbScheduleTransplant: null,
      ipdCoPay: true,
      ipdCoPayQuota: null,
      ipdCoPayDeductable: null,
      ipdCoPayMixPercentage: null,
      ipdCoPayMixNotExceed: null,
      ipdCoPayMixYear: null,
      opdPerYear: null,
      opdPerTime: null,
      opdTimeNotExceedPerYear: null,
      opdCoPay: false,
      opdCoPayQuota: null,
      opdCoPayDeductable: null,
      opdCoPayMixPercentage: null,
      opdCoPayMixNotExceed: null,
      opdCoPayMixYear: null,
      dentalPerYear: null,
      lifePerYear: null,
      lifeTimeOfSalary: null,
      lifeNotExceed: null,
      morePrice: null,
      pricePerPerson: null,
      price: this.props.price,
    };
  }

  componentWillReceiveProps(newProps) {
    const { DetailMP, activePlan, price } = newProps;
    this.setState({
      price,
      planName: DetailMP.planName,
      employeeOfPlan: DetailMP.employeeOfPlan,
      dentalPerYear: DetailMP.dentalPerYear,
      lifePerYear: DetailMP.lifePerYear,
      lifeTimeOfSalary: DetailMP.lifeTimeOfSalary,
      lifeNotExceed: DetailMP.lifeNotExceed,
      opdCoPay: DetailMP.opdCoPay,
      opdPerYear: DetailMP.opdPerYear,
      opdPerTime: DetailMP.opdPerTime,
      opdTimeNotExceedPerYear: DetailMP
        .opdTimeNotExceedPerYear,
      opdCoPayQuota: DetailMP.opdCoPayQuota,
      opdCoPayDeductable: DetailMP.opdCoPayDeductable,
      opdCoPayMixPercentage: DetailMP.opdCoPayMixPercentage,
      opdCoPayMixNotExceed: DetailMP.opdCoPayMixNotExceed,
      opdCoPayMixYear: DetailMP.opdCoPayMixYear,
      ipdType: DetailMP.ipdType,
      ipdLumsumPerYear: DetailMP.ipdLumsumPerYear,
      ipdLumsumPerTime: DetailMP.ipdLumsumPerTime,
      ipdLumsumTimeNotExceedPerYear: DetailMP
        .ipdLumsumTimeNotExceedPerYear,
      rbLumsumRoomPerNight: DetailMP.rbLumsumRoomPerNight,
      rbLumsumNigthNotExceedPerYear: DetailMP
        .rbLumsumNigthNotExceedPerYear,
      rbLumsumPayNotExceedPerNight: DetailMP
        .rbLumsumPayNotExceedPerNight,
      rbLumsumPayNotExceedPerYear: DetailMP
        .rbLumsumPayNotExceedPerYear,
      rbSchedulePatient: DetailMP.rbSchedulePatient,
      rbScheduleIntensiveCarePatient: DetailMP
        .rbScheduleIntensiveCarePatient,
      rbScheduleDoctor: DetailMP.rbScheduleDoctor,
      rbScheduleSurgerySchedule: DetailMP
        .rbScheduleSurgerySchedule,
      rbScheduleSurgeryNonSchedule: DetailMP
        .rbScheduleSurgeryNonSchedule,
      rbScheduleService: DetailMP.rbScheduleService,
      rbScheduleSmallSurgery: DetailMP.rbScheduleSmallSurgery,
      rbScheduleAdviser: DetailMP.rbScheduleAdviser,
      rbScheduleAmbulance: DetailMP.rbScheduleAmbulance,
      rbScheduleAccident: DetailMP.rbScheduleAccident,
      rbScheduleTreatment: DetailMP.rbScheduleTreatment,
      rbScheduleTransplant: DetailMP.rbScheduleTransplant,
      ipdCoPay: DetailMP.ipdCoPay,
      ipdCoPayQuota: DetailMP.ipdCoPayQuota,
      ipdCoPayDeductable: DetailMP.ipdCoPayDeductable,
      ipdCoPayMixPercentage: DetailMP.ipdCoPayMixPercentage,
      ipdCoPayMixNotExceed: DetailMP.ipdCoPayMixNotExceed,
      ipdCoPayMixYear: DetailMP.ipdCoPayMixYear,
      // pricePerPerson:
    });
    if (newProps.modalOpen !== this.props.modalOpen) {
      this.handleUpdate(DetailMP, activePlan);
    }
  }

  handlePlan = val => {
    if (val !== -1) {
      console.log('this.props.DetailMP----', this.props.DetailMP);
      // const DetailMP = this.props.DetailMP;
      // const { plan } = DetailMP;
      const { DetailMP } = this.props;
      this.setState({
        activePlan: val,
        planName: DetailMP.planName,
        employeeOfPlan: DetailMP.employeeOfPlan,
        dentalPerYear: DetailMP.dentalPerYear,
        lifePerYear: DetailMP.lifePerYear,
        lifeTimeOfSalary: DetailMP.lifeTimeOfSalary,
        lifeNotExceed: DetailMP.lifeNotExceed,
        opdCoPay: DetailMP.opdCoPay,
        opdPerYear: DetailMP.opdPerYear,
        opdPerTime: DetailMP.opdPerTime,
        opdTimeNotExceedPerYear: DetailMP
          .opdTimeNotExceedPerYear,
        opdCoPayQuota: DetailMP.opdCoPayQuota,
        opdCoPayDeductable: DetailMP.opdCoPayDeductable,
        opdCoPayMixPercentage: DetailMP.opdCoPayMixPercentage,
        opdCoPayMixNotExceed: DetailMP.opdCoPayMixNotExceed,
        opdCoPayMixYear: DetailMP.opdCoPayMixYear,
        ipdType: DetailMP.ipdType,
        ipdLumsumPerYear: DetailMP.ipdLumsumPerYear,
        ipdLumsumPerTime: DetailMP.ipdLumsumPerTime,
        ipdLumsumTimeNotExceedPerYear: DetailMP
          .ipdLumsumTimeNotExceedPerYear,
        rbLumsumRoomPerNight: DetailMP.rbLumsumRoomPerNight,
        rbLumsumNigthNotExceedPerYear: DetailMP
          .rbLumsumNigthNotExceedPerYear,
        rbLumsumPayNotExceedPerNight: DetailMP
          .rbLumsumPayNotExceedPerNight,
        rbLumsumPayNotExceedPerYear: DetailMP
          .rbLumsumPayNotExceedPerYear,
        rbSchedulePatient: DetailMP.rbSchedulePatient,
        rbScheduleIntensiveCarePatient: DetailMP
          .rbScheduleIntensiveCarePatient,
        rbScheduleDoctor: DetailMP.rbScheduleDoctor,
        rbScheduleSurgerySchedule: DetailMP
          .rbScheduleSurgerySchedule,
        rbScheduleSurgeryNonSchedule: DetailMP
          .rbScheduleSurgeryNonSchedule,
        rbScheduleService: DetailMP.rbScheduleService,
        rbScheduleSmallSurgery: DetailMP.rbScheduleSmallSurgery,
        rbScheduleAdviser: DetailMP.rbScheduleAdviser,
        rbScheduleAmbulance: DetailMP.rbScheduleAmbulance,
        rbScheduleAccident: DetailMP.rbScheduleAccident,
        rbScheduleTreatment: DetailMP.rbScheduleTreatment,
        rbScheduleTransplant: DetailMP.rbScheduleTransplant,
        ipdCoPay: DetailMP.ipdCoPay,
        ipdCoPayQuota: DetailMP.ipdCoPayQuota,
        ipdCoPayDeductable: DetailMP.ipdCoPayDeductable,
        ipdCoPayMixPercentage: DetailMP.ipdCoPayMixPercentage,
        ipdCoPayMixNotExceed: DetailMP.ipdCoPayMixNotExceed,
        ipdCoPayMixYear: DetailMP.ipdCoPayMixYear,
        // pricePerPerson:
      });
    }
  }

  handleUpdate = DetailMP => {
    this.setState({
      planName: DetailMP.planName,
      employeeOfPlan: DetailMP.employeeOfPlan,
      ipdType: DetailMP.ipdType,
      ipdLumsumPerYear: DetailMP.ipdLumsumPerYear,
      ipdLumsumPerTime: DetailMP.ipdLumsumPerTime,
      ipdLumsumTimeNotExceedPerYear: DetailMP
        .ipdLumsumTimeNotExceedPerYear,
      rbLumsumRoomPerNight: DetailMP.rbLumsumRoomPerNight,
      rbLumsumNigthNotExceedPerYear: DetailMP
        .rbLumsumNigthNotExceedPerYear,
      rbLumsumPayNotExceedPerNight: DetailMP
        .rbLumsumPayNotExceedPerNight,
      rbLumsumPayNotExceedPerYear: DetailMP
        .rbLumsumPayNotExceedPerYear,
      rbSchedulePatient: DetailMP.rbSchedulePatient,
      rbScheduleIntensiveCarePatient: DetailMP
        .rbScheduleIntensiveCarePatient,
      rbScheduleDoctor: DetailMP.rbScheduleDoctor,
      rbScheduleSurgerySchedule: DetailMP
        .rbScheduleSurgerySchedule,
      rbScheduleSurgeryNonSchedule: DetailMP
        .rbScheduleSurgeryNonSchedule,
      rbScheduleService: DetailMP.rbScheduleService,
      rbScheduleSmallSurgery: DetailMP.rbScheduleSmallSurgery,
      rbScheduleAdviser: DetailMP.rbScheduleAdviser,
      rbScheduleAmbulance: DetailMP.rbScheduleAmbulance,
      rbScheduleAccident: DetailMP.rbScheduleAmbulance,
      rbScheduleTreatment: DetailMP.rbScheduleTreatment,
      rbScheduleTransplant: DetailMP.rbScheduleTransplant,
      ipdCoPay: DetailMP.ipdCoPay,
      ipdCoPayQuota: DetailMP.ipdCoPayQuota,
      ipdCoPayDeductable: DetailMP.ipdCoPayDeductable,
      ipdCoPayMixPercentage: DetailMP.ipdCoPayMixPercentage,
      ipdCoPayMixNotExceed: DetailMP.ipdCoPayMixNotExceed,
      ipdCoPayMixYear: DetailMP.ipdCoPayMixYear,
      opdPerYear: DetailMP.opdPerYear,
      opdPerTime: DetailMP.opdPerTime,
      opdTimeNotExceedPerYear: DetailMP.opdTimeNotExceedPerYear,
      opdCoPay: DetailMP.opdCoPay,
      opdCoPayQuota: DetailMP.opdCoPayQuota,
      opdCoPayDeductable: DetailMP.opdCoPayDeductable,
      opdCoPayMixPercentage: DetailMP.opdCoPayMixPercentage,
      opdCoPayMixNotExceed: DetailMP.opdCoPayMixNotExceed,
      opdCoPayMixYear: DetailMP.opdCoPayMixYear,
      dentalPerYear: DetailMP.dentalPerYear,
      lifePerYear: DetailMP.lifePerYear,
      lifeTimeOfSalary: DetailMP.lifeTimeOfSalary,
      lifeNotExceed: DetailMP.lifeNotExceed,
    });
  }

  // styletabPrice = () => {
  //   if (this.state.morePrice ==) {
  //     return 'active';
  //   }
  //   return '';
  // }
  // styletabPrice = () => this.state.morePrice;

  handleChangeToNull = name => this.setState({ [name]: null })

  handleResetProfilePlan = () => {
    this.setState({ planName: '' });
    this.setState({ employeeOfPlan: '' });
  }

  handleResetDental = () => {
    this.setState({ dentalPerYear: null });
  }

  handleResetLife = () => {
    this.setState({
      lifePerYear: null,
      lifeTimeOfSalary: null,
      lifeNotExceed: null,
    });
  }

  handleResetOPD = () => {
    this.setState({
      opdPerYear: null,
      opdPerTime: null,
      opdTimeNotExceedPerYear: null,
      opdCoPayQuota: null,
      opdCoPayDeductable: null,
      opdCoPayMixPercentage: null,
      opdCoPayMixNotExceed: null,
      opdCoPayMixYear: null,
    });
  }

  handleResetIPD = () => {
    this.setState({
      ipdType: null,
      ipdLumsumPerYear: null,
      ipdLumsumPerTime: null,
      ipdLumsumTimeNotExceedPerYear: null,
      rbLumsumRoomPerNight: null,
      rbLumsumNigthNotExceedPerYear: null,
      rbLumsumPayNotExceedPerNight: null,
      rbLumsumPayNotExceedPerYear: null,
      rbSchedulePatient: null,
      rbScheduleIntensiveCarePatient: null,
      rbScheduleDoctor: null,
      rbScheduleSurgerySchedule: null,
      rbScheduleSurgeryNonSchedule: null,
      rbScheduleService: null,
      rbScheduleSmallSurgery: null,
      rbScheduleAdviser: null,
      rbScheduleAmbulance: null,
      rbScheduleAccident: null,
      rbScheduleTreatment: null,
      rbScheduleTransplant: null,
      ipdCoPay: true,
      ipdCoPayQuota: null,
      ipdCoPayDeductable: null,
      ipdCoPayMixPercentage: null,
      ipdCoPayMixNotExceed: null,
      ipdCoPayMixYear: null,
      opdPerYear: null,
      opdPerTime: null,
      opdTimeNotExceedPerYear: null,
      opdCoPay: false,
      opdCoPayQuota: null,
      opdCoPayDeductable: null,
      opdCoPayMixPercentage: null,
      opdCoPayMixNotExceed: null,
      opdCoPayMixYear: null,
      dentalPerYear: null,
      lifePerYear: null,
      lifeTimeOfSalary: null,
      lifeNotExceed: null,
    });
  }

  handleToggleIpdCoPay = () => {
    console.log('handleToggleOpdCoPay modal', this.state);
    if (this.state.ipdCoPay === true) {
      this.setState({
        DetailMP: this.props.DetailMP,
        ipdCoPay: false,
        ipdCoPayQuota: null,
        ipdCoPayDeductable: null,
        ipdCoPayMixPercentage: null,
        ipdCoPayMixNotExceed: null,
        ipdCoPayMixYear: null,
      });
      console.log('before modal', this.state.DetailMP);
      const MP = this.state.DetailMP
      MP.ipdCoPay = false;
      this.state = {
        DetailMP: MP,
        ipdType: MP.ipdType,
      };
      console.log('after modal', this.state.DetailMP);
    }
    if (this.state.ipdCoPay === false) {
      this.setState({ ipdCoPay: true });
      const MP = this.state.DetailMP
      MP.ipdCoPay = true;
      this.state = {
        DetailMP: MP,
        ipdType: MP.ipdType,
      };
    }
  }

  handleToggleOpdCoPay = () => {
    if (this.state.opdCoPay) {
      this.setState({
        opdCoPay: !this.state.opdCoPay,
        opdCoPayQuota: null,
        opdCoPayDeductable: null,
        opdCoPayMixPercentage: null,
        opdCoPayMixNotExceed: null,
        opdCoPayMixYear: null,
      });
      this.state = {
        DetailMP: this.props.DetailMP,
        ipdType: this.state.ipdType,
      };
      const MP = this.state.DetailMP
      MP.opdCoPay = true;
    } else {
      this.setState({ opdCoPay: !this.state.opdCoPay });
      this.state = {
        DetailMP: this.props.DetailMP,
      };
      const MP = this.state.DetailMP
      MP.opdCoPay = true;
    }
  }

  handleSetGoToNextPage = () => {
    this.setState({ canGoToNextPage: false });
  }

  handleMoveToNextPage = () => {
    if (this.state.warningModal) {
      this.setState({ canGoToNextPage: true });
      this.setState({ warningModal: false });
    } else {
      this.setState({ canGoToNextPage: true });
    }
  }

  handleWarningModal = () => {
    this.setState({ warningModal: true });
  }

  handleNextPage = () => {
    this.setState({ nextPage: false });
  }

  handleBuildNewPlan = () => {
    this.setState({ canBuildNewPlan: true });
  }

  handleUnBuildNewPlan = () => {
    this.setState({ canBuildNewPlan: false });
  }

  handleClose = () => {
    this.props.handleCloseModal();
  }

  render() {
    console.log('--sdsdd--', this.props);
    console.log('-Pro-', this.props.DetailMP);
    // console.log('-Prothis.handleToggleIpdCoPay}-', this.handleToggleIpdCoPay);
    const { DetailMP } = this.props;
    return (
      <Modals
        trigger={<div />}
        open={this.props.modalOpen}
        onClose={() => this.props.handleCloseModal('editDetailMP')}
        className="SubmitPlan"
      >
        <ModalHeaders>
          <CustomHead>ดูแพลน</CustomHead>
        </ModalHeaders>
        <form id="modalPlan" name="modalPlan" onSubmit={e => this.props.handleSubmitEditPlan(e)}>
          <ModalContents>
            <FormSubmitPlan
              styletabPrice={this.state.morePrice}
              activePlan={this.state.activePlan}
              price={this.state.price}
              // handleChangeMasterplan={this.props.handleChangeMasterplan}
              planName={this.state.planName}
              employeeOfPlan={this.state.employeeOfPlan}
              handleResetProfilePlan={this.handleResetProfilePlan}
              DetailMP={this.props.DetailMP}
              // DataCompany={this.props.DataCompany}
              planType={this.props.planType}
            />
          </ModalContents>
          <ModalContentsWithBottom>
            <AllPlan
              styletabPrice={this.state.morePrice}
              activePlan={this.state.activePlan}
              handlePlan={this.handlePlan}
              nextPage={this.state.nextPage}
              handleNextPage={this.handleNextPage}
              handleSetGoToNextPage={this.handleSetGoToNextPage}
              handleWarningModal={this.handleWarningModal}
              handleMoveToNextPage={this.handleMoveToNextPage}
              handleBuildNewPlan={this.handleBuildNewPlan}
              handleUnBuildNewPlan={this.handleUnBuildNewPlan}
              handleToggleIpdCoPay={this.handleToggleIpdCoPay}
              handleToggleOpdCoPay={this.handleToggleOpdCoPay}
              handleChangeToNull={this.handleChangeToNull}
              handleChangeMasterplan={this.props.handleChangeMasterplan}
              handleChange={this.props.handleChange}
              planType={this.props.planType}
              handleResetDental={this.handleResetDental}
              handleResetLife={this.handleResetLife}
              handleResetOPD={this.handleResetOPD}
              handleResetIPD={this.handleResetIPD}
              ipdType={DetailMP.ipdType}
              ipdLumsumPerYear={this.state.ipdLumsumPerYear}
              ipdLumsumPerTime={this.state.ipdLumsumPerTime}
              ipdLumsumTimeNotExceedPerYear={
                this.state.ipdLumsumTimeNotExceedPerYear
              }
              rbLumsumRoomPerNight={this.state.rbLumsumRoomPerNight}
              rbLumsumNigthNotExceedPerYear={
                this.state.rbLumsumNigthNotExceedPerYear
              }
              rbLumsumPayNotExceedPerNight={
                this.state.rbLumsumPayNotExceedPerNight
              }
              rbLumsumPayNotExceedPerYear={this.state.rbLumsumPayNotExceedPerYear}
              rbSchedulePatient={this.state.rbSchedulePatient}
              rbScheduleIntensiveCarePatient={
                this.state.rbScheduleIntensiveCarePatient
              }
              rbScheduleDoctor={this.state.rbScheduleDoctor}
              rbScheduleSurgerySchedule={this.state.rbScheduleSurgerySchedule}
              rbScheduleSurgeryNonSchedule={
                this.state.rbScheduleSurgeryNonSchedule
              }
              rbScheduleService={this.state.rbScheduleService}
              rbScheduleSmallSurgery={this.state.rbScheduleSmallSurgery}
              rbScheduleAdviser={this.state.rbScheduleAdviser}
              rbScheduleAmbulance={this.state.rbScheduleAmbulance}
              rbScheduleAccident={this.state.rbScheduleAccident}
              rbScheduleTreatment={this.state.rbScheduleTreatment}
              rbScheduleTransplant={this.state.rbScheduleTransplant}
              ipdCoPay={this.state.ipdCoPay}
              ipdCoPayQuota={this.state.ipdCoPayQuota}
              ipdCoPayDeductable={this.state.ipdCoPayDeductable}
              ipdCoPayMixPercentage={this.state.ipdCoPayMixPercentage}
              ipdCoPayMixNotExceed={this.state.ipdCoPayMixNotExceed}
              ipdCoPayMixYear={this.state.ipdCoPayMixYear}
              opdCoPay={this.state.opdCoPay}
              opdPerYear={this.state.opdPerYear}
              opdPerTime={this.state.opdPerTime}
              opdTimeNotExceedPerYear={this.state.opdTimeNotExceedPerYear}
              opdCoPayQuota={this.state.opdCoPayQuota}
              opdCoPayDeductable={this.state.opdCoPayDeductable}
              opdCoPayMixPercentage={this.state.opdCoPayMixPercentage}
              opdCoPayMixNotExceed={this.state.opdCoPayMixNotExceed}
              opdCoPayMixYear={this.state.opdCoPayMixYear}
              dentalPerYear={this.state.dentalPerYear}
              lifePerYear={this.state.lifePerYear}
              lifeTimeOfSalary={this.state.lifeTimeOfSalary}
              lifeNotExceed={this.state.lifeNotExceed}
              DetailMP={this.state.DetailMP}
            />
          </ModalContentsWithBottom>
          {/* <ModalChange>
            <span className="edit-mp-title-change">
              แพลนมีการเปลี่ยนแปลง
            </span>
            <span className="edit-mp-subtitle-change">
              ถ้าเสนอราคาแพลนที่มีการเปลี่ยนแปลง แพลนนี้จะไปอยู่ในหัวข้อ&nbsp;
              <span className="edit-mp-subtitle-change-b">รายการแพลนที่คุณเสนอเพิ่มเติม</span>
            </span>
            <ul className="edit-mp-detail-change">
              <li>test</li>
            </ul>
          </ModalChange> */}
        </form>
        <ModalPriceBox>
          <div className="edit-mp-input-price-box">
            {/* <div className="edit-mp-input-price-box-l">เสนอราคาแพลนนี้</div> */}
            {/* <div className="edit-mp-input-price-box-r">
              <input type="number" name={this.props.planIndex}
              id="modalPlanPrice" value={this.state.price}
              className="edit-mp-input-price"
              onChange={e => this.props.handleChangeInput(`${this.props.planType}plan`, e)} />
              <span className="edit-mp-text-r">&nbsp;/&nbsp;คน</span>
            </div> */}
            <div className="edit-mp-btn-box">
              <div className="edit-mp-btn-box-l">
                <button
                  className="edit-mp-btn-cancle"
                  onClick={() => this.props.handleCloseModal('editDetailMP')}
                >
                  ยกเลิก
                </button>
              </div>
              <div className="edit-mp-btn-box-r">
                <button
                  className="edit-mp-btn-save"
                  type="submit"
                  form="modalPlan"
                  // onClick={() => this.props.handleCloseModal('editDetailMP')}
                >
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </ModalPriceBox>
      </Modals>
    );
  }
}

export default connect(null, null)(PlanBoxModal);
