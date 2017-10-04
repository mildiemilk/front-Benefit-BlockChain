import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal } from 'semantic-ui-react';
import {
  ModalHeader,
  ModalContent,
  CancleButton,
  ConfirmButton,
} from './styled';

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 500px;
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

class ModalView extends Component {
  static propTypes = {
    modalOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { modalOpen, handleClose, handleDelete } = this.props;
    return (
      <Modals
        trigger={<div />}
        open={modalOpen}
        onClose={handleClose}
      >
        <ModalContents>
          <ModalHeader>
            ยืนยันการลบแผน <br />
          </ModalHeader>
          <ModalContent>
            เมื่อยืนยันแล้ว คุณจะไม่สามารถเข้าถึงหรือแก้ไขแผนนี้ได้อีก
          </ModalContent>
          <div style={{ marginLeft: '2%', marginTop: '5%' }}>
            <CancleButton onClick={handleClose}> ยกเลิก </CancleButton>
            <ConfirmButton
              onClick={() => handleDelete()}
            >
              {' '}ลบ{' '}
            </ConfirmButton>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ModalView;
// const mapStateToProps = state => ({
//   data: state.postBoxReducer,
// });

// export default connect(mapStateToProps, null)(ModalView);
