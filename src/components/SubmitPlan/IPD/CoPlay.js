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

class Coplay extends Component {
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
    const value = ''
  }

  static propTypes = {}

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleRadio = (e, { value }) => {
    this.setState({ value })
    if (this.state.value === 'Quota Share') {
      document.getElementById('ipdCoPlayQuota').value = ''
      this.props.handleChangeToNull('ipdCoPlayQuota')
    } else if (this.state.value === 'Deductable') {
      document.getElementById('ipdCoPlayDeductable').value = ''
      this.props.handleChangeToNull('ipdCoPlayDeductable')
    } else {
      document.getElementById('ipdCoPlayMixPercentage').value = ''
      this.props.handleChangeToNull('ipdCoPlayMixPercentage')
      document.getElementById('ipdCoPlayMixNotExceed').value = ''
      this.props.handleChangeToNull('ipdCoPlayMixNotExceed')
      document.getElementById('ipdCoPlayMixYear').value = ''
      this.props.handleChangeToNull('ipdCoPlayMixYear')
    }
  }

  handleResetdata = () => {
    document.getElementById('ipdCoPlayQuota').value = ''
    this.props.handleChangeToNull('ipdCoPlayQuota')
    document.getElementById('ipdCoPlayDeductable').value = ''
    this.props.handleChangeToNull('ipdCoPlayDeductable')
    document.getElementById('ipdCoPlayMixPercentage').value = ''
    this.props.handleChangeToNull('ipdCoPlayMixPercentage')
    document.getElementById('ipdCoPlayMixNotExceed').value = ''
    this.props.handleChangeToNull('ipdCoPlayMixNotExceed')
    document.getElementById('ipdCoPlayMixYear').value = ''
    this.props.handleChangeToNull('ipdCoPlayMixYear')
    this.setState({ value: '' })
    this.props.handleNewReset()
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'IPD' && this.props.reset === true) {
      this.handleResetdata()
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
            {this.state.value === 'Quota Share'
              ? <Form.Input
                  type="number"
                  placeholder="เปอร์เซน"
                  name="ipdCoPlayQuota"
                  id="ipdCoPlayQuota"
                  onChange={this.props.handleChange}
                  required
                />
              : <Form.Input
                  type="number"
                  placeholder="เปอร์เซน"
                  name="ipdCoPlayQuota"
                  id="ipdCoPlayQuota"
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
                  onChange={this.props.handleChange}
                  required
                />
              : <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="ipdCoPlayDeductable"
                  id="ipdCoPlayDeductable"
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
                </div>}
          </Form.Group>
        </div>
      </div>
    )
  }
}

Coplay.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Coplay)
