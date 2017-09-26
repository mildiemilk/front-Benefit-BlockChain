import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBidding from './nav-bidding';
import { getCompanyBidding } from '../../../api/Insurer/bidding';
import ShowMasterPlan from '../ShowMasterPlan';

class Bidding extends React.Component {
  static propTypes = {
    getCompanyBidding: PropTypes.func.isRequired,
    timeout: PropTypes.string.isRequired,
    match: PropTypes.shape({ params: PropTypes.companyId }),
    data: PropTypes.shape({ data: {} }).isRequired,
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }

  constructor(props) {
    // console.log('props.match.params.companyId---->', props.match.params.companyId);
    super(props);
    this.state = {
      isDetail: false,
      Detail: {},
      index: '',
      companyId: props.match.params.companyId,
      end: false,
    };
    // props.getCompanyBidding(this.state.companyId);
  }

  componentDidMount() {
    // console.log('willMount: ', this.state.companyId);
    this.props.getCompanyBidding(this.state.companyId);
  }

  isFetched = false;
  notiTimeout = () => {
    this.setState({
      end: true,
    });
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
    // console.log('render:this.props', this.props);
    if (Object.keys(this.props.data.data).length > 0) {
      return (
        <div>
          <NavBidding
            DataCompany={this.props.data.data}
            timeout={this.props.timeout}
            noti={this.notiTimeout}
          />
          <div className="BidContent">
            <ShowMasterPlan DataCompany={this.props.data.data} />
          </div>
        </div>
      );
    }
    return <div />
  }
}

const mapStateToProps = state => ({
  timeout: state.setTimeOut,
  data: state.biddingInsurerReducer,
  num: state.getSelectInsurer.defaultInsurer.length,
});

const mapDispatchToProps = dispatch => ({
  getCompanyBidding: companyId => dispatch(getCompanyBidding(companyId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bidding);
