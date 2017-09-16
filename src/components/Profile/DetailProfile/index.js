import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import { Detail, Button } from '../../StyleComponent';
import { TextBox } from '../styled';
import { DefaultImg, Upload, Input, HeadProfile, InputBox, DetailProfile } from '../../EmployeeList/AddEmployee/styled';
import add from '../../../../assets/EmployeeList/icons-8-add.png';

const Dropdowns = styled(Dropdown)`
&&&{
  height: 40px;
  width: 100%;
  margin-top: 10px;
}
`;

const options = [
  { key: 1, text: '1-100', value: 1 },
  { key: 2, text: '200-500', value: 2 },
  { key: 3, text: '500-1000', value: 3 },
];

class ProfileDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
    };
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
  // styleUpload = () => {
  //   const { imagePreviewUrl } = this.state;
  //   if (imagePreviewUrl) {
  //     return 'hidden';
  //   }
  //   return '';
  // }
  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    $imagePreview = (
      <div className="setting-profile">
        <div className="thumbnail addEmployee">
          {imagePreviewUrl
          ? <img src={imagePreviewUrl} alt="imageCompany" />
          : <DefaultImg />
          }
          <Upload for="buttonImg">
            <div>
              <img src={add} className="no-thumbnail"alt="add" width="22" height="22" />
            </div>
            <div>อัพโหลดรูปภาพ</div>
            <Input
              id="buttonImg"
              type="file"
              onChange={e => this._handleImageChange(e)}
            />
          </Upload>
        </div>
      </div>
    );
    return (
      <div>
        <Detail padding="30px">
          <div className="row">
            <div className="large-3 columns">
              {$imagePreview}
            </div>
            <div className="large-9 columns">
              <DetailProfile>
                <div className="row">
                  <div className="large-4 columns">
                    <HeadProfile>เกี่ยวกับบริษัท</HeadProfile>
                  </div>
                  <div className="large-8 columns">
                    <TextBox />
                  </div>
                </div>
                <div className="row">
                  <div className="large-4 columns">
                    <HeadProfile>ที่อยู่บริษัท</HeadProfile>
                  </div>
                  <div className="large-8 columns">
                    <InputBox />
                  </div>
                </div>
                <div className="row">
                  <div className="large-4 columns">
                    <HeadProfile>ทะเบียนบริษัท</HeadProfile>
                  </div>
                  <div className="large-8 columns">
                    <InputBox />
                  </div>
                </div>
                <div className="row">
                  <div className="large-4 columns">
                    <HeadProfile>เว็บไซต์บริษัท</HeadProfile>
                  </div>
                  <div className="large-8 columns">
                    <InputBox />
                  </div>
                </div>
                <div className="row">
                  <div className="large-4 columns">
                    <HeadProfile>เบอร์โทรศัพท์</HeadProfile>
                  </div>
                  <div className="large-8 columns">
                    <InputBox />
                  </div>
                </div>
                <div className="row">
                  <div className="large-4 columns">
                    <HeadProfile>E-mail</HeadProfile>
                  </div>
                  <div className="large-8 columns">
                    <InputBox />
                  </div>
                </div>
                <div className="row">
                  <div className="large-4 columns">
                    <HeadProfile>fax</HeadProfile>
                  </div>
                  <div className="large-8 columns">
                    <InputBox />
                  </div>
                </div>
                <div className="row">
                  <div className="large-4 columns">
                    <HeadProfile>บุคคลติดต่อหลัก</HeadProfile>
                  </div>
                  <div className="large-8 columns">
                    <InputBox />
                  </div>
                </div>
                <div className="row">
                  <div className="large-4 columns">
                    <HeadProfile>ประเภทธุรกิจ</HeadProfile>
                  </div>
                  <div className="large-8 columns">
                    <Dropdowns placeholder="ประเภทธุรกิจ" options={options} compact selection />
                  </div>
                </div>
                <div className="row">
                  <div className="large-4 columns">
                    <HeadProfile>จำนวนพนักงาน</HeadProfile>
                  </div>
                  <div className="large-8 columns">
                    <Dropdowns placeholder="จำนวนพนักงาน" options={options} compact selection />
                  </div>
                </div>
                <div className="row">
                  <div className="large-4 columns">
                    <HeadProfile>บริษัทประกันที่ใช้ในปัจจุบัน</HeadProfile>
                  </div>
                  <div className="large-8 columns">
                    <InputBox />
                  </div>
                </div>
              </DetailProfile>
            </div>
          </div>
        </Detail>
        <div className="large-3 large-offset-9 columns">
          <Button margin="0px 0px 21px 0px">บันทึก</Button>
        </div>
      </div>
    );
  }
}
export default ProfileDetail;
