import React, { PropTypes, Component } from 'react';
// import { connect } from 'react-redux';
// import { endTimeout } from '../../../api/bidding';
import { CountTime, DisplayTime, DisplayTimeout, Unit } from '../styled';

class CountDowns extends Component {
  static propTypes = {
    // endTimeout: PropTypes.shape.isRequired,
    notiTimeout: PropTypes.func.isRequired,
  }

  static defaultProps = {
    date: null,
  }
  constructor() {
    super();

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      isSet: false,
    };
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      if (date) {
        this.setState({ ...date, isSet: true });
      } else {
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
    this.props.notiTimeout();
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
    let $isDay = this.addLeadingZeros(countDown.days);
    let $isHours = this.addLeadingZeros(countDown.hours);
    let $isMin = this.addLeadingZeros(countDown.min);
    let $isSec = this.addLeadingZeros(countDown.sec);
    console.log('Date', this.props.date);
    console.log('d,h,m,s', $isDay, $isHours, $isMin, $isSec);
    console.log('eiei-->', Date.parse(new Date(this.props.date)) - Date.parse(new Date()));
    if (
        $isDay === '00' &&
        $isHours === '00' &&
        $isMin === '00' &&
        $isSec <= '00') {
      if (!this.state.isSet && this.props.date === null) {
        $isDay = <CountTime>--:</CountTime>;
        $isHours = <CountTime>--:</CountTime>;
        $isMin = <CountTime>--:</CountTime>;
        $isSec = <CountTime>--</CountTime>;
      } else {
        $isDay = <DisplayTime />;
        $isHours = <DisplayTimeout>หมดเวลา</DisplayTimeout>;
        $isMin = <DisplayTime />;
        $isSec = <DisplayTime />;
      }
    } else {
      if (
        $isDay === '00' &&
        $isHours === '00' &&
        $isMin === '00' &&
        $isSec <= '01'
      ) {
        console.log('3');
        $isDay = <DisplayTime />;
        $isHours = <DisplayTimeout>หมดเวลา</DisplayTimeout>;
        $isMin = <DisplayTime />;
        $isSec = <DisplayTime />;
      } else {
        $isDay = (<div>
          <CountTime>{this.addLeadingZeros(countDown.days)}:</CountTime><Unit>วัน</Unit>
        </div>);
        $isHours = (<div>
          <CountTime>{this.addLeadingZeros(countDown.hours)}:</CountTime><Unit>ชั่วโมง</Unit>
        </div>);
        $isMin = (<div>
          <CountTime>{this.addLeadingZeros(countDown.min)}:</CountTime><Unit>นาที</Unit>
        </div>);
        $isSec = (<div>
          <CountTime>{this.addLeadingZeros(countDown.sec)}</CountTime><Unit>วินาที</Unit>
        </div>);
      }
    }
    return (
      <div style={{ display: 'flex' }}>
        {$isDay}
        {$isHours}
        {$isMin}
        {$isSec}
      </div>
    );
  }
}

CountDowns.propTypes = {
  date: PropTypes.string.isRequired,
};

CountDowns.defaultProps = {
  date: new Date(),
};

export default CountDowns;
