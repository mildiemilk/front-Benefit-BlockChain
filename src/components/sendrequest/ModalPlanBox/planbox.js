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
    planList: PropTypes.array.isRequired,
    plan: PropTypes.object.isRequired,
    activePlan: PropTypes.number.isRequired,
  }

  render() {
    return (
      <PlanBox>
        <span> {this.props.plan.planName} </span>
        <Popup
          trigger={
            <Icon
              name="ellipsis vertical"
              size="large"
              style={{ float: 'right', cursor: 'pointer' }}
            />
          }
          content={
            <List divided relaxed style={{ cursor: 'pointer' }}>
              <List.Item>
                <List.Content onClick={e => this.props.handleModal(e)}>
                  <p id={this.props.id}>
                    <Icon name="file text outline" />ดูแพลน
                  </p>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content onClick={this.props.handleDelete}>
                  <p id={this.props.id}><Icon name="trash outline" />ลบแพลน</p>
                </List.Content>
              </List.Item>
            </List>
          }
          on="click"
          position="bottom center"
          style={{ zIndex: '1' }}
        />
        <PlanBoxModal
          modalOpen={this.props.modalOpen}
          handleCloseModal={this.props.handleCloseModal}
          activePlan={this.props.activePlan}
          planList={this.props.planList}
        />
      </PlanBox>
    )
  }
}

export default planBoxs
