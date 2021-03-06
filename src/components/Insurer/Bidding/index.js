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
    data: PropTypes.shape({}).isRequired,
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
      updateBiding: false,
      DataCompany: null,
    };
    props.getCompanyBidding(this.state.companyId);
  }

  componentWillReceiveProps(nextProps) {
    const { data: { data } } = nextProps;
    this.setState({ DataCompany: data });
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextState.updateBiding) {
      this.props.getCompanyBidding(this.state.companyId);
    }
    if (this.state.updateBiding) {
      this.setState({ updateBiding: false });
      this.props.getCompanyBidding(this.state.companyId);
    }
  }
  handleUpdateBiding = () => {
    this.setState({ updateBiding: true });
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
    // console.log('>>>renderIndex', this.state);
    if (this.state.DataCompany !== null) {
      return (
        <div>
          <NavBidding
            DataCompany={this.state.DataCompany}
            timeout={this.props.timeout}
            notiTimeout={this.notiTimeout}
          />
          <div className="BidContent">
            <ShowMasterPlan
              DataCompany={this.state.DataCompany}
              handleUpdateBiding={this.handleUpdateBiding}
              end={this.state.end}
            />
          </div>
        </div>
      );
    }
    return <div />;
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
