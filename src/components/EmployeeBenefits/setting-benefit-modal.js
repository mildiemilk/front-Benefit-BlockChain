import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'
import styled from 'react-sc'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SettingPlans from '../SettingBenefit/setting-plan'
import '../../styles/employee-benefits.scss'

const ModalContents = styled(Modal.Content)`
  &&&{
    width: 100%;
    position: relative;
    margin: 0 auto;
    padding: 0px;
  }
`

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    margin-top: -120px;
    position: relative;
    height: 100%;
    z-index: 2;
    box-shadow: none;
  }
`

class SettingBenefitModal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    openSettingBenefit: PropTypes.func.isRequired,
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
    this.props.closeModal()
  }

  render() {
    return (
      <Modals
        trigger={<div />}
        open={this.props.openSettingBenefit}
        closeOnEscape={this.state.closeOnEscape}
        closeOnRootNodeClick={this.state.closeOnRootNodeClick}
        onClose={this.handleClose}
      >
        <ModalContents>
          <SettingPlans />
        </ModalContents>
        <ModalContents>
          <div className="row">
            <button
              className="back-button"
              onClick={() => this.props.closeModal()}
            >
              กลับ
            </button>
          </div>
        </ModalContents>
      </Modals>
    )
  }
}

SettingBenefitModal.propTypes = {}

export default connect(null, null)(SettingBenefitModal)
