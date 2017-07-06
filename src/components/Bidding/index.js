import React, { Component } from 'react'
import Countdown from 'react-count-down'
import { Divider } from 'semantic-ui-react'
import { Head, Box } from './styled'
import NavBidding from './NavBidding'
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
    // console.log(options);
    return (
      <div className="Bidding">
        <NavBidding/>
        <div className='row'>
          <div className='large-3 columns'>
              <span>ชื่อบริษัทประกัน</span>
          </div>
          <div className='large-6 columns'>
              <span>เลขที่ใบเสนอราคา</span> <span>ครั้งที่เสนอราคา</span>
          </div>
          <div className='large-1 columns'>
              <span>ดูแผนประกัน</span>
          </div>
          <div className='large-2 columns'>
              <span>สถานะ</span>
          </div>
        </div>
        <div className='row'>
          <Box>
          </Box>
         </div> 
        <Countdown style options={OPTIONS} />
      </div>


    )
  }
}

export default Bidding
