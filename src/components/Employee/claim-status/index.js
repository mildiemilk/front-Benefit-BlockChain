import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClaimStatusBox from './claim-status-box';
import ClaimStatusDetail from './claim-status-detail';
import { getClaimStatus } from '../../../api/Employee/claim';

class ClaimStatus extends Component {
  static propTypes = {
    getClaimStatus: PropTypes.func.isRequired,
    Claimprops: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      viewDetail: false,
      chooseID: 1,
      claimData: [],
      // claimData: [
      //   {
      //     number: '001',
      //     status: 'consider',
      //     type: 'insurance',
      //     ChooseEmployeeName: 'นายจงขยัน รักเรียน',
      //     ClaimFile: '',
      //     InsuranceType: 'IPD',
      //     date: '01/12/2017',
      //     Hospital: 'โรงพยาบาลพญาไท',
      //     AmountMoney: 5780,
      //     currency: '',
      //     BankName: 'ทหารไทย',
      //     AccountNumber: '146784521',
      //     HealthType: '',
      //     HealthPlace: '',
      //     expenseType: '',
      //   },
      //   {
      //     number: '002',
      //     status: 'approve',
      //     type: 'health',
      //     ChooseEmployeeName: 'นายจงเรียน ขยันรักษ์',
      //     ClaimFile: '',
      //     InsuranceType: '',
      //     date: '30/5/2017',
      //     Hospital: 'ร้านแว่นกรุงไทย',
      //     AmountMoney: 102000,
      //     currency: '',
      //     BankName: 'ไทยพานิชย์',
      //     AccountNumber: '22779453',
      //     HealthType: 'แว่น',
      //     HealthPlace: '',
      //     expenseType: '',
      //   },
      //   {
      //     number: '003',
      //     status: 'reject',
      //     type: 'generalEx',
      //     ChooseEmployeeName: 'นายจงรักษ์ ขยันเรียน',
      //     ClaimFile: '',
      //     InsuranceType: '',
      //     date: '06/2/2017',
      //     Hospital: 'starbuck',
      //     AmountMoney: 58000,
      //     currency: '',
      //     BankName: 'กรุงไทย',
      //     AccountNumber: '992245687',
      //     HealthType: '',
      //     HealthPlace: '',
      //     expenseType: 'ค่ากาแฟ',
      //   },
      //   {
      //     number: '004',
      //     status: 'reject',
      //     type: 'insurance',
      //     ChooseEmployeeName: 'นางคงทน ขยันมาก',
      //     ClaimFile: '',
      //     InsuranceType: 'IPD',
      //     date: '01/12/2017',
      //     Hospital: 'โรงพยาบาลพญาไท',
      //     AmountMoney: 5780,
      //     currency: '',
      //     BankName: 'SCB',
      //     AccountNumber: '146784521',
      //     HealthType: '',
      //     HealthPlace: '',
      //     expenseType: '',
      //   },
      // ],
    };
    props.getClaimStatus();
  }

  // componentDidMount() {
  //   this.props.getClaimStatus();
  // }
  componentWillReceiveProps(nextProps) {
    const { Claimprops } = nextProps;
    const claimData = [];
    Claimprops.forEach(item => {
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
          <p className="claim-header">สถานะการเคลม</p>
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
    const listItems = claimData.map((claim, number) => (
      <ClaimStatusBox
        claimdata={claim}
        id={number}
        handleToggleViewDetail={this.handleToggleViewDetail}
      />
    ));
    return listItems;
  }

  render() {
    console.log('>>>render state:', this.state);
    const { claimData } = this.state;
    return (
      <div className="claim-status">
        {/* {this.props.Claimprops} */}
        {this.checkRenderclaimStatus(claimData)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Claimprops: state.getClaimStatusReducer,
});

const mapDispatchToProps = dispatch => ({
  getClaimStatus: () => dispatch(getClaimStatus()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ClaimStatus);
