import React, { Component } from 'react'
import Countdown from 'react-count-down'
import { Divider } from 'semantic-ui-react'
import { Text, TextIn } from './styled'
import NavBidding from './NavBidding'
import Box from './Box'
import Details from './Details'
class Bidding extends Component {
  constructor() {
    super()
    this.state = {
      isDetail: false
    }
  }

  handleClick = () => {
      const {isDetail } = this.state
      if (!isDetail) 
      this.setState({ isDetail: true })
      else 
      this.setState({ isDetail: false })
   
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
          {this.state.isDetail
          ? <Details handleClick = {this.handleClick} />
          : <Box handleClick = {this.handleClick} />}
        </div>
        <Countdown style options={OPTIONS} />
      </div>
    )
  }
}

export default Bidding
