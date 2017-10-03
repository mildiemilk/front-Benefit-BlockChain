import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClaimStatusBox from './claim-status-box';
import ClaimStatusDetail from './claim-status-detail';
import { getClaimStatus } from '../../../api/Employee/claim';

class ClaimStatus extends Component {
  static propTypes = {
    getClaimStatus: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      viewDetail: false,
      chooseID: 1,
      claimData: [],
      updateClaim: false,
    };
    props.getClaimStatus();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const claimData = [];
    data.claimData.forEach(item => {
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
        _id: item._id,
        reason: item.reason,
      });
    });
    this.setState({ claimData });
  }

  componentWillUpdate() {
    if (this.state.updateClaim) {
      this.setState({ updateClaim: false });
      this.props.getClaimStatus();
    }
  }

  handleToggleViewDetail = id => {
    this.setState({
      viewDetail: !this.state.viewDetail,
      chooseID: id,
    });
  }

  handleUpdateClaim = () => this.setState({ updateClaim: true });

  checkRenderclaimStatus = () => {
    if (this.state.viewDetail === false) {
      return (
        <div>
          <p className="claim-header">สถานะการเคลม</p>
          {this.renderClaimStatus()}
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
        handleUpdateClaim={this.handleUpdateClaim}
      />
    );
  }

  renderClaimStatus = () => {
    const { claimData } = this.state;
    const listItems = claimData.map((claim, number) => (
      <ClaimStatusBox
        key={number.toString()}
        claimdata={claim}
        id={number}
        handleToggleViewDetail={this.handleToggleViewDetail}
      />
    ));
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

const mapStateToProps = state => ({
  data: state.getClaimStatusReducer,
});
const mapDispatchToProps = dispatch => ({
  getClaimStatus: () => dispatch(getClaimStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClaimStatus);
