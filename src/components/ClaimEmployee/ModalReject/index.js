import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import styled from 'styled-components';
import { Button } from '../../StyleComponent';
import { ListDetail } from '../ExtendClaim/styled';
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
  constructor() {
    super();
    this.state = {
      modalOpen: false,
    };
  }
  handleModal = () =>
  this.setState({
    modalOpen: !this.state.modalOpen,
  })
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
          <Inputs placeholder="เหตุผลที่ไม่อนุมัติการเคลม" />
          <div className="row">
            <div className="large-6 columns">
              <Button cancle onClick={this.handleModal}>ยกเลิก</Button>
            </div>
            <div className="large-6 columns">
              <Button>ยืนยัน</Button>
            </div>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ModalReject;
