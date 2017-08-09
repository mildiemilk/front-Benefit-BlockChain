import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import TimePicker from 'rc-time-picker'
import { Submit } from './styled'

class Timeout extends Component {
  static propTypes = {
    setTimeOut: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      date: null,
    }
  }

  handleTimeOut = () => {
    const { date } = this.state
    this.props.setTimeOut(date)
  }

  handleDate = date => {
    this.setState({ date })
  }

  handleTime = time => {
    time._d.setDate(this.state.date._d.getDate())
    this.state.date._d.setTime(time._d.getTime())
  }

  render() {
    return (
      <div>
        <DatePicker
          selected={this.state.date}
          onChange={this.handleDate}
          minDate={moment()}
        />
        <span>&nbsp;เวลา&nbsp;</span>
        <TimePicker onChange={this.handleTime} showSecond={false} />
        <br />
        <Submit onClick={this.handleTimeOut}>บันทึก</Submit>
      </div>
    )
  }
}

export default Timeout
