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
import tooth from '../../image/icons-8-toot1.jpg'
import heart from '../../image/icons-8-like.jpg'
import erase from '../../image/icons-8-erase.png'
import LifeModal from './life-modal'

const options = [{ text: '1', value: 1 }]

class Life extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.lifePerYear !== null
        ? 'firstLifeChoice'
        : this.props.lifeNotExceed !== null
            ? 'thirdLifeChoice'
            : this.props.lifeTimeOfSalary !== null ? 'secondLifeChoice' : '',
    }
  }

  static propTypes = {}

  handleRadio = (e, { value }) => {
    this.handleResetData()
    this.setState({ value })
    // if (this.state.value === 'secondLifeChoice') {
    //   document.getElementById('lifeTimeOfSalary').value = ''
    // } else if (this.state.value === 'firstLifeChoice') {
    //   document.getElementById('lifePerYear').value = ''
    // } else {
    //   document.getElementById('lifeTimeOfSalary').value = ''
    //   document.getElementById('lifeNotExceed').value = ''
    // }
  }

  handleChange = (e, { name, value }) => {
    this.props.handleChange(e, { name, value })
    this.props.handleVerifyState('lifeRecord')
  }

  handleClick = () => {
    this.props.handleRecordVerifyState('lifeRecord')
    const { lifePerYear, lifeTimeOfSalary, lifeNotExceed } = this.props
    this.props.editPlan(
      { lifePerYear, lifeTimeOfSalary, lifeNotExceed },
      this.props.planList[this.props.activePlan].planId,
      'life',
    )
  }

  handleResetData = () => {
    document.getElementById('lifeTimeOfSalary').value = ''
    document.getElementById('lifePerYear').value = ''
    document.getElementById('lifeNotExceed').value = ''
    this.props.handleResetLife()
    this.setState({ value: '' })
    this.props.handleNewReset()
    this.props.handleVerifyState('lifeRecord')
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'Life' && this.props.reset === true) {
      this.handleResetdata()
    }
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
        <Form onSubmit={this.handleClick}>
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
            {this.state.value === 'firstLifeChoice'
              ? <Form.Input
                  type="number"
                  placeholder="จำนวนบาท"
                  name="lifePerYear"
                  id="lifePerYear"
                  onChange={this.handleChange}
                  value={this.props.lifePerYear}
                  required
                />
              : <Form.Input
                  type="number"
                  placeholder="จำนวนบาท"
                  name="lifePerYear"
                  id="lifePerYear"
                  onChange={this.handleChange}
                  readOnly
                />}
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
            {this.state.value === 'secondLifeChoice'
              ? <Form.Select
                  placeholder="เท่า"
                  name="lifeTimeOfSalary"
                  id="lifeTimeOfSalary"
                  value={this.props.lifeTimeOfSalary}
                  options={options}
                  onChange={this.handleChange}
                  required
                />
              : <Form.Select
                  placeholder="เท่า"
                  name="lifeTimeOfSalary"
                  id="lifeTimeOfSalary"
                  options={1}
                  onChange={this.handleChange}
                  disabled
                />}
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
            {this.state.value === 'thirdLifeChoice'
              ? <div style={{ display: '-webkit-box' }}>
                  <Form.Select
                    placeholder="เท่า"
                    options={options}
                    name="lifeTimeOfSalary"
                    id="lifeTimeOfSalary"
                    value={this.props.lifeTimeOfSalary}
                    onChange={this.handleChange}
                    style={{ width: '150px' }}
                  />
                  <Form.Input
                    type="number"
                    label="เท่า แต่ไม่เกิน"
                    placeholder="จำนวนบาท"
                    name="lifeNotExceed"
                    id="lifeNotExceed"
                    value={this.props.lifeNotExceed}
                    onChange={this.handleChange}
                    required
                    style={{ width: '95px' }}
                  />
                </div>
              : <div style={{ display: '-webkit-box' }}>
                  <Form.Select
                    placeholder="เท่า"
                    options={1}
                    onChange={this.handleChange}
                    name="lifeTimeOfSalary"
                    id="lifeTimeOfSalary"
                    disabled
                    style={{ width: '150px' }}
                  />
                  <Form.Input
                    type="number"
                    label="เท่า แต่ไม่เกิน"
                    placeholder="จำนวนบาท"
                    name="lifeNotExceed"
                    id="lifeNotExceed"
                    onChange={this.handleChange}
                    readOnly
                    style={{ width: '100px' }}
                  />
                </div>}
            <p> บาท</p>
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
        <LifeModal
          openModal={this.props.openModal}
          handleCloseModal={this.props.handleCloseModal}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

Life.propTypes = {}

const mapDispatchToProps = dispatch => ({
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
})
const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(Life)
