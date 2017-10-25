import React, { Component } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { toast } from 'react-toastify';
import TimePicker from 'rc-time-picker';
// import Toastify from '../Tostify';
import ToastifyContent from '../ToastifyContent';

// const DatePickers = styled(DatePicker)`
//   width: 19.5vw;
//   @media screen and (min-width: 1440px) {
//     width: 280px;
//   }
// `;
// const TimePickers = styled(TimePicker)`
//   width: 19.5vw;
//   @media screen and (min-width: 1440px) {
//     width: 280px;
//   }
// `;

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
        <div className="insure">
          วันที่ &nbsp;
          <DatePicker
            selected={this.state.date}
            onChange={this.handleDate}
            minDate={moment()}
            fixedHeight
          />
          <span>&nbsp;เวลา&nbsp;</span>
          {
            this.state.date === ''
            ? <TimePicker
              onChange={this.handleTime} showSecond={false}
            />
            : <TimePicker
              onChange={this.handleTime} showSecond={false} value={this.state.date}
            />
          }
        </div>
        {/* <Toastify handleSubmit={this.handleTimeOut} /> */}
        <div className="choose-in-save-btn chooose-in-edit-save-btn-box">
          <button
            className="submit-plan-btn-form-submit-plan btn-blue"
            onClick={this.handleTimeOut}
          >
            บันทึก
          </button>
        </div>
      </div>
    );
  }
}

export default Timeout;
