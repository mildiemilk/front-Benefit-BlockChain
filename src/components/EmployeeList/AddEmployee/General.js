import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import { DetailProfile, Profile, TextProfile, InputBox, InputForm, DefaultImg, Upload, Input } from './styled';
import add from '../../../../assets/EmployeeList/icons-8-add.png';
import InputDate from '../../InputDate';

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
  { key: 1, text: 'นาย', value: 1 },
  { key: 2, text: 'นาง', value: 2 },
  { key: 3, text: 'นางสาว', value: 3 },
];

class General extends Component {
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
  styleUpload = () => {
    const { imagePreviewUrl } = this.state;
    if (imagePreviewUrl) {
      return 'hidden';
    }
    return '';
  }
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
          <Upload className={this.styleUpload()} for="buttonImg">
            <div>
              <Img src={add} className="no-thumbnail" alt="add" width="22" height="22" />
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
      <Profile>
        <div className="row">
          <div className="large-3 columns">
            {$imagePreview}
          </div>
          <div className="large-9 columns">
            <DetailProfile>
              <div className="row">
                <div className="large-2 columns">
                  <TextProfile>คำนำหน้า</TextProfile>
                  <Dropdowns placeholder="คำนำหน้า" options={options} compact selection />
                </div>
                <div className="large-3 columns">
                  <TextProfile>ชื่อ</TextProfile>
                  <InputBox />
                </div>
                <div className="large-3 columns">
                  <TextProfile>นามสกุล</TextProfile>
                  <InputBox />
                </div>
                <div className="large-4 columns">
                  <TextProfile>เพศ</TextProfile>
                  <div className="large-6 columns">
                    <InputForm type="radio" name="gender" value="male" /> ชาย
                  </div>
                  <div className="large-6 columns">
                    <InputForm type="radio" name="gender" value="female" /> หญิง
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>เลขบัตรประชาชน/หนังสือเดินทาง</TextProfile>
                  <InputBox />
                </div>
                <div className="large-6 columns">
                  <TextProfile>สัญชาติ</TextProfile>
                  <InputBox />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>วันเกิด</TextProfile>
                  <div className="input-date margin">
                    <InputDate />
                  </div>
                </div>
                <div className="large-6 columns">
                  <TextProfile>รหัสพนักงาน</TextProfile>
                  <InputBox />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>หมายเลขกรมธรรม์</TextProfile>
                  <InputBox />
                </div>
                <div className="large-6 columns">
                  <TextProfile>รหัสสมาชิกกรมธรรม์</TextProfile>
                  <InputBox />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>กลุ่มสิทธิประโยชน์</TextProfile>
                  <InputBox />
                </div>
                <div className="large-6 columns">
                  <TextProfile>แผนสิทธิประโยชน์</TextProfile>
                  <InputBox />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>กลุ่มสิทธิประโยชน์</TextProfile>
                  <InputBox />
                </div>
                <div className="large-6 columns">
                  <TextProfile>แผนสิทธิประโยชน์</TextProfile>
                  <InputBox />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>ตำแหน่ง</TextProfile>
                  <InputBox />
                </div>
                <div className="large-6 columns">
                  <TextProfile>แผนก</TextProfile>
                  <InputBox />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>ประเภทของพนักงาน</TextProfile>
                  <InputBox />
                </div>
                <div className="large-6 columns">
                  <TextProfile>Email</TextProfile>
                  <InputBox />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>เลขบัญชีเงินเดือน</TextProfile>
                  <InputBox />
                </div>
                <div className="large-6 columns">
                  <TextProfile>บัญชีของธนาคาร</TextProfile>
                  <InputBox />
                </div>
              </div>
              <div className="row">
                <div className="large-6 columns">
                  <TextProfile>วันเริ่มงาน</TextProfile>
                  <div className="input-date margin">
                    <InputDate />
                  </div>
                </div>
                <div className="large-6 columns">
                  <TextProfile>วันสิ้นสุดการทำงาน</TextProfile>
                  <div className="input-date margin">
                    <InputDate disabled />
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
