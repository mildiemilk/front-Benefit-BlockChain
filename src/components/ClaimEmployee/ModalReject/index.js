import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../StyleComponent';
import { ListDetail } from '../ExtendClaim/styled';
import { companyClaim } from '../../../api/profile-company';
import cancelIcon from '../../../../assets/ClaimEmployee/cancelIcon.png';
// import Add from '../../../../assets/EmployeeList/icons-8-checked.png';

const ModalContents = styled(Modal.Content) `
&&&{
  position: absolute;
  top: 29px;
  padding: 0px;
  padding: 0px 35px;
}
`;
const Inputs = styled.input`
  height: 40px;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  width: 100%;
  margin-top: 10px;
  padding-left: 15px;
`;
const Modals = styled(Modal) `
&&&{
  background: transparent;
  width: 550px !important;
  position: absolute;
  left: 62%;
  top: 40%;
}
`;
const Text = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.4px;
  margin-top: 27px;
`;

class ModalReject extends Component {
  static propTypes = {
    claimId: PropTypes.string.isRequired,
    checkResult: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      reason: '',
    };
  }
  handleModal = () =>
  this.setState({
    modalOpen: !this.state.modalOpen,
  })
  handleChange = e => {
    this.setState({
      reason: e.target.value,
    });
  }
  handleReject = () => {
    const { claimId } = this.props;
    const { reason } = this.state;
    companyClaim('reject', claimId, reason)
    .then(() => { this.props.checkResult(); });
    this.handleModal();
  }

  render() {
    return (
      <Modals
        trigger={
          <Button cancle onClick={this.handleModal}>ไม่อนุมัติ</Button>
          }
        open={this.state.modalOpen}
        onClose={this.handleModal}
      >
        <ModalContents>
          <Text><img src={cancelIcon} alt="add" width="70.6" height="70.6" /></Text>
          <Text>กรุณาระบุเหตุผลที่ไม่อนุมัติการเคลมนี้</Text>
          <ListDetail>
            ระบบจะทำการส่ง Email เพื่อแจ้งเตือนผลการพิจารณาแก่พิจารณาโดยอัตโนมัติ
          </ListDetail>
          <Inputs value={this.state.reason} onChange={this.handleChange} placeholder="เหตุผลที่ไม่อนุมัติการเคลม" />
          <div className="row">
            <div className="large-6 columns">
              <Button cancle onClick={this.handleModal}>ยกเลิก</Button>
            </div>
            <div className="large-6 columns">
              <Button onClick={this.handleReject}>ยืนยัน</Button>
            </div>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ModalReject;
