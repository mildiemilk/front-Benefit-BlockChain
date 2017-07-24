import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
import '../../../styles/employee-style/login-verify.scss'
import selectPlanImage from '../../image/select-plan.png'
import Header from '../header'
import Footer from '../footer'
import DeadlineBox from '../flexy-plan/deadline-box'
import ChangePlanModal from './confirm-change-plan-modal'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Container,
  Table,
  Icon,
} from 'semantic-ui-react'
const MediaQuery = require('react-responsive')

class CongrateSelectPlan extends Component {
  constructor() {
    super()
    this.state = {
      openModal: false,
    }
  }

  handleCloseModal = () => {
    this.setState({ openModal: false })
  }

  handleOpenModal = () => {
    this.setState({ openModal: true })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="select-plan-box">
              <img className="select-plan-image" src={selectPlanImage} />
              <p>คุณเลือกแผนเรียบร้อยแล้ว</p>
              <p>รอดำเนินการในขั้นตอนต่อไป</p>
            </div>
            <div className="show-deadline-box">
              <p>สามารถทำการเปลี่ยนแผนได้ก่อนวันที่ 12 เม.ย. 60</p>
              <DeadlineBox />
            </div>
            <div className="center-link">
              <a
                className="link-change-plan"
                onClick={() => this.handleOpenModal()}
              >
                <u>ต้องการเปลี่ยนแผน?</u>
              </a>
            </div>
          </div>
        </div>
        <Footer />
        <ChangePlanModal
          openModal={this.state.openModal}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    )
  }
}

CongrateSelectPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CongrateSelectPlan)
