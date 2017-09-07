import React, { Component } from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { Button } from '../../StyleComponent';

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

class ModalDelete extends Component {
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
          <div className="bin-employee-list" onClick={this.handleModal} role="button" aria-hidden>
            <Icon name="trash" />
          </div>}
        open={this.state.modalOpen}
        onClose={this.handleModal}
      >
        <ModalContents>
          <Text><Icon name="trash" size="big" /></Text>
          <Text>ต้องการลบรายชื่อนี้ออกจากระบบ</Text>
          <div className="row">
            <div className="large-6 columns">
              <Button cancle onClick={this.handleModal}>ยกเลิก</Button>
            </div>
            <div className="large-6 columns">
              <Button>ลบ</Button>
            </div>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ModalDelete;
