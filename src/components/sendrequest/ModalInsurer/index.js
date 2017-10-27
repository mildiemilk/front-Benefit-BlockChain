import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal, Icon } from 'semantic-ui-react';
import { Edit } from './styled';
import ChooseInsurer from '../../ChooseInsurer';

const ModalContents = styled(Modal.Content)`
  &&&{

    margin: 0 auto;
    padding-left: 4%;
  }
`;

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    margin-top: -120px;
    box-shadow: none;
  }
`;

class ModalInsurer extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  handleClose = () =>
    this.setState({
      modalOpen: false,
    })

  handleOpen = () =>
    this.setState({
      modalOpen: true,
    })
  render() {
    return (
      <Modals
        trigger={
          <Edit onClick={this.handleOpen}>
            <Icon name="write" />แก้ไข
          </Edit>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >

        <ModalContents>

          <ChooseInsurer />

        </ModalContents>

      </Modals>
    );
  }
}

export default ModalInsurer;
