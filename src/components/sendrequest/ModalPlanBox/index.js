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
import PlanBoxModal from './PlanBoxModal'
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

class ModalPlanBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 6,
      isOpen: false,
      modalOpen: false,
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  handleModal = () => {
    this.setState({ isOpen: false })
    this.setState({ modalOpen: true })
  }

  handleOpenModal = e =>
    this.setState({
      modalOpen: true,
    })

  handleCloseModal = e =>
    this.setState({
      modalOpen: false,
    })

  render() {
    return (
      <div className="ChooseInsurer">
        <div className="row">
          <div className="large-4 columns">
            <PlanBox>
              <span>Plan A</span>
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
                      <List.Content onClick={() => this.handleModal()}>
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
                open={this.state.isOpen}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
              />
              <PlanBoxModal
                modalOpen={this.state.modalOpen}
                handleCloseModal={this.handleCloseModal}
              />
            </PlanBox>
          </div>
        </div>
      </div>
    )
  }
}
export default ModalPlanBox
