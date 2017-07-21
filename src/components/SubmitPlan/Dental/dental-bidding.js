import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { editPlan } from '../../../api/set-plan'
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
import '../../../styles/submit-plan.scss'
import bed from '../../image/icons-8-single-bed1.jpg'
import stethoscope from '../../image/icons-8-stethoscope1.jpg'
import tooth from '../../image/icons-8-tooth.jpg'
import heart from '../../image/icons-8-like1.jpg'
import erase from '../../image/icons-8-erase.png'
import DentalModal from './dental-modal'

class DentalBidding extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {}

  render() {
    return (
      <div>
        <br />
        <p className="head">
          <u>
            ค่ารักษาทันตกรรม (Dental)
          </u>
        </p>
        <br />
        <p className="head">ระบุรูปแบบประกันที่ต้องการ</p>
        <Form onSubmit={this.handleClick}>
          <Form.Group inline>
            <Form.Input
              type="number"
              label="ใช้บริการได้ไม่เกิน"
              placeholder="จำนวนเงิน"
              name="dentalPerYear"
              id="dentalPerYear"
              onChange={this.handleChange}
              value={this.props.dentalPerYear}
              readOnly
            />
            <p> บาท/ปี</p>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

DentalBidding.propTypes = {
  dentalPerYear: PropTypes.number,
  onFormChange: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
})
const mapStateToProps = state => ({
  planList: state.plan.planList,
})

export default connect(mapStateToProps, mapDispatchToProps)(DentalBidding)
