import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBidding from './nav-bidding';
import Box from './box';
import { bidding } from '../../api/bidding';
import Details from './details';
import { getSelectInsurer, getTimeout } from '../../api/choose-insurer';

class Bidding extends Component {
  static propTypes = {
    num: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    bidding: PropTypes.func.isRequired,
    getSelectInsurer: PropTypes.func.isRequired,
    getTimeout: PropTypes.func.isRequired,
    timeout: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isDetail: false,
      Detail: {},
      index: '',
    };
    setInterval(() => {
      props.bidding();
    }, 2000);

    this.props.getSelectInsurer();
  }
  componentDidMount = () => {
    this.props.getTimeout();
  }
  handleClick = (Detail, index) => {
    const { isDetail } = this.state;
    if (!isDetail) {
      this.setState({
        isDetail: true,
        Detail,
        index,
      });
    } else {
      this.setState({ isDetail: false });
    }
  }

  render() {
    return (
      <div className="Bidding">
        <NavBidding num={this.props.num} timeout={this.props.timeout} />
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
    );
  }
}

const mapStateToProps = state => ({
  timeout: state.setTimeOut,
  data: state.biddingReducer,
  num: state.getSelectInsurer.defaultInsurer.length,
});

const mapDispatchToProps = dispatch => ({
  bidding: () => dispatch(bidding()),
  getSelectInsurer: () => dispatch(getSelectInsurer()),
  getTimeout: () => dispatch(getTimeout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bidding);
