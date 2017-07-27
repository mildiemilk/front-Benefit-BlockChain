import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form, Radio } from 'semantic-ui-react'
import '../../../styles/submit-plan.scss'

class Coplay extends Component {
  static propTypes = {
    handleNewReset: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    reset: PropTypes.string.isRequired,
    setPlan: PropTypes.string.isRequired,
    activePlan: PropTypes.number.isRequired,
    ipdCoPlayQuota: PropTypes.string.isRequired,
    ipdCoPlayDeductable: PropTypes.string.isRequired,
    ipdCoPlayMixPercentage: PropTypes.string.isRequired,
    ipdCoPlayMixNotExceed: PropTypes.string.isRequired,
    ipdCoPlayMixYear: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    const {
      ipdCoPlayQuota,
      ipdCoPlayDeductable,
      ipdCoPlayMixYear,
      ipdCoPlayMixPercentage,
      ipdCoPlayMixNotExceed,
    } = this.props

    let value

    if (!ipdCoPlayQuota) {
      if (!ipdCoPlayDeductable) {
        if (
          !(ipdCoPlayMixYear && ipdCoPlayMixPercentage && ipdCoPlayMixNotExceed)
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

  componentWillReceiveProps(newProps) {
    const {
      ipdCoPlayQuota,
      ipdCoPlayDeductable,
      ipdCoPlayMixYear,
      ipdCoPlayMixPercentage,
      ipdCoPlayMixNotExceed,
    } = newProps

    let value

    if (!ipdCoPlayQuota) {
      if (!ipdCoPlayDeductable) {
        if (
          !(ipdCoPlayMixYear && ipdCoPlayMixPercentage && ipdCoPlayMixNotExceed)
        ) {
          value = ''
        }
        value = 'Quota Share + Deductable'
      }
      value = 'Deductable'
    } else {
      value = 'Quota Share'
    }
    if (newProps.activePlan !== this.props.activePlan) {
      this.state = { value }
    }
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'IPD' && this.props.reset === true) {
      this.handleResetdata()
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleRadio = (e, { value }) => {
    this.handleResetdata()
    this.setState({ value })
  }

  handleResetdata = () => {
    this.props.handleChangeToNull('ipdCoPlayQuota')
    this.props.handleChangeToNull('ipdCoPlayDeductable')
    this.props.handleChangeToNull('ipdCoPlayMixPercentage')
    this.props.handleChangeToNull('ipdCoPlayMixNotExceed')
    this.props.handleChangeToNull('ipdCoPlayMixYear')
    this.setState({ value: '' })
    this.props.handleNewReset()
  }

  render() {
    const {
      ipdCoPlayDeductable,
      ipdCoPlayMixNotExceed,
      ipdCoPlayMixPercentage,
      ipdCoPlayMixYear,
      ipdCoPlayQuota,
    } = this.props
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
                name="ipdCoPlayQuota"
                id="ipdCoPlayQuota"
                value={ipdCoPlayQuota}
                onChange={this.props.handleChange}
                required
              />
              : <Form.Input
                type="number"
                placeholder="เปอร์เซน"
                name="ipdCoPlayQuota"
                id="ipdCoPlayQuota"
                value=""
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
                name="ipdCoPlayDeductable"
                id="ipdCoPlayDeductable"
                value={ipdCoPlayDeductable}
                onChange={this.props.handleChange}
                required
              />
              : <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="ipdCoPlayDeductable"
                id="ipdCoPlayDeductable"
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
                  name="ipdCoPlayMixPercentage"
                  id="ipdCoPlayMixPercentage"
                  value={ipdCoPlayMixPercentage}
                  onChange={this.props.handleChange}
                  required
                />
                <Form.Input
                  type="number"
                  style={{ width: '90px' }}
                  label=" %ไม่เกิน"
                  placeholder="จำนวนเงิน"
                  name="ipdCoPlayMixNotExceed"
                  id="ipdCoPlayMixNotExceed"
                  value={ipdCoPlayMixNotExceed}
                  onChange={this.props.handleChange}
                  required
                />
                <Form.Input
                  type="number"
                  style={{ width: '40px' }}
                  label=" ต่อ"
                  placeholder="ปี"
                  name="ipdCoPlayMixYear"
                  id="ipdCoPlayMixYear"
                  value={ipdCoPlayMixYear}
                  onChange={this.props.handleChange}
                  required
                />
              </div>
              : <div style={{ display: 'inherit' }}>
                <Form.Input
                  type="number"
                  style={{ width: '80px' }}
                  placeholder="เปอร์เซ็น"
                  name="ipdCoPlayMixPercentage"
                  id="ipdCoPlayMixPercentage"
                  value=""
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
                  value=""
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
                  value=""
                  onChange={this.props.handleChange}
                  readOnly
                />
              </div>}
          </Form.Group>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(Coplay)
