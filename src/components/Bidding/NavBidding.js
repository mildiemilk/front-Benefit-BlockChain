import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import {
  Head,
  Nav,
  Pic,
  Font,
  FontNum,
  TextNav,
  FontAucTime,
  FontNumAucTime,
} from './styled'
import { connect } from 'react-redux'
import building from '../../../assets/icons-8-city.png'
import time from '../../../assets/icons-8-time.png'
import auction from '../../../assets/icons-8-auction.png'
import CountDowns from './CountDowns'

class Bidding extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const currentDate = new Date()
    const year = currentDate.getMonth() === 11 && currentDate.getDate() > 23
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear()
    console.log(year)

    return (
      <div className="NavBid">
        <div className="row">
          <div className="large-12 columns">
            <Head> การเสนอราคาประมูล </Head>
            <Divider style={{ marginBottom: '30px' }} />
          </div>
        </div>
        <div className="row">
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={building} /></Pic>
              <TextNav>
                <Font>จำนวนบริษัทประกัน</Font><br />
                <FontNum>5</FontNum>
              </TextNav>
            </Nav>
          </div>
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={auction} /></Pic>
              <TextNav>
                <FontAucTime>ราคาต่ำสุดในการประมูล</FontAucTime><br />
                <FontNumAucTime>10,000,000</FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={time} /></Pic>
              <TextNav>
                <FontAucTime>ระยะเวลาที่เหลือในการประมูล</FontAucTime><br />
                <FontNumAucTime>
                  <CountDowns date={this.props.timeout.timeout} />
                </FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  timeout: state.setTimeOut,
})

export default connect(mapStateToProps, null)(Bidding)
