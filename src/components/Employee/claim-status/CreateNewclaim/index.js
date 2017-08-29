import React, { Component } from 'react';
import { Modal, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BackgroundDiv, TinyText, SubmitButton, SubmitButtonLast } from './styled';
import InsuranceTemplate from './insurance-template';
import '../../../../styles/employee-style/claim-insurance.scss';

const MainStateOption = [
  { key: 'insurance', text: 'ประกันภัย', value: 'insurance' },
  { key: 'health', text: 'สุขภาพ', value: 'health' },
  { key: 'generalEx', text: 'ใช้จ่ายทั่วไป', value: 'generalEx' },
];
const EmployeeNameOption = [
  { key: 'นายจงรักษ์ ขยันเรียน', text: 'นายจงรักษ์ ขยันเรียน', value: 'นายจงรักษ์ ขยันเรียน' },
  { key: 'นางคงทน ขยันมาก', text: 'นางคงทน ขยันมาก', value: 'นางคงทน ขยันมากน' },
  { key: 'นายขจร ขยันเขียน', text: 'นายขจร ขยันเขียน', value: 'นายขจร ขยันเรียน' },
];

class NewClaim extends Component {
  static propTypes = {
    oldClaimData: PropTypes.shape.isRequired,
  }
  constructor() {
    super();
    this.state = {
      mainState: 'insurance',
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


  render() {
    return (
      <div className="InsuranceTemplate">
        <BackgroundDiv>
          <TinyText>ประเภทการเคลม</TinyText>
          <Dropdown
            placeholder="เลือกประเภทการเคลม"
            fluid
            selection
            defaultValue="insurance"
            name="mainState"
            options={MainStateOption}
            onChange={this.handleChange}
          />
          <InsuranceTemplate
            EmNameoption={EmployeeNameOption}
            handleChange={this.handleChange}
            handleUploadcliamFile={this.handleUploadcliamFile}
            ClaimFile={this.state.ClaimFile}
            handleChangeDate={this.handleChangeDate}
            date={this.state.date}
            oldClaimData={this.props.oldClaimData}
          />
          <Modal
            trigger={<SubmitButton> เคลม </SubmitButton>}
            content={<p>
                        รายการของคุณถูกบันทึกแล้ว <br />
                          กรุณารอการพิจารณา
                    </p>}
            actions={
              <Link to="/claimstatus">
                <SubmitButtonLast>
                  ตกลง
                </SubmitButtonLast>
              </Link>
            }
          />
        </BackgroundDiv>
      </div>
    );
  }
}

export default NewClaim;
