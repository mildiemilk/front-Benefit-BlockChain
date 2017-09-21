import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBidding from './nav-bidding';
import Box from './box';
import { bidding, biddingDetailForCompany } from '../../api/bidding';
import Details from './details';
import { getSelectInsurer, getTimeout } from '../../api/choose-insurer';
import { getCompleteStep } from '../../api/profile-company';

class Bidding extends Component {
  static propTypes = {
    num: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    bidding: PropTypes.func.isRequired,
    getSelectInsurer: PropTypes.func.isRequired,
    getTimeout: PropTypes.func.isRequired,
    timeout: PropTypes.string.isRequired,
    getCompleteStep: PropTypes.func.isRequired,
    biddingDetailForCompany: PropTypes.func.isRequired,
    detail: PropTypes.shape({}).isRequired,
    minPrice: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isDetail: false,
      index: '',
      end: false,
    };
    setInterval(() => {
      props.bidding();
    }, 2000);
  }

  componentDidMount = () => {
    this.props.getTimeout();
    this.props.getSelectInsurer();
    this.props.getCompleteStep();
  }

  handleClick = (insurerId, index) => {
    const { isDetail } = this.state;
    this.props.biddingDetailForCompany(insurerId);
    if (!isDetail) {
      this.setState({
        isDetail: true,
        index,
      });
    } else {
      this.setState({ isDetail: false });
    }
  }
  notiTimeout = () => {
    this.setState({
      end: true,
    });
  }
  render() {
    return (
      <div className="Bidding">
        <NavBidding
          num={this.props.num}
          timeout={this.props.timeout}
          notiTimeout={this.notiTimeout}
          minPrice={this.props.minPrice}
        />
        <div className="BidContent">
          {this.state.isDetail
            ? <Details
              handleClick={this.handleClick}
              bid={this.props.detail}
              list={this.props.data}
              index={this.state.index}
            />
            : <Box handleClick={this.handleClick} list={this.props.data} end={this.state.end} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeout: state.setTimeOut,
  data: state.biddingReducer.insurers,
  detail: state.biddingReducer,
  num: state.getSelectInsurer.defaultInsurer.length,
  minPrice: state.biddingReducer.minPrice,
});

const mapDispatchToProps = dispatch => ({
  bidding: () => dispatch(bidding()),
  getSelectInsurer: () => dispatch(getSelectInsurer()),
  getTimeout: () => dispatch(getTimeout()),
  getCompleteStep: () => dispatch(getCompleteStep()),
  biddingDetailForCompany: id => dispatch(biddingDetailForCompany(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bidding);
