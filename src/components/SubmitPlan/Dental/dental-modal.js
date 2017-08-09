import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import '../../../styles/submit-plan.scss'

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 500px;
    position: relative;
    margin: 0 auto;
  }
`

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    margin-top: -120px;
    box-shadow: none;
  }
`

class DentalModal extends Component {
  static propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
    handleNextPlan: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
  }
  constructor() {
    super()
    this.state = { modalOpen: false }
  }

  handleClose = () =>
    this.setState({
      modalOpen: false,
    })

  handleCancel = () => {
    this.props.handleCloseModal()
    this.props.handleNextPlan()
  }

  handleSubmit = () => {
    this.props.handleCloseModal()
    this.props.handleNextPlan()
    this.props.handleClick()
  }

  handleOpen = () =>
    this.setState({
      modalOpen: true,
    })
  render() {
    return (
      <Modals trigger={<div />} open={this.props.openModal}>

        <ModalContents>
          <ModalContents>
            <p style={{ textAlign: 'center' }}>
              คุณต้องการบันทึกรายละเอียดแพลนของคุณหรือไม่ ?
            </p>
          </ModalContents>
          <ModalContents>
            <p style={{ textAlign: 'center' }}>
              คุณได้เปลี่ยนแปลงรายละเอียดแพลนโดยไม่ได้ทำการบันทึก
            </p>
          </ModalContents>
          <ModalContents style={{ marginTop: '7%' }}>
            <div style={{ display: 'flex' }}>
              <Button
                style={{
                  textAlign: 'center',
                  width: '232px',
                  height: '40px',
                  borderRadius: '20px',
                  color: '#ffffff',
                  backgroundColor: '#f7555f',
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
            </div>
          </ModalContents>
        </ModalContents>
      </Modals>
    )
  }
}

export default connect(null, null)(DentalModal)
