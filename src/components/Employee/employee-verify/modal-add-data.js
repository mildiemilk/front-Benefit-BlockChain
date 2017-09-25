import React, { Component } from 'react';
import { Modal, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  AddDataImg,
  Header,
  Content,
  SpaceHeader,
  SpaceContent,
  ConfirmButton,
  SpaceImg,
} from './styled';
import ImgGift from '../../../../assets/employee/untitled-2@3x.png';
import IconEmail from '../../../../assets/employee/icons-8-message@3x.png';
import IconPhone from '../../../../assets/employee/icons-8-phone@3x.png';

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 320px;
    margin: 0 auto;
    padding-left: 4%;
    text-align: center;
  }
`;

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    box-shadow: none;
    margin-top: -120px;
  }
`;
class ModalAddData extends Component {
  static propTypes = {
    error: PropTypes.string.isRequired,
    showModal: PropTypes.bool.isRequired,
    handleChangeInput: PropTypes.func.isRequired,
    handleSubmitButtonModal: PropTypes.func.isRequired,
    handleHideModel: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Modals
        open={this.props.showModal}
        onClose={this.props.handleHideModel}
      >
        <ModalContents>
          <div className="AddData">
            <SpaceImg>
              <AddDataImg src={ImgGift} />
            </SpaceImg>
            <SpaceHeader>
              <Header>
                ยินดีต้อนรับ
              </Header>
            </SpaceHeader>
            <SpaceContent>
              <Content>
                กรุณากรอกรายละเอียด
                <br />
                เพื่อสิทธิประโยชน์สูงสุดของคุณ
              </Content>
            </SpaceContent>
            <Form onSubmit={this.props.handleSubmitButtonModal}>
              <Form.Field>
                <div className="divInput">
                  <img
                    className="iconLetter"
                    src={IconEmail}
                    alt="letter"
                  />
                  <Form.Input
                    placeholder="อีเมลของคุณ"
                    name="email"
                    onChange={this.props.handleChangeInput}
                  />
                </div>
              </Form.Field>
              <Form.Field>
                <div className="divInput">
                  <img
                    className="iconTel"
                    src={IconPhone}
                    alt="phone"
                  />
                  <Form.Input
                    placeholder="เบอร์โทรศัพท์มือถือ"
                    name="phone"
                    type="tel"
                    onChange={this.props.handleChangeInput}
                  />
                </div>
              </Form.Field>
              <p style={{ color: 'red' }}>{this.props.error}</p>
              <ConfirmButton type="submit">
                ยืนยัน
              </ConfirmButton>
            </Form>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ModalAddData;
