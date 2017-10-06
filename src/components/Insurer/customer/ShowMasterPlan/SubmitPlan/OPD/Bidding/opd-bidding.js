import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox, Form, Radio } from 'semantic-ui-react';
import '../../../../../../styles/submit-plan.scss';
import CoPayBidding from './copay-bidding';

class OPDBidding extends Component {
  constructor() {
    super();
    this.state = {
      opdCoPay: false,
      value: '',
      opdPerYear: null,
      opdPerTime: null,
      opdTimeNotExceedPerYear: null,
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
        <br />
        <p className="head">
          <u>
            ค่ารักษาพยาบาลกรณีผู้ป่วยนอก (Out Patient Department : OPD)
          </u>
        </p>
        <br />
        <p className="head">ระบุรูปแบบประกันที่ต้องการ </p>
        <div className="row">
          <Form onSubmit={this.handleClick}>
            <Form.Group inline>
              <Form.Field>
                <Radio
                  label="จำนวนเงิน"
                  name="OPDGroup"
                  value="firstChoice"
                  checked={this.state.value === 'firstChoice'}
                  onChange={this.handleRadio}
                />
              </Form.Field>
              <Form.Input
                type="number"
                placeholder="จำนวนเงิน"
                name="opdPerYear"
                id="opdPerYear"
                onChange={this.handleChange}
                readOnly
              />
              <p className="selectText"> บาท/ปี</p>
            </Form.Group>
            <Form.Group inline>
              <Form.Field>
                <Radio
                  label="จำนวนเงิน"
                  name="OPDGroup"
                  value="secondChoice"
                  checked={this.state.value === 'secondChoice'}
                  onChange={this.handleRadio}
                />
              </Form.Field>
              <div style={{ display: 'inherit' }}>
                <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="opdPerTime"
                  id="opdPerTime"
                  onChange={this.handleChange}
                  readOnly
                />
                <span>บาท/ครั้ง ครั้งละไม่เกิน</span>
                <Form.Input
                  type="number"
                  placeholder="จำนวนเงิน"
                  name="opdTimeNotExceedPerYear"
                  id="opdTimeNotExceedPerYear"
                  onChange={this.handleChange}
                  readOnly
                />
              </div>
              <p className="selectText"> บาท/ปี</p>
            </Form.Group>
            <br />
            <Checkbox toggle label="Co-Play" onClick={this.handleToggle} />
            {this.state.opdCoPay ? <CoPayBidding /> : ''}
            <br />
          </Form>
        </div>
      </div>
    );
  }
}

OPDBidding.propTypes = {};

const mapStateToProps = state => ({
  planList: state.plan.planList,
});

export default connect(mapStateToProps, null)(OPDBidding);
