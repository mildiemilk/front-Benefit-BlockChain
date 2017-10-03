import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import { Submit } from './styled';

const DatePickers = styled(DatePicker)`
  width: 276.5px;
  height: 26px;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
  font-size: 16px
`;
class Timeout extends Component {
  static propTypes = {
    setTimeout: PropTypes.func.isRequired,
    timeout: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      date: moment(props.timeout),
    };
  }
  componentwillReceiveProps(nextProps) {
    if (nextProps.timeout !== this.props.timeout) {
      console.log('yayay');
      this.setState({ date: moment(nextProps.timeout) });
    }
  }
  handleTimeOut = () => {
    const { date } = this.state;
    console.log('date', date);
    this.props.setTimeout(date);
  }

  handleDate = date => {
    console.log('date--->', date);
    this.setState({ date });
  }

  handleTime = time => {
    console.log('time', time);
    time._d.setDate(this.state.date._d.getDate());
    this.state.date._d.setTime(time._d.getTime());
  }

  render() {
    console.log('timeout', this.props.timeout);
    console.log('timeout-->state', moment(this.props.timeout));
    console.log('state', this.state.date);
    return (
      <div style={{ display: 'inline-block' }} >
        <div>
          <DatePickers
            selected={moment(this.props.timeout)}
            onChange={this.handleDate}
            minDate={moment()}
            fixedHeight
          />
          <span>&nbsp;เวลา&nbsp;</span>
          <TimePicker
            onChange={this.handleTime} showSecond={false} defaultValue={this.state.date}
          />
        </div>
        <div className="clearfix">
          <Submit onClick={this.handleTimeOut}>บันทึก</Submit>
        </div>
      </div>
    );
  }
}

export default Timeout;
