import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'react-sc'
import NavInsure from '../NavInsure'
import Sidebar from '../sidebar'
import uploadicon from '../image/icons-8-upload.png'
import ModalInsurer from './ModalInsurer'
import csvpic from '../image/icons-8-csv.png'
import {Detail,Head,Head2, subInner,Submit,BoxIndiv1,
        BoxIndiv2,BoxIndiv3,BoxIndiv4,SideIn,Time,Edit} from './styled'
import moment from 'moment'
import {
  Grid,
  Image,
  Container,
  Divider,
  Checkbox,
  Segment,
  Icon,
  Progress,
} from 'semantic-ui-react'

class Sendrequest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 6,
    }
  }

  render() {
    return (
      <div className="ChooseInsurer">
        <NavInsure step={this.state.step} />
        <div className="row">
          <Detail className="large-12 columns">
            <div className="row">
              <Head>ส่งคำขอและรอการเสนอราคา</Head>
            </div>
            <Head2>กรุณาตรวจสอบข้อมูลของคุณ</Head2>
            <BoxIndiv1 />
            <Head2>กรุณาตรวจสอบแพลนของคุณ</Head2>
            <BoxIndiv2 />
            <Head2 style={{display:'inline-block'}}>รายชื่อบริษัทประกันและระยะเวลาในการเสนอประกัน</Head2> <ModalInsurer/>
            <BoxIndiv3>
              บริษัทประกันสามารถเสนอราคาได้ภายในวันที่
              {' '}
              <Time>
                {moment(this.props.timeout.date)
                  .locale('th')
                  .format('DD MMMM YYYY')}
              </Time>
              &nbsp; ภายในเวลา
              {' '}
              <Time>{moment(this.props.timeout.time).format('LT')}</Time>
            </BoxIndiv3>
            <Head2>อัพโหลดไฟล์</Head2>
            <BoxIndiv4 />
          </Detail>
          <Submit>ส่งคำขอ</Submit>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
  timeout: state.setTimeOut,
})

export default connect(mapStateToProps, null)(Sendrequest)
