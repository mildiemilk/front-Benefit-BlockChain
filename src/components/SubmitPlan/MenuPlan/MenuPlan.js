import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Radio,
  Segment,
  Dropdown,
  Popup,
  Icon,
  List,
} from 'semantic-ui-react'
import '../../../styles/SubmitPlan.scss'
import erase from '../../image/icons-8-erase.png'
import FormModal from '../FormModal'

class MenuPlan extends Component {
  constructor() {
    super()
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

  handleOpenModal = e =>
    this.setState({
      modalOpen: true,
    })

  handleCloseModal = e =>
    this.setState({
      modalOpen: false,
    })

  renderList = list => {
    const output = []
    for (var i = 0; i < list.length; i++) {
      output.push(
        <div className="menu-select-plan">
          <div className="row">
            <div className="large-2 columns">
              <Checkbox />
            </div>
            <div className="large-10 columns">
              <span>{list[i].planName}</span>
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
                      <List.Content>
                        <p id={i} onClick={this.props.handleEdit}>
                          <Icon name="edit" />แก้ไขแพลน
                        </p>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <p id={i} onClick={this.props.handleCopy}>
                          <Icon name="copy" />คัดลอกแพลน
                        </p>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <p id={i} onClick={this.props.handleDelete}>
                          <Icon name="trash outline" />ลบแพลน
                        </p>
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
              <p>แก้ไขครั้งล่าสุดโดย {list[i].updateBy}</p>
            </div>
          </div>
        </div>,
      )
    }
    return output
  }

  render() {
    return (
      <div className="menu-box">
        <p className="menu-header">จัดแผนประกันภัย</p>
        <Link to="/view"><span className="menu-text">ดูแพลนทั้งหมด</span></Link>
        <div className="menu-bar">
          <span>รายการแพลน</span>
          <Popup
            trigger={
              <div style={{ float: 'right' }}>
                <span>ชื่อ</span>
                <Icon name="caret down" size="small" />
              </div>
            }
            content="Hide the popup on any scroll event"
            on="click"
            hideOnScroll
            position="bottom center"
          />
        </div>
        <FormModal
          activePlan={this.props.activePlan}
          handlePlan={this.props.handlePlan}
          openModalForm={this.props.openModalForm}
          handleCloseModal={this.props.handleCloseModal}
          handleModalFinish={this.props.handleModalFinish}
          handleResetProfilePlan={this.props.handleResetProfilePlan}
          handleChange={this.props.handleChange}
          planName={this.props.planName}
          employeeOfPlan={this.props.employeeOfPlan}
        />
        <div className="menu-add-plan">
          <p onClick={this.props.handleNewPlan}>
            <Icon name="add circle" size="big" />สร้างแพลนใหม่
          </p>
        </div>
        {this.renderList(this.props.planList)}
        <div className="menu-compare-plan">
          เปรียบเทียบแพลน
        </div>
      </div>
    )
  }
}

MenuPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MenuPlan)
