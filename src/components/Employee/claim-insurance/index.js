import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Modal, Dropdown } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import { claim } from '../../../api/Employee/claim';
import { Backgroundiv, TinyText, SubmitButton, SubmitButtonLast } from './styled';
import InsuranceTemplate from './insurance-template';
import HealthTemplate from './health-template';
import GeneralExpenseTemplate from './generalexpense-template';
import Footer from '../footer';
import '../../../styles/employee-style/claim-insurance.scss';

const MainStateOption = [
  { key: 'insurance', text: 'ประกันภัย', value: 'insurance' },
  { key: 'health', text: 'สุขภาพ', value: 'health' },
  { key: 'general', text: 'ใช้จ่ายทั่วไป', value: 'general' },
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
      mainState: 'general',
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

  handleButtonSubmit = () => {
    const detail = this.state;
    const files = this.state.ClaimFile;
    const type = this.state.mainState;
    delete detail.ClaimFile;
    delete detail.mainState;
    claim(detail, files, type)();
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
        <Backgroundiv>
          <p style={{ fontSize: '18px' }}>เคลม</p>
          <TinyText>ประเภทการเคลม</TinyText>
          <Dropdown
            placeholder="เลือกประเภทการเคลม"
            fluid
            selection
            defaultValue="general"
            name="mainState"
            options={MainStateOption}
            onChange={this.handleChange}
          />
          {this.rendermainState()}
          <Modal
            style={{ paddingTop: '25px', textAlign: 'center' }}
            trigger={<SubmitButton> เคลม </SubmitButton>}
            content={
              <p>
                รายการของคุณถูกบันทึกแล้ว
                <br />
                กรุณารอการพิจารณา
              </p>
            }
            actions={
              <SubmitButtonLast onClick={() => this.handleButtonSubmit()}>
                ตกลง
              </SubmitButtonLast>
            }
          />
        </Backgroundiv>
        <Footer />
      </div>
    );
  }
}

export default ClaimInsurance;
