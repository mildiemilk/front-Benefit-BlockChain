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
    width: 700px;
    position: relative;
    margin: 0 auto;
    padding-left: 4%;
    padding-right: 4%;
  }
`
const ModalHeaders = styled(Modal.Header)`
  &&&{
    width: 800px;
    position: relative;
    margin: 0 auto;
    padding-left: 4%;
    padding-right: 4%;
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
    return (
      <Modals
        trigger={<div />}
        open={this.props.modalOpen}
        onClose={this.handleClose}
        closeOnEscape={this.state.closeOnEscape}
        closeOnRootNodeClick={this.state.closeOnRootNodeClick}
      >
        <ModalHeaders>
          <p style={{ textAlign: 'center' }}>ดูแพลน</p>
        </ModalHeaders>
        <ModalContents>
          <FormSubmitPlan />
        </ModalContents>
        <ModalContents>
          <AllPlan />
        </ModalContents>
      </Modals>
    )
  }
}

PlanBoxModal.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(PlanBoxModal)
