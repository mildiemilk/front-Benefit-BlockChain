import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Form, Radio } from 'semantic-ui-react'

class IPD2 extends Component {
  static propTypes = {
    activePlan: PropTypes.number.isRequired,
    rbLumsumRoomPerNight: PropTypes.string.isRequired,
    setPlan: PropTypes.string.isRequired,
    reset: PropTypes.string.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    handleNewReset: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleVerifyState: PropTypes.func.isRequired,
    rbLumsumNigthNotExceedPerYear: PropTypes.string.isRequired,
    rbLumsumPayNotExceedPerNight: PropTypes.string.isRequired,
    rbLumsumPayNotExceedPerYear: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.rbLumsumRoomPerNight !== null &&
        this.props.rbLumsumNigthNotExceedPerYear !== null
        ? 'firstChoice'
        : this.props.rbLumsumPayNotExceedPerNight !== null &&
            this.props.rbLumsumPayNotExceedPerYear !== null
            ? 'secondChoice'
            : '',
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.activePlan !== this.props.activePlan) {
      this.setState({
        value: newProps.rbLumsumRoomPerNight !== null &&
          newProps.rbLumsumNigthNotExceedPerYear !== null
          ? 'firstChoice'
          : newProps.rbLumsumPayNotExceedPerNight !== null &&
              newProps.rbLumsumPayNotExceedPerYear !== null
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

  handleRadio = (e, { value }) => {
    this.handleResetdata()
    this.setState({ value })
  }

  handleResetdata = () => {
    document.getElementById('rbLumsumPayNotExceedPerNight').value = ''
    this.props.handleChangeToNull('rbLumsumPayNotExceedPerNight')
    this.props.handleChangeToNull('rbLumsumPayNotExceedPerYear')
    document.getElementById('rbLumsumRoomPerNight').value = ''
    this.props.handleChangeToNull('rbLumsumRoomPerNight')
    document.getElementById('rbLumsumNigthNotExceedPerYear').value = ''
    this.props.handleChangeToNull('rbLumsumNigthNotExceedPerYear')
    this.setState({ value: '' })
    this.props.handleNewReset()
  }

  handleChange = (e, { name, value }) => {
    this.props.handleChange(e, { name, value })
    this.props.handleVerifyState()
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
              onChange={this.handleRadio}
            />
          </Form.Field>
          <span>ค่าห้องและค่าอาหาร</span>
          {this.state.value === 'firstChoice'
            ? <div style={{ display: '-webkit-box' }}>
                <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="rbLumsumRoomPerNight"
                  id="rbLumsumRoomPerNight"
                  value={this.props.rbLumsumRoomPerNight}
                  onChange={this.props.handleChange}
                  required
                  style={{ width: '120px', marginLeft: '7%' }}
                />
                <Form.Input
                  type="number"
                  label="บาท/คืน ไม่เกินปีล่ะ"
                  placeholder="จำนวนเงิน"
                  name="rbLumsumNigthNotExceedPerYear"
                  id="rbLumsumNigthNotExceedPerYear"
                  value={this.props.rbLumsumNigthNotExceedPerYear}
                  onChange={this.props.handleChange}
                  required
                  style={{ width: '150px' }}
                />
              </div>
            : <div style={{ display: '-webkit-box' }}>
                <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="rbLumsumRoomPerNight"
                  id="rbLumsumRoomPerNight"
                  value=""
                  onChange={this.props.handleChange}
                  readOnly
                  style={{ width: '120px', marginLeft: '7%' }}
                />
                <Form.Input
                  type="number"
                  label="บาท/คืน ไม่เกินปีล่ะ"
                  placeholder="จำนวนเงิน"
                  name="rbLumsumNigthNotExceedPerYear"
                  id="rbLumsumNigthNotExceedPerYear"
                  value=""
                  onChange={this.props.handleChange}
                  readOnly
                  style={{ width: '150px' }}
                />
              </div>}
          <p> คืน</p>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <Radio
              label="ค่ารักษาพยาบาลกรณีผู้ป่วยในจ่ายตามจริงไม่เกิน"
              name="IPD2Group"
              value="secondChoice"
              checked={this.state.value === 'secondChoice'}
              onChange={this.handleRadio}
            />
          </Form.Field>
          {this.state.value === 'secondChoice'
            ? <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="rbLumsumPayNotExceedPerNight"
                id="rbLumsumPayNotExceedPerNight"
                value={this.props.rbLumsumPayNotExceedPerNight}
                onChange={this.props.handleChange}
                required
                style={{ width: '150px' }}
              />
            : <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="rbLumsumPayNotExceedPerNight"
                id="rbLumsumPayNotExceedPerNight"
                value=""
                onChange={this.props.handleChange}
                readOnly
                style={{ width: '150px' }}
              />}
          <p> บาท/คืน ไม่เกินปีล่ะ</p>
        </Form.Group>
        <Form.Group inline style={{ marginLeft: '25px' }}>
          {this.state.value === 'secondChoice'
            ? <Form.Input
                type="number"
                label="และจ่ายไม่เกิน"
                placeholder="จำนวนเงิน"
                name="rbLumsumPayNotExceedPerYear"
                id="rbLumsumPayNotExceedPerYear"
                value={this.props.rbLumsumPayNotExceedPerYear}
                onChange={this.props.handleChange}
                required
                style={{ width: '150px' }}
              />
            : <Form.Input
                type="number"
                label="และจ่ายไม่เกิน"
                placeholder="จำนวนเงิน"
                name=" rbLumsumPayNotExceedPerYear"
                id=" rbLumsumPayNotExceedPerYear"
                value=""
                onChange={this.props.handleChange}
                style={{ width: '150px' }}
              />}
          <p> คืน</p>
        </Form.Group>

      </div>
    )
  }
}

export default connect(null, null)(IPD2)
