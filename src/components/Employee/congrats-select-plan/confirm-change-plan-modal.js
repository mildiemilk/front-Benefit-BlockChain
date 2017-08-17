import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

const ModalContents = styled(Modal.Content)`
  &&&{
    width: 288px;
    height: 149px;
    border-radius: 5px;
    background-color: #ffffff;
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
  }
  constructor() {
    super();
    this.state = {
      closeOnEscape: false,
      closeOnRootNodeClick: true,
    };
  }

  handleChangePlan = () => {
    window.location.href = '/flexyplan';
    // this.props.handleCloseModal();
  }

  handleClose = () => {
    this.props.handleCloseModal();
  }

  render() {
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
            <span className="select-plan-header-modal">คุณต้องการเปลี่ยนแผนใช่หรือไม่</span>
            <div className="select-plan-btn-modal">
              <button
                className="select-plan-cancel-model"
                onClick={() => this.handleClose()}
              >
                ไม่ใช่
              </button>
              <button
                className="select-plan-confirm-model"
                onClick={() => this.handleChangePlan()}
              >
                ใช่
              </button>
            </div>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ConfirmModal;
