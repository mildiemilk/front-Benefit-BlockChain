import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Radio,
  Segment,
  Dropdown,
} from 'semantic-ui-react'
import '../../../../styles/submit-plan.scss'
import CoPlayBidding from './coplay-bidding'

class OPDBidding extends Component {
  constructor() {
    super()
    this.state = {
      opdCoPlay: false,
      value: '',
      opdPerYear: null,
      opdPerTime: null,
      opdTimeNotExceedPerYear: null,
      opdCoPlayQuota: null,
      opdCoPlayDeductable: null,
      opdCoPlayMixPercentage: null,
      opdCoPlayMixNotExceed: null,
      opdCoPlayMixYear: null,
    }
  }

  static propTypes = {}

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
            {true ? <CoPlayBidding /> : ''}
            <br />
          </Form>
        </div>
      </div>
    )
  }
}

OPDBidding.propTypes = {}

const mapDispatchToProps = dispatch => ({
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
})
const mapStateToProps = state => ({
  planList: state.plan.planList,
})

export default connect(mapStateToProps, mapDispatchToProps)(OPDBidding)
