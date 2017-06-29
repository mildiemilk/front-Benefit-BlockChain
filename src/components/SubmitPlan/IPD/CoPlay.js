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
      showCoPlay: false,
      value: '',
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
      document.getElementById('percente').value = ''
    } else if (this.state.value === 'Deductable') {
      document.getElementById('money').value = ''
    } else {
      document.getElementById('mixPercente').value = ''
      document.getElementById('limitPercente').value = ''
      document.getElementById('year').value = ''
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
              placeholder="เปอร์เซน"
              name="percente"
              id="percente"
              onChange={this.handleChange}
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
              placeholder="จำนวนเงิน"
              name="money"
              id="money"
              onChange={this.handleChange}
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
            <Form.Input
              style={{ width: '80px' }}
              placeholder="เปอร์เซ็น"
              name="mixPercente"
              id="mixPercente"
              onChange={this.handleChange}
            />
            <Form.Input
              style={{ width: '90px' }}
              label=" %ไม่เกิน"
              placeholder="จำนวนเงิน"
              name="limitPercente"
              id="limitPercente"
              onChange={this.handleChange}
            />
            <Form.Input
              style={{ width: '40px' }}
              label=" ต่อ"
              placeholder="ปี"
              name="year"
              id="year"
              onChange={this.handleChange}
            />
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
