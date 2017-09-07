import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

class JoinBid extends Component {
  static propTypes = {
    modalCancelJoin: PropTypes.bool.isRequired,
    handleOnpenModal: PropTypes.func.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleChangeStateQuotation: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      modalCancelJoin,
      handleOnpenModal,
      handleCloseModal,
      handleChangeStateQuotation,
    } = this.props;
    return (
      <div>
        <div className="joinbid-box">
          <div className="joinbid-l">คุณจะได้รับข้อมูลเพิ่มเติม เมื่อคุณเข้าร่วมการประมูลราคานี้</div>
          <div className="joinbid-r">
            <button className="joinbid-join" onClick={handleChangeStateQuotation}>เข้าร่วม</button>
            <button className="joinbid-cancel" onClick={() => handleOnpenModal('modalCancelJoin')}>ไม่เข้าร่วม</button>
          </div>
        </div>
        <Modal
          className="joinbid-modalcanceljoin-box"
          trigger={<div />}
          open={modalCancelJoin}
          onClose={() => handleCloseModal('modalCancelJoin')}
        >
          <div className="joinbid-modalcancel-box-body">
            <span className="joinbid-modalcancel-title">
              คุณไม่ต้องการเข้าร่วมเสนอราคา
            </span>
            <span className="joinbid-modalcancel-description">
              หากยืนยันไม่เข้าร่วมแล้วจะไม่สามารถกลับเข้ามาเสนอราคาได้อีก
              คุณแน่ใจที่จะไม่เสนอราคาหรือไม่
            </span>
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
      </div>
    );
  }
}

export default JoinBid;
