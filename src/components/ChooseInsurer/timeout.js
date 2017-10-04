import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { toast } from 'react-toastify';
import TimePicker from 'rc-time-picker';
import Toastify from '../Tostify';
import ToastifyContent from '../ToastifyContent';
// import { Submit } from './styled';

const DatePickers = styled(DatePicker)`
  width: 276.5px;
  height: 26px;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
`;
const TimePickers = styled(TimePicker)`
  width: 276.5px;
  height: 26px;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
`;

class Timeout extends Component {
  static propTypes = {
    setTimeout: PropTypes.func.isRequired,
    timeout: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    console.log('PRopConstaruct===>', props.timeout);
    this.state = {
      date: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextPRops', nextProps.timeout);
    console.log('PRops', this.props.timeout);
    if (this.props.timeout !== null && this.props.timeout !== '') {
      console.log('PRops Inif', this.props.timeout);
      this.setState({ date: moment(nextProps.timeout) }, () => console.log('date WillRecie--->', this.state.date));
    }
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('NextState', nextState);
  }
  handleTimeOut = () => {
    const { date } = this.state;
    console.log('date', date);
    toast(<ToastifyContent />);
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
    console.log('stateDate', this.state.date);
    return (
      <div style={{ display: 'inline-block', width: '100%' }} >
        <div>
          <DatePickers
            selected={this.state.date}
            onChange={this.handleDate}
            minDate={moment()}
            fixedHeight
          />
          <span>&nbsp;เวลา&nbsp;</span>
          {this.state.date === ''
          ? <TimePickers
            onChange={this.handleTime} showSecond={false}
          />
          : <TimePickers
            onChange={this.handleTime} showSecond={false} defaultValue={this.state.date}
          />
          }
        </div>
        <div className="clearfix">
          <Toastify handleSubmit={this.handleTimeOut} />
        </div>
      </div>
    );
  }
}

export default Timeout;
