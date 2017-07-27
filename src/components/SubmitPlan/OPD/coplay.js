import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Radio } from 'semantic-ui-react'
import '../../../styles/submit-plan.scss'

class CoPlay extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    handleNewReset: PropTypes.func.isRequired,
    reset: PropTypes.bool.isRequired,
    setPlan: PropTypes.string.isRequired,
    opdCoPlayQuota: PropTypes.string.isRequired,
    opdCoPlayDeductable: PropTypes.string.isRequired,
    opdCoPlayMixPercentage: PropTypes.string.isRequired,
    opdCoPlayMixNotExceed: PropTypes.string.isRequired,
    opdCoPlayMixYear: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    const {
      opdCoPlayQuota,
      opdCoPlayDeductable,
      opdCoPlayMixYear,
      opdCoPlayMixPercentage,
      opdCoPlayMixNotExceed,
    } = this.props

    let value

    if (!opdCoPlayQuota) {
      if (!opdCoPlayDeductable) {
        if (
          !(opdCoPlayMixYear && opdCoPlayMixPercentage && opdCoPlayMixNotExceed)
        ) {
          value = ''
        }
        value = 'Quota Share + Deductable'
      }
      value = 'Deductable'
    } else {
      value = 'Quota Share'
    }
    this.state = { value }
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'OPD' && this.props.reset === true) {
      this.handleResetdata()
    }
  }

  handleRadio = (e, { value }) => {
    this.handleResetdata()
    this.setState({ value })
  }

  handleResetdata = () => {
    this.props.handleChangeToNull('opdCoPlayQuota')
    this.props.handleChangeToNull('opdCoPlayDeductable')
    this.props.handleChangeToNull('opdCoPlayMixPercentage')
    this.props.handleChangeToNull('opdCoPlayMixNotExceed')
    this.props.handleChangeToNull('opdCoPlayMixYear')
    this.setState({ value: '' })
    this.props.handleNewReset()
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
            {this.state.value === 'Quota Share'
              ? <Form.Input
                  type="number"
                  placeholder="เปอร์เซน"
                  name="opdCoPlayQuota"
                  id="opdCoPlayQuota"
                  value={this.props.opdCoPlayQuota}
                  onChange={this.props.handleChange}
                  required
                />
              : <Form.Input
                  type="number"
                  placeholder="เปอร์เซน"
                  name="opdCoPlayQuota"
                  id="opdCoPlayQuota"
                  readOnly
                  onChange={this.props.handleChange}
                />}
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
            {this.state.value === 'Deductable'
              ? <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="opdCoPlayDeductable"
                  id="opdCoPlayDeductable"
                  value={this.props.opdCoPlayDeductable}
                  onChange={this.props.handleChange}
                  required
                />
              : <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="opdCoPlayDeductable"
                  id="opdCoPlayDeductable"
                  value=""
                  onChange={this.props.handleChange}
                  readOnly
                />}
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
            {this.state.value === 'Quota Share + Deductable'
              ? <div style={{ display: 'inherit' }}>
                  <Form.Input
                    type="number"
                    style={{ width: '80px' }}
                    placeholder="เปอร์เซ็น"
                    name="opdCoPlayMixPercentage"
                    id="opdCoPlayMixPercentage"
                    value={this.props.opdCoPlayMixPercentage}
                    onChange={this.props.handleChange}
                    required
                  />
                  <Form.Input
                    type="number"
                    style={{ width: '90px' }}
                    label=" %ไม่เกิน"
                    placeholder="จำนวนเงิน"
                    name="opdCoPlayMixNotExceed"
                    id="opdCoPlayMixNotExceed"
                    value={this.props.opdCoPlayMixNotExceed}
                    onChange={this.props.handleChange}
                    required
                  />
                  <Form.Input
                    type="number"
                    style={{ width: '40px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="opdCoPlayMixYear"
                    id="opdCoPlayMixYear"
                    value={this.props.opdCoPlayMixYear}
                    onChange={this.props.handleChange}
                    required
                  />
                </div>
              : <span style={{ display: 'inherit' }}>
                  <Form.Input
                    type="number"
                    style={{ width: '80px' }}
                    placeholder="เปอร์เซ็น"
                    name="opdCoPlayMixPercentage"
                    id="opdCoPlayMixPercentage"
                    value=""
                    onChange={this.props.handleChange}
                    readOnly
                  />
                  <Form.Input
                    type="number"
                    style={{ width: '90px' }}
                    label=" %ไม่เกิน"
                    placeholder="จำนวนเงิน"
                    name="opdCoPlayMixNotExceed"
                    id="opdCoPlayMixNotExceed"
                    value=""
                    onChange={this.props.handleChange}
                    readOnly
                  />
                  <Form.Input
                    type="number"
                    style={{ width: '40px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="opdCoPlayMixYear"
                    id="opdCoPlayMixYear"
                    value=""
                    onChange={this.props.handleChange}
                    readOnly
                  />
                </span>}
          </Form.Group>
        </div>
      </div>
    )
  }
}

export default CoPlay
