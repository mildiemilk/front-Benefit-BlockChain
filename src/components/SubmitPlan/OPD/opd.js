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
import CoPlay from './coplay'
import bed from '../../image/icons-8-single-bed1.jpg'
import stethoscope from '../../image/icons-8-stethoscope.jpg'
import tooth from '../../image/icons-8-toot1.jpg'
import heart from '../../image/icons-8-like1.jpg'
import erase from '../../image/icons-8-erase.png'
import OpdModal from './opd-modal'

class OPD extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.opdPerYear !== null
        ? 'firstChoice'
        : this.props.opdPerTime !== null &&
            this.props.opdTimeNotExceedPerYear !== null
            ? 'secondChoice'
            : '',
    }
  }

  static propTypes = {}

  handleClick = e => {
    const {
      opdCoPlay,
      opdPerYear,
      opdPerTime,
      opdTimeNotExceedPerYear,
      opdCoPlayQuota,
      opdCoPlayDeductable,
      opdCoPlayMixPercentage,
      opdCoPlayMixNotExceed,
      opdCoPlayMixYear,
    } = this.props
    this.props.editPlan(
      {
        opdCoPlay,
        opdPerYear,
        opdPerTime,
        opdTimeNotExceedPerYear,
        opdCoPlayQuota,
        opdCoPlayDeductable,
        opdCoPlayMixPercentage,
        opdCoPlayMixNotExceed,
        opdCoPlayMixYear,
      },
      this.props.planList[this.props.activePlan].planId,
      'opd',
    )
    this.props.handleRecordVerifyState('opdRecord')
  }

  handleRadio = (e, { value }) => {
    this.handleResetdata()
    this.setState({ value })
  }

  handleResetdata = () => {
    this.props.handleResetOPD()
    document.getElementById('opdPerTime').value = ''
    document.getElementById('opdTimeNotExceedPerYear').value = ''
    document.getElementById('opdPerYear').value = ''
    this.setState({ value: '' })
    this.props.handleNewReset()
    this.props.handleVerifyState('opdRecord')
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'OPD' && this.props.reset === true) {
      this.handleResetdata()
    }
  }

  handleChange = (e, { name, value }) => {
    this.props.handleChange(e, { name, value })
    this.props.handleVerifyState('opdRecord')
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
        <p className="head"> ระบุรูปแบบประกันที่ต้องการ </p>
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
              {this.state.value === 'firstChoice'
                ? <Form.Input
                    type="number"
                    placeholder="จำนวนเงิน"
                    name="opdPerYear"
                    id="opdPerYear"
                    value={this.props.opdPerYear}
                    onChange={this.handleChange}
                    required
                  />
                : <Form.Input
                    type="number"
                    placeholder="จำนวนเงิน"
                    name="opdPerYear"
                    id="opdPerYear"
                    value=""
                    onChange={this.handleChange}
                    readOnly
                  />}
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
              {this.state.value === 'secondChoice'
                ? <div style={{ display: 'inherit' }}>
                    <Form.Input
                      type="number"
                      placeholder="จำนวนเงิน"
                      name="opdPerTime"
                      id="opdPerTime"
                      value={this.props.opdPerTime}
                      onChange={this.handleChange}
                      style={{ width: '140px' }}
                      required
                    />
                    <Form.Input
                      type="number"
                      label="บาท/ครั้ง ครั้งละไม่เกิน"
                      placeholder="จำนวนเงิน"
                      name="opdTimeNotExceedPerYear"
                      id="opdTimeNotExceedPerYear"
                      value={this.props.opdTimeNotExceedPerYear}
                      onChange={this.handleChange}
                      style={{ width: '140px' }}
                      required
                    />
                  </div>
                : <div style={{ display: 'inherit' }}>
                    <Form.Input
                      type="number"
                      placeholder="จำนวนเงิน"
                      name="opdPerTime"
                      id="opdPerTime"
                      onChange={this.handleChange}
                      style={{ width: '140px' }}
                      readOnly
                    />
                    <Form.Input
                      type="number"
                      placeholder="จำนวนเงิน"
                      label="บาท/ครั้ง ครั้งละไม่เกิน"
                      name="opdTimeNotExceedPerYear"
                      id="opdTimeNotExceedPerYear"
                      onChange={this.handleChange}
                      style={{ width: '140px' }}
                      readOnly
                    />
                  </div>}
              <p className="selectText"> บาท/ปี</p>
            </Form.Group>
            <br />
            <Checkbox
              toggle
              label="Co-Play"
              checked={this.props.opdCoPlay}
              onClick={this.props.handleToggle}
            />
            {this.props.opdCoPlay
              ? <CoPlay
                  handleChange={this.props.handleChange}
                  handleChangeToNull={this.props.handleChangeToNull}
                  handleNewReset={this.props.handleNewReset}
                  reset={this.props.reset}
                  setPlan={this.props.setPlan}
                  opdCoPlay={this.props.opdCoPlay}
                  opdCoPlayQuota={this.props.opdCoPlayQuota}
                  opdCoPlayDeductable={this.props.opdCoPlayDeductable}
                  opdCoPlayMixPercentage={this.props.opdCoPlayMixPercentage}
                  opdCoPlayMixNotExceed={this.props.opdCoPlayMixNotExceed}
                  opdCoPlayMixYear={this.props.opdCoPlayMixYear}
                />
              : ''}
            <br />
            <Button
              style={{
                marginTop: '20px',
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
          </Form>
          <OpdModal
            openModal={this.props.openModal}
            handleCloseModal={this.props.handleCloseModal}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

OPD.propTypes = {}

const mapDispatchToProps = dispatch => ({
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
})
const mapStateToProps = state => ({
  planList: state.plan.planList,
})

export default connect(mapStateToProps, mapDispatchToProps)(OPD)
