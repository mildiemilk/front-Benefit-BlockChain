import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Input, Popup } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import '../../styles/inputDate.scss';

class InputDate extends Component {
  static propTypes = {
    inputClass: PropTypes.string.isRequired,
    defaultInputDate: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      dateValue: this.props.defaultInputDate,
    };
  }


  handleDate = date => {
    const newDate = moment(date)
      .add(543, 'years')
      .locale('th')
      .format('DD MMMM YYYY');
    this.setState({ dateValue: newDate });
  }

  render() {
    const {
      inputClass,
    } = this.props;
    const { dateValue } = this.state;
    return (
      <Popup
        className="inputdate"
        trigger={<Input className={inputClass} type="text" icon="calendar" onChange={() => {}} value={dateValue} />}
        content={<DatePicker inline onChange={this.handleDate} />}
        on="click"
        hideOnScroll
      />
    );
  }
}

export default InputDate;
