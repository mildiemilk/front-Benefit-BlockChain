import React, { Component } from 'react';
// import { Modal } from 'semantic-ui-react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import JoinBid from './JoinBid';
import Quotation from './Quotation';
import QuotationClaim from './QuotationClaim';
import ModalInsurer from './ModalInsurer';
// import FormSubmitPlan from './SubmitPlan/FormSubmitPlan/form-submit-plan';
// import AllPlan from './SubmitPlan/all-plan';
// import PlanBoxModal from './ModalPlanBox/planbox-modal';
// import IconChat from '../../../../assets/Insurer/icon_chat@3x.png';
import { updateBiddingPrice, editPlanDetail, updateStatus, deletePlan } from '../../../api/Insurer/bidding';
// import {} from ''

class ShowMasterPlan extends Component {
  static propTypes = {
    DataCompany: PropTypes.shape({}).isRequired,
    handleUpdateBiding: PropTypes.func.isRequired,
    end: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    const { DataCompany } = props;
    const { status,
            totalPrice,
            quotationId,
            countBidding,
            startNewInsurance,
            updatedAt,
            expiredOldInsurance,
            plan,
            companyId,
          } = DataCompany;
    let joinbid;
    let quotation;
    let popupQuotationId;
    if (status === 'waiting') {
      joinbid = true;
      quotation = false;
    } else if (status === 'join') {
      joinbid = false;
      quotation = true;
    } else {
      joinbid = false;
      quotation = false;
    }
    if (countBidding === 0) {
      popupQuotationId = true;
    } else {
      popupQuotationId = false;
    }
    this.state = {
      joinbid,
      modalCancelJoin: false,
      modalConfirmCancelJoin: false,
      quotation,
      popupQuotationId,
      masterplan: plan.master,
      insurerplan: plan.insurer,
      editplan: [],
      claimdata: [1, 2, 3],
      selectInsurerPlan: false,
      editDetailMP: false,
      DetailMP: {},
      ipdType: null,
      totalPrice,
      quotationId,
      countBidding,
      startNewInsurance,
      updatedAt,
      expiredOldInsurance,
      isDetail: false,
      companyId,
      planType: '',
      plan,
    };
  }
  componentWillReceiveProps(nextProps) {
    const {
      DataCompany: {
        status,
        totalPrice,
        quotationId,
        countBidding,
        startNewInsurance,
        updatedAt,
        expiredOldInsurance,
        plan,
        companyId,
      },
    } = nextProps;
    let joinbid;
    let quotation;
    let popupQuotationId;
    if (status === 'waiting') {
      joinbid = true;
      quotation = false;
    } else if (status === 'join') {
      joinbid = false;
      quotation = true;
    } else {
      joinbid = false;
      quotation = false;
    }
    if (countBidding === 0) {
      popupQuotationId = true;
    } else {
      popupQuotationId = false;
    }
    this.setState({
      joinbid,
      modalCancelJoin: false,
      modalConfirmCancelJoin: false,
      quotation,
      popupQuotationId,
      masterplan: plan.master,
      insurerplan: plan.insurer,
      editplan: [],
      claimdata: [1, 2, 3],
      selectInsurerPlan: false,
      editDetailMP: false,
      DetailMP: {},
      ipdType: null,
      totalPrice,
      quotationId,
      countBidding,
      startNewInsurance,
      updatedAt,
      expiredOldInsurance,
      isDetail: false,
      companyId,
      planType: '',
      plan,
    });
    // this.props.getCompanyBidding(this.state.companyId);
  }
  // handleOnpenModal = name => this.setState({ [name]: true });
  handleOnpenModal = (name, DetailMP) => {
    if (!DetailMP) {
      this.setState({
        [name]: true,
      });
    } else {
      const { isDetail } = this.state;
      if (!isDetail) {
        this.setState({
          isDetail: true,
          DetailMP,
          [name]: true,
        });
      } else {
        this.setState({ isDetail: false });
      }
    }
  }

  handleOnpenModalPlanDetail = (name, DetailMP, price, index) => {
    const { isDetail } = this.state;
    if (!isDetail) {
      this.setState({
        isDetail: true,
        DetailMP,
        price,
        planIndex: index,
        planType: name,
        editDetailMP: true,
      });
    } else {
      this.setState({ isDetail: false });
    }
  }


  handleCloseModal = nameModal => {
    if (nameModal === 'modalConfirmCancelJoin') {
      const data = this.props.DataCompany;
      const { companyId,
            } = data;
      updateStatus('reject', companyId)();
      this.setState({
        modalCancelJoin: false,
        joinbid: false,
        quotation: false,
      });
    }
    this.setState({ [nameModal]: false });
  }

  handleChangeStateQuotation = () => {
    const data = this.props.DataCompany;
    const { companyId,
          } = data;
    updateStatus('join', companyId)();
    this.setState({
      joinbid: false,
      quotation: true,
    });
  }
  handleDelete = e => {
    deletePlan([e.target.id])();
    this.props.handleUpdateBiding();
    this.setState({ activePlan: -1 });
  }
  changePositionPage = () => {
    if (this.state.position === 'relative-box') {
      this.setState({ position: 'fixed-box' });
    } else {
      this.setState({ position: 'relative-box' });
    }
  }
  handleSubmitEditPlan = e => {
    const { DetailMP } = this.state;
    e.preventDefault();
    const planId = DetailMP.planId;
    editPlanDetail(planId, {
      planId: DetailMP.planId,
      planName: DetailMP.planName,
      employeeOfPlan: DetailMP.employeeOfPlan,
      ipdType: DetailMP.ipdType,
      ipdLumsumPerYear: DetailMP.ipdLumsumPerYear,
      ipdLumsumPerTime: DetailMP.ipdLumsumPerTime,
      ipdLumsumTimeNotExceedPerYear: DetailMP.ipdLumsumTimeNotExceedPerYear,
      rbLumsumRoomPerNight: DetailMP.rbLumsumRoomPerNight,
      rbLumsumNigthNotExceedPerYear: DetailMP.rbLumsumNigthNotExceedPerYear,
      rbLumsumPayNotExceedPerNight: DetailMP.rbLumsumPayNotExceedPerNight,
      rbLumsumPayNotExceedPerYear: DetailMP.rbLumsumPayNotExceedPerYear,
      rbSchedulePatient: DetailMP.rbSchedulePatient,
      rbScheduleIntensiveCarePatient: DetailMP.rbScheduleIntensiveCarePatient,
      rbScheduleDoctor: DetailMP.rbScheduleDoctor,
      rbScheduleSurgerySchedule: DetailMP.rbScheduleSurgerySchedule,
      rbScheduleSurgeryNonSchedule: DetailMP.rbScheduleSurgeryNonSchedule,
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
    }).then(() => {
      this.props.handleUpdateBiding();
      this.handleCloseModal('editDetailMP');
    });
    this.props.handleUpdateBiding();
    this.handleCloseModal('editDetailMP');
  }
  handleChange =(e, { name, value }) => {
    this.setState({ [name]: value });
    const MP = this.state.DetailMP;
    MP[name] = value;
  }
  handleQuotationIdChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  handleSubmitBidding = e => {
    e.preventDefault();
    const { masterplan, insurerplan, quotationId } = this.state;
    // const masterPrice = this.state.masterpla
    let sum = 0;
    let sum1;
    const master = masterplan.map(
      data => {
        sum1 = parseInt(data.price, 10);
        if (isNaN(sum1)) sum1 = 0;
        sum += sum1;
        return {
          planId: data.planDetail._id,
          price: parseInt(data.price, 10),
        };
      },
    );
    const insurer = insurerplan.map(
      data => {
        sum1 = parseInt(data.price, 10);
        if (isNaN(sum1)) sum1 = 0;
        sum += sum1;
        return {
          planId: data.planDetail._id,
          price: parseInt(data.price, 10),
        };
      },
    );
    const data = this.props.DataCompany;
    const { companyId,
          } = data;
    updateBiddingPrice(companyId, {
      totalPrice: sum,
      plan: { master, insurer },
      quotationId,
    }).then(() => {
      this.props.handleUpdateBiding();
      window.location.reload();
    });
    // window.location.reload();
    this.props.handleUpdateBiding();
    this.handleCloseModal('modalCancelJoin');
  }

  handleChangeMasterplan = e => {
    const name = e.target.name;
    const value = e.target.value;
    const MP = this.state.DetailMP;
    MP[name] = parseInt(value, 10);
    this.setState({ DetailMP: MP });
    if (MP[name] > value) {
      this.setState({
        morePrice: 'pricered',
      });
    } else if (MP[name] < value) {
      this.setState({
        morePrice: 'pricegreen',
      });
    } else {
      this.setState({
        morePrice: '',
      });
    }
    this.props.handleUpdateBiding();
  }

  handleChangeInput = (planType, e) => {
    const name = e.target.name;
    const value = e.target.value;
    const plans = this.state[planType];
    const oldPrice = this.state[planType][name].price;
    plans[name].price = parseInt(value, 10);
    this.setState({
      [planType]: plans,
      price: plans[name].price });
    if (oldPrice > plans[name].price) {
      this.setState({
        morePrice: 'pricered',
      });
    } else if (oldPrice < plans[name].price) {
      this.setState({
        morePrice: 'pricegreen',
      });
    } else {
      this.setState({
        morePrice: '',
      });
    }
  }
  render() {
    const {
      joinbid,
      modalCancelJoin,
      modalConfirmCancelJoin,
      quotation,
      masterplan,
      insurerplan,
      plan,
      editplan,
      claimdata,
      selectInsurerPlan,
      editDetailMP,
      totalPrice,
      DetailMP,
      quotationId,
      countBidding,
      startNewInsurance,
      updatedAt,
      popupQuotationId,
      ipdType,
      price,
      planType,
      planIndex,
      expiredOldInsurance,
    } = this.state;
    return (
      <div>
        <div className="show-mp-box">
          {
            joinbid
            ? <JoinBid
              handleOnpenModal={this.handleOnpenModal}
              handleChangeStateQuotation={this.handleChangeStateQuotation}
              end={this.props.end}
            />
            : <div />
          }
          {
            quotation
            ? <Quotation
              masterplan={masterplan}
              insurerplan={insurerplan}
              editplan={editplan}
              totalPrice={totalPrice}
              handleDelete={this.handleDelete}
              quotationId={quotationId}
              countBidding={countBidding}
              startNewInsurance={startNewInsurance}
              updatedAt={updatedAt}
              expiredOldInsurance={expiredOldInsurance}
              handleOnpenModalPlanDetail={this.handleOnpenModalPlanDetail}
              handleChangeInput={this.handleChangeInput}
              styletabPrice={this.morePrice}
              handleSubmitBidding={this.handleSubmitBidding}
            />
            : <div />
          }
        </div>
        {
          quotation
          ? <div>
            <QuotationClaim
              claimdata={claimdata}
            />
            {this.props.end
            ? <div />
            : <div className="quotation-btn-price-box">
              {
                popupQuotationId
                ? <button className="quotation-btn-price" onClick={() => this.handleOnpenModal('modalCancelJoin')}>
                    เสนอราคา
                  </button>
                : <button className="quotation-btn-price" type="submit" form="bidding_price" >
                    เสนอราคา
                  </button>
              }
            </div>
            }
            {/* <div className="quotation-chat-box">
              <img alt="" src={IconChat} className="quotation-icon-chat" />
              แชทกับ White Cat Company
            </div> */}
          </div>
          : <div />
        }
        <ModalInsurer
          joinbid={joinbid}
          modalConfirmCancelJoin={modalConfirmCancelJoin}
          modalCancelJoin={modalCancelJoin}
          handleCloseModal={this.handleCloseModal}
          handleSubmitEditPlan={this.handleSubmitEditPlan}
          selectInsurerPlan={selectInsurerPlan}
          editDetailMP={editDetailMP}
          price={price}
          DetailMP={DetailMP}
          quotationId={this.state.quotationId}
          handleChange={this.handleChange}
          handleChangeMasterplan={this.handleChangeMasterplan}
          insurerplan={insurerplan}
          Plan={plan}
          ipdType={ipdType}
          planType={planType}
          planIndex={planIndex}
          handleChangeInput={this.handleChangeInput}
          handleQuotationIdChange={this.handleQuotationIdChange}
          handleOnpenModalPlanDetail={this.handleOnpenModalPlanDetail}
          handleSubmitBidding={this.handleSubmitBidding}
        />
      </div>
    );
  }
}

export default ShowMasterPlan;
