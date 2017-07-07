import React, { Component } from 'react'
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
  
    return (
      <div className="Bidding">
        <NavBidding/>
        <div className='BidContent'>
          {this.state.isDetail
          ? <Details handleClick = {this.handleClick} />
          : <Box handleClick = {this.handleClick} />}
        </div>
      </div>
    )
  }
}

export default Bidding
