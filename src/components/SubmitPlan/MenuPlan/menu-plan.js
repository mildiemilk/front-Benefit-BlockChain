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
import '../../../styles/submit-plan.scss'
import erase from '../../image/icons-8-erase.png'
import FormModal from '../form-modal'
import { menuPlans } from '../../../api/set-plan'

class MenuPlan extends Component {
  static propTypes = {
    MenuPlan: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      step: 6,
      isOpen: false,
      modalOpen: false,
      comparePlan: [],
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

  handleChange = (e, list) => {
    if (e.target.checked) {
      this.setState(
        {
          comparePlan: this.state.comparePlan.concat(list[e.target.id]),
        },
        () => {
          console.log(this.state.comparePlan)
        },
      )
    } else {
      let index = this.state.comparePlan.indexOf(list[e.target.id])
      const x = this.state.comparePlan
      x.splice(index, 1)
      this.setState(
        {
          comparePlan: x,
        },
        () => {
          console.log(this.state.comparePlan)
        },
      )
    }
  }

  handleSelectPlan = e => {
    e.preventDefault()
    const { comparePlan } = this.state
    this.props.menuPlans(comparePlan)
  }

  renderList = list => {
    const output = []
    for (var i = 0; i < list.length; i++) {
      output.push(
        <div className="menu-select-plan">
          <div className="row">
            <div className="large-2 columns">
              <input
                type="checkbox"
                id={i}
                onChange={e => this.handleChange(e, list)}
              />
            </div>
            <div className="large-10 columns">
              <span>{list[i].planName}</span>
              <Popup
                trigger={
                  <Icon
                    style={{ float: 'right', cursor: 'pointer' }}
                    name="ellipsis vertical"
                    size="large"
                  />
                }
                content={
                  <List divided relaxed style={{ cursor: 'pointer' }}>
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
                <Icon
                  name="caret down"
                  size="small"
                  style={{ cursor: 'pointer' }}
                />
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
        <div className="menu-compare-plan" onClick={this.handleSelectPlan}>
          เปรียบเทียบแพลน
        </div>
      </div>
    )
  }
}

MenuPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({
  menuPlans: compareplan => dispatch(menuPlans(compareplan)),
})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MenuPlan)
