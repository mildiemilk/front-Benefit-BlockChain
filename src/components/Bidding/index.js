import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import { Text, TextIn } from './styled'
import NavBidding from './NavBidding'
import Box from './Box'
import { connect } from 'react-redux'
import { bidding } from '../../api/bidding'
import Details from './Details'

class Bidding extends Component {
  constructor() {
    super()
    this.state = {
      isDetail: false,
    }
  }

  handleClick = () => {
    const { isDetail } = this.state
    if (!isDetail) this.setState({ isDetail: true })
    else this.setState({ isDetail: false })
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
    {
      this.props.bidding()
    }
    return (
      <div className="Bidding">
        <NavBidding />
        <div className="BidContent">
          {this.state.isDetail
            ? <Details handleClick={this.handleClick} />
            : <Box handleClick={this.handleClick} list={this.props.data} />}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Bidding)
