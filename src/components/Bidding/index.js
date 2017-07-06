import React, { Component } from 'react'
import Countdown from 'react-count-down'
import { Divider } from 'semantic-ui-react'
import { Text, TextIn } from './styled'
import NavBidding from './NavBidding'
import Box from './Box'

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
      <div className="Bidding">
        <NavBidding/>
        <div className='BidContent'>
          <div className='HeadBidContent'>
            <div className='row'>
              <div className='large-3 columns'>
                  <Text>ชื่อบริษัทประกัน</Text>
              </div>
              <div className='large-6 columns'>
                  <div className='row'>
                      <div className='large-4 columns'>
                        <TextIn>เลขที่ใบเสนอราคา</TextIn>
                      </div>
                      <div className='large-2 columns'>
                        <TextIn>ครั้งที่เสนอราคา</TextIn>
                      </div>
                      <div className='large-2 columns'>
                        <TextIn>วันที่</TextIn>
                      </div>
                      <div className='large-4 columns'>
                        <TextIn>ราคาประมูล</TextIn>
                      </div>
                  </div> 
              </div>
              <div className='large-1 columns'>
                  <Text>ดูแผนประกัน</Text>
              </div>
              <div className='large-2 columns'>
                  <Text>สถานะ</Text>
              </div>
            </div>
          </div>
          <Box/> 
        </div>
        <Countdown style options={OPTIONS} />
      </div>


    )
  }
}

export default Bidding
