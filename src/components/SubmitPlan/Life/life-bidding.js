import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Radio } from 'semantic-ui-react';
import { editPlan } from '../../../api/set-plan';
import '../../../styles/submit-plan.scss';

class LifeBidding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <br />
        <p className="head">
          <u>
            ประกันชีวิต (Life)
          </u>
        </p>
        <br />
        <p className="head">ระบุรูปแบบประกันที่ต้องการ</p>
        <Form>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="จำนวนเงิน"
                name="lifeGroup"
                value="firstLifeChoice"
                checked={this.state.value === 'firstLifeChoice'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <Form.Input
              type="number"
              placeholder="จำนวนบาท"
              name="lifePerYear"
              id="lifePerYear"
              onChange={this.handleChange}
              readOnly
            />
            <p> บาท</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="คูณอัตราเงินเดือน"
                name="lifeGroup"
                value="secondLifeChoice"
                checked={this.state.value === 'secondLifeChoice'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <Form.Select
              placeholder="เท่า"
              name="lifeTimeOfSalary"
              id="lifeTimeOfSalary"
              options={1}
              onChange={this.handleChange}
              disabled
            />
            <p> เท่า</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="คูณอัตราเงินเดือน"
                name="lifeGroup"
                value="thirdLifeChoice"
                checked={this.state.value === 'thirdLifeChoice'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            <div style={{ display: 'inherit' }}>
              <Form.Select
                placeholder="เท่า"
                options={1}
                onChange={this.handleChange}
                name="lifeTimeOfSalary"
                id="lifeTimeOfSalary"
                disabled
              />
              <Form.Input
                type="number"
                label="เท่า แต่ไม่เกิน"
                placeholder="จำนวนบาท"
                name="lifeNotExceed"
                id="lifeNotExceed"
                onChange={this.handleChange}
                readOnly
              />
            </div>
            <p> บาท</p>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
});
const mapStateToProps = state => ({
  planList: state.plan.planList,
});

export default connect(mapStateToProps, mapDispatchToProps)(LifeBidding);
