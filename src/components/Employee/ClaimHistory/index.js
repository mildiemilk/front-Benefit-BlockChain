import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClaimStatusBox from '../claim-status/claim-status-box';
import ClaimStatusDetail from '../claim-status/claim-status-detail';
import { getClaimHistory } from '../../../api/Employee/claim';

class ClamHistory extends Component {
  static propTypes = {
    getClaimHistory: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      viewDetail: false,
      chooseID: 1,
      claimData: [],
    };
    props.getClaimHistory();
  }

  componentWillReceiveProps(nextProps) {
    const { data: { logClaim } } = nextProps;
    const claimData = [];
    logClaim.forEach(item => {
      let InsuranceType = '';
      let HealthType = '';
      let expenseType = '';
      let Hospital = '';
      let HealthPlace = '';
      let BankName = '';
      const d = new Date(item.detail.date);
      let date = d.toLocaleString();
      date = date.split(',');
      date = date[0];
      let AccountNumber = '';
      if (item.type === 'insurance') {
        InsuranceType = item.detail.title;
        Hospital = item.detail.location;
        BankName = item.detail.bank;
        AccountNumber = item.detail.bankAccountNumber;
      } else if (item.type === 'health') {
        HealthType = item.detail.title;
        HealthPlace = item.detail.location;
      } else {
        expenseType = item.detail.title;
        HealthPlace = item.detail.location;
      }
      claimData.push({
        number: item.claimNumber,
        status: item.status,
        type: item.type,
        ChooseEmployeeName: item.detail.name,
        ClaimFile: item.detail.imageClaimFile,
        InsuranceType,
        date,
        Hospital,
        AmountMoney: item.detail.amount,
        currency: item.detail.currency,
        BankName,
        AccountNumber,
        HealthType,
        HealthPlace,
        expenseType,
      });
    });
    this.setState({ claimData });
  }

  handleToggleViewDetail = id => {
    this.setState({
      viewDetail: !this.state.viewDetail,
      chooseID: id,
    });
  }

  checkRenderclaimStatus = () => {
    if (this.state.viewDetail === false) {
      return (
        <div>
          <p className="claim-header">ประวัติการเคลม</p>
          {this.renderClaimStatus(this.state.claimData)}
        </div>
      );
    }
    return (
      <ClaimStatusDetail
        claimdata={
          this.state.claimData[
            this.state.chooseID
            ]
          }
        id={this.state.chooseID}
        handleToggleViewDetail={this.handleToggleViewDetail}
      />
    );
  }

  renderClaimStatus = claimData => {
    const listItems = claimData.map((claim, number) => {
      if (claim.status !== 'consider') {
        return (
          <ClaimStatusBox
            claimdata={claim}
            id={number}
            handleToggleViewDetail={this.handleToggleViewDetail}
          />
        );
      }
      return '';
    });
    return listItems;
  }

  render() {
    return (
      <div className="claim-status">
        {this.checkRenderclaimStatus()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getClaimHistory: () => dispatch(getClaimHistory()),
});
const mapStateToProps = state => ({
  data: state.getClaimHistoryReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClamHistory);
