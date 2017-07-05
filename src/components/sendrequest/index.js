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
import ModalPlanBox from './ModalPlanBox/'
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
  PlanBox,
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
  Popup,
  List,
} from 'semantic-ui-react'

class Sendrequest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 6,
      isOpen: false,
      modalOpen: false,
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  handleModal = () => {
    this.setState({ isOpen: false })
    this.setState({ modalOpen: true })
  }

  handleOpenModal = e =>
    this.setState({
      modalOpen: true,
    })

  handleCloseModal = e =>
    this.setState({
      modalOpen: false,
    })

  render() {
    console.log(this.state.isOpen)
    console.log(this.state.modalOpen)
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
            <BoxIndiv2>
              <ModalPlanBox />
            </BoxIndiv2>
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
