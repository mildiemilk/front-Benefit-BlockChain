import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  setTimeOut,
  chooseInsurer,
  getAllInsurer,
  getSelectInsurer,
} from '../../api/choose-insurer'
import styled from 'styled-components'
import NavInsure from '../NavInsure'
import Sidebar from '../sidebar'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'
const format = 'h:mm a'
const now = moment().hour(0).minute(0)
import 'react-datepicker/dist/react-datepicker.css'
import _ from 'lodash'
import {
  Detail,
  Head,
  Side,
  SideIn,
  Card,
  HeadIn,
  Submit,
  SubmitInsure,
  Next,
  Check,
} from './styled'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
class InsurerSelect extends Component {
  constructor(props) {
    super(props)
    const { nums } = this.props

    this.state = {
      step: 4,
      num: nums !== undefined ? nums : 0,
      date: null,
      insurers: [],
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.insurerChecked !== this.state.insurers) {
      this.setState({
        insurers: newProps.insurerChecked,
        num: newProps.nums !== undefined ? newProps.nums : 0,
      })
    }
  }

  componentDidMount() {
    this.props.getAllInsurer()
    this.props.getSelectInsurer()
    // if(nextProps.chooseInsurerStatus === "SUCCESS") {

    // const { insurerChecked, insurerList } = this.props
    // let CheckedinsurerList = this.props.insurerList

    // console.log("insurerChecked ==> ", insurerChecked)
    // console.log("insurerList ==> ", insurerList)
    // const result = CheckedinsurerList.map( insurer => {
    //   let tempInsurer
    //   const checkedInsurer =_.find(insurerChecked, { 'insurerName': insurer.insurerName });
    //   tempInsurer = !(_.isNil(checkedInsurer))
    //   return tempInsurer
    // })
    // this.setState({ insurers: CheckedinsurerList })
    // console.log("CheckedinsurerList ===> ", CheckedinsurerList)

    // }
  }

  handleDefaultCheck = e => {
    const { insurerChecked } = this.props
    const matchedInsurer = _.find(this.state.insurers, {
      insurerName: e.insurerName,
    })

    if (matchedInsurer !== undefined) return true
    else return false
  }

  handleTimeOut = () => {
    const { date } = this.state
    console.log(this.state.date)
    this.props.setTimeOut(date)
    console.log(this.props.timeout)
  }

  handleDate = date => {
    this.setState({
      date: date,
    })
  }

  handleTime = time => {
    time._d.setDate(this.state.date._d.getDate())
    this.state.date._d.setTime(time._d.getTime())
    console.log(this.state.date)
  }

  handleCheck = e => {
    if (e.target.checked) {
      this.setState({
        num: this.state.num + 1,
        insurers: this.state.insurers.concat(
          this.props.insurerList[e.target.id],
        ),
      })
    } else {
      let index = this.state.insurers.findIndex(
        element =>
          this.props.insurerList[e.target.id].insurerName ===
          element.insurerName,
      )
      const result = this.state.insurers
      result.splice(index, 1)

      this.setState({
        num: this.state.num - 1,
        insurers: result,
      })
    }
  }

  handleSubmit = () => {
    toast(<div>Done!</div>)
    this.props.chooseInsurer(this.state.insurers)
  }

  renderList = insurers => {
    return insurers.map((insurer, index) => (
      <Card className="large-2 columns">
        <Check
          type="checkbox"
          id={index}
          onChange={this.handleCheck}
          checked={this.handleDefaultCheck(insurer)}
        />
        {insurer.insurerName}
      </Card>
    ))
  }

  render() {
    return (
      <div className="ChooseInsurer">
        <NavInsure step={this.state.step} />
        <div className="row">
          <Detail className="large-12 columns">
            <div className="row">
              <Side className="large-10 columns">
                <Head>เลือกบริษัทประกันภัยที่ต้องการ</Head>
              </Side>
            </div>
            <div className="row">
              <SideIn>
                <HeadIn className="row">
                  <span>
                    {' '}จำนวนบริษัทประกันที่เลือก {this.state.num} บริษัท
                  </span>
                  <SubmitInsure onClick={this.handleSubmit}>
                    บันทึก
                  </SubmitInsure>
                </HeadIn>
                <div className="row">
                  {this.renderList(this.props.insurerList)}

                  {/*<CardInsure   handleDefaultCheck = {this.handleDefaultCheck} 
                                handleCheck={this.handleCheck} 
                                insurerChecked = {this.props.insurerChecked} 
                                insurerList ={this.props.insurerList} />*/}
                </div>
              </SideIn>
              <SideIn>
                <p>ตั้งระยะเวลาการเสนอราคาของประกัน</p>
                <p className="insure">
                  บริษัทประกันสามารถเสนอราคาได้ภายในวันที่ &nbsp;
                </p>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.handleDate}
                  minDate={moment()}
                />
                <span>&nbsp;เวลา&nbsp;</span>
                <TimePicker onChange={this.handleTime} showSecond={false} />
                <br />
                <Submit onClick={this.handleTimeOut}>บันทึก</Submit>

              </SideIn>
            </div>
          </Detail>
          <Link to="/uploadfile"><Next>ต่อไป</Next></Link>
          <ToastContainer
            hideProgressBar={true}
            autoClose={1500}
            position={toast.POSITION.TOP_RIGHT}
            style={{ zIndex: '30' }}
          />

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setTimeOut: timeout => dispatch(setTimeOut(timeout)),
  chooseInsurer: insurers => dispatch(chooseInsurer(insurers)),
  getAllInsurer: () => dispatch(getAllInsurer()),
  getSelectInsurer: () => dispatch(getSelectInsurer()),
})

const mapStateToProps = state => ({
  timeout: state.setTimeOut.timeout,
  insurerList: state.getAllInsurer,
  insurerChecked: state.getSelectInsurer.defaultInsurer,
  chooseInsurerStatus: state.chooseInsurerReducerStatus,
  nums: state.getSelectInsurer.defaultInsurer.length,
})

export default connect(mapStateToProps, mapDispatchToProps)(InsurerSelect)
