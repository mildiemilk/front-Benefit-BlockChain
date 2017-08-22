import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../../../styles/submit-plan.scss';

const ModalContents = styled(Modal.Content)`
  &&&{
    width: 288px;
    height: 174px;
    margin: 0 auto;
    text-align: center;
    padding-top: 40px !important;
  }
`;

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    margin-top: -120px;
    box-shadow: none;
  }
`;

class ConfirmModal extends Component {
  static propTypes = {
    openModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    plan: PropTypes.number.isRequired,
  }
  constructor() {
    super();
    this.state = {
      closeOnEscape: false,
      closeOnRootNodeClick: true,
    };
  }

  handleSubmit = () => {
    window.location.href = '/congratselectplan';
    // this.props.handleCloseModal();
  }

  handleClose = () => {
    this.props.handleCloseModal();
  }

  render() {
    const { plan } = this.props;
    return (
      <Modals
        trigger={<div />}
        open={this.props.openModal}
        closeOnEscape={this.statecloseOnEscape}
        closeOnRootNodeClick={this.state.closeOnRootNodeClick}
        onClose={this.handleClose}
      >
        <ModalContents>
          <div>
            <span className="flexy-header-confirm">คุณเลือกแผน {plan + 1}</span>
            <p className="flexy-text-confirm">กดยืนยันการเลือกของคุณ</p>
            <button
              className="flexy-modal-cancel-btn"
              onClick={() => this.handleClose()}
            >
              ยกเลิก
            </button>
            <button
              className="flexy-modal-confirm-btn"
              onClick={() => this.handleSubmit()}
            >
              ยืนยัน
            </button>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ConfirmModal;
