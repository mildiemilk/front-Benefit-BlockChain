import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 300px;
    position: relative;
    margin: 0 auto;
  }
`

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    margin: 0 auto;
    width: 300px;
    text-align: center;
  }
`

class ModalWarning extends Component {
  static propTypes = {
    openWarningModal: PropTypes.bool.isRequired,
    closeWarningModal: PropTypes.func.isRequired,
    warningMessage: PropTypes.string.isRequired,
  }
  constructor() {
    super()
    this.state = {
      modalOpen: false,
      closeOnEscape: false,
      closeOnRootNodeClick: true,
    }
  }

  handleClose = () => {
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

export default ModalWarning
