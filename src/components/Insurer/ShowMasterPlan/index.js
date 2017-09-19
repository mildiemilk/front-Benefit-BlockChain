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
import IconChat from '../../../../assets/Insurer/icon_chat@3x.png';
import { updateBiddingPrice, editPlanDetail, updateStatus } from '../../../api/Insurer/bidding';
// import {} from ''

class ShowMasterPlan extends Component {
  static propTypes = {
    DataCompany: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    const data = this.props.DataCompany;
    const { status,
            totalPrice,
            quotationId,
            countBidding,
            startNewInsurance,
            updatedAt,
            expiredOldInsurance,
            plan,
            companyId,
          } = data;
    console.log('quotationId---', countBidding);
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
    if (countBidding === 0 && status === 'join') {
      console.log('quotationId false');
      popupQuotationId = true;
    } else {
      console.log('quotationId false');
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
      plan,
    };
  }

  // handleOnpenModal = name => this.setState({ [name]: true });
  handleOnpenModal = (name, DetailMP) => {
    console.log('call handleClick--name', DetailMP);
    if (!DetailMP) {
      console.log('call handle');
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

  handleOnpenModalPlanDetail = (name, DetailMP, price) => {
    console.log('call handleClick', DetailMP);
    const { isDetail } = this.state;
    if (!isDetail) {
      this.setState({
        isDetail: true,
        DetailMP,
        price,
        editDetailMP: true,
      });
    } else {
      this.setState({ isDetail: false });
    }
  }


  handleCloseModal = nameModal => {
    console.log('nameModal-xxx--', nameModal)
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
    // if (nameModal === 'modalQuotaionJoin') {
    //   if (this.state.quotationId === '') {
    //     this.setState({ modalCancelJoin: true });
    //   }
    //   this.setState({ modalCancelJoin: false });
    // }
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
    console.log('handleSubmitEditPlanDetailMP---', DetailMP);
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
    })();
  }
  handleChange =(e, { name, value }) => {
    // const name = e.target.name;
    // const value = e.target.value;
    console.log('nameindex', name);
    this.setState({ [name]: value });
    const MP = this.state.DetailMP
    MP[name] = value;
    console.log('nameindex-value--', this.state);
  }
  handleQuotationIdChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    console.log('this.state', this.state);
  }
  handleSubmitBidding = e => {
    e.preventDefault();
    console.log('ffdfffdfdf-dddd-', this.state);
    const { masterplan, insurerplan, quotationId } = this.state;
    // const masterPrice = this.state.masterpla
    let sum = 0;
    let sum1;
    const master = masterplan.map(
      data => {
        console.log('data--', parseInt(data.price, 10));
        sum1 = parseInt(data.price, 10);
        sum += sum1;
        return {
          planId: data.planDetail._id,
          price: parseInt(data.price, 10),
        }
      },
    )
    const insurer = insurerplan.map(
      data => {
        console.log('data--', parseInt(data.price, 10));
        sum1 = parseInt(data.price, 10);
        sum += sum1;
        return {
          planId: data.planDetail._id,
          price: parseInt(data.price, 10),
        }
      },
    )
    const data = this.props.DataCompany;
    const { companyId,
          } = data;
    console.log('sumf--', companyId);
    updateBiddingPrice(companyId, {
      totalPrice: sum,
      plan: { master, insurer },
      quotationId,
    })();
  }

  handleChangeMasterplan = e => {
    const name = e.target.name;
    const value = e.target.value;
    const MP = this.state.DetailMP
    MP[name] = parseInt(value, 10);
    this.setState({ DetailMP: MP });
    console.log('--this.state--', this.state);
    if (MP[name] > value) {
      console.log('less');
      this.setState({
        morePrice: 'pricered',
      });
    } else if (MP[name] < value) {
      console.log('more');
      this.setState({
        morePrice: 'pricegreen',
      });
    } else {
      this.setState({
        morePrice: '',
      });
    }
  }
  handleChangeInput = (planType, e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log('name--->', name);
    const plans = this.state[planType];
    console.log('value--->', this.state[planType][name].price);
    const oldPrice = this.state[planType][name].price;
    plans[name].price = value;
    console.log('new value--->', plans[name]);
    // this.setState({ [planType]: plans }, () => console.log('--->', plans[name].price));
    this.setState({ [planType]: plans });
    if (oldPrice > plans[name].price) {
      console.log('less');
      this.setState({
        morePrice: 'pricered',
      });
    } else if (oldPrice < plans[name].price) {
      console.log('more');
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
    // this.props.sendToParent({detail:'prim ba'}, 0);
    // const data = this.props.data;
    // const { plan } = data;
    // console.log('call handleClick----', this.state.companyId);
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
            <div className="quotation-btn-price-box">
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
            <div className="quotation-chat-box">
              <img alt="" src={IconChat} className="quotation-icon-chat" />
              แชทกับ White Cat Company
            </div>
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
          handleQuotationIdChange={this.handleQuotationIdChange}
          handleOnpenModalPlanDetail={this.handleOnpenModalPlanDetail}
          handleSubmitBidding={this.handleSubmitBidding}
        />
      </div>
    );
  }
}

export default ShowMasterPlan;
