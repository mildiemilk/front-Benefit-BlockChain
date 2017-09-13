import React, { Component } from 'react';
import { Divider, Progress } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Detail } from '../../StyleComponent';
import { Status } from '../styled';
import { DivClaim, Head, NumRef, List, ListDetail, Box, DivList, HeadLink, DivInsurance } from './styled';
import health from '../../../../assets/ClaimEmployee/groupHealth.png';
import insurance from '../../../../assets/ClaimEmployee/groupInsurance.png';
import expense from '../../../../assets/ClaimEmployee/groupExpense.png';
import form from '../../../../assets/ClaimEmployee/icons-8-form.png';
import ModalApprove from '../ModalApprove';
import ModalReject from '../ModalReject';

const ProgressStyle = styled(Progress) `
&&&{
    width: 100%;
    margin-top: 10px;
    display: inline-block;
    height: 14px;
    border-radius: 100px;
    margin-bottom: 0px;
}
`;
class ExtendClaim extends Component {
  static propTypes = {
    isHealth: PropTypes.string.isRequired,
    isExpense: PropTypes.string.isRequired,
    isInsurance: PropTypes.string.isRequired,
    handleDetail: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isHealth: props.isHealth,
      isExpense: props.isExpense,
      isInsurance: props.isInsurance,
    };
  }
  handleImage = () => {
    const { isHealth, isExpense, isInsurance } = this.state;
    if (isHealth) {
      return health;
    } else if (isExpense) {
      return expense;
    } else if (isInsurance) {
      return insurance;
    }
    return '';
  }
  handleBar = () => {
    const { isHealth, isExpense, isInsurance } = this.state;
    if (isHealth) {
      return 'green';
    } else if (isExpense) {
      return 'red';
    } else if (isInsurance) {
      return 'blue';
    }
    return '';
  }
  resultClaim = () => (
    <div>
      <DivClaim padding="30px 10px">
        <div className="row">
          <div className="large-8 columns">
            <ListDetail>จำนวนเงินคงเหลือที่เคลมได้</ListDetail>
          </div>
          <div className="large-4 columns">
            <List>11000 บาท</List>
          </div>
        </div>
        <div className="row">
          <div className="large-8 columns">
            <ListDetail>จำนวนเงินที่ขอเคลม</ListDetail>
          </div>
          <div className="large-4 columns">
            <List>540 บาท</List>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="large-8 columns">
            <ListDetail>จำนวนเงินที่เคลมได้</ListDetail>
          </div>
          <div className="large-4 columns">
            <List>540 บาท</List>
          </div>
        </div>
      </DivClaim>
      <div className="row">
        <div className="large-6 columns">
          <ModalReject />
        </div>
        <div className="large-6 columns">
          <ModalApprove />
        </div>
      </div>
    </div>
  )
  resultInsurance = () => (
    <div>
      <DivInsurance>
        <img src={form} alt="form" />
        <ListDetail color="#9b9b9b">ไม่สามารถอนุมัติคำขอนี้ได้</ListDetail>
      </DivInsurance>
    </div>
  )

  render() {
    const { isInsurance } = this.state;
    return (
      <div>
        <HeadLink onClick={this.props.handleDetail}>เคลม/ </HeadLink>
        <HeadLink color="#4990e2">รายการเคลมเลขที่ 00000001</HeadLink>
        <div className="row">
          <div className="large-8 columns">
            <Detail>
              <DivClaim>
                <div className="row">
                  <div className="large-6 columns">
                    <Head>รายละเอียดการเคลม</Head>
                    <NumRef>เลขที่อ้างอิง : 00000001 </NumRef>
                  </div>
                  <div className="large-4 large-offset-2 columns">
                    <Status color="#3a7bd5">รอพิจารณา</Status>
                  </div>
                </div>
                <Divider />
                <div className="row">
                  <div className="large-3 columns">
                    <List>ประเภทการเคลม</List>
                  </div>
                  <div className="large-9 columns">
                    <ListDetail>ประกันภัย</ListDetail>
                    <Divider />
                  </div>
                </div>
                <div className="row">
                  <div className="large-3 columns">
                    <List>เรื่องที่เคลม</List>
                  </div>
                  <div className="large-9 columns">
                    <ListDetail>ค่ารักษาพยาบาลกรณีฉุกเฉิน</ListDetail>
                    <Divider />
                  </div>
                </div>
                <div className="row">
                  <div className="large-3 columns">
                    <List>วันที่</List>
                  </div>
                  <div className="large-9 columns">
                    <ListDetail>12/05/2017</ListDetail>
                    <Divider />
                  </div>
                </div>
                <div className="row">
                  <div className="large-3 columns">
                    <List>สถานที่ใช้บริการ</List>
                  </div>
                  <div className="large-9 columns">
                    <ListDetail>โรงพยาบาลราชวิถี</ListDetail>
                    <Divider />
                  </div>
                </div>
                <div className="row">
                  <div className="large-3 columns">
                    <List>จำนวนที่เคลม</List>
                  </div>
                  <div className="large-9 columns">
                    <ListDetail>540 บาท</ListDetail>
                    <Divider />
                  </div>
                </div>
                <div className="row">
                  <div className="large-3 columns">
                    <List>ธนาคาร</List>
                  </div>
                  <div className="large-9 columns">
                    <ListDetail>กสิกร</ListDetail>
                    <Divider />
                  </div>
                </div>
                <div className="row">
                  <div className="large-3 columns">
                    <List>เลขที่บัญชี</List>
                  </div>
                  <div className="large-9 columns">
                    <ListDetail>1-222-223-44</ListDetail>
                    <Divider />
                  </div>
                </div>
                <div className="row">
                  <div className="large-3 columns">
                    <List>หลักฐานการเคลม</List>
                  </div>
                  <div className="large-9 columns">
                    <ListDetail>กดเ</ListDetail>
                    <Divider />
                  </div>
                </div>
              </DivClaim>
            </Detail>
          </div>
          <div className="large-4 columns">
            <div className="row">
              <Box>
                <img src={this.handleImage()} alt="claim" />
                <DivList>
                  <List>การเคลมค่าใช้จ่ายสุขภาพ</List>
                  <ListDetail>วงเงิน 4000/15000</ListDetail>
                </DivList>
                <div className="Bar">
                  <ProgressStyle size="small" percent={68} className={this.handleBar()} />
                </div>
                {isInsurance
                ? <ListDetail fontSize="12px">*ยังไม่รวมการเคลมกับโรงพยาบาลในเครือข่าย</ListDetail>
                : null
                }
              </Box>
            </div>
            <div className="row">
              <Box>
                <Head>การพิจารณาการเคลมนี้</Head>
                <Divider />
                {isInsurance
                ? this.resultInsurance()
                : this.resultClaim()
                }
              </Box>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExtendClaim;
