import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { endTimeout } from '../../../api/bidding'
import { CountTime, DisplayTime, DisplayTimeout } from '../styled'

class CountDowns extends Component {
  static propTypes = {
    endTimeout: PropTypes.shape.isRequired,
  }
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
    this.props.endTimeout(this.state.end)
  }

  componentWillReceiveProps(newProps) {
    // update every second
    if (newProps.date !== this.props.date) {
      console.log('count', this.props.date)
      this.interval = setInterval(() => {
        const date = this.calculateCountdown(this.props.date)
        if (date) this.setState(date)
        else {
          this.stop()
          this.setState({ end: 'Timeout' })
          this.props.endTimeout(this.state.end)
        }
      }, 1000)
    }
  }

  componentWillUnmount() {
    this.stop()
  }

  calculateCountdown = endDate => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    // clear CountDowns when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return timeLeft
  }

  stop() {
    clearInterval(this.interval)
  }

  addLeadingZeros = value => {
    let values = String(value)
    while (values.length < 2) {
      values = `0${values}`
    }
    return values
  }

  render() {
    const countDown = this.state
    let $isDay = this.addLeadingZeros(countDown.days)
    let $isHours = this.addLeadingZeros(countDown.hours)
    let $isMin = this.addLeadingZeros(countDown.min)
    let $isSec = this.addLeadingZeros(countDown.sec)

    if (
      $isDay === '00' &&
      $isHours === '00' &&
      $isMin === '00' &&
      $isSec <= '01'
    ) {
      $isDay = <DisplayTime />
      $isHours = <DisplayTimeout>หมดเวลา</DisplayTimeout>
      $isMin = <DisplayTime />
      $isSec = <DisplayTime />
    } else {
      $isDay = <CountTime>{this.addLeadingZeros(countDown.days)}:</CountTime>
      $isHours = <CountTime>{this.addLeadingZeros(countDown.hours)}:</CountTime>
      $isMin = <CountTime>{this.addLeadingZeros(countDown.min)}:</CountTime>
      $isSec = <CountTime>{this.addLeadingZeros(countDown.sec)}</CountTime>
    }
    return (
      <div className="Countdown">
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{$isDay}</strong>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{$isHours}</strong>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{$isMin}</strong>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{$isSec}</strong>
          </span>
        </span>
      </div>
    )
  }
}

CountDowns.propTypes = {
  date: PropTypes.string.isRequired,
}

CountDowns.defaultProps = {
  date: new Date(),
}

const mapDispatchToProps = dispatch => ({
  endTimeout: end => dispatch(endTimeout({ end })),
})
const mapStateToProps = state => ({
  end: state.endTimeout,
})

export default connect(mapStateToProps, mapDispatchToProps)(CountDowns)
