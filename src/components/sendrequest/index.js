import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'react-sc'
import NavInsure from '../NavInsure'
import Sidebar from '../sidebar'
import uploadicon from '../image/icons-8-upload.png'
import csvpic from '../image/icons-8-csv.png'
import {
  Detail,
  Head,
  Head2,
  subInner,
  Submit,
  BoxIndiv1,
  BoxIndiv2,
  BoxIndiv3,
  BoxIndiv4,
  SideIn,
} from './styled'
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
import PostSimpleRQ from './PostSimpleRQ'

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
            <PostSimpleRQ />
            <Head2>กรุณาตรวจสอบแพลนของคุณ</Head2>
            <BoxIndiv2 />
            <Head2>รายชื่อบริษัทประกันและระยะเวลาในการเสนอประกัน</Head2>
            <BoxIndiv3 />
            <Head2>อัพโหลดไฟล์</Head2>
            <BoxIndiv4 />
          </Detail>
          <Submit>ส่งคำขอ</Submit>
        </div>
      </div>
    )
  }
}
export default Sendrequest
