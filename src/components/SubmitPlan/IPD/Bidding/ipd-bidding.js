import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Checkbox, Form, Radio } from 'semantic-ui-react'
import CoPlayBidding from './coplay-bidding'
import IPD1Bidding from './ipd1-bidding'
import IPD2Bidding from './ipd2-bidding'
import IPD3Bidding from './ipd3-bidding'

class IPDBidding extends Component {
  constructor() {
    super()
    this.state = {
      ipdCoPlay: false,
      showForm: 1,
      ipdType: '',
      ipdLumsumPerYear: null,
      ipdLumsumPerTime: null,
      ipdLumsumTimeNotExceedPerYear: null,
      rbLumsumRoomPerNight: null,
      rbLumsumNigthNotExceedPerYear: null,
      rbLumsumPayNotExceedPerNight: null,
      rbLumsumPayNotExceedPerYear: null,
      rbSchedulePatient: null,
      rbScheduleIntensiveCarePatient: null,
      rbScheduleDoctor: null,
      rbScheduleSurgery: null,
      rbScheduleService: null,
      rbScheduleSmallSurgery: null,
      rbScheduleAdviser: null,
      rbScheduleAmbulance: null,
      rbScheduleAccident: null,
      rbScheduleTreatment: null,
      rbScheduleTransplant: null,
      ipdCoPlayQuota: null,
      ipdCoPlayDeductable: null,
      ipdCoPlayMixPercentage: null,
      ipdCoPlayMixNotExceed: null,
      ipdCoPlayMixYear: null,
    }
  }

  render() {
    return (
      <div>
        <br />
        <p className="head">
          <u>
            ค่ารักษาพยาบาลกรณีผู้ป่วยใน (In-Patient Department : IPD)
          </u>
        </p>
        <br />
        <p className="head">เลือกแผนที่ต้องการ </p>
        <div className="row">
          <Form>
            <Form.Group inline>
              <div className="large-4 columns">
                <Form.Field>
                  <Radio
                    label="Lumsum"
                    name="IPDGroup"
                    ipdType="Lumsum"
                    checked={this.state.ipdType === 'Lumsum'}
                  />
                </Form.Field>
              </div>
              <div className="large-4 columns">
                <Form.Field>
                  <Radio
                    label="R&B Lumsum"
                    name="IPDGroup"
                    ipdType="R&B Lumsum"
                    checked={this.state.ipdType === 'R&B Lumsum'}
                  />
                </Form.Field>
              </div>
              <div className="large-4 columns">
                <Form.Field>
                  <Radio
                    label="R&B Schedule"
                    name="IPDGroup"
                    ipdType="R&B Schedule"
                    checked={this.state.ipdType === 'R&B Schedule'}
                  />
                </Form.Field>
              </div>
            </Form.Group>
          </Form>
          <br />
          <p className="head">ระบุรูปแบบประกันที่ต้องการ</p>
          <Form>
            {this.state.ipdType === 'Lumsum' ? <IPD1Bidding /> : null}
            {this.state.ipdType === 'R&B Lumsum' ? <IPD2Bidding /> : null}
            {this.state.ipdType === 'R&B Schedule' ? <IPD3Bidding /> : null}
            <br />
            <Checkbox toggle label="Co-Play" onClick={this.handleToggle} />
            {this.state.ipdCoPlay ? <CoPlayBidding /> : null}
            <br />
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planList: state.plan.planList,
})

export default connect(mapStateToProps, null)(IPDBidding)
