import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Modal } from 'semantic-ui-react';
import NotApprove from '../../image/icons-8-cancelRED.png';
import considerHead from '../../image/groupConsider.png';
import approveHead from '../../image/groupApprove.png';
import rejectHead from '../../image/groupReject.png';
import NewClaim from './CreateNewclaim';
import receipt1 from '../../image/receipt.jpg';
import receipt2 from '../../image/receipt2.jpg';
import Zoomglass from '../../image/icons-8-zoom-in.png';

class ClaimStatusDetail extends Component {
  static propTypes = {
    claimdata: PropTypes.shape({}).isRequired,
    id: PropTypes.number.isRequired,
    handleToggleViewDetail: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeadpic = () => {
    const { claimdata } = this.props;
    if (claimdata.status === 'pending') {
      return (
        <img
          className="Headpic"
          src={considerHead}
          alt="Headpic"
        />
      );
    }
    if (claimdata.status === 'approve') {
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
    const { claimdata } = this.props;
    if (claimdata.status === 'pending') {
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
    if (claimdata.status === 'approve') {
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

  renderType = () => {
    const { claimdata } = this.props;
    let list;
    if (claimdata.type === 'insurance') {
      list = (
        <span className="Detail">
          <span className="Detail">ประเภทการเคลม : ประกันภัย </span>
          <span className="Detail">เรื่องที่เคลม : {claimdata.InsuranceType}</span>
        </span>
      );
    }
    if (claimdata.type === 'general') {
      list = (
        <span className="Detail">
          <span className="Detail">ประเภทการเคลม : ค่าใช้จ่ายทั่วไป </span>
          <span className="Detail">เรื่องที่เคลม : {claimdata.expenseType} </span>
        </span>
      );
    }
    if (claimdata.type === 'health') {
      list = (
        <span className="Detail">
          <span className="Detail">ประเภทการเคลม : สุขภาพ </span>
          <span className="Detail">เรื่องที่เคลม : {claimdata.HealthType}</span>
        </span>
      );
    }
    return list;
  }

  renderRejectReason = () => {
    const { claimdata } = this.props;
    if (claimdata.status === 'reject') {
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
          {this.renderNewclaim()}
        </div>
      );
    }
    return '';
  }

  renderNewclaim = () => {
    const { claimdata } = this.props;
    if (claimdata.type === 'insurance') {
      return (
        <div>
          <div className="BodyDiv margin">
            <h className="HeadReason black">เคลมอีกครั้ง</h>
          </div>
          <NewClaim
            oldClaimData={claimdata}
          />
        </div>
      );
    }
    return '';
  }

  render() {
    const { claimdata, id } = this.props;
    return (
      <div className="ClaimStatusDetail">
        <div className="MarginDiv">
          <div className="row">
            <div className="small-10 small-centered columns">
              <p className="ClaimNumber">
                {' '}สถานะการเคลม &gt; เลขที่ {claimdata.number}{' '}
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
                  {this.renderType()}
                  <span className="Detail"> วันที่เคลม : {claimdata.date} </span>
                  <span className="Detail">
                    สถานที่ : {
                      claimdata.type === 'insurance'
                      ? claimdata.Hospital
                      : claimdata.HealthPlace
                    }
                  </span>
                  <span className="Detail"> ผู้เคลม : {claimdata.ChooseEmployeeName} </span>
                  <span className="Detail"> จำนวนเงิน : {claimdata.AmountMoney} บาท </span>
                  {
                    claimdata.type === 'insurance'
                    ? <span className="Detail"> ธนาคาร : {claimdata.BankName} </span>
                    : <div />
                  }
                  {
                    claimdata.type === 'insurance'
                    ? <span className="Detail"> เลขที่บัญชี : {claimdata.AccountNumber} </span>
                    : <div />
                  }
                </div>
                <div className="receiptDiv">
                  <Modal
                    trigger={
                      <div>
                        <img
                          src={receipt1}
                          alt="receipt"
                          className="receiptImg"
                        />
                        <img src={Zoomglass} alt="zoom" className="Zoomglass" />
                      </div>
                      }
                    content={
                      <img
                        src={receipt1}
                        alt="receipt"
                        style={{ height: '250px', width: '100%' }}
                      />
                    }
                  />
                  <Modal
                    trigger={
                      <div>
                        <img
                          src={receipt2}
                          alt="receipt"
                          className="receiptImg left"
                        />
                        <img src={Zoomglass} alt="zoom" className="Zoomglass zleft" />
                      </div>
                      }
                    content={
                      <img
                        src={receipt2}
                        alt="receipt"
                        className="modalpic"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {this.renderRejectReason()}
          <div className="DivBack">
            <u
              className="BackButton"
              role="button"
              aria-hidden
              onClick={() =>
              this.props.handleToggleViewDetail(id)}
            >
              &lt; ย้อนกลับ
            </u>
          </div>
        </div>
      </div>
    );
  }
}

export default ClaimStatusDetail;
