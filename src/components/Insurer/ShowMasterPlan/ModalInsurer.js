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
    selectInsurerPlan: PropTypes.bool.isRequired,
    editDetailMP: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      joinbid,
      modalCancelJoin,
      handleCloseModal,
      selectInsurerPlan,
      editDetailMP,
    } = this.props;
    return (
      <div>
        <Modal
          className="joinbid-modalcanceljoin-box"
          trigger={<div />}
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
              : <input className="quotation-input-quotation" />
            }
            <div className="joinbid-modalcancel-btn-group">
              <button
                className="joinbid-modalcancel-btn-cancel"
                onClick={() => handleCloseModal('modalCancelJoin')}
              >
                ยกเลิก
              </button>
              <button
                className="joinbid-modalcancel-btn-confirm"
                onClick={() => handleCloseModal('modalCancelJoin')}
              >
                ยืนยัน
              </button>
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
          handleCloseModal={handleCloseModal}
          activePlan={[1, 2, 3]}
          planList={[1, 2, 3]}
        />
      </div>
    );
  }
}

export default ModalInsurer;
