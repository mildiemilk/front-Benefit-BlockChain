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

const Inputs = styled(Input)`
  &&&{
    font-family: Kanit;
  }
`

class ModalWarning extends Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false,
      closeOnEscape: false,
      closeOnRootNodeClick: true,
    }
  }

  handleClose = e => {
    this.props.closeWarningModal()
  }

  render() {
    return (
      <Modals
        trigger={<div />}
        open={this.props.openWarningModal}
        dimmer="inverted"
        closeOnEscape={this.state.closeOnEscape}
        closeOnRootNodeClick={this.state.closeOnRootNodeClick}
        onClose={this.handleClose}
      >
        <ModalContents>
          <p>Warning</p>
        </ModalContents>
        <ModalContents>
          <p>{this.props.warningMessage}</p>
        </ModalContents>
      </Modals>
    )
  }
}

ModalWarning.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(ModalWarning)
