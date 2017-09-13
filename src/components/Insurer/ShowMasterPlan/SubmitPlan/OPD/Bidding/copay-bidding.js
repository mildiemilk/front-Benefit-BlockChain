import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Radio } from 'semantic-ui-react';
import '../../../../../../styles/submit-plan.scss';

class CoPayBidding extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      showCoPay: false,
      value: '',
      opdCoPay: null,
      opdCoPayQuota: null,
      opdCoPayDeductable: null,
      opdCoPayMixPercentage: null,
      opdCoPayMixNotExceed: null,
      opdCoPayMixYear: null,
    };
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
                checked={this.state.value === 'Quota Share'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <Form.Input
              type="number"
              placeholder="เปอร์เซน"
              name="opdCoPayQuota"
              id="opdCoPayQuota"
              readOnly
              onChange={this.props.handleChange}
            />
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
            <Form.Input
              type="number"
              placeholder="จำนวนเงิน"
              name="opdCoPayDeductable"
              id="opdCoPayDeductable"
              onChange={this.props.handleChange}
              readOnly
            />
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
            <div style={{ display: 'inherit' }}>
              <Form.Input
                type="number"
                style={{ width: '80px' }}
                placeholder="เปอร์เซ็น"
                name="opdCoPayMixPercentage"
                id="opdCoPayMixPercentage"
                onChange={this.props.handleChange}
                readOnly
              />
              <Form.Input
                type="number"
                style={{ width: '90px' }}
                label=" %ไม่เกิน"
                placeholder="จำนวนเงิน"
                name="opdCoPayMixNotExceed"
                id="opdCoPayMixNotExceed"
                onChange={this.props.handleChange}
                readOnly
              />
              <Form.Input
                type="number"
                style={{ width: '40px' }}
                label=" ต่อ"
                placeholder="ปี"
                name="opdCoPayMixYear"
                id="opdCoPayMixYear"
                onChange={this.props.handleChange}
                readOnly
              />
            </div>
          </Form.Group>
        </div>
      </div>
    );
  }
}

CoPayBidding.propTypes = {};

export default connect(null, null)(CoPayBidding);
