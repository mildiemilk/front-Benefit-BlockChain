import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBenefit from '../NavBenefit'
import { Detail, Head, Inner, BackButton, SendButton, List, Line, Imgs } from './styled'
import Timeout from '../ChooseInsurer/timeout'
import { setTimeOut } from '../../api/choose-insurer'
import time from '../../../assets/sendflexplan/icons-8-timer.png'

class SendFlexPlan extends Component {
  static propTypes = {
    setTimeOut: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      step: 6,
    }
  }

  render() {
    return (
      <div>
        <NavBenefit step={this.state.step} />
        <div className="row">
          <Detail className="large-12 ">
            <Head>ส่งข้อมูล</Head>
            <List>กรุณาตรวจสอบแผนประกันภัยที่เลือก</List>
            <Inner
              style={{
                height: '150px',
              }}
              className="large-12 "
            />

            <List>กรุณาตรวจสอบสิทธิประโยชน์ที่ต้องการ</List>
            <Inner
              style={{
                height: '500px',
              }}
              className="large-12 "
            />

            <List>กรุณาตรวจสอบแผนสิทธิประโยชน์ของคุณ</List>
            <Inner
              style={{
                height: '400px',
              }}
              className="large-12 "
            />

            <List>กรุณาตรวจการอัพโหลดไฟล์ของคุณ</List>
            <Inner
              style={{
                height: '80px',
              }}
              className="large-12 "
            />

            <List>กรุณาตรวจสอบแผนสิทธิประโยชน์ของคุณ</List>
            <Inner
              style={{
                height: '400px',
              }}
              className="large-12 "
            />

            <List>กรุณาตั้งระยะเวลาการเลือกแผนสิทธิประโยชน์ของพนักงาน</List>
            <Inner>
              <Imgs src={time} alt="time" />
              <Line> พนักงานสามารถเลือกสิทธิประโยชน์ได้ถึง วันที่ </Line>
              <Timeout setTimeOut={this.props.setTimeOut} />
            </Inner>
          </Detail>
          <div style={{ marginTop: '25px' }} className="row">
            <div className="large-9 columns">
              <BackButton>กลับ</BackButton>
            </div>
            <div className="large-3 columns">
              <Link to="/congratstep3">
                <SendButton>ส่งข้อมูล</SendButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setTimeOut: timeout => dispatch(setTimeOut(timeout)),
})
const mapStateToProps = () => {

}
export default connect(mapStateToProps, mapDispatchToProps)(SendFlexPlan)

