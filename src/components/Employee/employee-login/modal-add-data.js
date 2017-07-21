import React, { Component } from 'react'
import { Modal, Form } from 'semantic-ui-react'
import {
  LogInButton,
  AddDataImg,
  Header,
  Content,
  SpaceHeader,
  SpaceContent,
  ConfirmButton,
  SpaceImg,
} from './styled'
import PropTypes from 'prop-types'
import styled from 'react-sc'

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 320px;
    margin: 0 auto;
    padding-left: 4%;
    text-align: center;
  }
`

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    box-shadow: none;
    margin-top: -120px;
  }
`

class ModalAddData extends Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false,
    }
  }

  handleClose = e => this.setState({ modalOpen: false })

  handleOpen = (email, password) => {
    if (email !== '' && password !== '') {
      this.setState({ modalOpen: true })
    } else {
      this.setState({ modalOpen: false })
    }
  }

  render() {
    return (
      <Modals
        trigger={
          <LogInButton
            onClick={() =>
              this.handleOpen(this.props.email, this.props.password)}
          >
            {' '}{' '}
            ลงชื่อเข้าใช้{' '}
          </LogInButton>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <ModalContents>
          <div className="AddData">
            <SpaceImg>
              <AddDataImg src="../../../../employee/untitled-2.png" />
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

            <Form>
              <Form.Field>
                <div className="divInput">
                  <img
                    className="iconLetter"
                    src="../../../../employee/icons-8-message@3x.png"
                  />
                  <Form.Input placeholder="อีเมลของคุณ" name="email" />
                </div>
              </Form.Field>
              <Form.Field>
                <div className="divInput">
                  <img
                    className="iconTel"
                    src="../../../../employee/icons-8-phone@3x.png"
                  />
                  <Form.Input
                    placeholder="พาสเวิร์ด"
                    name="password"
                    type="password"
                  />
                </div>
              </Form.Field>
            </Form>
          </div>

          <ConfirmButton>
            ยืนยัน
          </ConfirmButton>
        </ModalContents>
      </Modals>
    )
  }
}

export default ModalAddData
