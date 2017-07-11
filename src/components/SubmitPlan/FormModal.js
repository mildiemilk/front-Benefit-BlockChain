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
import '../../styles/SubmitPlan.scss'
import FormSubmitPlan from './FormSubmitPlan/FormSubmitPlan'

const ModalContents = styled(Modal.Content)`
  &&&{
    width: 680px;
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

const Inputs = styled(Input)`
  &&&{
    font-family: Kanit;
  }
`

class FormModal extends Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false,
      closeOnEscape: false,
      closeOnRootNodeClick: true,
    }
  }

  handleClose = e => {
    this.props.handleCloseModal()
  }

  render() {
    console.log(this.props.openModalForm)
    return (
      <Modals
        trigger={<div />}
        open={this.props.openModalForm}
        onClose={this.handleClose}
        closeOnEscape={this.state.closeOnEscape}
        closeOnRootNodeClick={this.state.closeOnRootNodeClick}
        basic
      >
        <ModalContents>
          <FormSubmitPlan handleModalFinish={this.props.handleModalFinish} />
        </ModalContents>
      </Modals>
    )
  }
}

FormModal.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(FormModal)
