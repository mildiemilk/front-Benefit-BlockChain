import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Container } from 'semantic-ui-react';
import { Button, Icon } from 'semantic-ui-react';
import {
  HeadContentBox,
  SubContentBox,
  RightBox,
  DividerSubBox,
  InputStyle,
  DataBox,
} from './styled';

class FirstRightElement extends Component {
  static propTypes = {
    handleTogleFirstTap: PropTypes.func.isRequired,
    handleChangePassWord: PropTypes.func.isRequired,
    FirstTap: PropTypes.bool.isRequired,
    SamePass: PropTypes.bool.isRequired,
  }
  constructor() {
    super();
    this.state = {
      Wordpass: '',
      WordNewpass: '',
      WordreNewpass: '',

    };
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleChangePassWord = (pass, Newpass, reNewpass) => {
    if (pass === this.state.Password) {
      if (Newpass === reNewpass) {
        this.setState({
          Password: Newpass,
        });
      } else {
        this.setState({
          SamePass: false,
        });
      }
    }
  }

  renderCorectPass = () => {
    if (this.props.SamePass === false) {
      return (
        <span className="setting incorectPass">
          รหัสผ่านไม่ตรงกัน
        </span>
      );
    }
    return ('');
  }


  renderFirstTap = () => {
    const { Wordpass, WordNewpass, WordreNewpass } = this.state;
    if (this.props.FirstTap === true) {
      return (
        <HeadContentBox className="setting">
          <div className="row">
            <SubContentBox
              className="large-10 columns"
            >
              <Icon name="key" /> &nbsp;
              เปลี่ยนรหัสผ่าน
            </SubContentBox>
            <div className="large-2 columns">
              <RightBox onClick={() => this.props.handleTogleFirstTap()} >
               ปิด
              </RightBox>
            </div>
          </div>
          <DividerSubBox />
          <div style={{ padding: '0px 40px' }} >
            <DataBox>
              รหัสผ่านปัจจุบัน
            </DataBox>
            <InputStyle
              placeholder="กรอกรหัสผ่านปัจจุบัน"
              type="password"
              name="Wordpass"
              onChange={this.handleChange}
            />
            <DataBox>
              รหัสผ่านใหม่
            </DataBox>
            <InputStyle
              placeholder="กรอกรหัสผ่านใหม่"
              type="password"
              name="WordNewpass"
              onChange={this.handleChange}
            />
            <DataBox>
              รหัสผ่านใหม่อีกครั้ง
            </DataBox>
            <InputStyle
              placeholder="กรอกรหัสผ่านใหม่อีกครั้ง"
              type="password"
              name="WordreNewpass"
              onChange={this.handleChange}
            />
            {this.renderCorectPass()}
            <DataBox className="enddata">
              ลืมรหัสผ่าน
            </DataBox>
            <Button
              className="Summit left"
              onClick={() => this.props.handleChangePassWord(Wordpass, WordNewpass, WordreNewpass)}
            >
              บันทึก</Button>
          </div>
        </HeadContentBox>
      );
    }


    return (
      <div className="row">
        <SubContentBox
          className="large-10 columns"
        >
          <Icon name="key" /> &nbsp;
          เปลี่ยนรหัสผ่าน
        </SubContentBox>
        <div className="large-2 columns">
          <RightBox onClick={() => this.props.handleTogleFirstTap()} >
            แก้ใข
          </RightBox>
        </div>
      </div>
    );
  }


  render() {
    return (
      <div>
        {this.renderFirstTap()}
      </div>
    );
  }
}

export default FirstRightElement;
