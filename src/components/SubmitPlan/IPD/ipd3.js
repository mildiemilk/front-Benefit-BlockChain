import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form, Radio } from 'semantic-ui-react'

class IPD3 extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleNewReset: PropTypes.func.isRequired,
    handleChangeToNull: PropTypes.func.isRequired,
    reset: PropTypes.string.isRequired,
    setPlan: PropTypes.string.isRequired,
    activePlan: PropTypes.number.isRequired,
    rbSchedulePatient: PropTypes.string.isRequired,
    rbScheduleIntensiveCarePatient: PropTypes.string.isRequired,
    rbScheduleDoctor: PropTypes.string.isRequired,
    rbScheduleSurgerySchedule: PropTypes.string.isRequired,
    rbScheduleSurgeryNonSchedule: PropTypes.string.isRequired,
    rbScheduleService: PropTypes.string.isRequired,
    rbScheduleSmallSurgery: PropTypes.string.isRequired,
    rbScheduleAdviser: PropTypes.string.isRequired,
    rbScheduleAmbulance: PropTypes.string.isRequired,
    rbScheduleTreatment: PropTypes.string.isRequired,
    handleVerifyState: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    const {
      rbScheduleSurgerySchedule,
      rbScheduleSurgeryNonSchedule,
    } = this.props
    let value

    if (rbScheduleSurgerySchedule) {
      value = 'Schedule'
    } else if (rbScheduleSurgeryNonSchedule) {
      value = 'Non-Schedule'
    } else {
      value = ''
    }

    this.state = { value }
  }

  componentWillReceiveProps(newProps) {
    const { rbScheduleSurgerySchedule, rbScheduleSurgeryNonSchedule } = newProps
    let value

    if (rbScheduleSurgerySchedule) {
      value = 'Schedule'
    } else if (rbScheduleSurgeryNonSchedule) {
      value = 'Non-Schedule'
    } else {
      value = ''
    }

    if (newProps.activePlan !== this.props.activePlan) {
      this.setState({ value })
    }
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'IPD' && this.props.reset === true) {
      this.handleResetdata()
    }
  }

  handleRadio = (e, { value }) => {
    this.setState({ value })
    if (this.state.value === 'Non-Schedule') {
      this.props.handleChangeToNull('rbScheduleSurgeryNonSchedule')
    } else {
      this.props.handleChangeToNull('rbScheduleSurgerySchedule')
    }
  }

  handleResetdata = () => {
    document.getElementById('rbSchedulePatient').value = ''
    this.props.handleChangeToNull('rbSchedulePatient')
    document.getElementById('rbScheduleIntensiveCarePatient').value = ''
    this.props.handleChangeToNull('rbScheduleIntensiveCarePatient')
    document.getElementById('rbScheduleDoctor').value = ''
    this.props.handleChangeToNull('rbScheduleDoctor')
    document.getElementById('rbScheduleSurgery').value = ''
    this.props.handleChangeToNull('rbScheduleSurgery')
    document.getElementById('rbScheduleService').value = ''
    this.props.handleChangeToNull('rbScheduleService')
    document.getElementById('rbScheduleSmallSurgery').value = ''
    this.props.handleChangeToNull('rbScheduleSmallSurgery')
    document.getElementById('rbScheduleAdviser').value = ''
    this.props.handleChangeToNull('rbScheduleAdviser')
    document.getElementById('rbScheduleAmbulance').value = ''
    this.props.handleChangeToNull('rbScheduleAmbulance')
    document.getElementById('rbScheduleAccident').value = ''
    this.props.handleChangeToNull('rbScheduleAccident')
    document.getElementById('rbScheduleTreatment').value = ''
    this.props.handleChangeToNull('rbScheduleTreatment')
    document.getElementById('rbScheduleTransplant').value = ''
    this.props.handleChangeToNull('rbScheduleTransplant')
    this.props.handleNewReset()
  }

  handleChange = (e, { name, value }) => {
    this.props.handleChange(e, { name, value })
    this.props.handleVerifyState()
  }

  handleRadio = (e, { value }) => {
    this.setState({ value })
    if (this.state.value === 'Non-Schedule') {
      document.getElementById('rbScheduleSurgeryNonSchedule').value = ''
    } else {
      document.getElementById('rbScheduleSurgerySchedule').value = ''
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="large-9 columns">
            <p>ระบุรูปแบบที่ต้องการ</p>
            <p>1. ค่าห้อง ค่าอาหาร และค่าบริการ</p>
            <div className="paragraph">
              <p>
                1.1 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยธรรมดา (สูงสุดต่อวัน)
              </p>
              <p>
                1.2 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยหนัก (สูงสุดต่อวัน)
              </p>
            </div>
            <br />
            <p>2. ค่าแพทย์เยี่ยมไข้ สูงสุดไม่เกินวันละ 1 ครั้ง/วัน</p>
            <p>3. การรักษาพยาบาลโดยการผ่าตัด ค่าแพทย์ผ่าตัดและหัตถการ</p>
            <div className="paragraph">
              <Form.Field>
                <Radio
                  name="IPD3Group"
                  value="Non-Schedule"
                  label="3.1 Non-Schedule"
                  checked={this.state.value === 'Non-Schedule'}
                  onChange={this.handleRadio}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  name="IPD3Group"
                  value="Schedule"
                  label="3.2 Schedule"
                  checked={this.state.value === 'Schedule'}
                  onChange={this.handleRadio}
                />
              </Form.Field>
            </div>
            <p>4. ค่ารักษาพยาบาลและค่าบริการทั่วไป </p>
            <div className="paragraph">
              <p>
                4.1 ค่ายาและสารอาหารทางเส้นเลือด ค่าบริการโลหิตและส่วนประกอบ
              </p>
              <div className="paragraph1">
                <p>
                  ของโลหิตค่าตรวจทางห้องปฎิบัติการอุปกรณ์ทางการแพทย์ ค่าห้อง
                </p>
                <p>
                  ผ่าตัดและอุปกรณ์ ค่ายากลับบ้าน ค่ากายภาพบำบัด/กิจกรรมบำบัด
                </p>
                <p>ค่าแพทย์วิสัญญี/พยาบาลวัสัญญี คุ้มครองสูงสุดต่อครั้ง </p>
              </div>
              <br />
              <p>4.2 ค่าใช้จ่ายสำหรับหัตถการหรือการผ่าตัดเล็กต่อครั้ง</p>
              <p>
                4.3 ค่าแพทย์ที่ปรึกษาทางการผ่าตัด กรณีไม่มีการผ่าตัดต่อครั้ง
              </p>
              <p>4.4 ค่าบริการรถพยาบาลต่อครั้ง</p>
              <p>
                4.5 ค่ารักษาพยาบาลอุบัติเหตุฉุกเฉิน ภายใน 24 ช.ม.หลังเกิดอุบัติเหตุต่อครั้ง
              </p>
              <p>
                4.6 ค่าใช้จ่ายที่เกิดจากการรักษาพยาบาลต่อเนื่องภายหลังจากการออก
              </p>
              <div className="paragraph1">
                <p>จากโรงพยาบาลต่อเนื่องภายหลังจากการออก</p>
                <p>
                  กายภาพบำบัดที่ต่อเนื่องจากผู้ป่วย(สูงสุดไม่เกิน 30 วัน)คุ้มครอง
                </p>
                <p>สูงสุดต่อครั้ง</p>
              </div>
              <br />
              <p>
                5. ค่ารักษากรณี ปลูกถ่ายไขกระดูก,เปลี่ยนถ่ายอวัยวะ, การฟอกไต(ไม่รวมค่า
              </p>
              <div className="paragraph1">
                <p>ใช้จ่ายของผู้บริจาคอวัยวะ) (ปีล่ะไม่เกิน)</p>
              </div>
            </div>
          </div>
          <div className="large-3 columns">
            <Form>
              <Form.Group
                inline
                style={{ marginTop: '35%', marginBottom: '5%' }}
              >
                <Form.Input
                  type="number"
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name="rbSchedulePatient"
                  value={this.props.rbSchedulePatient}
                  onChange={this.props.handleChange}
                  required
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  type="number"
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name="rbScheduleIntensiveCarePatient"
                  value={this.props.rbScheduleIntensiveCarePatient}
                  onChange={this.props.handleChange}
                  required
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  type="number"
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name="rbScheduleDoctor"
                  value={this.props.rbScheduleDoctor}
                  onChange={this.props.handleChange}
                  required
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group
                inline
                style={{ marginBottom: '5%', marginTop: '20%' }}
              >
                {this.state.value === 'Non-Schedule'
                  ? <Form.Input
                    type="number"
                    style={{ height: '30px', width: '100px' }}
                    placeholder="จำนวนเงิน"
                    name="rbScheduleSurgeryNonSchedule"
                    value={this.props.rbScheduleSurgeryNonSchedule}
                    onChange={this.props.handleChange}
                    id="rbScheduleSurgeryNonSchedule"
                    required
                  />
                  : <Form.Input
                    type="number"
                    style={{ height: '30px', width: '100px' }}
                    placeholder="จำนวนเงิน"
                    name="rbScheduleSurgeryNonSchedule"
                    onChange={this.props.handleChange}
                    value=""
                    readOnly
                    id="rbScheduleSurgeryNonSchedule"
                  />}
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                {this.state.value === 'Schedule'
                  ? <Form.Input
                    type="number"
                    style={{ height: '30px', width: '100px' }}
                    placeholder="จำนวนเงิน"
                    name="rbScheduleSurgerySchedule"
                    value={this.props.rbScheduleSurgerySchedule}
                    onChange={this.props.handleChange}
                    id="rbScheduleSurgerySchedule"
                    required
                  />
                  : <Form.Input
                    type="number"
                    style={{ height: '30px', width: '100px' }}
                    placeholder="จำนวนเงิน"
                    name="rbScheduleSurgerySchedule"
                    value=""
                    onChange={this.props.handleChange}
                    readOnly
                    id="rbScheduleSurgerySchedule"
                  />}
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginTop: '15.5%' }}>
                <Form.Input
                  type="number"
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name="rbScheduleService"
                  value={this.props.rbScheduleService}
                  onChange={this.props.handleChange}
                  required
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group
                inline
                style={{ marginTop: '59%', marginBottom: '5%' }}
              >
                <Form.Input
                  type="number"
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name="rbScheduleSmallSurgery"
                  value={this.props.rbScheduleSmallSurgery}
                  onChange={this.props.handleChange}
                  required
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  type="number"
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name="rbScheduleAdviser"
                  value={this.props.rbScheduleAdviser}
                  onChange={this.props.handleChange}
                  required
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  type="number"
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name="rbScheduleAmbulance"
                  value={this.props.rbScheduleAmbulance}
                  onChange={this.props.handleChange}
                  required
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  type="number"
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name="rbScheduleAccident"
                  value={this.rbScheduleAccident}
                  onChange={this.props.handleChange}
                  required
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  type="number"
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name="rbScheduleTreatment"
                  value={this.props.rbScheduleTreatment}
                  onChange={this.props.handleChange}
                  required
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group
                inline
                style={{ marginTop: '55%', marginBottom: '5%' }}
              >
                <Form.Input
                  type="number"
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name="rbScheduleTransplant"
                  value={this.rbScheduleTransplant}
                  onChange={this.props.handleChange}
                  required
                />
                <p> บาท</p>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(IPD3)
