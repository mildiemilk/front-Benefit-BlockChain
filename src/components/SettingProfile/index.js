import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Segment,
  Dropdown,
} from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { createProfile, setLogo } from '../../api/profile-company';
import {
  Box,
  Head,
  Detail1,
  Oval,
  Detail2,
  Detail3,
  DefaultImg,
} from './styled';

const SegmentWithHeight = styled(Segment)`
  &&&{
    height: 100%;
    min-height: 611px;
    box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15);
  }
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

const BusinessTypes = [
  {
    text: 'ประเภท 1',
    value: 'Type 1',
  },
  {
    text: 'ประเภท 2',
    value: 'Type 2',
  },
  {
    text: 'ประเภท 3',
    value: 'Type 3',
  },
];
const NumberOfEmployees = [
  {
    text: '1-50',
    value: '1-50',
  },
  {
    text: '51-100',
    value: '51-100',
  },
  {
    text: '101-150',
    value: '101-150',
  },
];

class SettingProfile extends Component {
  static propTypes = {
    profile: PropTypes.shape.isRequired,
    createProfile: PropTypes.func.isRequired,
    setLogo: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      companyName: '',
      location: '',
      hrDetail: '',
      tel: '',
      typeOfBusiness: '',
      numberOfEmployees: '',
      companyBroker: '',
      companyInsurer: '',
      file: '',
      imagePreviewUrl: '',
    };
  }
  onInputChange(value, stateName) {
    this.setState({ [stateName]: value });
  }

  _handleImageChange = e => {
    e.preventDefault();

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
  handleSubmit = e => {
    e.preventDefault();
    const {
      companyName: { value: companyName },
      location: { value: location },
      hrDetail: { value: hrDetail },
      tel: { value: tel },
      companyBroker: { value: companyBroker },
      companyInsurer: { value: companyInsurer },
    } = e.target;

    this.setState({
      companyName,
      location,
      hrDetail,
      tel,
      companyBroker,
      companyInsurer,
    });

    const { typeOfBusiness, numberOfEmployees } = this.state;
    this.props.createProfile({
      companyName,
      location,
      hrDetail,
      tel,
      typeOfBusiness,
      numberOfEmployees,
      companyBroker,
      companyInsurer,
    });
  }
  render() {
    const { companyName, logo, error, message } = this.props.profile;
    if (companyName !== '') {
      if (logo !== '') {
        return <Redirect to={{ pathname: '/confirm_identity' }} />;
      }
      this.props.setLogo(this.state.file);
    }
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    // let elmnt = document.getElementById("Image")
    // let width = elmnt.clientWidth;
    // let height = elmnt.clientHeight;
    // console.log('pic'+height);
    if (imagePreviewUrl) {
      // if(height>width){
      //   $imagePreview =
      //   (<div className="thumbnail">
      //     <img id='Image' className="portrait" src={imagePreviewUrl} />
      //   </div>)}
      // else{

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
                <Box name="location" size="big" placeholder="ที่อยู่บริษัท" />
                <Detail3>
                  บุคคลติดต่อหลัก
                </Detail3>
                <Box name="hrDetail" size="big" placeholder="บุคคลติดต่อหลัก" />
                <Detail3>
                  เบอร์โทร
                </Detail3>
                <Box
                  name="tel"
                  size="big"
                  placeholder="เบอร์โทร"
                  type="number"
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
                  selection
                  options={BusinessTypes}
                />
                <Detail3>
                  จำนวนพนักงาน
                </Detail3>
                <Dropdown
                  placeholder="จำนวนพนักงาน"
                  onChange={(n, data) =>
                    this.onInputChange(data.value, 'numberOfEmployees')}
                  name="numberOfEmployees"
                  fluid
                  selection
                  options={NumberOfEmployees}
                />
                <Detail3>
                  Broker ที่ใช้ในปัจจุบัน
                </Detail3>
                <Box
                  name="companyBroker"
                  size="big"
                  placeholder="Broker ที่ใช้ในปัจจุบัน"
                />
                <Detail3>
                  บริษัทประกันที่ใช้ในปัจจุบัน
                </Detail3>
                <Box
                  name="companyInsurer"
                  size="big"
                  placeholder="บริษัทประกันที่ใช้ในปัจจุบัน"
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
