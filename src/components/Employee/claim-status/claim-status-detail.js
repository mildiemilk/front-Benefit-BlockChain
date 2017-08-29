import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import NotApprove from '../../image/icons-8-cancelRED.png';
import considerHead from '../../image/groupConsider.png';
import approveHead from '../../image/groupApprove.png';
import rejectHead from '../../image/groupReject.png';
import NewClaim from './CreateNewclaim';

class ClaimStatusDetail extends Component {
  static propTypes = {
    claimdata: PropTypes.shape.isRequired,
    id: PropTypes.number.isRequired,
    handleToggleViewDetail: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {};
  }

  renderHeadpic = () => {
    if (this.props.claimdata.status === 'consider') {
      return (
        <img
          className="Headpic"
          src={considerHead}
          alt="Headpic"
        />
      );
    }
    if (this.props.claimdata.status === 'approve') {
      return (
        <img
          className="Headpic"
          src={approveHead}
          alt="Hourglass Icon"
        />
      );
    }
    return (
      <img
        className="Headpic"
        src={rejectHead}
        alt="Hourglass Icon"
      />
    );
  }

  renderHeadStatus = () => {
    if (this.props.claimdata.status === 'consider') {
      return (
        <div>
          <img
            className="StatusImg"
            src="../../../../employee/claimdetail/icons-8-hourglass@2x.png"
            alt="Hourglass Icon"
          />
          <span className="Header Blue"> กำลังพิจารณา </span>
        </div>
      );
    }
    if (this.props.claimdata.status === 'approve') {
      return (
        <div>
          <Icon
            size="big"
            name="check circle outline"
            className="StatusImg"
            color="blue"
          />
          <span className="Header Green"> อนุมัติ </span>
        </div>
      );
    }
    return (
      <div>
        <img
          src={NotApprove}
          alt="Black X check"
          className="StatusImg"
        />
        <span className="Header Red"> ไม่อนุมัติ </span>
      </div>
    );
  }


  renderType = claim => {
    let list;
    if (claim.type === 'insurance') {
      list = (
        <span className="Detail">
          <span className="Detail">ประเภทการเคลม : ประกันภัย </span>
          <span className="Detail">เรื่องที่เคลม : {claim.InsuranceType}</span>
        </span>
      );
    }
    if (claim.type === 'generalEx') {
      list = (
        <span className="Detail">
          <span className="Detail">ประเภทการเคลม : ค่าใช้จ่ายทั่วไป </span>
          <span className="Detail">เรื่องที่เคลม :{claim.expenseType} </span>
        </span>
      );
    }
    if (claim.type === 'health') {
      list = (
        <span className="Detail">
          <span className="Detail">ประเภทการเคลม : สุขภาพ </span>
          <span className="Detail">เรื่องที่เคลม : {claim.HealthType}</span>
        </span>
      );
    }
    return list;
  }

  renderRejectReason = claim => {
    if (claim.status === 'reject') {
      return (
        <div>
          <div className="BodyDiv margin">
            <h className="HeadReason">เหตุผลที่ไม่ผ่านการอนุมัติ</h>
            <ul className="Reasontext">
              <li>จำนวนเงินเกินกว่าที่จะเคลมได้</li>
              <li>ไม่อนุญาติให้ผู้ถือประกันได้สิทธ์ในการคุ้มครอง</li>
              <li>Milk48</li>
            </ul>
          </div>
          {this.renderNewclaim(claim)}
        </div>
      );
    }
    return '';
  }
  renderNewclaim = claim => {
    if (claim.type === 'insurance') {
      return (
        <div>
          <div className="BodyDiv margin">
            <h className="HeadReason black">เคลมอีกครั้ง</h>
          </div>
          <NewClaim
            oldClaimData={this.props.claimdata}
          />
        </div>
      );
    }
    return '';
  }

  render() {
    const claim = this.props.claimdata;
    return (
      <div className="ClaimStatusDetail">
        <div className="MarginDiv">
          <div className="row">
            <div className="small-10 small-centered columns">
              <p className="ClaimNumber">
                {' '}สถานะการเคลม &gt; เลขที่ {claim.number}{' '}
              </p>
            </div>
          </div>
          {this.renderHeadpic()}
          <div className="row">
            <div className="BodyDiv">
              <div className="small-10 small-centered columns">
                <div className="DivImg">
                  {this.renderHeadStatus()}
                </div>

                <div className="DivDetail">
                  {this.renderType(claim)}
                  <span className="Detail"> วันที่เคลม : {claim.date} </span>
                  <span className="Detail"> สถานที่ : {claim.Hospital} </span>
                  <span className="Detail"> ผู้เคลม : {claim.ChooseEmployeeName} </span>
                  <span className="Detail"> จำนวนเงิน : {claim.AmountMoney} บาท </span>
                  <span className="Detail"> ธนาคาร : {claim.BankName} </span>
                  <span className="Detail"> เลขที่บัญชี : {claim.AccountNumber} </span>
                </div>
              </div>
            </div>
          </div>
          {this.renderRejectReason(claim)}
          <div className="DivBack">
            <u
              className="BackButton"
              role="button"
              aria-hidden
              onClick={() =>
              this.props.handleToggleViewDetail(this.props.id)}
            >
              &lt; ย้อนกลับ
            </u>
          </div>
        </div>
      </div>
    );
  }
}

ClaimStatusDetail.propTypes = {};

export default ClaimStatusDetail;
