import React, { Component } from 'react'
import Countdown from 'react-count-down'
import { Divider } from 'semantic-ui-react'
import { Head, Nav, Pic, Font, FontNum, TextNav, FontAucTime, FontNumAucTime } from './styled'
import building from '../../../assets/icons-8-city.png'
import time from '../../../assets/icons-8-time.png'
import auction from '../../../assets/icons-8-auction.png'
class Bidding extends Component {
  constructor() {
    super()
  }

  render() {
    const cb = () => {
      console.log('expired callback')
    }
    const OPTIONS = {
      endDate: '03/01/2018 10:55 AM',
      prefix: 'until my birthday!',
      cb,
    }

    return (
      <div className="NavBid">
        <div className="row">
          <div className="large-12 columns">
            <Head> การเสนอราคาประมูล </Head>
            <Divider style={{marginBottom: '30px'}}/>
          </div>
        </div>
        <div className="row">
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={building}/></Pic>
              <TextNav>
                <Font>จำนวนบริษัทประกัน</Font><br/>
                <FontNum>5</FontNum>
              </TextNav>
            </Nav>
          </div>
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={auction}/></Pic>
              <TextNav>
                <FontAucTime>ราคาต่ำสุดในการประมูล</FontAucTime><br/>
                <FontNumAucTime>10,000,000</FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={time}/></Pic>
              <TextNav>
                <FontAucTime>ระยะเวลาที่เหลือในการประมูล</FontAucTime><br/>
                <FontNumAucTime>03:33:33:33</FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Bidding
