import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import IconPlan from '../../../../assets/Insurer/icon_plan@3x.png';
import IconDownload from '../../../../assets/Insurer/icon_download@3x.png';
import IconView from '../../../../assets/Insurer/icon_view@3x.png';
import IconAddPlan from '../../../../assets/Insurer/icon_add_plan@3x.png';
import IconTrash from '../../../../assets/Insurer/icons-8-trash.png';
// import { updateBiddingPrice, deleteInsurerPlan } from '../../../api/Insurer/bidding';

class Quotation extends Component {
  static propTypes = {
    masterplan: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    insurerplan: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleOnpenModalPlanDetail: PropTypes.func.isRequired,
    handleSubmitBidding: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleChangeInput: PropTypes.func.isRequired,
    totalPrice: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    styletabPrice: PropTypes.string.isRequired,
    countBidding: PropTypes.number.isRequired,
    quotationId: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleSubmitBidding = this.handleSubmitButtonModal.bind(this);
  }

  ShowMasterPlan = plans =>
    plans.map(
      (plan, index) =>
        <div className="quotation-body-show-mp" keys={index}>
          <div className="quotation-mp-name-box">
            <img alt="" className="quotation-icon-plan" src={IconPlan} />
            <span className="quotation-mp-name">{plan.planDetail.planName}</span>
          </div>
          <div className="quotation-mp-price-box">
            <input
              className="quotation-mp-input-price"
              type="number"
              placeholder="เสนอราคา"
              name={index}
              id={`bidding_price_${index}`}
              value={plan.price}
              onChange={e => this.props.handleChangeInput('masterplan', e)}
            />
          </div>
          <div className={`quotation-mp-price-box ${this.props.styletabPrice}`}>
            <div
              className="quotation-circle-icon-view"
              onClick={() => this.props.handleOnpenModalPlanDetail('master', plan.planDetail, plan.price, index)}
              role="button"
              aria-hidden
            >
              <img alt="" className="quotation-mp-icon-view" src={IconView} />
            </div>
            <div className="quotation-circle-icon-download">
              <img alt="" className="quotation-mp-icon-download" src={IconDownload} />
            </div>
          </div>
        </div>,
    );
  ShowInsurerPlan = plans =>
    plans.map(
      (plan, index) =>
        <div className="quotation-body-show-mp" keys={index}>
          <div className="quotation-mp-name-box">
            <img alt="" className="quotation-icon-plan" src={IconPlan} />
            <span className="quotation-mp-name">{plan.planDetail.planName}</span>
          </div>
          <div className={`quotation-mp-price-box ${this.props.styletabPrice}`}>
            <input
              className={`quotation-mp-input-price ${this.props.styletabPrice}`}
              type="number"
              placeholder="เสนอราคา"
              name={index}
              id={`bidding_price_${index}`}
              value={plan.price}
              onChange={e => this.props.handleChangeInput('insurerplan', e)}
            />
          </div>
          <div className="quotation-mp-price-box">
            <div
              id={plan.planDetail.planId}
              onClick={() => this.props.handleDelete(plan.planDetail.planId)}
              // onClick={this.props.handleDelete}
              className="quotation-circle-icon-view"
              role="button"
              aria-hidden
            >
              <img alt="" className="quotation-mp-icon-view" src={IconTrash} />
            </div>
            <div
              className="quotation-circle-icon-view"
              onClick={() => this.props.handleOnpenModalPlanDetail('insurer', plan.planDetail, plan.price, index)}
              role="button"
              aria-hidden
            >
              <img alt="" className="quotation-mp-icon-view" src={IconView} />
            </div>
            <div className="quotation-circle-icon-download">
              <img alt="" className="quotation-mp-icon-download" src={IconDownload} />
            </div>
          </div>
        </div>,
    );

  render() {
    const {
      masterplan,
      insurerplan,
      handleOnpenModalPlanDetail,
      totalPrice,
      updatedAt,
      countBidding,
      quotationId,
    } = this.props;
    // console.log('props', this.props.masterplan);
    return (
      <div>
        <br />
        <form id="bidding_price" name="bidding_price" onSubmit={e => this.props.handleSubmitBidding(e)}>
          <div className="quotation-box quotation-line">
            <div className="quotation-header-box">
              <div className="quotation-header-l">
                <span className="quotation-l-text">เลขที่ใบเสนอราคา : {(quotationId === '') ? '-' : quotationId}</span>
                <span className="quotation-l-text">เสนอราคาไปแล้ว : {(countBidding === '') ? '0' : countBidding} ครั้ง</span>
                <span className="quotation-l-text">วันที่เสนอราคาล่าสุด : {moment(updatedAt).locale('th').format('DD MMMM YYYY')}</span>
              </div>
              <div className="quotation-header-r">
                <span className="quptation-r-text">ราคาที่เสนอไป</span>
                <span className="quptation-r-price">{(totalPrice === '') ? '-' : totalPrice}</span>
              </div>
            </div>
          </div>
          <div className="quotation-box">
            <div className="quotation-show-mp">
              <span className="quotation-body-title">รายการแผนทั้งหมด</span>
              <div className="quotation-body-show-mp-box">
                {this.ShowMasterPlan(masterplan)}
              </div>
              <div className="quotation-mp-edit-title-box">
                <span className="quotation-mp-edit-title">รายการแผนที่คุณเสนอเพิ่มเติม</span>
                <div className="quotation-btn-add-plan-box">
                  <button className="quotation-mp-edit-btn" onClick={() => handleOnpenModalPlanDetail('selectInsurerPlan', masterplan)}>
                    <img alt="" className="quotation-icon-add-plan" src={IconAddPlan} />
                    เพิ่มจากแผนประกันภัยของคุณ
                  </button>
                </div>
              </div>
              <div className="quotation-body-show-mp-box">
                {this.ShowInsurerPlan(insurerplan)}
                {
                  insurerplan.length === 0
                  ? <div className="quotation-mp-edit-noplan">
                    ยังไม่มีแผนเพิ่มเติม
                  </div>
                  : <div />
                }
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Quotation;
