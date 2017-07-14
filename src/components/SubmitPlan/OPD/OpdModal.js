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
import PropTypes from 'prop-types'
import styled from 'react-sc'
import { connect } from 'react-redux'
import '../../../styles/SubmitPlan.scss'

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 550px;
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

class OpdModal extends Component {
  constructor() {
    super()
    this.state = { modalOpen: false }
  }

  handleClose = e =>
    this.setState({
      modalOpen: false,
    })

  handleCancel = () => {
    this.props.handleCloseModal()
    this.props.handleReset()
    this.props.handleNextPlan()
  }

  handleSubmit = () => {
    this.props.handleCloseModal()
    this.props.handleNextPlan()
    this.props.handleClick()
  }

  handleOpen = e =>
    this.setState({
      modalOpen: true,
    })
  render() {
    return (
      <Modals trigger={<div />} open={this.props.openModal}>

        <ModalContents>
          <Modal.Header>
            <p className="header-modal">
              คุณต้องการบันทึกรายละเอียดแพลนของคุณหรือไม่ ?
            </p>
          </Modal.Header>
          <Modal.Content>
            <p className="text-modal">
              คุณได้เปลี่ยนแปลงรายละเอียดแพลนโดยไม่ได้ทำการบันทึก
            </p>
          </Modal.Content>
          <Modal.Content style={{ marginTop: '7%' }}>
            <Button
              style={{
                textAlign: 'center',
                width: '232px',
                height: '40px',
                borderRadius: '20px',
                color: '#ffffff',
                backgroundColor: '#f7555f',
                marginLeft: '0.7%',
              }}
              onClick={this.handleCancel}
            >
              ยกเลิก
            </Button>
            <Button
              style={{
                textAlign: 'center',
                width: '232px',
                height: '40px',
                backgroundColor: '#3A7BD5',
                color: 'white',
                borderRadius: '20px',
              }}
              onClick={this.handleSubmit}
              type="submit"
            >
              บันทึก
            </Button>
          </Modal.Content>
        </ModalContents>
      </Modals>
    )
  }
}

OpdModal.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(OpdModal)
