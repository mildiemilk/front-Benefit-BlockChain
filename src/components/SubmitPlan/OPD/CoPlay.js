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

class CoPlay extends Component {
  constructor() {
    super()
    this.state = {
      showCoPlay: false,
      value: '',
      opdCoPlay: null,
      opdCoPlayQuota: null,
      opdCoPlayDeductable: null,
      opdCoPlayMixPercentage: null,
      opdCoPlayMixNotExceed: null,
      opdCoPlayMixopdCoPlayMixYear: null,
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
      document.getElementById('opdCoPlayQuota').value = ''
      this.setState({ opdCoPlayQuota: null })
    } else if (this.state.value === 'Deductable') {
      document.getElementById('opdCoPlayDeductable').value = ''
      this.setState({ opdCoPlayDeductable: null })
    } else {
      document.getElementById('opdCoPlayMixPercentage').value = ''
      this.setState({ opdCoPlayMixPercentage: null })
      document.getElementById('opdCoPlayMixNotExceed').value = ''
      this.setState({ opdCoPlayMixNotExceed: null })
      document.getElementById('opdCoPlayMixYear').value = ''
      this.setState({ opdCoPlayMixYear: null })
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
                  name="opdCoPlayQuota"
                  id="opdCoPlayQuota"
                  onChange={this.props.handleChange}
                  required
                />
              : <Form.Input
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
                  placeholder="จำนวนเงิน"
                  name="opdCoPlayDeductable"
                  id="opdCoPlayDeductable"
                  onChange={this.props.handleChange}
                  required
                />
              : <Form.Input
                  placeholder="จำนวนเงิน"
                  name="opdCoPlayDeductable"
                  id="opdCoPlayDeductable"
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
                    style={{ width: '80px' }}
                    placeholder="เปอร์เซ็น"
                    name="opdCoPlayMixPercentage"
                    id="opdCoPlayMixPercentage"
                    onChange={this.props.handleChange}
                    required
                  />
                  <Form.Input
                    style={{ width: '90px' }}
                    label=" %ไม่เกิน"
                    placeholder="จำนวนเงิน"
                    name="opdCoPlayMixNotExceed"
                    id="opdCoPlayMixNotExceed"
                    onChange={this.props.handleChange}
                    required
                  />
                  <Form.Input
                    style={{ width: '40px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="opdCoPlayMixYear"
                    id="opdCoPlayMixYear"
                    onChange={this.props.handleChange}
                    required
                  />
                </div>
              : <div style={{ display: 'inherit' }}>
                  <Form.Input
                    style={{ width: '80px' }}
                    placeholder="เปอร์เซ็น"
                    name="opdCoPlayMixPercentage"
                    id="opdCoPlayMixPercentage"
                    onChange={this.props.handleChange}
                    readOnly
                  />
                  <Form.Input
                    style={{ width: '90px' }}
                    label=" %ไม่เกิน"
                    placeholder="จำนวนเงิน"
                    name="opdCoPlayMixNotExceed"
                    id="opdCoPlayMixNotExceed"
                    onChange={this.props.handleChange}
                    readOnly
                  />
                  <Form.Input
                    style={{ width: '40px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="opdCoPlayMixYear"
                    id="opdCoPlayMixYear"
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

CoPlay.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CoPlay)
