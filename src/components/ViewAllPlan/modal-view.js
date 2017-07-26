import React, { Component } from 'react'
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
  Input,
  Icon,
  Popup,
} from 'semantic-ui-react'
import {
  ModalHeader,
  ModalContent,
  ButtonNew,
  CancleButton,
  ConfirmButton,
} from './styled'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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
    margin-top: -120px;
    box-shadow: none;
  }
`

const Inputs = styled(Input)`
  &&&{
    font-family: Kanit;
  }
`

class ModalView extends Component {
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
          <Popup
            trigger={
              <Icon
                disabled
                name="trash"
                size="large"
                onClick={this.handleOpen}
              />
            }
            content="ลบแผน"
            position="bottom left"
            size="mini"
            basic
          />
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >

        <ModalContents>
          <ModalHeader>
            ยืนยันการลบแพลน <br />
          </ModalHeader>
          <ModalContent>
            เมื่อยืนยันแล้ว คุณจะไม่สามารถเข้าถึงหรือแก้ไขแพลนนี้ได้อีก
          </ModalContent>
          <div style={{ marginLeft: '2%', marginTop: '5%' }}>
            <CancleButton> ยกเลิก </CancleButton>
            <ConfirmButton
              onClick={() => this.props.handleDelete(this.props.planId)}
            >
              {' '}ลบ{' '}
            </ConfirmButton>
          </div>
        </ModalContents>
      </Modals>
    )
  }
}

const mapStateToProps = state => ({
  data: state.postBoxReducer,
})

export default connect(mapStateToProps, null)(ModalView)
