import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Backgroundiv, TinyText } from './styled';
import Header from '../header';
import InsuranceTemplate from './insurance-template';
import HealthTemplate from './health-template';
import GeneralExpenseTemplate from './generalexpense-template';
import '../../../styles/employee-style/claim-insurance.scss';
import Footer from '../footer';

const MinStateOption = [
  { key: 'insurance', text: 'ประกันภัย', value: 'insurance' },
  { key: 'health', text: 'สุขภาพ', value: 'health' },
  { key: 'generalEx', text: 'ใช้จ่ายทั่วไป', value: 'generalEx' },
];
const EmployeeNameOption = [
  { key: '1', text: 'นาย จงรักษ์ ขยันเรียน', value: 'นาย จงรักษ์ ขยันเรียน' },
  { key: '2', text: 'นาง คงทน ขยันมาก', value: 'นาง คงทน ขยันมากน' },
  { key: '3', text: 'นาย ขจร ขยันเขียน', value: 'นาย ขจร ขยันเรียน' },
];

class ClaimInsurance extends Component {
  constructor() {
    super();
    this.state = {
      mainState: 'generalEx',
      ChooseEmployeeName: '',
      ClaimFile: '',
      InsuranceType: '',
      date: null,
      Hospital: '',
      AmountMoney: null,
      currency: '',
      BankName: '',
      AccountNumber: '',
      HealthType: '',
      HealthPlace: '',
      expenseType: '',
    };
  }

  handleUploadcliamFile = changeEvent => {
    const file = changeEvent.target.files[0];
    this.setState({
      ClaimFile: file,
    });
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleChangeDate = date => {
    this.setState({ date });
  }

  rendermainState = () => {
    if (this.state.mainState === 'insurance') {
      return (
        <InsuranceTemplate
          EmNameoption={EmployeeNameOption}
          handleChange={this.handleChange}
          handleUploadcliamFile={this.handleUploadcliamFile}
          ClaimFile={this.state.ClaimFile}
          handleChangeDate={this.handleChangeDate}
          date={this.state.date}
        />
      );
    } else if (this.state.mainState === 'health') {
      return (
        <HealthTemplate
          EmNameoption={EmployeeNameOption}
          handleChange={this.handleChange}
          handleUploadcliamFile={this.handleUploadcliamFile}
          ClaimFile={this.state.ClaimFile}
          handleChangeDate={this.handleChangeDate}
          date={this.state.date}
        />
      );
    }
    return (
      <GeneralExpenseTemplate
        EmNameoption={EmployeeNameOption}
        handleChange={this.handleChange}
        handleUploadcliamFile={this.handleUploadcliamFile}
        ClaimFile={this.state.ClaimFile}
        handleChangeDate={this.handleChangeDate}
        date={this.state.date}
      />
    );
  }

  render() {
    return (
      <div className="InsuranceTemplate">
        <div>
          <Header />
          <Backgroundiv>
            <p style={{ fontSize: '18px' }}>เคลม</p>
            <TinyText>ประเภทการเคลม</TinyText>
            <Dropdown
              placeholder="เลือกประเภทการเคลม"
              fluid
              selection
              defaultValue="generalEx"
              name="mainState"
              options={MinStateOption}
              onChange={this.handleChange}
            />
            {this.rendermainState()}
          </Backgroundiv>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ClaimInsurance;
