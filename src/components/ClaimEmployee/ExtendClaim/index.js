import React, { Component } from 'react';
import { Divider, Progress } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
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
    isHealth: PropTypes.bool.isRequired,
    isExpense: PropTypes.bool.isRequired,
    isInsurance: PropTypes.bool.isRequired,
    handleDetail: PropTypes.func.isRequired,
    claimList: PropTypes.shape({}).isRequired,
    index: PropTypes.number.isRequired,
    indexDetail: PropTypes.number.isRequired,
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
  resultClaim = (cost, currency) => (
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
            <List> {cost} {currency}</List>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="large-8 columns">
            <ListDetail>จำนวนเงินที่เคลมได้</ListDetail>
          </div>
          <div className="large-4 columns">
            <List>4000 บาท</List>
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
  showProcess = (cost, currency) => (
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
          {this.state.isInsurance
          ? <ListDetail fontSize="12px">*ยังไม่รวมการเคลมกับโรงพยาบาลในเครือข่าย</ListDetail>
          : null
          }
        </Box>
      </div>
      <div className="row">
        <Box>
          <Head>การพิจารณาการเคลมนี้</Head>
          <Divider />
          {this.state.isInsurance
          ? this.resultInsurance()
          : this.resultClaim(cost, currency)
          }
        </Box>
      </div>
    </div>
  )
  renderDetail() {
    const { isInsurance } = this.state;
    const { claimList, index, indexDetail } = this.props;
    console.log('props--//', this.props.claimList);
    if (claimList.claims !== undefined && claimList.claims.length >= 1) {
      console.log('claim', claimList.claims[index].claims[indexDetail], 'indexDetail', indexDetail);
      const claim = claimList.claims[index].claims[indexDetail];
      let type;
      console.log('///index', index);
      if (index === 0) {
        type = 'ค่าใช้จ่ายทั่วไป';
      } else if (index === 1) {
        type = 'ค่าใช้จ่ายสุขภาพ';
      } else {
        type = 'ประกันภัย';
      }
      let tag;
      if (claim.status === 'pending') {
        tag = <Status color="#3a7bd5">รอพิจารณา</Status>;
      } else if (claim.status === 'approve') {
        tag = <Status color="#46b3b8">อนุมัติ</Status>;
      } else {
        tag = <Status color="#f7555f">ไม่อนุมัติ</Status>;
      }
      console.log('<---claim--->', claim);
      return (
        <div>
          <HeadLink onClick={this.props.handleDetail}>เคลม/ </HeadLink>
          <HeadLink color="#4990e2">รายการเคลมเลขที่ {claim.claimNumber}</HeadLink>
          <div className="row">
            <div className="large-8 columns">
              <Detail>
                <DivClaim>
                  <div className="row">
                    <div className="large-6 columns">
                      <Head>รายละเอียดการเคลม</Head>
                      <NumRef>เลขที่อ้างอิง : {claim.claimNumber} </NumRef>
                    </div>
                    <div className="large-4 large-offset-2 columns">
                      {tag}
                    </div>
                  </div>
                  <Divider />
                  <div className="row">
                    <div className="large-3 columns">
                      <List>ประเภทการเคลม</List>
                    </div>
                    <div className="large-9 columns">
                      <ListDetail>{type}</ListDetail>
                      <Divider />
                    </div>
                  </div>
                  <div className="row">
                    <div className="large-3 columns">
                      <List>เรื่องที่เคลม</List>
                    </div>
                    <div className="large-9 columns">
                      <ListDetail>{claim.detail.title}</ListDetail>
                      <Divider />
                    </div>
                  </div>
                  <div className="row">
                    <div className="large-3 columns">
                      <List>วันที่</List>
                    </div>
                    <div className="large-9 columns">
                      <ListDetail>{moment(claim.detail.date)
                    .locale('th')
                    .format('DD MMMM YYYY')}</ListDetail>
                      <Divider />
                    </div>
                  </div>
                  <div className="row">
                    <div className="large-3 columns">
                      <List>สถานที่ใช้บริการ</List>
                    </div>
                    <div className="large-9 columns">
                      <ListDetail>{claim.detail.location}</ListDetail>
                      <Divider />
                    </div>
                  </div>
                  <div className="row">
                    <div className="large-3 columns">
                      <List>จำนวนเงินที่เคลม</List>
                    </div>
                    <div className="large-9 columns">
                      <ListDetail>{claim.detail.amount} {claim.detail.currency}</ListDetail>
                      <Divider />
                    </div>
                  </div>
                  {isInsurance
                    ? <div>
                      <div className="row">
                        <div className="large-3 columns">
                          <List>ธนาคาร</List>
                        </div>
                        <div className="large-9 columns">
                          <ListDetail>{claim.detail.bank}</ListDetail>
                          <Divider />
                        </div>
                      </div>
                      <div className="row">
                        <div className="large-3 columns">
                          <List>เลขที่บัญชี</List>
                        </div>
                        <div className="large-9 columns">
                          <ListDetail>{claim.detail.bankAccountNumber}</ListDetail>
                          <Divider />
                        </div>
                      </div>
                    </div>
                  : null
                  }
                  <div className="row">
                    <div className="large-3 columns">
                      <List>หลักฐานการเคลม</List>
                    </div>
                    <div className="large-9 columns">
                      <ListDetail>รูปๆๆ</ListDetail>
                      <Divider />
                    </div>
                  </div>
                </DivClaim>
              </Detail>
            </div>
            {this.showProcess(claim.detail.amount, claim.detail.currency)}
          </div>
        </div>
      );
    }
    return '';
  }
  render() {
    return (
      <div>
        {this.renderDetail()};
      </div>
    );
  }
}

export default ExtendClaim;
