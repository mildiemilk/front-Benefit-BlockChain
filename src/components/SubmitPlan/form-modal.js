import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import '../../styles/submit-plan.scss';
import FormSubmitPlan from './FormSubmitPlan/form-submit-plan';

const ModalContents = styled(Modal.Content) `
  &&&{
    width: 680px;
    position: relative;
    margin: 0 auto;
    padding: 0px;
  }
`;

const Modals = styled(Modal) `
  &&&{
    background: transparent;
    margin-top: -120px;
    box-shadow: none;
  }
`;

class FormModal extends Component {
  static propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
    activePlan: PropTypes.number.isRequired,
    openModalForm: PropTypes.bool.isRequired,
    handlePlan: PropTypes.func.isRequired,
    handleModalFinish: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleResetProfilePlan: PropTypes.func.isRequired,
    planName: PropTypes.string.isRequired,
    employeeOfPlan: PropTypes.number.isRequired,
  }

  constructor() {
    super();
    this.state = {
      modalOpen: false,
      closeOnEscape: false,
      closeOnRootNodeClick: true,
    };
  }

  handleClose = () => {
    this.props.handleCloseModal();
  }

  render() {
    return (
      <Modals
        trigger={<div />}
        open={this.props.openModalForm}
        onClose={this.handleClose}
        closeOnEscape={this.state.closeOnEscape}
        closeOnRootNodeClick={this.state.closeOnRootNodeClick}
        className="SubmitPlan"
      >
        <ModalContents>
          <FormSubmitPlan
            activePlan={this.props.activePlan}
            handlePlan={this.props.handlePlan}
            handleModalFinish={this.props.handleModalFinish}
            handleChange={this.props.handleChange}
            handleResetProfilePlan={this.props.handleResetProfilePlan}
            planName={this.props.planName}
            employeeOfPlan={this.props.employeeOfPlan}
          />
        </ModalContents>
      </Modals>
    );
  }
}

export default connect(null, null)(FormModal);
