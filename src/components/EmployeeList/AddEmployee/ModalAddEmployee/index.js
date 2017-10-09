import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../../StyleComponent';
import Add from '../../../../../assets/EmployeeList/icons-8-checked.png';

const ModalContents = styled(Modal.Content) `
&&&{
  position: absolute;
  top: 29px;
  padding: 0px;
  padding: 0px 35px;
}
`;

const Modals = styled(Modal) `
&&&{
  background: transparent;
  width: 550px !important;
  position: absolute;
  top: calc(50% - 118px);
  left: calc(50% + 168px);
}
`;
const Text = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.4px;
  margin-top: 27px;
`;

class ModalAddEmployee extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  }
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
          <Button onClick={this.handleModal}>เพิ่มพนักงานใหม่</Button>
          }
        open={this.state.modalOpen}
        onClose={this.handleModal}
      >
        <ModalContents>
          <Text><img src={Add} alt="add" width="70.6" height="70.6" /></Text>
          <Text>ยืนยันการเพิ่มพนักงาน</Text>
          <div className="row">
            <div className="large-6 columns">
              <Button cancle onClick={this.handleModal}>แก้ไข</Button>
            </div>
            <div className="large-6 columns">
              <Button onClick={this.props.handleSubmit}>ยืนยัน</Button>
            </div>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ModalAddEmployee;
