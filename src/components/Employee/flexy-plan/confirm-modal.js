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
    max-width: 288px;
    margin: 0 auto;
    padding-left: 5%;
    text-align: center;
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

class ConfirmModal extends Component {
  constructor() {
    super()
    this.state = {
      closeOnEscape: false,
      closeOnRootNodeClick: true,
    }
  }

  handleSubmit = () => {
    this.props.handleCloseModal()
  }

  handleClose = e => {
    this.props.handleCloseModal()
  }

  render() {
    return (
      <Modals
        trigger={<div />}
        open={this.props.openModal}
        closeOnEscape={this.statecloseOnEscape}
        closeOnRootNodeClick={this.state.closeOnRootNodeClick}
        onClose={this.handleClose}
      >
        <ModalContents>
          <p>คุณเลือกแผน 1</p>
          <p>กดยืนยันการเลือกของคุณ</p>
          <button
            className="button-confirm-flexy-plan"
            onClick={() => this.handleSubmit()}
          >
            ยืนยัน
          </button>
        </ModalContents>
      </Modals>
    )
  }
}

ConfirmModal.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(ConfirmModal)
