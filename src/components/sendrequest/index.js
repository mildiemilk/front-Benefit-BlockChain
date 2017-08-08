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
import { getSimpleRQ } from '../../api/simple-requirement'
import { getTimeout } from '../../api/choose-insurer'
import Postre from './postre'
import {
  Detail,
  Head,
  TopicHead,
  Submit,
  BoxIndiv,
  Time,
  InsurerDiv,
} from './styled'


class Sendrequest extends Component {
  static propTypes = {
    getSimpleReq: PropTypes.func.isRequired,
    getTimeout: PropTypes.func.isRequired,
    timeout: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      step: 6,
      position: 'relative-box',
    }
  }
  componentDidMount() {
    this.props.getSimpleReq()
    this.props.getTimeout()
  }
  changePositionPage = () => {
    if (this.state.position === 'relative-box') {
      this.setState({ position: 'fixed-box' })
    } else {
      this.setState({ position: 'relative-box' })
    }
  }
  render() {
    const { timeout } = this.props
    return (
      <div className={this.state.position}>
        <NavInsure step={this.state.step} />
        <Detail >
          <div className="row">
            <div className="large-12 columns">
              <Head>ส่งคำขอและรอการเสนอราคา</Head>
              <TopicHead>กรุณาตรวจสอบข้อมูลของคุณ</TopicHead>
              <Postre data={this.props} />
              <TopicHead>กรุณาตรวจสอบแพลนของคุณ</TopicHead>
              <BoxIndiv>
                <ModalPlanBox changePositionPage={this.changePositionPage} />
              </BoxIndiv>
              <InsurerDiv>
                <TopicHead>
                  รายชื่อบริษัทประกันและระยะเวลาในการเสนอประกัน
                </TopicHead>
                {' '}
                <ModalInsurer />
              </InsurerDiv>
              <BoxIndiv>
                บริษัทประกันสามารถเสนอราคาได้ภายในวันที่
                {' '}
                <Time>
                  {moment(timeout)
                    .locale('th')
                    .format('DD MMMM YYYY')}
                </Time>
                &nbsp; ภายในเวลา
                {' '}
                <Time>{moment(timeout).format('LT')}</Time>
                <Insurer />
              </BoxIndiv>
              <TopicHead>อัพโหลดไฟล์</TopicHead>
              <BoxIndiv />
            </div>
          </div>
        </Detail>
        <Link to="/bidding"><Submit>ส่งคำขอ</Submit></Link>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  getSimpleReq: () => dispatch(getSimpleRQ()),
  getTimeout: () => dispatch(getTimeout()),
})
const mapStateToProps = state => ({
  timeout: state.getTimeout,
  simpleReq: state.fillsimpleReducer,
})

export default connect(mapStateToProps, mapDispatchToProps)(Sendrequest)
