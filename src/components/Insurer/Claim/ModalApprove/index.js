import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../../StyleComponent';
import Add from '../../../../../assets/EmployeeList/icons-8-checked.png';
import { ListDetail } from '../styled';
import { updateStatusClaim } from '../../../../api/Insurer/claim';
// import { companyClaim } from '../../../api/profile-company';

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

class ModalApprove extends Component {
  static propTypes = {
    claimId: PropTypes.string.isRequired,
    // updateStatusClaim: PropTypes.func.isRequired,
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
  handleApprove = () => {
    // console.log('approve--', this.state)
    const { claimId } = this.props;
    updateStatusClaim('approve', claimId, null).then(() => this.handleModal());
  }
  render() {
    return (
      <Modals
        trigger={
          <Button onClick={this.handleModal}>อนุมัติ</Button>
          }
        open={this.state.modalOpen}
        onClose={this.handleModal}
      >
        <ModalContents>
          <Text><img src={Add} alt="add" width="70.6" height="70.6" /></Text>
          <Text>กรุณายืนยันการอนุมัติการเคลมนี้</Text>
          <ListDetail>
            ระบบจะทำการส่ง Email เพื่อแจ้งเตือนผลการพิจารณาแก่พิจารณาโดยอัตโนมัติ
          </ListDetail>
          <div className="row">
            <div className="large-6 columns">
              <Button cancle onClick={this.handleModal}>ยกเลิก</Button>
            </div>
            <div className="large-6 columns">
              <Button onClick={this.handleApprove}>ยืนยัน</Button>
            </div>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ModalApprove;
