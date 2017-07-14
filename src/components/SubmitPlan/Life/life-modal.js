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
import '../../../styles/submit-plan.scss'

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

class LifeModal extends Component {
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
    console.log(this.props.openModal)
    return (
      <Modals trigger={<div />} open={this.props.openModal}>

        <ModalContents>
          <Modal.Header>
            <p style={{ textAlign: 'center' }}>
              คุณต้องการบันทึกรายละเอียดแพลนของคุณหรือไม่ ?
            </p>
          </Modal.Header>
          <Modal.Content>
            <p style={{ textAlign: 'center' }}>
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

LifeModal.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(LifeModal)
