import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBidding from './nav-bidding';
import { getCompanyBidding, getTimeout } from '../../../api/Insurer/bidding';
import ShowMasterPlan from '../ShowMasterPlan';

class Bidding extends React.Component {
  static propTypes = {
    getCompanyBidding: PropTypes.func.isRequired,
    timeout: PropTypes.string.isRequired,
    match: PropTypes.shape({ params: PropTypes.companyId }),
    data: PropTypes.shape({}).isRequired,
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      isDetail: false,
      Detail: {},
      index: '',
      companyId: props.match.params.companyId,
    };
  }

  componentDidMount() {
    this.props.getCompanyBidding(this.state.companyId);
  }

  handleClick = (Detail, index) => {
    // console.log('call handleClick', Detail);
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
        <NavBidding
          DataCompany={this.props.data}
          timeout={this.props.timeout}
        />
        <div className="BidContent">
          <ShowMasterPlan data={this.props.data} />
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
  // bidding: () => dispatch(bidding()),
  getCompanyBidding: companyId => dispatch(getCompanyBidding(companyId)),
  getTimeout: () => dispatch(getTimeout()),
  // getCompleteStep: () => dispatch(getCompleteStep()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bidding);
