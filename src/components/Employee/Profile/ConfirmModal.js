import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

class ConfirmModal extends Component {
  static propTypes = {
    modalOpen: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      modalOpen,
      handleModal,
    } = this.props;
    return (
      <Modal
        trigger={<div />}
        open={modalOpen}
        onClose={handleModal}
      >
        <div className="profile-confirm-modal-box">
          <span className="profile-confirm-modal-text">คุณต้องการลบสมาชิกคนนี้</span>
          <div className="profile-confirm-modal-btn-box">
            <button
              className="profile-confirm-modal-btn-l"
              onClick={handleModal}
            >
              ไม่ใช่
            </button>
            <button
              className="profile-confirm-modal-btn-r"
              onClick={handleModal}
            >
              ใช่
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ConfirmModal;
