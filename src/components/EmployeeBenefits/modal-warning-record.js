import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'react-sc'

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
  }
`

class ModalWarningRecord extends Component {
  static propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
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
  }

  handleSubmit = () => {
    this.props.handleSubmit()
    this.props.handleCloseModal()
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

export default ModalWarningRecord
