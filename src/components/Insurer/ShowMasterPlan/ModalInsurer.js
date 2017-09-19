import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Checkbox } from 'semantic-ui-react';
import PlanBoxModal from './ModalPlanBox/planbox-modal';
// import FormSubmitPlan from './SubmitPlan/FormSubmitPlan';
// import AllPlan from './SubmitPlan/all-plan';

class ModalInsurer extends Component {
  static propTypes = {
    joinbid: PropTypes.bool.isRequired,
    modalCancelJoin: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    // handleDelete: PropTypes.func.isRequired,
    handleQuotationIdChange: PropTypes.func.isRequired,
    handleChangeMasterplan: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeInput: PropTypes.func.isRequired,
    handleSubmitBidding: PropTypes.func.isRequired,
    handleSubmitEditPlan: PropTypes.func.isRequired,
    selectInsurerPlan: PropTypes.bool.isRequired,
    editDetailMP: PropTypes.bool.isRequired,
    // Plan: PropTypes.shape({}).isRequired,
    DetailMP: PropTypes.shape({}).isRequired,
    // masterplan: PropTypes.shape({}).isRequired,
    // insurerplan: PropTypes.shape({}).isRequired,
    // DataCompany: PropTypes.shape({}).isRequired,
    planType: PropTypes.string.isRequired,
    ipdType: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    planIndex: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('ipdTypeModal--ggg--', this.props.planIndex);
    const {
      joinbid,
      modalCancelJoin,
      handleCloseModal,
      selectInsurerPlan,
      handleSubmitEditPlan,
      handleSubmitBidding,
      handleChangeInput,
      editDetailMP,
      DetailMP,
      price,
    } = this.props;
    return (
      <div>
        <Modal
          className="joinbid-modalcanceljoin-box"
          trigger={<div />}
          // dataBiddingPrice={BiddingPrices}
          open={modalCancelJoin}
          onClose={() => handleCloseModal('modalCancelJoin')}
        >
          <div className="joinbid-modalcancel-box-body">
            <span className="joinbid-modalcancel-title">
              {
                joinbid
                ? 'คุณไม่ต้องการเข้าร่วมเสนอราคา'
                : 'กรุณากรอกหมายเลข Quotation'
              }
            </span>
            {
              joinbid
              ? <span className="joinbid-modalcancel-description">
              หากยืนยันไม่เข้าร่วมแล้วจะไม่สามารถกลับเข้ามาเสนอราคาได้อีก
              คุณแน่ใจที่จะไม่เสนอราคาหรือไม่
            </span>
              : <form id="bidding_price" name="bidding_price" onSubmit={e => this.props.handleSubmitBidding(e)}><div className="quotation-input-div"> <input className="quotation-input-quotation" value={this.state.quotationId} name="quotationId" onChange={e => this.props.handleQuotationIdChange(e)} /></div></form>
            }
            <div className="joinbid-modalcancel-btn-group">
              <button
                className="joinbid-modalcancel-btn-cancel"
                onClick={() => handleCloseModal('modalCancelJoin')}
              >
                ยกเลิก
              </button>
              {
                joinbid
                ? <button className="joinbid-modalcancel-btn-confirm" onClick={() => handleCloseModal('modalConfirmCancelJoin')}>
                  ยืนยัน
                </button>
                : <button type="submit" form="bidding_price" className="joinbid-modalcancel-btn-confirm">
                  ยืนยัน
                </button>
              }
            </div>
          </div>
        </Modal>
        <Modal
          className="joinbid-modalcanceljoin-box"
          trigger={<div />}
          open={selectInsurerPlan}
          onClose={() => handleCloseModal('selectInsurerPlan')}
        >
          <div className="joinbid-modalcancel-box-body">
            <span className="joinbid-modalcancel-title">
            เพิ่มจากแผนประกันภัยของคุณ
            </span>
            <div className="quotation-detail-group">
              <span className="quotation-detail-text grap-detail-select-plan">
                ชื่อแผน
                <Icon className="quotation-icon-plan-name" name="sort descending" />
              </span>
              <span className="quotation-detail-text">เปลี่ยนชื่อแผน</span>
              <span className="quotation-detail-text">ราคาที่จะเสนอ</span>
            </div>
            <div className="quotation-select-plan-box">
              <div className="quotation-select-plan-active">
                <div className="quotation-detail-plan-box">
                  <Checkbox className="quotation-checkbox-select-plan" label="Management 1" checked />
                </div>
                <div className="quotation-detail-plan-box">
                  <input className="quotation-input-select-plan" type="text" defaultValue="exculsive plan 1" />
                </div>
                <div className="quotation-detail-plan-box">
                  <input className="quotation-input-select-plan text-rigth" type="number" defaultValue="15000" />
                </div>
              </div>
              <div className="quotation-select-plan-active">
                <div className="quotation-detail-plan-box">
                  <Checkbox className="quotation-checkbox-select-plan" label="Management 1" checked />
                </div>
                <div className="quotation-detail-plan-box">
                  <input className="quotation-input-select-plan" type="text" defaultValue="exculsive plan 1" />
                </div>
                <div className="quotation-detail-plan-box">
                  <input className="quotation-input-select-plan text-rigth" type="number" defaultValue="15000" />
                </div>
              </div>
              <div className="quotation-select-plan-deactive">
                <div className="quotation-detail-plan-box">
                  <Checkbox className="quotation-checkbox-select-plan" label="Management 1" />
                </div>
                <div className="quotation-detail-plan-box">
                  <input className="quotation-input-select-plan" type="text" />
                </div>
                <div className="quotation-detail-plan-box">
                  <input className="quotation-input-select-plan text-rigth" type="number" />
                </div>
              </div>
              <div className="quotation-select-plan-deactive">
                <div className="quotation-detail-plan-box">
                  <Checkbox className="quotation-checkbox-select-plan" label="Management 1" />
                </div>
                <div className="quotation-detail-plan-box">
                  <input className="quotation-input-select-plan" type="text" />
                </div>
                <div className="quotation-detail-plan-box">
                  <input className="quotation-input-select-plan text-rigth" type="number" />
                </div>
              </div>
            </div>
            <div className="quotation-modal-btn-group">
              <div className="quotation-btn-group-l">
                <button
                  className="joinbid-modalcancel-btn-cancel"
                  onClick={() => handleCloseModal('selectInsurerPlan')}
                >
                  ยกเลิก
                </button>
              </div>
              <div className="quotation-btn-group-r">
                <button
                  className="joinbid-modalcancel-btn-confirm"
                  onClick={() => handleCloseModal('selectInsurerPlan')}
                >
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        </Modal>
        <PlanBoxModal
          modalOpen={editDetailMP}
          DetailMP={DetailMP}
          handleChange={this.props.handleChange}
          handleChangeMasterplan={this.props.handleChangeMasterplan}
          planType={this.props.planType}
          planIndex={this.props.planIndex}
          ipdType={this.props.ipdType}
          handleChangeInput={handleChangeInput}
          price={price}
          handleCloseModal={handleCloseModal}
          handleSubmitEditPlan={handleSubmitEditPlan}
          handleSubmitBidding={handleSubmitBidding}
          activePlan={[1, 2, 3]}
          planList={[1, 2, 3]}
        />
      </div>
    );
  }
}

export default ModalInsurer;
