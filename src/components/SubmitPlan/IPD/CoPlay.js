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
      ipdCoPlayMixipdCoPlayMixYear: null,
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
      this.setState({ ipdCoPlayQuota: null })
    } else if (this.state.value === 'Deductable') {
      document.getElementById('ipdCoPlayDeductable').value = ''
      this.setState({ ipdCoPlayDeductable: null })
    } else {
      document.getElementById('ipdCoPlayMixPercentage').value = ''
      this.setState({ ipdCoPlayMixPercentage: null })
      document.getElementById('ipdCoPlayMixNotExceed').value = ''
      this.setState({ ipdCoPlayMixNotExceed: null })
      document.getElementById('ipdCoPlayMixYear').value = ''
      this.setState({ ipdCoPlayMixYear: null })
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
                  placeholder="เปอร์เซน"
                  name="ipdCoPlayQuota"
                  id="ipdCoPlayQuota"
                  onChange={this.handleChange}
                  required
                />
              : <Form.Input
                  placeholder="เปอร์เซน"
                  name="ipdCoPlayQuota"
                  id="ipdCoPlayQuota"
                  readOnly
                  onChange={this.handleChange}
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
                  placeholder="จำนวนเงิน"
                  name="ipdCoPlayDeductable"
                  id="ipdCoPlayDeductable"
                  onChange={this.handleChange}
                  required
                />
              : <Form.Input
                  placeholder="จำนวนเงิน"
                  name="ipdCoPlayDeductable"
                  id="ipdCoPlayDeductable"
                  onChange={this.handleChange}
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
                    style={{ width: '80px' }}
                    placeholder="เปอร์เซ็น"
                    name="ipdCoPlayMixPercentage"
                    id="ipdCoPlayMixPercentage"
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Input
                    style={{ width: '90px' }}
                    label=" %ไม่เกิน"
                    placeholder="จำนวนเงิน"
                    name="ipdCoPlayMixNotExceed"
                    id="ipdCoPlayMixNotExceed"
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Input
                    style={{ width: '40px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="ipdCoPlayMixYear"
                    id="ipdCoPlayMixYear"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              : <div style={{ display: 'inherit' }}>
                  <Form.Input
                    style={{ width: '80px' }}
                    placeholder="เปอร์เซ็น"
                    name="ipdCoPlayMixPercentage"
                    id="ipdCoPlayMixPercentage"
                    onChange={this.handleChange}
                    readOnly
                  />
                  <Form.Input
                    style={{ width: '90px' }}
                    label=" %ไม่เกิน"
                    placeholder="จำนวนเงิน"
                    name="ipdCoPlayMixNotExceed"
                    id="ipdCoPlayMixNotExceed"
                    onChange={this.handleChange}
                    readOnly
                  />
                  <Form.Input
                    style={{ width: '40px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="ipdCoPlayMixYear"
                    id="ipdCoPlayMixYear"
                    onChange={this.handleChange}
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
