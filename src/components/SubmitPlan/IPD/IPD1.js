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
import '../../../styles/SubmitPlan.scss'
import CoPlay from './CoPlay'

class IPD1 extends Component {
  constructor() {
    super()
    this.state = {
      showCoPlay: false,
      value: '',
      firstChoiceMoney: '',
      secondChoiceMoney: '',
      secondChoiceMoneyLimit: '',
    }
    const value = ''
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

  handleToggle = () => {
    if (this.state.showCoPlay) {
      this.setState({ showCoPlay: false })
    } else {
      this.setState({ showCoPlay: true })
    }
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
              label="จำนวนเงิน"
              name="IPD1Group"
              value="firstChoice"
              checked={this.state.value === 'firstChoice'}
              onChange={this.handleRadio}
            />
          </Form.Field>
          <Form.Input
            placeholder="จำนวนเงิน"
            name="firstChoiceMoney"
            id="firstChoiceMoney"
            onChange={this.handleChange}
          />
          <p> บาท/ปี</p>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <Radio
              label="จำนวนเงิน"
              name="IPD1Group"
              value="secondChoice"
              checked={this.state.value === 'secondChoice'}
              onChange={this.handleRadio}
            />
          </Form.Field>
          <Form.Input
            placeholder="จำนวนเงิน"
            name="secondChoiceMoney"
            id="secondChoiceMoney"
            onChange={this.handleChange}
          />
          <Form.Input
            label="บาท/ครั้ง  ครั้งละไม่เกิน"
            placeholder="จำนวนเงิน"
            name="secondChoiceMoneyLimit"
            id="secondChoiceMoneyLimit"
            onChange={this.handleChange}
          />
          <p> บาท/ปี</p>
        </Form.Group>
      </div>
    )
  }
}

IPD1.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(IPD1)
