import React, { Component } from 'react'
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
  Input,
} from 'semantic-ui-react'
import {
  ModalHeader,
  ModalContent,
  ButtonNew,
  CancleButton,
  ConfirmButton,
} from './styled'
import PropTypes from 'prop-types'
import styled from 'react-sc'
import passwordIcon from '../image/icons8-password.png'
import { connect } from 'react-redux'

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 500px;
    margin: 0 auto;
    padding-left: 4%;
  }
`

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    box-shadow: none;
    margin-top: -120px;
  }
`

class ModalPostbox extends Component {
  constructor() {
    super()
    this.state = { modalOpen: false }
  }

  handleClose = e =>
    this.setState({
      modalOpen: false,
    })

  handleOpen = e =>
    this.setState({
      modalOpen: true,
    })
  render() {
    return (
      <Modals
        trigger={
          <ButtonNew onClick={this.handleOpen}>
            {' '}เลือก Broker
          </ButtonNew>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >

        <ModalContents>
          <ModalHeader>
            {' '}
            กรุณาใส่พาสเวิร์ดของคุณอีกครั้งเพื่อ
            {' '}
            <br />
            {' '}
            ยืนยันการเลือกโบรกเกอร์
            {' '}
            <br />
            {' '}
          </ModalHeader>
          <ModalContent>
            <Input
              style={{
                width: '280px',
                height: '40px',
                marginLeft: '12%',
              }}
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

            <p style={{ paddingTop: '4%' }}>
              หากเลือกโบรกเกอร์ไปแล้ว จะไม่สามารถเปลี่ยนแปลงโบรกเกอร์ได้
            </p>

          </ModalContent>
          <div style={{ marginLeft: '2%' }}>
            <CancleButton onClick={this.handleClose}> ยกเลิก </CancleButton>
            <ConfirmButton onClick={this.props.handlePost}>
              {' '}ยืนยัน{' '}
            </ConfirmButton>
          </div>
        </ModalContents>

      </Modals>
    )
  }
}

ModalPostbox.propTypes = {
  handlePost: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  data: state.postBoxReducer,
})

export default connect(mapStateToProps, null)(ModalPostbox)
