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
import PropTypes from 'prop-types'
import styled from 'react-sc'
import { connect } from 'react-redux'
import FormSubmitPlan from '../../SubmitPlan/FormSubmitPlan/FormSubmitPlan'
import AllPlan from '../../SubmitPlan/AllPlan'

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 650px;
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
class PlanBoxModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      closeOnEscape: false,
      closeOnRootNodeClick: true,
    }
  }

  handleClose = e => {
    this.props.handleCloseModal()
  }

  render() {
    console.log(this.props.modalOpen)
    return (
      <Modals
        trigger={<div />}
        open={this.props.modalOpen}
        onClose={this.handleClose}
        closeOnEscape={this.state.closeOnEscape}
        closeOnRootNodeClick={this.state.closeOnRootNodeClick}
      >
        <Modal.Header>
          <p style={{ textAlign: 'center' }}>ดูแพลน</p>
        </Modal.Header>
        <Modal.Content>
          <FormSubmitPlan />
        </Modal.Content>
        <Modal.Content>
          <AllPlan />
        </Modal.Content>
      </Modals>
    )
  }
}

PlanBoxModal.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(PlanBoxModal)
