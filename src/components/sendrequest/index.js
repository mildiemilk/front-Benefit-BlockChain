import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NavInsure from '../NavInsure'
import ModalInsurer from './ModalInsurer'
import ModalPlanBox from './ModalPlanBox'
import Insurer from './insurer'
import '../../styles/send-request.scss'
// import PostSimpleRQ from './simple-requirement'
import Postre from './postre'
import {
  Detail,
  Head,
  TopicHead,
  Submit,
  BoxIndiv,
  Time,
} from './styled'


class Sendrequest extends Component {
  static propTypes = {
    timeout: PropTypes.shape.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      step: 6,
      position: 'relative-box',
    }
  }

  changePositionPage = () => {
    if (this.state.position === 'relative-box') {
      this.setState({ position: 'fixed-box' })
    } else {
      this.setState({ position: 'relative-box' })
    }
  }
  render() {
    return (
      <div className={this.state.position}>
        <NavInsure step={this.state.step} />
        <div className="row">
          <Detail className="large-12 columns">
            <Head>ส่งคำขอและรอการเสนอราคา</Head>
            <TopicHead>กรุณาตรวจสอบข้อมูลของคุณ</TopicHead>
            <Postre />
            <TopicHead>กรุณาตรวจสอบแพลนของคุณ</TopicHead>
            <BoxIndiv>
              <ModalPlanBox changePositionPage={this.changePositionPage} />
            </BoxIndiv>
            <TopicHead>
              รายชื่อบริษัทประกันและระยะเวลาในการเสนอประกัน
            </TopicHead>
            {' '}
            <ModalInsurer />
            <BoxIndiv>
              บริษัทประกันสามารถเสนอราคาได้ภายในวันที่
              {' '}
              <Time>
                {moment(this.props.timeout.timeout)
                  .locale('th')
                  .format('DD MMMM YYYY')}
              </Time>
              &nbsp; ภายในเวลา
              {' '}
              <Time>{moment(this.props.timeout.timeout).format('LT')}</Time>
              <Insurer />
            </BoxIndiv>
            <TopicHead>อัพโหลดไฟล์</TopicHead>
            <BoxIndiv />
          </Detail>
          <Link to="/bidding"><Submit>ส่งคำขอ</Submit></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  timeout: state.setTimeOut,
})

export default connect(mapStateToProps, null)(Sendrequest)
