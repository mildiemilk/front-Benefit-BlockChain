import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import TimePicker from 'rc-time-picker'

const format = 'h:mm a'
const now = moment().hour(0).minute(0)
class Timeout extends Component {
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
    this.setState({
      date: date,
    })
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
      </div>
    )
  }
}

export default Timeout
