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
} from 'semantic-ui-react'
import CoPlay from './CoPlay'

class IPD2 extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
    const value = ''
  }

  static propTypes = {}

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  signUpHandler() {
    window.location.href = '/signup'
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.authenticate(email, password)
    console.log(this.state)
  }

  handleRadio = (e, { value }) => {
    this.setState({ value })
    if (this.state.value === 'secondChoice') {
      document.getElementById('secondChoiceMoney').value = ''
      document.getElementById('secondChoiceMoneyLimit').value = ''
    } else {
      document.getElementById('firstChoiceMoney').value = ''
    }
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div>
        <Form.Group inline>
          <Form.Field>
            <Radio
              label="ค่าห้อง และค่าอาหาร"
              name="IPD2Group"
              value="firstChoice"
              checked={this.state.value === 'firstChoice'}
              onChange={this.handleRadio}
            />
          </Form.Field>
          <Form.Input
            placeholder="จำนวนเงิน"
            name=""
            onChange={this.handleChange}
          />
          <Form.Input
            label="บาท/คืน ไม่เกินปีล่ะ"
            placeholder="จำนวนเงิน"
            name=""
            onChange={this.handleChange}
          />
          <p> คืน</p>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <Radio
              label="ค่ารักษาพยาบาลกรณีผู้ป่วยในจ่ายตามจริงไม่เกิน"
              name="IPD2Group"
              value="secondChoice"
              checked={this.state.value === 'secondChoice'}
              onChange={this.handleRadio}
            />
          </Form.Field>
          <Form.Input
            placeholder="จำนวนเงิน"
            name=""
            onChange={this.handleChange}
          />
          <p> บาท/คืน ไม่เกินปีล่ะ</p>
        </Form.Group>
        <Form.Group inline style={{ marginLeft: '25px' }}>
          <Form.Input
            label="และจ่ายไม่เกิน"
            placeholder="จำนวนเงิน"
            name=""
            onChange={this.handleChange}
          />
          <p> คืน</p>
        </Form.Group>

      </div>
    )
  }
}

IPD2.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(IPD2)
