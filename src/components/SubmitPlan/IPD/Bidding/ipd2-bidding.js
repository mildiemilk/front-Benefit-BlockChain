import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form, Radio } from 'semantic-ui-react'

class IPD2Bidding extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      value: '',
      rbLumsumRoomPerNight: null,
      rbLumsumNigthNotExceedPerYear: null,
      rbLumsumPayNotExceedPerNight: null,
      rbLumsumPayNotExceedPerYear: null,
    }
  }

  render() {
    return (
      <div>
        <Form.Group inline>
          <Form.Field>
            <Radio
              name="IPD2Group"
              value="firstChoice"
              checked={this.state.value === 'firstChoice'}
            />
          </Form.Field>
          <span>ค่าห้องและค่าอาหาร</span>
          <div style={{ display: '-webkit-box' }}>
            <Form.Input
              type="number"
              placeholder="จำนวนเงิน"
              name="rbLumsumRoomPerNight"
              id="rbLumsumRoomPerNight"
              onChange={this.props.handleChange}
              style={{ marginLeft: '7%' }}
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
          </div>
          <p> คืน</p>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <Radio
              label="ค่ารักษาพยาบาลกรณีผู้ป่วยในจ่ายตามจริงไม่เกิน"
              name="IPD2Group"
              value="secondChoice"
              checked={this.state.value === 'secondChoice'}
            />
          </Form.Field>
          <Form.Input
            type="number"
            placeholder="จำนวนเงิน"
            name="rbLumsumPayNotExceedPerNight"
            id="rbLumsumPayNotExceedPerNight"
            onChange={this.props.handleChange}
            readOnly
          />
          <p> บาท/คืน ไม่เกินปีล่ะ</p>
        </Form.Group>
        <Form.Group inline style={{ marginLeft: '25px' }}>
          <Form.Input
            type="number"
            label="และจ่ายไม่เกิน"
            placeholder="จำนวนเงิน"
            name=" rbLumsumPayNotExceedPerYear"
            id=" rbLumsumPayNotExceedPerYear"
            onChange={this.props.handleChange}
          />
          <p> คืน</p>
        </Form.Group>

      </div>
    )
  }
}

IPD2Bidding.propTypes = {}

export default connect(null, null)(IPD2Bidding)
