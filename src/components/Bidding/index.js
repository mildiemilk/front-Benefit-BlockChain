import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import { Text, TextIn } from './styled'
import NavBidding from './nav-bidding'
import Box from './box'
import { connect } from 'react-redux'
import { bidding } from '../../api/bidding'
import Details from './details'
import { getSelectInsurer } from '../../api/choose-insurer'

class Bidding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDetail: false,
      Detail: {},
      index: '',
    }
    setInterval(function() {
      props.bidding()
    }, 2000)

    this.props.getSelectInsurer()
  }

 
  handleClick = (Detail, index) => {
    const { isDetail } = this.state
    if (!isDetail)
      this.setState({
        isDetail: true,
        Detail: Detail,
        index: index,
      })
    else this.setState({ isDetail: false })
  }

  render() {
    return (
      <div className="Bidding">
        <NavBidding num={this.props.num}/>
        <div className="BidContent">
          {this.state.isDetail
            ? <Details
                handleClick={this.handleClick}
                bid={this.state.Detail}
                index={this.state.index}
              />
            : <Box handleClick={this.handleClick} list={this.props.data} />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.biddingReducer,
  num: state.getSelectInsurer.defaultInsurer.length,
})

const mapDispatchToProps = dispatch => ({
  bidding: () => dispatch(bidding()),
  getSelectInsurer: () => dispatch(getSelectInsurer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Bidding)
