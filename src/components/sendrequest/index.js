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
import {
  Detail,
  Head,
  Head2,
  Submit,
  BoxIndiv2,
  BoxIndiv3,
  BoxIndiv4,
  Time,
} from './styled'
import PostSimpleRQ from './simple-requirement'

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
            <div className="row">
              <Head>ส่งคำขอและรอการเสนอราคา</Head>
            </div>
            <Head2>กรุณาตรวจสอบข้อมูลของคุณ</Head2>
            <PostSimpleRQ />
            <Head2>กรุณาตรวจสอบแพลนของคุณ</Head2>
            <BoxIndiv2>
              <ModalPlanBox changePositionPage={this.changePositionPage} />
            </BoxIndiv2>
            <Head2>
              รายชื่อบริษัทประกันและระยะเวลาในการเสนอประกัน
            </Head2>
            {' '}
            <ModalInsurer />
            <BoxIndiv3>
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
            </BoxIndiv3>
            <Head2>อัพโหลดไฟล์</Head2>
            <BoxIndiv4 />
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
