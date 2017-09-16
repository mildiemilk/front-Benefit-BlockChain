import React, { Component } from 'react';
import { Modal, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ModalHeader,
  ModalContent,
  ButtonStatusAppove,
} from './styled';
import { Button } from '../StyleComponent';

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
`;

class ModalConfirmPassword extends Component {
  static propTypes = {
    handlePost: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
    content: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    value: PropTypes.string,
    margin: PropTypes.string.isRequired,
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
    const { content, head, data, value } = this.props;
    return (
      <Modals
        trigger={
          <ButtonStatusAppove margin={this.props.margin} onClick={this.handleOpen}>
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

            {data.error
              ? <span style={{ color: 'red' }}>
                <br />
                <div style={{ marginLeft: '15%', marginTop: '2%' }}>
                  {data.message}
                </div>
              </span>
              : <span />}

            <Text>
              หากยืนยัน{head}ไปแล้ว จะไม่สามารถเปลี่ยนแปลงได้
            </Text>

          </ModalContent>
          <div className="row">
            <div className="large-4 large-offset-2 columns">
              <Button cancle onClick={this.handleClose}> ยกเลิก </Button>
            </div>
            <div className="large-4 columns end">
              <Button
                value={value}
                onClick={() => this.props.handlePost(value)}
              >
                {' '}ยืนยัน{' '}
              </Button>
            </div>
          </div>
        </ModalContents>

      </Modals>
    );
  }
}

export default ModalConfirmPassword;
