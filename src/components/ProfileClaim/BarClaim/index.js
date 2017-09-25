import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import { Box, Pic, TextNav, Number, Detail } from '../../StyleComponent';
import { DivImg } from '../../EmployeeList/styled';
import { Head, DivType, TextType, DivFill, Input, DivList, CircleStatus, DivPic } from '../styled';
import allclaim from '../../../../assets/ProfileClaim/icons-8-documents@2x.png';
import confirm from '../../../../assets/ProfileClaim/icons-8-checked@2x.png';
import waiting from '../../../../assets/ProfileClaim/icons-8-search-filled.png';
import reject from '../../../../assets/ProfileClaim/icons-8-cancel@2x.png';
import pdf from '../../../../assets/EmployeeList/icons-8-pdf.png';
import print from '../../../../assets/EmployeeList/icons-8-print.png';
import Bar from './Bar';

class BarClaim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMonth: true,
      isYear: false,
    };
  }
  styleMonth = () => {
    if (this.state.isMonth) {
      return 'active';
    }
    return '';
  }
  styleYear = () => {
    if (this.state.isYear) {
      return 'active';
    }
    return '';
  }
  handleMonth = () => {
    if (!this.state.isMonth) {
      this.setState({
        isMonth: true,
        isYear: false,
      });
    }
  };
  handleYear = () => {
    if (!this.state.isYear) {
      this.setState({
        isMonth: false,
        isYear: true,
      });
    }
  };

  render() {
    return (
      <div className="profile-claim">
        <div className="row">
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={allclaim} alt="allEmployee" width="29px" height="29px" /></Pic>
              <TextNav>จำนวนการเคลมทั้งหมด</TextNav>
              <Number>1200</Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={confirm} alt="allEmployee" width="29px" height="29px" /></Pic>
              <TextNav>อนุมัติไปแล้ว</TextNav>
              <Number>1200</Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={waiting} alt="allEmployee" width="29px" height="29px" /></Pic>
              <TextNav>กำลังพิจารณา</TextNav>
              <Number>1200</Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={reject} alt="allEmployee" width="29px" height="29px" /></Pic>
              <TextNav>ไม่อนุมัติ</TextNav>
              <Number>1200</Number>
            </Box>
          </div>
        </div>
        <Detail padding="20px 50px">
          <div className="row">
            <div className="large-10 columns">
              <Head>จำนวนการเคลมทั้งหมด</Head>
            </div>
            <div className="large-2 columns">
              <DivPic>
                <DivImg><img src={pdf} alt="pdf" width="18.6px" height="18.6px" /></DivImg>
                <DivImg><img src={print} alt="print" width="18.6px"height="18.6px" /></DivImg>
              </DivPic>
            </div>
          </div>
          <Divider />
          <div className="row">
            <div className="large-8 columns">
              <DivType>
                <div className="large-4 columns">
                  <DivList border="solid 1px #dddddd">
                    <Input type="checkbox" name="gender" value="male" />
                    <TextType><CircleStatus color="#689be3" />ประกันภัย</TextType>
                  </DivList>
                </div>
                <div className="large-4 columns">
                  <DivList border="solid 1px #dddddd">
                    <Input type="checkbox" name="gender" value="male" />
                    <TextType><CircleStatus color="#5daa3f" />ค่าใช้จ่ายสุขภาพ</TextType>
                  </DivList>
                </div>
                <div className="large-4 columns">
                  <DivList>
                    <Input type="checkbox" name="gender" value="male" />
                    <TextType><CircleStatus color="#eb5769" />ค่าใช้จ่ายทั่วไป</TextType>
                  </DivList>
                </div>
              </DivType>
            </div>
            <div className="large-2 large-offset-2 columns">
              <div className="large-6 columns">
                <div className="type">
                  <DivFill className={this.styleMonth()} onClick={this.handleMonth}>เดือน</DivFill>
                </div>
              </div>
              <div className="large-6 columns">
                <div className="type">
                  <DivFill className={this.styleYear()} onClick={this.handleYear}>ปี</DivFill>
                </div>
              </div>
            </div>
          </div>
          <Bar />
        </Detail>
      </div>
    );
  }
}

export default BarClaim;
