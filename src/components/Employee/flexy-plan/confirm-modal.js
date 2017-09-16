import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import '../../../styles/submit-plan.scss';
import { selectBenefit, newUser } from '../../../api/Employee/plan';

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
    data: PropTypes.shape({}).isRequired,
    timeUp: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      closeOnEscape: false,
      closeOnRootNodeClick: true,
      renderCongratSelectPlan: false,
      renderHomeDashboard: false,
      renderDashboardStart: false,
    };
    newUser()();
  }

  handleSubmit = () => {
    const { data, timeUp, plan } = this.props;
    let _id = null;
    if (timeUp || data.group.type === 'fixed') {
      _id = data.group.defaultPlan;
    } else {
      _id = data.allBenefit[plan]._id;
    }

    const currentDate = new Date();
    selectBenefit(_id)
    .then(res => {
      if (res) {
        this.props.handleCloseModal();
        if (!timeUp) {
          this.setState({ renderCongratSelectPlan: true });
        } else {
          if (currentDate.toISOString() < data.allBenefit[0].effectiveDate) { // policy don't start
            this.setState({ renderDashboardStart: true });
          } else {
            this.setState({ renderHomeDashboard: true });
          }
        }
      }
    });
    // .catch(err => {
    //   console.log('selectBenefit:error', err);
    // });
  }

  handleClose = () => {
    this.props.handleCloseModal();
  }

  render() {
    const { plan } = this.props;
    const {
      renderHomeDashboard,
      renderDashboardStart,
      renderCongratSelectPlan,
    } = this.state;
    if (renderHomeDashboard) {
      return <Redirect to={{ pathname: '/homedashboard' }} />;
    } else if (renderDashboardStart) {
      return <Redirect to={{ pathname: '/dashboardstart' }} />;
    } else if (renderCongratSelectPlan) {
      return <Redirect to={{ pathname: '/congratselectplan' }} />;
    }
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
