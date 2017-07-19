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

class Dental extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {}

  handleChange = (e, { name, value }) => {
    this.props.handleChange(e, { name, value })
    this.props.handleVerifyState('dentalRecord')
  }

  handleClick = () => {
    const { dentalPerYear } = this.props
    this.props.editPlan(
      { dentalPerYear },
      this.props.planList[this.props.activePlan].planId,
      'dental',
    )
    this.props.handleRecordVerifyState('dentalRecord')
  }

  handleResetdata = () => {
    document.getElementById('dentalPerYear').value = ''
    this.props.handleResetDental()
    this.props.handleNewReset()
    this.props.handleVerifyState('dentalRecord')
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'Dental' && this.props.reset === true) {
      this.handleResetdata()
    }
  }

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
              required
            />
            <p> บาท/ปี</p>
          </Form.Group>
          <div className="row">
            <Button
              style={{
                marginTop: '3%',
                textAlign: 'center',
                width: '164px',
                height: '40px',
                backgroundColor: '#3A7BD5',
                color: 'white',
                float: 'right',
                borderRadius: '20px',
                marginBottom: '3%',
              }}
              type="submit"
            >
              บันทึก
            </Button>
          </div>
        </Form>
        <DentalModal
          openModal={this.props.openModal}
          handleCloseModal={this.props.handleCloseModal}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

Dental.propTypes = {
  dentalPerYear: PropTypes.number,
  onFormChange: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
})
const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(Dental)
