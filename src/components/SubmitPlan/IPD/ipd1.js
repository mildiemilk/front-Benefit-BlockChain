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
import '../../../styles/submit-plan.scss'
import CoPlay from './coplay'

class IPD1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.ipdLumsumPerYear !== null
        ? 'firstChoice'
        : this.props.ipdLumsumPerTime !== null &&
            this.props.ipdLumsumTimeNotExceedPerYear !== null
            ? 'secondChoice'
            : '',
    }
  }

  static propTypes = {}

  handleRadio = (e, { value }) => {
    this.handleResetdata()
    this.setState({ value })
  }

  handleResetdata = () => {
    this.props.handleChangeToNull('ipdLumsumPerTime')
    this.props.handleChangeToNull('ipdLumsumTimeNotExceedPerYear')
    this.props.handleChangeToNull('ipdLumsumPerYear')
    this.setState({ value: '' })
    this.props.handleNewReset()
  }

  componentWillReceiveProps(newProps) {
    if (newProps.activePlan !== this.props.activePlan) {
      this.setState({
        value: newProps.ipdLumsumPerYear !== null
          ? 'firstChoice'
          : newProps.ipdLumsumPerTime !== null &&
              newProps.ipdLumsumTimeNotExceedPerYear !== null
              ? 'secondChoice'
              : '',
      })
    }
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'IPD' && this.props.reset === true) {
      this.handleResetdata()
    }
  }

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
          {this.state.value === 'firstChoice'
            ? <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="ipdLumsumPerYear"
                id="ipdLumsumPerYear"
                value={this.props.ipdLumsumPerYear}
                onChange={this.props.handleChange}
                required
              />
            : <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="ipdLumsumPerYear"
                id="ipdLumsumPerYear"
                value=""
                onChange={this.props.handleChange}
                readOnly
              />}
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
          {this.state.value === 'secondChoice'
            ? <div style={{ display: 'inherit' }}>
                <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="ipdLumsumPerTime"
                  id="ipdLumsumPerTime"
                  value={this.props.ipdLumsumPerTime}
                  onChange={this.props.handleChange}
                  style={{ width: '145px' }}
                  required
                />
                <Form.Input
                  type="number"
                  label="บาท/ครั้ง  ครั้งละไม่เกิน"
                  placeholder="จำนวนเงิน"
                  name="ipdLumsumTimeNotExceedPerYear"
                  id="ipdLumsumTimeNotExceedPerYear"
                  value={this.props.ipdLumsumTimeNotExceedPerYear}
                  onChange={this.props.handleChange}
                  style={{ width: '145px' }}
                  required
                />
              </div>
            : <div style={{ display: 'inherit' }}>
                <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="ipdLumsumPerTime"
                  id="ipdLumsumPerTime"
                  value=""
                  onChange={this.props.handleChange}
                  style={{ width: '145px' }}
                  readOnly
                />
                <Form.Input
                  type="number"
                  label="บาท/ครั้ง  ครั้งละไม่เกิน"
                  placeholder="จำนวนเงิน"
                  name="ipdLumsumTimeNotExceedPerYear"
                  id="ipdLumsumTimeNotExceedPerYear"
                  value=""
                  onChange={this.props.handleChange}
                  style={{ width: '145px' }}
                  readOnly
                />
              </div>}
          <p> บาท/ปี</p>
        </Form.Group>
      </div>
    )
  }
}

IPD1.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(IPD1)
