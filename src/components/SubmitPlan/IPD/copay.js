import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import '../../../styles/submit-plan.scss';

class CoPay extends Component {
  static propTypes = {
    handleNewReset: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    reset: PropTypes.string.isRequired,
    setPlan: PropTypes.string.isRequired,
    activePlan: PropTypes.number.isRequired,
    ipdCoPayQuota: PropTypes.string.isRequired,
    ipdCoPayDeductable: PropTypes.string.isRequired,
    ipdCoPayMixPercentage: PropTypes.string.isRequired,
    ipdCoPayMixNotExceed: PropTypes.string.isRequired,
    ipdCoPayMixYear: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    const {
      ipdCoPayQuota,
      ipdCoPayDeductable,
      ipdCoPayMixYear,
      ipdCoPayMixPercentage,
      ipdCoPayMixNotExceed,
    } = props;
    let value;
    if (ipdCoPayQuota) {
      value = 'Quota Share';
    } else if (ipdCoPayDeductable) {
      value = 'Deductable';
    } else if (ipdCoPayMixYear && ipdCoPayMixPercentage && ipdCoPayMixNotExceed) {
      value = 'Quota Share + Deductable';
    } else value = '';
    this.state = { value };
  }

  componentWillReceiveProps(newProps) {
    const {
      ipdCoPayQuota,
      ipdCoPayDeductable,
      ipdCoPayMixYear,
      ipdCoPayMixPercentage,
      ipdCoPayMixNotExceed,
    } = newProps;
    let value;
    if (!ipdCoPayQuota) {
      if (!ipdCoPayDeductable) {
        if (
          !(ipdCoPayMixYear && ipdCoPayMixPercentage && ipdCoPayMixNotExceed)
        ) {
          value = '';
        }
        value = 'Quota Share + Deductable';
      }
      value = 'Deductable';
    } else {
      value = 'Quota Share';
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

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleRadio = e => {
    let value = e.value;
    if (!e.value) {
      value = e.target.value;
    }
    this.handleResetdata();
    this.setState({ value });
  }

  handleResetdata = () => {
    this.props.handleChangeToNull('ipdCoPayQuota');
    this.props.handleChangeToNull('ipdCoPayDeductable');
    this.props.handleChangeToNull('ipdCoPayMixPercentage');
    this.props.handleChangeToNull('ipdCoPayMixNotExceed');
    this.props.handleChangeToNull('ipdCoPayMixYear');
    this.setState({ value: '' });
    this.props.handleNewReset();
  }

  render() {
    const {
      ipdCoPayDeductable,
      ipdCoPayMixNotExceed,
      ipdCoPayMixPercentage,
      ipdCoPayMixYear,
      ipdCoPayQuota,
    } = this.props;
    return (
      <div>
        <div className="copayParagraph">
          <Form.Group inline>
            <input
              type="radio"
              name="CoPayGroup"
              value="Quota Share"
              checked={this.state.value === 'Quota Share'}
              onChange={this.handleRadio}
            />
            <label htmlFor="Quota Share">Quota Share</label>
            {/* <Form.Field>
              <Radio
                label="Quota Share"
                name="CoPayGroup"
                value="Quota Share"
                checked={this.state.value === 'Quota Share'}
                onChange={this.handleRadio}
              />
            </Form.Field> */}
            {this.state.value === 'Quota Share'
              ? <Form.Input
                type="number"
                placeholder="เปอร์เซน"
                name="ipdCoPayQuota"
                id="ipdCoPayQuota"
                value={ipdCoPayQuota}
                onChange={this.props.handleChange}
                required
              />
              : <Form.Input
                type="number"
                placeholder="เปอร์เซน"
                name="ipdCoPayQuota"
                id="ipdCoPayQuota"
                value=""
                readOnly
                onChange={this.props.handleChange}
              />}
            <p className="selectText"> %</p>
          </Form.Group>
          <Form.Group inline>
            <input
              type="radio"
              name="CoPayGroup"
              value="Deductable"
              checked={this.state.value === 'Deductable'}
              onChange={this.handleRadio}
            />
            <label htmlFor="Deductable">Deductable</label>
            {/* <Radio
              label="Deductable"
              name="CoPayGroup"
              value="Deductable"
              checked={this.state.value === 'Deductable'}
              onChange={this.handleRadio}
            /> */}
            {this.state.value === 'Deductable'
              ? <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="ipdCoPayDeductable"
                id="ipdCoPayDeductable"
                value={ipdCoPayDeductable}
                onChange={this.props.handleChange}
                required
              />
              : <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="ipdCoPayDeductable"
                id="ipdCoPayDeductable"
                value=""
                onChange={this.props.handleChange}
                readOnly
              />}
            <p className="selectText"> บาท</p>
          </Form.Group>
          <Form.Group inline>
            <input
              type="radio"
              name="CoPayGroup"
              value="Quota Share + Deductable"
              checked={this.state.value === 'Quota Share + Deductable'}
              onChange={this.handleRadio}
            />
            <label htmlFor="Quota Share + Deductable">Quota Share + Deductable</label>
            {/* <Radio
              label="Quota Share + Deductable"
              name="CoPayGroup"
              value="Quota Share + Deductable"
              checked={this.state.value === 'Quota Share + Deductable'}
              onChange={this.handleRadio}
            /> */}
            {this.state.value === 'Quota Share + Deductable'
              ? <div style={{ display: 'inherit' }}>
                <Form.Input
                  type="number"
                  style={{ width: '80px' }}
                  placeholder="เปอร์เซ็น"
                  name="ipdCoPayMixPercentage"
                  id="ipdCoPayMixPercentage"
                  value={ipdCoPayMixPercentage}
                  onChange={this.props.handleChange}
                  required
                />
                <Form.Input
                  type="number"
                  style={{ width: '105px' }}
                  label=" % ไม่เกิน"
                  placeholder="จำนวนเงิน"
                  name="ipdCoPayMixNotExceed"
                  id="ipdCoPayMixNotExceed"
                  value={ipdCoPayMixNotExceed}
                  onChange={this.props.handleChange}
                  required
                />
              </div>
              : <div style={{ display: 'inherit' }}>
                <Form.Input
                  type="number"
                  style={{ width: '80px' }}
                  placeholder="เปอร์เซ็น"
                  name="ipdCoPayMixPercentage"
                  id="ipdCoPayMixPercentage"
                  value=""
                  onChange={this.props.handleChange}
                  readOnly
                />
                <Form.Input
                  type="number"
                  style={{ width: '105px' }}
                  label=" % ไม่เกิน"
                  placeholder="จำนวนเงิน"
                  name="ipdCoPayMixNotExceed"
                  id="ipdCoPayMixNotExceed"
                  value=""
                  onChange={this.props.handleChange}
                  readOnly
                />
              </div>}
          </Form.Group>
          {this.state.value === 'Quota Share + Deductable'
            ? <div className="submit-plan-grap-tab-on-form">
              <Form.Group inline>
                <Form.Field>
                  <Form.Input
                    type="number"
                    style={{ width: '70px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="ipdCoPayMixYear"
                    id="ipdCoPayMixYear"
                    value={ipdCoPayMixYear}
                    onChange={this.props.handleChange}
                    required
                  />
                </Form.Field>
                ปี
              </Form.Group>
            </div>
            : <div className="submit-plan-grap-tab-on-form">
              <Form.Group inline>
                <Form.Field>
                  <Form.Input
                    type="number"
                    style={{ width: '70px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="ipdCoPayMixYear"
                    id="ipdCoPayMixYear"
                    value=""
                    onChange={this.props.handleChange}
                    readOnly
                  />
                </Form.Field>
                ปี
              </Form.Group>
            </div>}
        </div>
      </div>
    );
  }
}

export default connect(null, null)(CoPay);
