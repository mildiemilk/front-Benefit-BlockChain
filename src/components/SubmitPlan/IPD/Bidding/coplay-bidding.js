import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form, Radio } from 'semantic-ui-react'

class CoplayBidding extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      ipdCoPlay: false,
      value: '',
      ipdCoPlayQuota: null,
      ipdCoPlayDeductable: null,
      ipdCoPlayMixPercentage: null,
      ipdCoPlayMixNotExceed: null,
      ipdCoPlayMixYear: null,
    }
  }

  render() {
    return (
      <div>
        <div className="coplayParagraph">
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Quota Share"
                name="CoPlayGroup"
                value="Quota Share"
                checked={this.state.value === 'Quota Share'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <Form.Input
              type="number"
              placeholder="เปอร์เซน"
              name="ipdCoPlayQuota"
              id="ipdCoPlayQuota"
              readOnly
              onChange={this.props.handleChange}
            />
            <p className="selectText"> %</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Deductable"
                name="CoPlayGroup"
                value="Deductable"
                checked={this.state.value === 'Deductable'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <Form.Input
              type="number"
              placeholder="จำนวนเงิน"
              name="ipdCoPlayDeductable"
              id="ipdCoPlayDeductable"
              onChange={this.props.handleChange}
              readOnly
            />
            <p className="selectText"> บาท</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Quota Share + Deductable"
                name="CoPlayGroup"
                value="Quota Share + Deductable"
                checked={this.state.value === 'Quota Share + Deductable'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <div style={{ display: 'inherit' }}>
              <Form.Input
                type="number"
                style={{ width: '80px' }}
                placeholder="เปอร์เซ็น"
                name="ipdCoPlayMixPercentage"
                id="ipdCoPlayMixPercentage"
                onChange={this.props.handleChange}
                readOnly
              />
              <Form.Input
                type="number"
                style={{ width: '90px' }}
                label=" %ไม่เกิน"
                placeholder="จำนวนเงิน"
                name="ipdCoPlayMixNotExceed"
                id="ipdCoPlayMixNotExceed"
                onChange={this.props.handleChange}
                readOnly
              />
              <Form.Input
                type="number"
                style={{ width: '40px' }}
                label=" ต่อ"
                placeholder="ปี"
                name="ipdCoPlayMixYear"
                id="ipdCoPlayMixYear"
                onChange={this.props.handleChange}
                readOnly
              />
            </div>
          </Form.Group>
        </div>
      </div>
    )
  }
}

CoplayBidding.propTypes = {}

export default connect(null, null)(CoplayBidding)
