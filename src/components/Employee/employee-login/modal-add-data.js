import React, { Component } from 'react'
import { Modal, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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
  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }
  constructor() {
    super()
    this.state = {
      modalOpen: false,
    }
  }

  handleClose = () => this.setState({ modalOpen: false })

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
            <Form onSubmit={this.props.handleSubmit}>
              <Form.Field>
                <div className="divInput">
                  <img
                    className="iconLetter"
                    src="../../../../employee/icons-8-message@3x.png"
                    alt="letter"
                  />
                  <Form.Input placeholder="อีเมลของคุณ" name="email" />
                </div>
              </Form.Field>
              <Form.Field>
                <div className="divInput">
                  <img
                    className="iconTel"
                    src="../../../../employee/icons-8-phone@3x.png"
                    alt="Tel"
                  />
                  <Form.Input
                    placeholder="เบอร์โทรศัพท์มือถือ"
                    name="tel"
                    type="number"
                  />
                </div>
              </Form.Field>
              <ConfirmButton type="submit">
                ยืนยัน
              </ConfirmButton>
            </Form>
          </div>
        </ModalContents>
      </Modals>
    )
  }
}

export default ModalAddData
