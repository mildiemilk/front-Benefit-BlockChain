import React, { Component } from 'react'
import Countdown from 'react-count-down'
import { Divider, Icon } from 'semantic-ui-react'
import { Card, Text, TextIn, IconPointer } from './styled'
import { bidding } from '../../api/bidding'
import { connect } from 'react-redux'

class Box extends Component {
  constructor() {
    super()
    this.state = {}
  }
  renderList = bids => {
    console.log(bids)
    return bids.map(bid => (
      <Card>
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
                <Text>{bid.updatedAt}</Text>
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
                onClick={this.props.handleClick}
              />
            </Text>

          </div>
          <div className="large-2 columns">
            <Text>test</Text>
          </div>
        </div>

      </Card>
    ))
  }

  render() {
    let $status = null
    if ($status === 'Yes') {
      $status = <Text style={{ color: '#2ac294' }}>ร่วมประมูล</Text>
    } else if ($status === 'No') {
      $status = <Text style={{ color: '#f1535d' }}>ไม่ร่วมประมูล</Text>
    } else {
      $status = <Text style={{ color: '#3a7bd5' }}>กำลังพิจารณา</Text>
    }
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
  list: state.biddingReducer,
})

const mapDispatchToProps = dispatch => ({
  bidding: () => dispatch(bidding()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Box)
