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
import styled from 'react-sc'
import { connect } from 'react-redux'
import SettingPlan from '../SettingBenefit/setting-plan'
import '../../styles/employee-benefits.scss'
import { BackButton } from '../SettingBenefit/styled'

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
  }
`

const Inputs = styled(Input)`
  &&&{
    font-family: Kanit;
  }
`

class SettingBenefitModal extends Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false,
      closeOnEscape: false,
      closeOnRootNodeClick: true,
    }
  }

  handleClose = e => {
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
          <SettingPlan style={{ border: 'aliceblue' }} />
        </ModalContents>
        <ModalContents>
          <div className="row">
            <button className="backButton">กลับไป</button>
          </div>
        </ModalContents>
      </Modals>
    )
  }
}

SettingBenefitModal.propTypes = {}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(SettingBenefitModal)
