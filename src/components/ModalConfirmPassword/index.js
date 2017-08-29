import React, { Component } from 'react';
import { Modal, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ModalHeader,
  ModalContent,
  CancleButton,
  ConfirmButton,
  ButtonStatusAppove,
} from './styled';

const ModalContents = styled(Modal.Content) `
  &&&{
    position: absolute;
    top: 10px;
  }
`;

const Modals = styled(Modal) `
  &&&{
    background: transparent;
    width: 550px !important;
    height: 308px !important;
    position: absolute;
    left: 62%;
    top: 40%;
  }
`;

const Inputs = styled(Input) `
  &&&{
    font-family: Kanit;
    width: 324.6px;
    height: 40px;
    margin-top: 27px;
    margin-left: 75px;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #dddddd;
  }
`;

const Text = styled.div`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 30px;
`;

class ModalConfirmPassword extends Component {
  static propTypes = {
    handlePost: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    data: PropTypes.shape.isRequired,
    content: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    value: PropTypes.string,
  }

  static defaultProps = {
    value: '',
  }

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
    const { content, head } = this.props;
    return (
      <Modals
        trigger={
          <ButtonStatusAppove onClick={this.handleOpen}>
            {content}
          </ButtonStatusAppove>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >

        <ModalContents>
          <ModalHeader>
            {' '}
            <div>กรุณาใส่พาสเวิร์ดของคุณอีกครั้ง</div>
            <div>เพื่อยืนยัน{head}</div>
            {' '}
          </ModalHeader>
          <ModalContent>
            <Inputs
              icon="lock"
              iconPosition="left"
              placeholder="รหัสผ่าน"
              name="passwordToConfirm"
              type="password"
              onChange={this.props.handleChange}
            />

            {this.props.data.error
              ? <span style={{ color: 'red' }}>
                <br />
                <div style={{ marginLeft: '15%', marginTop: '2%' }}>
                  {this.props.data.message}
                </div>
              </span>
              : <span />}

            <Text>
              หากยืนยัน{head}ไปแล้ว จะไม่สามารถเปลี่ยนแปลงได้
            </Text>

          </ModalContent>
          <div style={{ marginLeft: '2%' }}>
            <CancleButton onClick={this.handleClose}> ยกเลิก </CancleButton>
            <ConfirmButton
              value={this.props.value}
              onClick={this.props.handlePost}
            >
              {' '}ยืนยัน{' '}
            </ConfirmButton>
          </div>
        </ModalContents>

      </Modals>
    );
  }
}

export default ModalConfirmPassword;
