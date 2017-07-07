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
} from 'semantic-ui-react'
import {
  ModalHeader,
  ModalContent,
  ButtonNew,
  CancleButton,
  ConfirmButton,
  Edit,
} from './styled'
import PropTypes from 'prop-types'
import styled from 'react-sc'
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
  }
`

const Inputs = styled(Input)`
  &&&{
    font-family: Kanit;
  }
`

class ModalInsurer extends Component {
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
          <Edit onClick={this.handleOpen}>
            <Icon name="write" />แก้ไข
          </Edit>
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

            dfdgfkdfgjh

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

ModalInsurer.propTypes = {
  handlePost: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(ModalInsurer)
