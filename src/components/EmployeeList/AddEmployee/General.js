import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { DetailProfile, Profile, TextProfile, InputBox, InputForm, DefaultImg, Upload, Input } from './styled';
import add from '../../../../assets/EmployeeList/icons-8-add.png';
// import InputDate from '../../InputDate';

const Inputs = styled(DatePicker) `
&&&{
  height: 40px;
  padding-left: 10px;
  border-radius: 4px;
  width: 100%;
  border: solid 1px #dddddd;
}
`;
const Dropdowns = styled(Dropdown)`
&&&{
  height: 40px;
  width: 100%;
  margin-top: 10px;
}
`;
const Img = styled.img`
  height: 20px;
  width: 20px;
`;
const options = [
  { key: 1, text: 'นาย', value: 'นาย' },
  { key: 2, text: 'นาง', value: 'นาง' },
  { key: 3, text: 'นางสาว', value: 'นางสาว' },
];

class General extends Component {
  static propTypes = {
    // optionGroupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    // optionTitles: PropTypes.arrayOf(PropTypes.object).isRequired,
    // optionDepartment: PropTypes.arrayOf(PropTypes.object).isRequired,
    // optionTypeOfEmployee: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.shape({}).isRequired,
    // imagePreviewUrl: PropTypes.string.isRequired,
    _handleImageChange: PropTypes.func.isRequired,
    handleBirthDate: PropTypes.func.isRequired,
    handleStartDate: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    // dateOfBirth: PropTypes.shape({}).isRequired,
    // startDate: PropTypes.shape({}).isRequired,
    // gender: PropTypes.string.isRequired,
    handleOptionGender: PropTypes.func.isRequired,
    // prefix: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  styleUpload = () => {
    const { data } = this.props;
    if (data.imagePreviewUrl) {
      return 'hidden';
    }
    return '';
  }
  render() {
    const { data } = this.props;
    // const { imagePreviewUrl } = this.props;
    console.log('propData', data);
    console.log('propss', this.props);
    // console.log('--data--', data[dataIndex]);
    let $imagePreview = null;
    $imagePreview = (
      <div className="setting-profile">
        <div className="thumbnail addEmployee">
          {data.imagePreviewUrl
          ? <img src={data.imagePreviewUrl} alt="imageCompany" />
          : <DefaultImg />
          }
          <Upload className={this.styleUpload()} for="buttonImg">
            <div>
              <Img src={add} className="no-thumbnail" alt="add" width="22" height="22" />
            </div>
            <div>อัพโหลดรูปภาพ</div>
            <Input
              id="buttonImg"
              type="file"
              onChange={e => this.props._handleImageChange(e)}
            />
          </Upload>
        </div>
      </div>
    );
    return (
      <Profile form="addEmployee">
        <div className="row">
          <div className="large-3 columns">
            {$imagePreview}
          </div>
          <div className="large-9 columns">
            <DetailProfile>
              <div className="row">
                <div className="large-2 columns">
                  <TextProfile>คำนำหน้า</TextProfile>
                  <Dropdowns
                    placeholder="คำนำหน้า" options={options} compact selection
                    onChange={this.props.handleChange} name="prefix"
                    value={data.prefix}
                  />
                </div>
                <div className="large-3 columns">
                  <TextProfile>ชื่อ</TextProfile>
                  <InputBox
                    name="name"
                    onChange={this.props.handleInputChange} value={data.name}
                    required
                  />
                </div>
                <div className="large-3 columns">
                  <TextProfile>นามสกุล</TextProfile>
                  <InputBox
                    name="lastname"
                    onChange={this.props.handleInputChange} value={data.lastname}
                    required
                  />
                </div>
                <div className="large-4 columns">
                  <TextProfile>เพศ</TextProfile>
                  <div className="large-6 columns">
                    <InputForm
                      type="radio" value="ชาย"
                      onClick={this.props.handleOptionGender}
                      checked={data.gender === 'ชาย'}
                    /> ชาย
                  </div>
                  <div className="large-6 columns">
                    <InputForm
                      type="radio" value="หญิง"
                      onClick={this.props.handleOptionGender}
                      checked={data.gender === 'หญิง'}
                    /> หญิง
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>เลขบัตรประชาชน/หนังสือเดินทาง</TextProfile>
                  <InputBox
                    name="citizenId"
                    onChange={this.props.handleInputChange}
                    value={data.citizenId}
                    required
                  />
                </div>
                <div className="large-6 columns">
                  <TextProfile>สัญชาติ</TextProfile>
                  <InputBox
                    name="nationality"
                    onChange={this.props.handleInputChange}
                    value={data.nationality}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>วันเกิด</TextProfile>
                  <div className="input-date margin editEmployee">
                    <Inputs
                      selected={data.dateOfBirth}
                      onChange={this.props.handleBirthDate}
                      name="dateOfBirth"
                      fixedHeight
                      dateFormat="DD/MM/YYYY"
                      locale="th"
                      showYearDropdown
                      dateFormatCalendar="MMMM"
                      scrollableYearDropdown
                      yearDropdownItemNumber={8}
                    />
                  </div>
                </div>
                <div className="large-6 columns">
                  <TextProfile>รหัสพนักงาน</TextProfile>
                  <InputBox
                    name="employeeCode"
                    required
                    onChange={this.props.handleInputChange} value={data.employeeCode}
                  />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>หมายเลขกรมธรรม์</TextProfile>
                  <InputBox
                    name="policyNumber"
                    onChange={this.props.handleInputChange} value={data.policyNumber}
                  />
                </div>
                <div className="large-6 columns">
                  <TextProfile>รหัสสมาชิกกรมธรรม์</TextProfile>
                  <InputBox
                    name="memberNumber"
                    onChange={this.props.handleInputChange} value={data.memberNumber}
                  />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>กลุ่มสิทธิประโยชน์</TextProfile>
                  <Dropdowns
                    placeholder="benefitGroup" options={data.optionGroupBenefit} compact selection
                    onChange={this.props.handleChange} name="benefitGroup"
                    value={data.benefitGroup}
                  />
                </div>
                <div className="large-6 columns">
                  <TextProfile>แผนสิทธิประโยชน์</TextProfile>
                  <InputBox
                    name="benefitPlan"
                    required
                    onChange={this.props.handleInputChange}
                    value={data.benefitPlan}
                  />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>ตำแหน่ง</TextProfile>
                  <Dropdowns
                    placeholder="title" options={data.optionTitles} compact selection
                    onChange={this.props.handleChange} name="title"
                    value={data.title}
                  />
                </div>
                <div className="large-6 columns">
                  <TextProfile>แผนก</TextProfile>
                  <Dropdowns
                    placeholder="department" options={data.optionDepartment} compact selection
                    onChange={this.props.handleChange} name="department"
                    value={data.department}
                  />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>ประเภทของพนักงาน</TextProfile>
                  <Dropdowns
                    placeholder="typeOfEmployee" options={data.optionTypeOfEmployee} compact selection
                    onChange={this.props.handleChange} name="typeOfEmployee"
                    value={data.typeOfEmployee}
                  />
                </div>
                <div className="large-6 columns">
                  <TextProfile>Email</TextProfile>
                  <InputBox
                    name="email"
                    required
                    onChange={this.props.handleInputChange} value={data.email}
                  />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>เลขบัญชีเงินเดือน</TextProfile>
                  <InputBox
                    name="accountNumber"
                    required
                    onChange={this.props.handleInputChange}
                    value={data.accountNumber}
                  />
                </div>
                <div className="large-6 columns">
                  <TextProfile>บัญชีของธนาคาร</TextProfile>
                  <InputBox
                    name="bankName"
                    required
                    onChange={this.props.handleInputChange}
                    value={data.bankName}
                  />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>วันเริ่มงาน</TextProfile>
                  <div className="input-date margin editEmployee">
                    <Inputs
                      selected={data.startDate}
                      onChange={this.props.handleStartDate}
                      name="startDate"
                      minDate={moment()}
                      fixedHeight
                      dateFormat="DD/MM/YYYY"
                      locale="th"
                      showYearDropdown
                      dateFormatCalendar="MMMM"
                      scrollableYearDropdown
                      yearDropdownItemNumber={8}
                    />
                  </div>
                </div>
                <div className="large-6 columns">
                  <TextProfile>วันสิ้นสุดการทำงาน</TextProfile>
                  <div className="input-date margin editEmployee">
                    <Inputs
                      minDate={moment()}
                      fixedHeight
                      dateFormat="DD/MM/YYYY"
                      locale="th"
                      showYearDropdown
                      dateFormatCalendar="MMMM"
                      scrollableYearDropdown
                      yearDropdownItemNumber={8}
                    />
                  </div>
                </div>
              </div>
            </DetailProfile>
          </div>
        </div>
      </Profile>
    );
  }
}

export default General;
