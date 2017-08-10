import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Radio } from 'semantic-ui-react';

class CopayBidding extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      ipdCoPay: false,
      value: '',
      ipdCoPayQuota: null,
      ipdCoPayDeductable: null,
      ipdCoPayMixPercentage: null,
      ipdCoPayMixNotExceed: null,
      ipdCoPayMixYear: null,
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
                value="Quota Share"
                checked={this.state.value === 'Quota Share'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <Form.Input
              type="number"
              placeholder="เปอร์เซน"
              name="ipdCoPayQuota"
              id="ipdCoPayQuota"
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
              name="ipdCoPayDeductable"
              id="ipdCoPayDeductable"
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
                name="ipdCoPayMixPercentage"
                id="ipdCoPayMixPercentage"
                onChange={this.props.handleChange}
                readOnly
              />
              <Form.Input
                type="number"
                style={{ width: '90px' }}
                label=" %ไม่เกิน"
                placeholder="จำนวนเงิน"
                name="ipdCoPayMixNotExceed"
                id="ipdCoPayMixNotExceed"
                onChange={this.props.handleChange}
                readOnly
              />
              <Form.Input
                type="number"
                style={{ width: '40px' }}
                label=" ต่อ"
                placeholder="ปี"
                name="ipdCoPayMixYear"
                id="ipdCoPayMixYear"
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

CopayBidding.propTypes = {};

export default connect(null, null)(CopayBidding);
