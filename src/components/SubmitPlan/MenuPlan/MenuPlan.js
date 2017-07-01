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
} from 'semantic-ui-react'
import '../../../styles/SubmitPlan.scss'
import erase from '../../image/icons-8-erase.png'

class FormSubmitPlan extends Component {
  constructor() {
    super()
    this.state = {}
  }

  static propTypes = {}

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.authenticate(email, password)
    console.log(this.state)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div className="menu-box">
        <p className="menu-header">จัดแผนประกันภัย</p>
        <span className="menu-text">ดูแพลนทั้งหมด</span>
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
        <div className="menu-add-plan">
          <p>สร้างแพลนใหม่</p>
        </div>
        <div className="menu-select-plan">
          <span>Plan1</span>
          <Popup
            trigger={
              <Icon
                style={{ float: 'right' }}
                name="ellipsis vertical"
                size="large"
              />
            }
            content="Hide the popup on any scroll event"
            on="click"
            hideOnScroll
            position="bottom center"
          />
          <p>แก้ไขครั้งล่าสุดโดย</p>
        </div>
      </div>
    )
  }
}

FormSubmitPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FormSubmitPlan)
