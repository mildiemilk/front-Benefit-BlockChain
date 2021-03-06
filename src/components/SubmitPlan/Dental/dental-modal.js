import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import '../../../styles/submit-plan.scss';

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 500px;
    position: relative;
    margin: 0 auto;
    text-align: center;
    width: 38.7vw;
  }
`;

const Modals = styled(Modal)`
  &&&{
    background: transparent !important;
    margin-top: -120px;
    box-shadow: none;
  }
`;

class DentalModal extends Component {
  static propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
    handleNextPlan: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  handleClose = () =>
    this.setState({
      modalOpen: false,
    })

  handleCancel = () => {
    this.props.handleCloseModal();
    this.props.handleNextPlan();
  }

  handleSubmit = () => {
    this.props.handleCloseModal();
    this.props.handleNextPlan();
    this.props.handleClick();
  }

  handleOpen = () =>
    this.setState({
      modalOpen: true,
    })
  render() {
    return (
      <Modals trigger={<div />} open={this.props.openModal}>

        <ModalContents>
          <ModalContents>
            <p className="submit-plan-comfirm-modal-header">
              คุณต้องการบันทึกรายละเอียดแผนของคุณหรือไม่ ?
            </p>
          </ModalContents>
          <ModalContents>
            <p className="submit-plan-comfirm-modal-header">
              คุณได้เปลี่ยนแปลงรายละเอียดแผนโดยไม่ได้ทำการบันทึก
            </p>
          </ModalContents>
          <ModalContents style={{ marginTop: '3%' }}>
            <div style={{ display: 'flex' }}>
              <Button
                className="submit-plan-btn-form-submit-plan btn-red"
                onClick={this.handleCancel}
              >
                ยกเลิก
              </Button>
              <Button
                className="submit-plan-btn-form-submit-plan btn-blue"
                onClick={this.handleSubmit}
                type="submit"
              >
                บันทึก
              </Button>
            </div>
          </ModalContents>
        </ModalContents>
      </Modals>
    );
  }
}

export default connect(null, null)(DentalModal);
