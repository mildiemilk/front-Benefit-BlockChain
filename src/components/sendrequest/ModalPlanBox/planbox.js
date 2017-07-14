import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'react-sc'
import {
  Detail,
  Head,
  Head2,
  subInner,
  Submit,
  BoxIndiv1,
  BoxIndiv2,
  BoxIndiv3,
  BoxIndiv4,
  SideIn,
  PlanBox,
} from '../styled'
import PlanBoxModal from './planbox-modal'
import {
  Grid,
  Image,
  Container,
  Divider,
  Checkbox,
  Segment,
  Icon,
  Progress,
  Popup,
  List,
} from 'semantic-ui-react'

class planBoxs extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    modalOpen: PropTypes.bool.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleModal: PropTypes.func.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    planList: PropTypes.object.isRequired,
  }
  render() {
    return (
      <PlanBox>
        <span> {this.props.planList.planName} </span>
        <Popup
          trigger={
            <Icon
              style={{ float: 'right' }}
              name="ellipsis vertical"
              size="large"
            />
          }
          content={
            <List divided relaxed>
              <List.Item>
                <List.Content onClick={() => this.props.handleModal()}>
                  <p><Icon name="file text outline" />ดูแพลน</p>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <p><Icon name="trash outline" />ลบแพลน</p>
                </List.Content>
              </List.Item>
            </List>
          }
          on="click"
          hideOnScroll
          position="bottom center"
          open={this.props.isOpen}
          onClose={this.props.handleClose}
          onOpen={this.props.handleOpen}
        />
        <PlanBoxModal
          modalOpen={this.props.modalOpen}
          handleCloseModal={this.props.handleCloseModal}
        />
      </PlanBox>
    )
  }
}

export default planBoxs
