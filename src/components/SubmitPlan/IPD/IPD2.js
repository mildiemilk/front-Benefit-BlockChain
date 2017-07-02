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
      rbLumsumRoomPerNight: null,
      rbLumsumNigthNotExceedPerYear: null,
      rbLumsumPayNotExceedPerNight: null,
      rbLumsumPayNotExceedPerYear: null,
    }
    const value = ''
  }

  static propTypes = {}

  handleRadio = (e, { value }) => {
    this.setState({ value })
    if (this.state.value === 'secondChoice') {
      document.getElementById('rbLumsumPayNotExceedPerNight').value = ''
      this.props.handleChangeToNull('rbLumsumPayNotExceedPerNight')
      document.getElementById('rbLumsumPayNotExceedPerYear').value = ''
      this.props.handleChangeToNull('rbLumsumPayNotExceedPerYear')
    } else {
      document.getElementById('rbLumsumRoomPerNight').value = ''
      this.props.handleChangeToNull('rbLumsumRoomPerNight')
      document.getElementById('rbLumsumNigthNotExceedPerYear').value = ''
      this.props.handleChangeToNull('rbLumsumNigthNotExceedPerYear')
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
          {this.state.value === 'firstChoice'
            ? <div style={{ display: 'inherit' }}>
                <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="rbLumsumRoomPerNight"
                  id="rbLumsumRoomPerNight"
                  onChange={this.props.handleChange}
                  required
                />
                <Form.Input
                  type="number"
                  label="บาท/คืน ไม่เกินปีล่ะ"
                  placeholder="จำนวนเงิน"
                  name="rbLumsumNigthNotExceedPerYear"
                  id="rbLumsumNigthNotExceedPerYear"
                  onChange={this.props.handleChange}
                  required
                />
              </div>
            : <div style={{ display: 'inherit' }}>
                <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="rbLumsumRoomPerNight"
                  id="rbLumsumRoomPerNight"
                  onChange={this.props.handleChange}
                  readOnly
                />
                <Form.Input
                  type="number"
                  label="บาท/คืน ไม่เกินปีล่ะ"
                  placeholder="จำนวนเงิน"
                  name="rbLumsumNigthNotExceedPerYear"
                  id="rbLumsumNigthNotExceedPerYear"
                  onChange={this.props.handleChange}
                  readOnly
                />
              </div>}
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
          {this.state.value === 'secondChoice'
            ? <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="rbLumsumPayNotExceedPerNight"
                id="rbLumsumPayNotExceedPerNight"
                onChange={this.props.handleChange}
                required
              />
            : <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="rbLumsumPayNotExceedPerNight"
                id="rbLumsumPayNotExceedPerNight"
                onChange={this.props.handleChange}
                readOnly
              />}
          <p> บาท/คืน ไม่เกินปีล่ะ</p>
        </Form.Group>
        <Form.Group inline style={{ marginLeft: '25px' }}>
          {this.state.value === 'secondChoice'
            ? <Form.Input
                type="number"
                label="และจ่ายไม่เกิน"
                placeholder="จำนวนเงิน"
                name="rbLumsumPayNotExceedPerYear"
                id="rbLumsumPayNotExceedPerYear"
                onChange={this.props.handleChange}
                required
              />
            : <Form.Input
                type="number"
                label="และจ่ายไม่เกิน"
                placeholder="จำนวนเงิน"
                name=" rbLumsumPayNotExceedPerYear"
                id=" rbLumsumPayNotExceedPerYear"
                onChange={this.props.handleChange}
              />}
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
