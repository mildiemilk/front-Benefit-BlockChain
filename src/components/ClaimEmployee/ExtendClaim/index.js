import React, { Component } from 'react';
import { Divider, Progress, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Detail } from '../../StyleComponent';
import { Status } from '../styled';
import { DivClaim, Head, NumRef, List, ListDetail, Box, DivList, HeadLink, DivInsurance, DisPlayResult } from './styled';
import health from '../../../../assets/ClaimEmployee/groupHealth.png';
import insurance from '../../../../assets/ClaimEmployee/groupInsurance.png';
import expense from '../../../../assets/ClaimEmployee/groupExpense.png';
import form from '../../../../assets/ClaimEmployee/icons-8-form.png';
import ModalApprove from '../ModalApprove';
import ModalReject from '../ModalReject';
import IconZoom from '../../../../assets/employee/icon_zoom.png';
import approve from '../../../../assets/ProfileClaim/icons-8-approve@2x.png';
import reject from '../../../../assets/ProfileClaim/icons-8-reject@2x.png';

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
    checkResult: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isHealth: props.isHealth,
      isExpense: props.isExpense,
      isInsurance: props.isInsurance,
      isResult: false,
      modalImg: '',
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
  handleViewImg = claimdata => {
    const image = claimdata.imageClaimFile.urlImg.map((item, i) => (
      <div
        className="claim-img-block"
        key={i.toString()}
        onClick={() => this.handleOpenModal(item)}
        role="button"
        aria-hidden
      >
        <img alt="" src={item} className="claim-img" />
        <img alt="" src={IconZoom} className="calim-img-icon-zoom" />
      </div>
    ));
    return image;
  }
  handleOpenModal = item => this.setState({ openModal: true, modalImg: item });
  handleCloseModal = () => this.setState({ openModal: false, modalImg: '' });
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
  resultClaim = (cost, currency, status, reason) => {
    const { claimList, index, indexDetail } = this.props;
    const result = (
      <div>
        <DivClaim padding="30px 10px" >
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
        <DisPlayResult>
          {status === 'pending'
          ? <div className="row">
            <div className="large-6 columns">
              <ModalReject
                claimId={claimList.claims[index].claims[indexDetail].claimId}
                checkResult={this.props.checkResult}
              />
            </div>
            <div className="large-6 columns">
              <ModalApprove
                claimId={claimList.claims[index].claims[indexDetail].claimId}
                checkResult={this.props.checkResult}
              />
            </div>
          </div>
          : null
          }
          {status === 'approve'
          ? <div><img src={approve} alt="form" />
            <ListDetail color="#9b9b9b">อนุมัติแล้ว</ListDetail>
          </div>
          : null
          }
          {status === 'reject'
          ? <div><img src={reject} alt="form" />
            <ListDetail color="#9b9b9b">ไม่อนุมัติ</ListDetail>
            <div>เหตุผล {reason}</div>
          </div>
          : null
          }
        </DisPlayResult>
      </div>
    );
    return result;
  }

  resultInsurance = (status, reason) => (
    <div>
      <DivInsurance>
        {status === 'pending'
        ? <div><img src={form} alt="form" />
          <ListDetail color="#9b9b9b">ไม่สามารถอนุมัติคำขอนี้ได้</ListDetail>
        </div>
        : null
        }
        {status === 'approve'
        ? <div><img src={approve} alt="form" />
          <ListDetail color="#9b9b9b">อนุมัติแล้ว</ListDetail>
        </div>
        : null
        }
        {status === 'reject'
        ? <div><img src={reject} alt="form" />
          <ListDetail color="#9b9b9b">ไม่อนุมัติ</ListDetail>
          <div>เหตุผล {reason}</div>
        </div>
        : null
        }
      </DivInsurance>
    </div>
  )
  showProcess = (cost, currency, status, reason) => (
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
        <Box style={{ minHeight: '417px' }}>
          <Head>การพิจารณาการเคลมนี้</Head>
          <Divider />
          {this.state.isInsurance
          ? this.resultInsurance(status, reason)
          : this.resultClaim(cost, currency, status, reason)
          }
        </Box>
      </div>
    </div>
  )
  renderDetail() {
    const { isInsurance } = this.state;
    const { claimList, index, indexDetail } = this.props;
    if (claimList.claims !== undefined && claimList.claims.length >= 1) {
      const claim = claimList.claims[index].claims[indexDetail];
      let type;
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
                      <ListDetail>
                        {this.handleViewImg(claim.detail)}
                      </ListDetail>
                      <Divider />
                    </div>
                  </div>
                </DivClaim>
              </Detail>
            </div>
            {this.showProcess(claim.detail.amount,
            claim.detail.currency, claim.status, claim.reason)}
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
        <Modal
          open={this.state.openModal}
          onClose={this.handleCloseModal}
          className="claim-modal-box"
        >
          <img alt="" className="claim-img-modal-img" src={this.state.modalImg} />
        </Modal>
      </div>
    );
  }
}

export default ExtendClaim;
