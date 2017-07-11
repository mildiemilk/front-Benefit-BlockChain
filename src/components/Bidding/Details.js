import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import {
  BoxDetail,
  Back,
  Text,
  InSide,
  TextSide,
  HeadBar,
  TextLine,
  HeadList,
  Special,
  TextInsure,
} from './styled'
import NavBidding from './NavBidding'
import Plan from './Plan'
import { bidding } from '../../api/bidding'
import { connect } from 'react-redux'
import moment from 'moment'

class Details extends Component {
  constructor() {
    super()
  }

  renderList = bids => {
    return bids.map(bid => (
      <BoxDetail>
        <InSide>
          <div className="row">
            <div className="large-3 columns">
              <TextLine> {bid.insurerName} </TextLine>
            </div>
            <div className="large-3 large-offseet-6 columns">
              <TextSide> เลขที่ใบเสนอราคา {bid.biddingId} </TextSide>
            </div>
          </div>
        </InSide>
        <HeadBar>
          <div className="row">
            <div className="large-4 columns">
              <HeadList> วันที่เสนอราคา: {moment(bid.updatedAt).format('L')} </HeadList>
            </div>
            <div className="large-3 large-offset-1 columns">
              <HeadList>การเสนอราคาครั้งที่ {bid.timeOfBidding}</HeadList>
            </div>
            <div className="large-3 columns">
              <HeadList>ราคาที่เสนอ {bid.priceOfBidding} บาท</HeadList>
            </div>
          </div>
        </HeadBar>
        <InSide>
          <div className="row">
            <div className="large-3 columns">
              <TextLine>รายการแพลนของคุณ</TextLine>
            </div>
          </div>
          <div className="row">
            <Plan />
          </div>
        </InSide>
        <InSide>
          <div className="row">
            <div className="large-6 columns">
              <TextInsure>ข้อเสนอจากบริษัทประกัน</TextInsure>
              {' '}
              <Special>พิเศษสำหรับคุณ</Special>
            </div>
          </div>
          <div className="row">
            <Plan />
          </div>
        </InSide>
      </BoxDetail>
    ))
  }

  render() {
    return (
      <div className="Bidding">
        <Back onClick={this.props.handleClick}> &lt; กลับหน้าหลัก</Back>
        {this.renderList(this.props.data)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.biddingReducer,
})

const mapDispatchToProps = dispatch => ({
  bidding: () => dispatch(bidding()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)