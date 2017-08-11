import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../../../styles/submit-plan.scss';

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 288px;
    margin: 0 auto;
    padding-left: 5%;
    text-align: center;
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

  handleSubmit = () => {
    this.props.handleCloseModal();
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
          <p>คุณเลือกแผน 1</p>
          <p>กดยืนยันการเลือกของคุณ</p>
          <button
            className="button-confirm-flexy-plan"
            onClick={() => this.handleSubmit()}
          >
            ยืนยัน
          </button>
        </ModalContents>
      </Modals>
    );
  }
}

export default ConfirmModal;
