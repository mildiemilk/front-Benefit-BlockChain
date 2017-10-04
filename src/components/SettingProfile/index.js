import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import {
  Segment,
  Dropdown,
} from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { createProfile, setLogo } from '../../api/profile-company';
import ModalWarning from '../ModalWarning';
import {
  Box,
  Head,
  Detail1,
  Oval,
  Detail2,
  Detail3,
  DefaultImg,
} from './styled';
import { OptionTypes, OptionInsurer } from './Option';

const SegmentWithHeight = styled(Segment)`
  &&&{
    height: 100%;
    min-height: 611px;
    box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15);
  }
`;
const DatePickers = styled(DatePicker)`
width: 100%;
height: 38px;
border-radius: 4px;
border: solid 1px #d9d9d9;
font-size: 16px
`;
const NextButton = styled.button`
    width: 85%;
    height: 40px;
    border: none;
    border-radius: 20px;
    background-color: #f7555f;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    color: white;
    margin: 15% 12%;
    display: block;
    text-align:center;
    padding: 0.5%;
    `;

class SettingProfile extends Component {
  static propTypes = {
    profile: PropTypes.shape({}).isRequired,
    createProfile: PropTypes.func.isRequired,
    setLogo: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      location: '',
      hrDetail: '',
      tel: '',
      typeOfBusiness: '',
      numberOfEmployees: '',
      expiredInsurance: '',
      currentInsurer: '',
      file: '',
      imagePreviewUrl: '',
      openWarning: '',
      warningMessage: '',
    };
  }
  onInputChange(value, stateName) {
    this.setState({ [stateName]: value });
  }

  _handleImageChange = e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }
  handleExpiredDate = expiredInsurance => {
    this.setState({ expiredInsurance });
  }
  closeWarningModal = () => {
    this.setState({ openWarningModal: false });
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log('complete');
    if (this.state.typeOfBusiness === '') {
      this.setState({
        openWarningModal: true,
        warningMessage: 'คุณยังไม่ได้เลือกประเภทธุรกิจ',
      });
    } else if (this.state.currentInsurer === '') {
      this.setState({
        openWarningModal: true,
        warningMessage: 'คุณยังไม่ได้เลือกบริษัทประกันที่ใช้ในปัจจุบัน',
      });
    }
    const {
      companyName: { value: companyName },
      location: { value: location },
      hrDetail: { value: hrDetail },
      tel: { value: tel },
      numberOfEmployees: { value: numberOfEmployees },
    } = e.target;
    this.setState({
      companyName,
      location,
      hrDetail,
      tel,
      numberOfEmployees,
    });
    const { typeOfBusiness, expiredInsurance, currentInsurer } = this.state;
    this.props.createProfile({
      companyName,
      location,
      typeOfBusiness,
      hrDetail,
      numberOfEmployees,
      tel,
      currentInsurer,
      expiredInsurance,
    });
  }
  render() {
    const { profile: { error, message, companyName, logo } } = this.props;
    console.log('company', companyName, 'logo', logo);
    if (companyName !== null && companyName !== 'null') {
      if (logo !== null && logo !== 'null') {
        return <Redirect to={{ pathname: '/confirm_identity' }} />;
      }
      this.props.setLogo(this.state.file);
    }
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <div className="thumbnail">
          <img id="Image" src={imagePreviewUrl} alt="imageCompany" />
        </div>
      );
    } else {
      $imagePreview = <DefaultImg />;
    }
    return (
      <div className="setting-profile">
        <div className="row">
          <div className="large-10 large-offset-1 columns">
            <Head>กรุณาตั้งค่าโปรไฟล์</Head>
          </div>
        </div>

        <div className="row">
          <div className="large-4 large-offset-1 columns">
            <SegmentWithHeight>
              <Detail1>
                อัพโหลดโลโก้
              </Detail1>
              <div>{$imagePreview}</div>

              <Oval for="buttonImg">
                <input
                  id="buttonImg"
                  className="previewInput"
                  type="file"
                  onChange={e => this._handleImageChange(e)}
                />
                อัพโหลดรูปภาพ
              </Oval>

            </SegmentWithHeight>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="large-6 columns">
              <Segment raised>
                <Detail2>
                  ข้อมูลบริษัท
                </Detail2>
                <Detail3>
                  ชื่อบริษัท
                </Detail3>
                <Box
                  name="companyName"
                  size="big"
                  placeholder="ชื่อบริษัท"
                  required
                />
                <Detail3>
                  ที่อยู่บริษัท
                </Detail3>
                <Box name="location" size="big" placeholder="ที่อยู่บริษัท" required />
                <Detail3>
                  บุคคลติดต่อหลัก
                </Detail3>
                <Box name="hrDetail" size="big" placeholder="บุคคลติดต่อหลัก" required />
                <Detail3>
                  เบอร์โทร
                </Detail3>
                <Box
                  name="tel"
                  size="big"
                  placeholder="เบอร์โทร"
                  required
                />
                <Detail3>
                  ประเภทธุรกิจ
                </Detail3>
                <Dropdown
                  placeholder="ประเภทธุรกิจ"
                  onChange={(t, data) =>
                    this.onInputChange(data.value, 'typeOfBusiness')}
                  name="typeOfBusiness"
                  fluid
                  search
                  selection
                  options={OptionTypes}
                  required
                />
                <Detail3>
                  จำนวนพนักงาน
                </Detail3>
                <Box
                  placeholder="จำนวนพนักงาน"
                  name="numberOfEmployees"
                  type="number"
                  required
                />
                <Detail3>
                  วันหมดอายุกรมธรรม์
                </Detail3>
                <div className="input-date">
                  <DatePickers
                    selected={this.state.expiredInsurance}
                    onChange={this.handleExpiredDate}
                    minDate={moment()}
                    fixedHeight
                    dateFormat="DD/MM/YYYY"
                    locale="th"
                    showYearDropdown
                    dateFormatCalendar="MMMM"
                    scrollableYearDropdown
                    yearDropdownItemNumber={8}
                    required
                  />
                </div>
                <Detail3>
                  บริษัทประกันที่ใช้ในปัจจุบัน
                </Detail3>
                <Dropdown
                  name="currentInsurer"
                  onChange={(t, data) =>
                    this.onInputChange(data.value, 'currentInsurer')}
                  placeholder="บริษัทประกันที่ใช้ในปัจจุบัน"
                  search
                  fluid
                  selection
                  options={OptionInsurer}
                  required
                />
                {error
                  ? <span style={{ color: 'red' }}>
                    {' '}<br />{message}
                  </span>
                  : <span />}
              </Segment>
            </div>
            <div className="row">
              <div className="large-2 large-offset-9 columns">
                <NextButton type="submit"> ต่อไป </NextButton>
              </div>
            </div>
          </form>
        </div>
        <ModalWarning
          openWarningModal={this.state.openWarningModal}
          warningMessage={this.state.warningMessage}
          closeWarningModal={this.closeWarningModal}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createProfile: data => dispatch(createProfile(data)),
  setLogo: data => dispatch(setLogo(data)),
});

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingProfile);
