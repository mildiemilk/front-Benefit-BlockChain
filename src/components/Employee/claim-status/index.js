import React, { Component } from 'react';
import ClaimStatusBox from './claim-status-box';

class ClamStatus extends Component {
  constructor() {
    super();
    this.state = {
      claimData: [
        {
          Number: '001',
          status: 'consider',
          type: 'insurance',
          ChooseEmployeeName: 'นายจงขยัน รักเรียน',
          ClaimFile: '',
          InsuranceType: 'IPD',
          date: '01/12/2017',
          Hospital: '',
          AmountMoney: 5780,
          currency: '',
          BankName: '',
          AccountNumber: '',
          HealthType: '',
          HealthPlace: '',
          expenseType: '',
        },
        {
          Number: '002',
          status: 'approve',
          type: 'health',
          ChooseEmployeeName: 'นายจงเรียน ขยันรักษ์',
          ClaimFile: '',
          InsuranceType: '',
          date: '30/5/2017',
          Hospital: '',
          AmountMoney: 102000,
          currency: '',
          BankName: '',
          AccountNumber: '',
          HealthType: 'แว่น',
          HealthPlace: '',
          expenseType: '',
        },
        {
          Number: '003',
          status: 'reject',
          type: 'generalEx',
          ChooseEmployeeName: 'นายจงรักษ์ ขยันเรียน',
          ClaimFile: '',
          InsuranceType: '',
          date: '06/2/2017',
          Hospital: '',
          AmountMoney: 58000,
          currency: '',
          BankName: '',
          AccountNumber: '',
          HealthType: '',
          HealthPlace: '',
          expenseType: 'ค่ากาแฟ',
        },
      ],
    };
  }

  renderClaimStatus = claimData => {
    const listItems = claimData.map(i => (
      <ClaimStatusBox
        claimdata={i}

      />
    ));
    return listItems;
  }

  render() {
    return (
      <div className="clam-status">
        <p className="clam-header">สถานะการเคลม</p>
        {this.renderClaimStatus(this.state.claimData)}
      </div>
    );
  }
}

export default ClamStatus;
