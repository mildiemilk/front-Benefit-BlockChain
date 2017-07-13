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
      Detail: {},
    }
  }

  handleClick = (Detail) => {
    const { isDetail } = this.state
    console.log(Detail);
    if (!isDetail) this.setState({ isDetail: true, Detail: Detail })
    else this.setState({ isDetail: false })
  }

  render() {

    {
      this.props.bidding()
    }
    return (
      <div className="Bidding">
        <NavBidding />
        <div className="BidContent">
          {this.state.isDetail
            ? <Details handleClick={this.handleClick} bid={this.state.Detail} />
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
