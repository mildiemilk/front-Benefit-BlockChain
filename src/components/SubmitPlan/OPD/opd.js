import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Radio } from 'semantic-ui-react'
import { editPlan } from '../../../api/set-plan'
import '../../../styles/submit-plan.scss'
import CoPay from './copay'
import OpdModal from './opd-modal'
import about from '../../image/icons-8-about.png'

class OPD extends Component {
  static propTypes = {
    handleVerifyState: PropTypes.func.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleRecordVerifyState: PropTypes.func.isRequired,
    handleNewReset: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    handleResetOPD: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    reset: PropTypes.bool.isRequired,
    setPlan: PropTypes.string.isRequired,
    activePlan: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    opdCoPay: PropTypes.bool.isRequired,
    opdPerYear: PropTypes.number.isRequired,
    opdPerTime: PropTypes.string.isRequired,
    opdTimeNotExceedPerYear: PropTypes.string.isRequired,
    opdCoPayQuota: PropTypes.string.isRequired,
    opdCoPayDeductable: PropTypes.string.isRequired,
    opdCoPayMixPercentage: PropTypes.string.isRequired,
    opdCoPayMixNotExceed: PropTypes.string.isRequired,
    opdCoPayMixYear: PropTypes.string.isRequired,
    editPlan: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleNextPlan: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    const { opdPerYear, opdPerTime, opdTimeNotExceedPerYear } = this.props
    let value

    if (opdPerYear) {
      value = 'firstChoice'
    } else if (opdPerTime && opdTimeNotExceedPerYear) {
      value = 'secondChoice'
    } else {
      value = ''
    }

    this.state = { value }
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'OPD' && this.props.reset === true) {
      this.handleResetdata()
    }
  }

  handleClick = () => {
    const {
      opdCoPay,
      opdPerYear,
      opdPerTime,
      opdTimeNotExceedPerYear,
      opdCoPayQuota,
      opdCoPayDeductable,
      opdCoPayMixPercentage,
      opdCoPayMixNotExceed,
      opdCoPayMixYear,
    } = this.props
    this.props.editPlan(
      {
        opdCoPay,
        opdPerYear,
        opdPerTime,
        opdTimeNotExceedPerYear,
        opdCoPayQuota,
        opdCoPayDeductable,
        opdCoPayMixPercentage,
        opdCoPayMixNotExceed,
        opdCoPayMixYear,
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
          <span>
            <img src={about} alt="about" />
          </span>
        </p>
        <br />
        <p className="head"> ระบุรูปแบบประกันที่ต้องการ
          <span>
            <img src={about} alt="about" />
          </span>
        </p>
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
                    style={{ width: '100px' }}
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
                    style={{ width: '100px' }}
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
                    style={{ width: '100px' }}
                    readOnly
                  />
                  <Form.Input
                    type="number"
                    placeholder="จำนวนเงิน"
                    label="บาท/ครั้ง ครั้งละไม่เกิน"
                    name="opdTimeNotExceedPerYear"
                    id="opdTimeNotExceedPerYear"
                    onChange={this.handleChange}
                    style={{ width: '100px' }}
                    readOnly
                  />
                </div>}
              <p className="selectText"> บาท/ปี</p>
            </Form.Group>
            <br />
            <Checkbox
              toggle
              label="Co-Play"
              checked={this.props.opdCoPay}
              onClick={this.props.handleToggle}
            />
            <span>
              <img src={about} alt="about" />
            </span>
            {this.props.opdCoPay
              ? <CoPay
                handleChange={this.props.handleChange}
                handleChangeToNull={this.props.handleChangeToNull}
                handleNewReset={this.props.handleNewReset}
                reset={this.props.reset}
                setPlan={this.props.setPlan}
                opdCoPay={this.props.opdCoPay}
                opdCoPayQuota={this.props.opdCoPayQuota}
                opdCoPayDeductable={this.props.opdCoPayDeductable}
                opdCoPayMixPercentage={this.props.opdCoPayMixPercentage}
                opdCoPayMixNotExceed={this.props.opdCoPayMixNotExceed}
                opdCoPayMixYear={this.props.opdCoPayMixYear}
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
            handleNextPlan={this.props.handleNextPlan}
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
