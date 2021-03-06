import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import '../../../styles/submit-plan.scss';

class IPD1 extends Component {
  static propTypes = {
    handleNewReset: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    reset: PropTypes.string.isRequired,
    setPlan: PropTypes.string.isRequired,
    activePlan: PropTypes.number.isRequired,
    ipdLumsumPerYear: PropTypes.string.isRequired,
    ipdLumsumPerTime: PropTypes.string.isRequired,
    ipdLumsumTimeNotExceedPerYear: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    const {
      ipdLumsumPerYear,
      ipdLumsumPerTime,
      ipdLumsumTimeNotExceedPerYear,
    } = props;
    let value;
    if (ipdLumsumPerYear) {
      value = 'firstChoice';
    } else if (ipdLumsumPerTime && ipdLumsumTimeNotExceedPerYear) {
      value = 'secondChoice';
    } else {
      value = '';
    }
    this.state = { value };
  }

  componentWillReceiveProps(newProps) {
    const {
      ipdLumsumPerYear,
      ipdLumsumPerTime,
      ipdLumsumTimeNotExceedPerYear,
    } = newProps;
    let value;
    if (ipdLumsumPerYear) {
      value = 'firstChoice';
    } else if (ipdLumsumPerTime && ipdLumsumTimeNotExceedPerYear) {
      value = 'secondChoice';
    } else {
      value = '';
    }
    if (newProps.activePlan !== this.props.activePlan) {
      this.setState({ value });
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
    this.props.handleChangeToNull('ipdLumsumPerTime');
    this.props.handleChangeToNull('ipdLumsumTimeNotExceedPerYear');
    this.props.handleChangeToNull('ipdLumsumPerYear');
    this.setState({ value: '' });
    this.props.handleNewReset();
  }

  render() {
    return (
      <div>
        <Form.Group inline>
          <Form.Field>
            <input
              type="radio"
              name="IPD1Group"
              value="firstChoice"
              checked={this.state.value === 'firstChoice'}
              onChange={this.handleRadio}
            />
            <label htmlFor="จำนวนเงิน">จำนวนเงิน</label>
            {/* <Radio
              label="จำนวนเงิน"
              name="IPD1Group"
              value="firstChoice"
              checked={this.state.value === 'firstChoice'}
              onChange={this.handleRadio}
            /> */}
          </Form.Field>
          {this.state.value === 'firstChoice'
            ? <Form.Input
              type="number"
              placeholder="จำนวนเงิน"
              name="ipdLumsumPerYear"
              id="ipdLumsumPerYear"
              value={this.props.ipdLumsumPerYear}
              onChange={this.props.handleChange}
              style={{ width: '120px' }}
              required
            />
            : <Form.Input
              type="number"
              placeholder="จำนวนเงิน"
              name="ipdLumsumPerYear"
              id="ipdLumsumPerYear"
              value=""
              onChange={this.props.handleChange}
              style={{ width: '120px' }}
              readOnly
            />}
          <p> บาท/ปี</p>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <input
              type="radio"
              name="IPD1Group"
              value="secondChoice"
              checked={this.state.value === 'secondChoice'}
              onChange={this.handleRadio}
            />
            <label htmlFor="จำนวนเงิน">จำนวนเงิน</label>
            {/* <Radio
              label="จำนวนเงิน"
              name="IPD1Group"
              value="secondChoice"
              checked={this.state.value === 'secondChoice'}
              onChange={this.handleRadio}
            /> */}
          </Form.Field>
          {this.state.value === 'secondChoice'
            ? <div style={{ display: 'inherit' }}>
              <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="ipdLumsumPerTime"
                id="ipdLumsumPerTime"
                value={this.props.ipdLumsumPerTime}
                onChange={this.props.handleChange}
                style={{ width: '105px' }}
                required
              />
              <Form.Input
                type="number"
                label="บาท/ครั้ง  ปีละไม่เกิน"
                placeholder="จำนวนครั้ง"
                name="ipdLumsumTimeNotExceedPerYear"
                id="ipdLumsumTimeNotExceedPerYear"
                value={this.props.ipdLumsumTimeNotExceedPerYear}
                onChange={this.props.handleChange}
                style={{ width: '105px' }}
                required
              />
            </div>
            : <div style={{ display: 'inherit' }}>
              <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="ipdLumsumPerTime"
                id="ipdLumsumPerTime"
                value=""
                onChange={this.props.handleChange}
                style={{ width: '105px' }}
                readOnly
              />
              <Form.Input
                type="number"
                label="บาท/ครั้ง  ปีละไม่เกิน"
                placeholder="จำนวนครั้ง"
                name="ipdLumsumTimeNotExceedPerYear"
                id="ipdLumsumTimeNotExceedPerYear"
                value=""
                onChange={this.props.handleChange}
                style={{ width: '105px' }}
                readOnly
              />
            </div>}
          <p> ครั้ง/ปี</p>
        </Form.Group>
      </div>
    );
  }
}

export default connect(null, null)(IPD1);
