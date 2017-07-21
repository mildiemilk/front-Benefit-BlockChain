import React, { Component } from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import {
  Text,
  TextIn,
  IconPointer,
  ButtonStatusAppove,
  ButtonStatusCancle,
} from './styled'
import { bidding } from '../../api/bidding'
import { connect } from 'react-redux'
import ModalSelectInsurer from './ModalSelectInsurer'
import moment from 'moment'
import { chooseFinalInsurer } from '../../api/bidding'

class Box extends Component {
  constructor() {
    super()
    this.state = {
      passwordToConfirm: '',
    }
  }

  handlePost = e => {
    e.preventDefault()
    const { passwordToConfirm } = this.state
    const insurerName = e.target.value
    this.props.chooseFinalInsurer(passwordToConfirm, insurerName)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  boxStyling = (status, end) => {
    if (end == 'Timeout') {
      if (status === 'Join') {
        return 'boxes'
      } else {
        return 'boxCancelTimeout'
      }
    } else {
      if (status === 'Join') {
        return 'boxes'
      } else if (status === 'Cancel') {
        return 'boxCancel'
      } else {
        return 'wait'
      }
    }
  }

  getStatusModule = insurerName => {
    let status = 'Join'
    let statusModule = ''
    const { end } = this.props
    console.log(end.end)
    if (end.end === 'Timeout') {
      if (status === 'Join') {
        statusModule = (
          <ModalSelectInsurer
            handlePost={this.handlePost}
            handleChange={this.handleChange}
            insurerName={insurerName}
          />
        )
      } else {
        statusModule = (
          <ButtonStatusCancle>ไม่เข้าร่วมประมูล</ButtonStatusCancle>
        )
      }
    } else {
      if (status === 'Join') {
        statusModule = <Text style={{ color: '#2ac294' }}>ร่วมประมูล</Text>
      } else if (status === 'Cancel') {
        statusModule = <Text style={{ color: '#f1535d' }}>ไม่ร่วมประมูล</Text>
      } else {
        statusModule = <Text style={{ color: '#3a7bd5' }}>กำลังพิจารณา</Text>
      }
    }
    return statusModule
  }

  renderList = bids => {
    let status = 'Join'
    const { end } = this.props
    return bids.map((bid, index) => (
      <div className="boxDetail">
        <div className={this.boxStyling(status, end.end)}>
          <div className="row">
            <div className="large-3 columns">
              <Text>{bid.insurerName}</Text>
            </div>
            <div className="large-6 columns">
              <div className="row">
                <div className="large-4 columns">
                  <Text>{bid.biddingId}</Text>
                </div>
                <div className="large-2 columns">
                  <Text>{bid.timeOfBidding}</Text>
                </div>
                <div className="large-2 columns">
                  <Text>{moment(bid.updatedAt).format('L')}</Text>
                </div>
                <div className="large-4 columns">
                  <Text>{bid.priceOfBidding}</Text>
                </div>
              </div>
            </div>
            <div className="large-1 columns">
              <Text>
                <IconPointer
                  name="external"
                  size="big"
                  onClick={() => this.props.handleClick(bid, index)}
                />
              </Text>

            </div>
            <div className="large-2 columns">
              <Text>{this.getStatusModule(bid.insurerName)}</Text>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div className="Box">
        <div className="HeadBidContent">
          <div className="row">
            <div className="large-3 columns">
              <Text>ชื่อบริษัทประกัน</Text>
            </div>
            <div className="large-6 columns">
              <div className="row">
                <div className="large-4 columns">
                  <TextIn>เลขที่ใบเสนอราคา</TextIn>
                </div>
                <div className="large-2 columns">
                  <TextIn>ครั้งที่เสนอราคา</TextIn>
                </div>
                <div className="large-2 columns">
                  <TextIn>วันที่</TextIn>
                </div>
                <div className="large-4 columns">
                  <TextIn>ราคาประมูล</TextIn>
                </div>
              </div>
            </div>
            <div className="large-1 columns">
              <Text>ดูแผนประกัน</Text>
            </div>
            <div className="large-2 columns">
              <Text>สถานะ</Text>
            </div>
          </div>
        </div>
        {this.renderList(this.props.list)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  end: state.endTimeout,
})

const mapDispatchToProps = dispatch => ({
  chooseFinalInsurer: (data, insurerName) =>
    dispatch(chooseFinalInsurer(data, insurerName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Box)
