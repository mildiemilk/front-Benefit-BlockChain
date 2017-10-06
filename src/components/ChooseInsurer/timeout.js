import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { toast } from 'react-toastify';
import TimePicker from 'rc-time-picker';
import Toastify from '../Tostify';
import ToastifyContent from '../ToastifyContent';

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
    this.state = {
      date: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.timeout !== null && this.props.timeout !== '') {
      this.setState({ date: moment(nextProps.timeout) });
    }
  }

  handleTimeOut = () => {
    const { date } = this.state;
    toast(<ToastifyContent />);
    this.props.setTimeout(date);
  }

  handleDate = date => {
    this.setState({ date });
  }

  handleTime = time => {
    time._d.setDate(this.state.date._d.getDate());
    this.state.date._d.setTime(time._d.getTime());
  }

  render() {
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
            onChange={this.handleTime} showSecond={false} value={this.state.date}
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
