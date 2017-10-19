import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

class IPD2 extends Component {
  static propTypes = {
    activePlan: PropTypes.number.isRequired,
    rbLumsumRoomPerNight: PropTypes.string.isRequired,
    setPlan: PropTypes.string.isRequired,
    reset: PropTypes.string.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    handleNewReset: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleVerifyState: PropTypes.func.isRequired,
    rbLumsumNigthNotExceedPerYear: PropTypes.string.isRequired,
    rbLumsumPayNotExceedPerNight: PropTypes.string.isRequired,
    // rbLumsumPayNotExceedPerYear: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    const {
      // rbLumsumRoomPerNight,
      // rbLumsumPayNotExceedPerYear,
      // rbLumsumPayNotExceedPerNight,
      rbLumsumNigthNotExceedPerYear,
    } = this.props;
    let value;
    if (rbLumsumNigthNotExceedPerYear === 365) {
      value = '365';
    } else if (rbLumsumNigthNotExceedPerYear !== 365 && rbLumsumNigthNotExceedPerYear !== null) {
      value = 'firstChoice';
    } else {
      value = '';
    }
    this.state = { value };
  }

  componentWillReceiveProps(newProps) {
    const {
      rbLumsumNigthNotExceedPerYear,
    } = newProps;
    let value;
    if (rbLumsumNigthNotExceedPerYear !== '365' && rbLumsumNigthNotExceedPerYear !== null) {
      value = 'firstChoice';
    } else if (rbLumsumNigthNotExceedPerYear === '365') {
      value = '365';
    } else {
      value = '';
    }

    if (newProps.activePlan !== this.props.activePlan) {
      this.state = { value };
    }
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'IPD' && this.props.reset === true) {
      this.handleResetdata();
    }
  }

  handleRadio = e => {
    this.handleResetdata();
    if (e.value) {
      const value = e.value;
      this.setState({ value });
    } else {
      const value = e.target.value;
      this.setState({ value });
    }
  }

  handleResetdata = () => {
    // document.getElementById('rbLumsumPayNotExceedPerNight').value = '';
    this.props.handleChangeToNull('rbLumsumPayNotExceedPerNight');
    this.props.handleChangeToNull('rbLumsumPayNotExceedPerYear');
    document.getElementById('rbLumsumRoomPerNight').value = '';
    this.props.handleChangeToNull('rbLumsumRoomPerNight');
    document.getElementById('rbLumsumNigthNotExceedPerYear').value = '';
    this.props.handleChangeToNull('rbLumsumNigthNotExceedPerYear');
    this.setState({ value: '' });
    this.props.handleNewReset();
  }

  handleChange = (e, { name, value }) => {
    this.props.handleChange(e, { name, value });
    this.props.handleVerifyState();
  }

  handleClickRedioBTN = e => {
    // this.handleResetdata();
    if (e.value) {
      const name = e.name;
      const value = e.value;
      this.props.handleChange(e, { name, value });
      this.setState({ value });
    } else {
      const name = e.target.name;
      const value = e.target.value;
      this.props.handleChange(e, { name, value });
      this.setState({ value });
    }
  }

  render() {
    return (
      <div className="submit-plan-rnb-lumsum-form">
        <Form>
          <Form.Field inline>
            <label htmlFor="roomNfood">ค่าห้องและค่าอาหาร</label>
            <Input
              type="number"
              placeholder="จำนวนเงิน"
              name="rbLumsumRoomPerNight"
              id="rbLumsumRoomPerNight"
              value={this.props.rbLumsumRoomPerNight}
              onChange={this.props.handleChange}
              required
            />
            <span className="submit-plan-grap-l">บาท/คืน</span>
          </Form.Field>
          <Form.Field inline>
            <input
              type="radio"
              name="rbLumsumNigthNotExceedPerYear"
              value="firstChoice"
              checked={this.state.value === 'firstChoice'}
              onChange={this.handleClickRedioBTN}
            />
            <label htmlFor="ปีละไม่เกิน" className="submit-plan-grap-r">ปีละไม่เกิน</label>
            {/* <Radio
              label="ปีละไม่เกิน"
              name="rbLumsumNigthNotExceedPerYear"
              value="firstChoice"
              checked={this.state.value === 'firstChoice'}
              onChange={this.handleClickRedioBTN}
            /> */}
            <Input
              type="number"
              placeholder="จำนวนคืน"
              name="rbLumsumNigthNotExceedPerYear"
              id="rbLumsumNigthNotExceedPerYear"
              value={
                this.state.value === 'firstChoice'
                ? this.props.rbLumsumNigthNotExceedPerYear
                : ''
              }
              readOnly={this.state.value !== 'firstChoice'}
              onChange={this.props.handleChange}
              required
            />
            <span className="submit-plan-grap-l">คืน/ปี</span>
          </Form.Field>
          <Form.Field inline>
            <input
              type="radio"
              name="rbLumsumNigthNotExceedPerYear"
              value="365"
              checked={this.state.value === '365'}
              onChange={this.handleClickRedioBTN}
            />
            <label htmlFor="ไม่จำกัด">ไม่จำกัด</label>
            {/* <Radio
              label="ไม่จำกัด"
              name="rbLumsumNigthNotExceedPerYear"
              value="365"
              checked={this.state.value === '365'}
              onChange={this.handleClickRedioBTN}
            /> */}
          </Form.Field>
          <Form.Field inline>
            <label htmlFor="roomNfood">ค่ารักษาพยาบาลกรณีผู้ป่วยในจ่ายตามจริงไม่เกิน</label>
            <Input
              type="number"
              placeholder="จำนวนเงิน"
              name="rbLumsumPayNotExceedPerNight"
              id="rbLumsumPayNotExceedPerNight"
              value={this.props.rbLumsumPayNotExceedPerNight}
              onChange={this.props.handleChange}
              required
            />
            <span className="submit-plan-grap-l">บาท/คืน</span>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default connect(null, null)(IPD2);
