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

class IPD1Bidding extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      ipdLumsumPerYear: null,
      ipdLumsumPerTime: null,
      ipdLumsumTimeNotExceedPerYear: null,
    }
  }

  static propTypes = {}

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
            type="number"
            placeholder="จำนวนเงิน"
            name="ipdLumsumPerYear"
            id="ipdLumsumPerYear"
            onChange={this.props.handleChange}
            readOnly
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
          <div style={{ display: 'inherit' }}>
            <Form.Input
              type="number"
              placeholder="จำนวนเงิน"
              name="ipdLumsumPerTime"
              id="ipdLumsumPerTime"
              onChange={this.props.handleChange}
              readOnly
            />
            <Form.Input
              type="number"
              label="บาท/ครั้ง  ครั้งละไม่เกิน"
              placeholder="จำนวนเงิน"
              name="ipdLumsumTimeNotExceedPerYear"
              id="ipdLumsumTimeNotExceedPerYear"
              onChange={this.props.handleChange}
              readOnly
            />
          </div>}
          <p> บาท/ปี</p>
        </Form.Group>
      </div>
    )
  }
}

IPD1Bidding.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(IPD1Bidding)
