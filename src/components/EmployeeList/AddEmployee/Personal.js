import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PersonalDiv, TextProfile, InputBox, HeadProfile, AddDetail } from './styled';
import InputDate from '../../InputDate';

const Dropdowns = styled(Dropdown)`
&&&{
  height: 40px;
  width: 100%;
  margin-top: 10px;
}
`;

const status = [
  { key: 1, text: 'โสด', value: 1 },
  { key: 2, text: 'สมรส', value: 2 },
  { key: 3, text: 'หย่าร้าง', value: 3 },
];
const prefix = [
  { key: 1, text: 'นาย', value: 1 },
  { key: 2, text: 'นาง', value: 2 },
  { key: 3, text: 'นางสาว', value: 3 },
];

class Personal extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      numOfContent: 2,
    };
  }

  handleDetail = () => {
    const add = this.state.numOfContent + 1;
    this.setState({
      numOfContent: add,
    });
  }
  addContent = () => {
    const { numOfContent } = this.state;
    const result = [];
    let i = 0;
    for (i = 0; i < numOfContent; i += 1) {
      result.push(
        <div className="row">
          <div className="large-2 columns">
            <Dropdowns placeholder="คำนำหน้า" options={prefix} compact selection />
          </div>
          <div className="large-2 columns">
            <InputBox />
          </div>
          <div className="large-2 columns">
            <InputBox />
          </div>
          <div className="large-3 columns">
            <div className="input-date margin">
              <InputDate />
            </div>
          </div>
          <div className="large-3 columns">
            <div className="input-date margin">
              <InputDate />
            </div>
          </div>
        </div>,
      );
    }
    return result;
  }

  render() {
    const { data } = this.props
    return (
      <PersonalDiv>
        <div className="row">
          <div className="large-6 columns">
            <TextProfile>ที่อยู่ปัจจุบัน</TextProfile>
            <InputBox
              name="address"
              required
              onChange={this.props.handleInputChange} value={data.address}
            />
          </div>
          <div className="large-6 columns">
            <TextProfile>E-mail ส่วนตัว</TextProfile>
            <InputBox
              name="personalEmail"
              required
              onChange={this.props.handleInputChange} value={data.personalEmail}
            />
          </div>
        </div>
        <div className="row">
          <div className="large-6 columns">
            <TextProfile>สถานภาพสมรส</TextProfile>
            <Dropdowns
              placeholder="สถานะ" options={status} compact selection
              onChange={this.props.handleChange} name="marriageStatus"
            />
          </div>
          <div className="large-6 columns">
            <TextProfile>เบอร์โทรศัพท์ส่วนตัว</TextProfile>
            <InputBox
              name="phoneNumber"
              required
              onChange={this.props.handleInputChange} value={data.phoneNumber}
            />
          </div>
        </div>
        <HeadProfile>สมาชิกในครอบครัว</HeadProfile>
        <div className="row">
          <div className="large-2 columns">
            <TextProfile>คำนำหน้า</TextProfile>
          </div>
          <div className="large-2 columns">
            <TextProfile>ชื่อ:</TextProfile>
          </div>
          <div className="large-2 columns">
            <TextProfile>นามสกุล:</TextProfile>
          </div>
          <div className="large-3 columns">
            <TextProfile>วันเกิด:</TextProfile>
          </div>
          <div className="large-3 columns">
            <TextProfile>ความสัมพันธ์:</TextProfile>
          </div>
        </div>
        {this.addContent()}
        <AddDetail onClick={this.handleDetail}> + เพิ่มสมาชิกในครอบครัว </AddDetail>
      </PersonalDiv>
    );
  }
}

export default Personal;
