import React, { Component } from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  static propTypes = {
    deleteEmployee: PropTypes.func.isRequired,
    checkStateDelete: PropTypes.func.isRequired,
    idEmployee: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }
  handleModal = () =>
  this.setState({
    modalOpen: !this.state.modalOpen,
  })

  handleDelete = () => {
    console.log('id', this.props.idEmployee);
    this.props.deleteEmployee(this.props.idEmployee)
    .then(() => {
      this.props.checkStateDelete();
    });
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  render() {
    return (
      <Modals
        trigger={
          <div className="bin-employee-list-hr" onClick={this.handleModal} role="button" aria-hidden>
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
              <Button onClick={this.handleDelete}>ลบ</Button>
            </div>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ModalDelete;
