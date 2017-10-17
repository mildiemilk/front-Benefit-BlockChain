import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Radio } from 'semantic-ui-react';
import '../../../styles/submit-plan.scss';

class CoPay extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    handleNewReset: PropTypes.func.isRequired,
    reset: PropTypes.bool.isRequired,
    setPlan: PropTypes.string.isRequired,
    opdCoPayQuota: PropTypes.string.isRequired,
    opdCoPayDeductable: PropTypes.string.isRequired,
    opdCoPayMixPercentage: PropTypes.string.isRequired,
    opdCoPayMixNotExceed: PropTypes.string.isRequired,
    opdCoPayMixYear: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    const {
      opdCoPayQuota,
      opdCoPayDeductable,
      opdCoPayMixYear,
      opdCoPayMixPercentage,
      opdCoPayMixNotExceed,
    } = this.props;

    let value;

    if (opdCoPayQuota) {
      value = 'Quota Share';
    } else if (opdCoPayDeductable) {
      value = 'Deductable';
    } else if (opdCoPayMixYear && opdCoPayMixPercentage && opdCoPayMixNotExceed) {
      value = 'Quota Share + Deductable';
    } else value = '';

    this.state = { value };
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'OPD' && this.props.reset === true) {
      this.handleResetdata();
    }
  }

  handleRadio = (e, { value }) => {
    this.handleResetdata();
    this.setState({ value });
  }

  handleResetdata = () => {
    this.props.handleChangeToNull('opdCoPayQuota');
    this.props.handleChangeToNull('opdCoPayDeductable');
    this.props.handleChangeToNull('opdCoPayMixPercentage');
    this.props.handleChangeToNull('opdCoPayMixNotExceed');
    this.props.handleChangeToNull('opdCoPayMixYear');
    this.setState({ value: '' });
    this.props.handleNewReset();
  }

  render() {
    return (
      <div>
        <div className="copayParagraph">
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Quota Share"
                name="CoPayGroup"
                value="Quota Share"
                checked={this.state.value === 'Quota Share'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            {this.state.value === 'Quota Share' ?
              <Form.Input
                type="number"
                placeholder="เปอร์เซน"
                name="opdCoPayQuota"
                id="opdCoPayQuota"
                value={this.props.opdCoPayQuota}
                onChange={this.props.handleChange}
                required
              />
              : <Form.Input
                type="number"
                placeholder="เปอร์เซน"
                name="opdCoPayQuota"
                id="opdCoPayQuota"
                readOnly
                onChange={this.props.handleChange}
              />}
            <p className="selectText"> %</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Deductable"
                name="CoPayGroup"
                value="Deductable"
                checked={this.state.value === 'Deductable'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            {this.state.value === 'Deductable'
              ? <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="opdCoPayDeductable"
                id="opdCoPayDeductable"
                value={this.props.opdCoPayDeductable}
                onChange={this.props.handleChange}
                required
              />
              : <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="opdCoPayDeductable"
                id="opdCoPayDeductable"
                value=""
                onChange={this.props.handleChange}
                readOnly
              />}
            <p className="selectText"> บาท</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="Quota Share + Deductable"
                name="CoPayGroup"
                value="Quota Share + Deductable"
                checked={this.state.value === 'Quota Share + Deductable'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            {this.state.value === 'Quota Share + Deductable'
              ? <div style={{ display: 'inherit' }}>
                <Form.Input
                  type="number"
                  style={{ width: '85px' }}
                  placeholder="เปอร์เซ็น"
                  name="opdCoPayMixPercentage"
                  id="opdCoPayMixPercentage"
                  value={this.props.opdCoPayMixPercentage}
                  onChange={this.props.handleChange}
                  required
                />
                <Form.Input
                  type="number"
                  style={{ width: '105px' }}
                  label=" %ไม่เกิน"
                  placeholder="จำนวนเงิน"
                  name="opdCoPayMixNotExceed"
                  id="opdCoPayMixNotExceed"
                  value={this.props.opdCoPayMixNotExceed}
                  onChange={this.props.handleChange}
                  required
                />
              </div>
              : <div style={{ display: 'inherit' }}>
                <Form.Input
                  type="number"
                  style={{ width: '85px' }}
                  placeholder="เปอร์เซ็น"
                  name="opdCoPayMixPercentage"
                  id="opdCoPayMixPercentage"
                  value=""
                  onChange={this.props.handleChange}
                  readOnly
                />
                <Form.Input
                  type="number"
                  style={{ width: '105px' }}
                  label=" %ไม่เกิน"
                  placeholder="จำนวนเงิน"
                  name="opdCoPayMixNotExceed"
                  id="opdCoPayMixNotExceed"
                  value=""
                  onChange={this.props.handleChange}
                  readOnly
                />
              </div>}
          </Form.Group>
          {this.state.value === 'Quota Share + Deductable'
            ? <div style={{ marginLeft: '5.5%' }}>
              <Form.Group inline>
                <Form.Field>
                  <Form.Input
                    type="number"
                    style={{ width: '105px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="opdCoPayMixYear"
                    id="opdCoPayMixYear"
                    value={this.props.opdCoPayMixYear}
                    onChange={this.props.handleChange}
                    required
                  />
                </Form.Field>
              </Form.Group>
            </div>
            : <div style={{ marginLeft: '5.5%' }}>
              <Form.Group inline>
                <Form.Field>
                  <Form.Input
                    type="number"
                    style={{ width: '70px' }}
                    label=" ต่อ"
                    placeholder="ปี"
                    name="opdCoPayMixYear"
                    id="opdCoPayMixYear"
                    value=""
                    onChange={this.props.handleChange}
                    readOnly
                  />
                </Form.Field>
              </Form.Group>
            </div>}
        </div>
      </div>
    );
  }
}

export default CoPay;
