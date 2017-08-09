import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'rc-time-picker/assets/index.css'
import 'react-datepicker/dist/react-datepicker.css'
import _ from 'lodash'
import 'react-toastify/dist/ReactToastify.min.css'
import {
  setTimeOut,
  chooseInsurer,
  getAllInsurer,
  getSelectInsurer,
} from '../../api/choose-insurer'
import NavInsure from '../NavInsure'
import {
  Detail,
  Head,
  Side,
  SideIn,
  Card,
  HeadIn,
  SubmitInsure,
  Next,
  Check,
} from './styled'
import Timeout from './timeout'

class InsurerSelect extends Component {
  static propTypes = {
    nums: PropTypes.number.isRequired,
    getAllInsurer: PropTypes.func.isRequired,
    getSelectInsurer: PropTypes.func.isRequired,
    setTimeOut: PropTypes.func.isRequired,
    insurerList: PropTypes.arrayOf(PropTypes.object).isRequired,
    chooseInsurer: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    const { nums } = this.props

    this.state = {
      step: 4,
      num: nums !== undefined ? nums : 0,
      insurers: [],
      hideProgressBar: true,
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

  componentWillReceiveProps(newProps) {
    if (newProps.insurerChecked !== this.state.insurers) {
      this.setState({
        insurers: newProps.insurerChecked,
        num: newProps.nums !== undefined ? newProps.nums : 0,
      })
    }
  }

  handleDefaultCheck = e => {
    const matchedInsurer = _.find(this.state.insurers, {
      insurerName: e.insurerName,
    })

    if (matchedInsurer !== undefined) {
      return true
    }
    return false
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
      const index = this.state.insurers.findIndex(
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
    const list = insurers.map((insurer, index) => (
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
    return list
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

                  {/* <CardInsure   handleDefaultCheck = {this.handleDefaultCheck}
                                handleCheck={this.handleCheck}
                                insurerChecked = {this.props.insurerChecked}
                                insurerList ={this.props.insurerList} /> */}
                </div>
              </SideIn>
              <SideIn>
                <p>ตั้งระยะเวลาการเสนอราคาของประกัน</p>
                <p className="insure">
                  บริษัทประกันสามารถเสนอราคาได้ภายในวันที่ &nbsp;
                </p>
                <Timeout setTimeOut={this.props.setTimeOut} />
              </SideIn>
            </div>
          </Detail>
          <Link to="/uploadfile"><Next>ต่อไป</Next></Link>
          <ToastContainer
            hideProgressBar={this.state.hideProgressBar}
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
