import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeadlineBox extends Component {
  static propTypes = {
    timeout: PropTypes.string.isRequired,
  }
  // static defaultProps = {
  //   timeout: null,
  // }
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentWillMount() {
    if (this.props.timeout !== undefined) {
      this.interval = setInterval(() => {
        const date = this.calculateCountdown(this.props.timeout);
        if (date) this.setState(date);
        else {
          this.stop();
        }
      }, 1000);
    }
  }

  componentWillReceiveProps(newProps) {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(newProps.timeout);
      if (date) this.setState(date);
      else {
        this.stop();
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown = endDate => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear CountDowns when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros = value => {
    let values = String(value);
    while (values.length < 2) {
      values = `0${values}`;
    }
    return values;
  }

  render() {
    const countDown = this.state;
    const $isDay = this.addLeadingZeros(countDown.days);
    const $isHours = this.addLeadingZeros(countDown.hours);
    const $isMin = this.addLeadingZeros(countDown.min);
    // const $isSec = this.addLeadingZeros(countDown.sec);
    const { timeout } = this.props;
    return (
      <div>
        <div className="row">
          <div className="box-space">
            <div className="small-4 columns" style={{ paddingRight: '0px' }}>
              <div className="date-deadline-box">
                <div className="deadline-number">
                  { timeout !== 0
                    ? $isDay
                    : ''
                  }
                </div>
                <div className="deadline-text">วัน</div>
              </div>
            </div>
            <div
              className="small-4 columns"
              style={{ paddingRight: '0px', paddingLeft: '0px' }}
            >
              <div className="hour-deadline-box">
                <div className="deadline-number">
                  { timeout !== 0
                    ? $isHours
                    : ''
                  }
                </div>
                <div className="deadline-text">ชั่วโมง</div>
              </div>
            </div>
            <div className="small-4 columns" style={{ paddingLeft: '0px' }}>
              <div className="second-deadline-box">
                <div className="deadline-number">
                  { timeout !== 0
                    ? $isMin
                    : ''
                  }
                </div>
                <div className="deadline-text">นาที</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeadlineBox;
