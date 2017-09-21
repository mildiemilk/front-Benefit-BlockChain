import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import NotApprove from '../../image/icons-8-cancel.png';
import Hourglass from '../../image/hourglass.png';

class ClaimStatusBox extends Component {
  static propTypes = {
    claimdata: PropTypes.shape({}).isRequired,
    id: PropTypes.number.isRequired,
    handleToggleViewDetail: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderStatusHead = () => {
    const { claimdata } = this.props;
    let listRender;
    const style = {
      paddingLeft: '0px',
      paddingRight: '0px',
    };
    if (claimdata.status === 'reject') {
      listRender = (
        <div className="red-claim-box-header">
          <div className="row">
            <div className="small-1 columns">
              <img
                src={NotApprove}
                alt="Black X check"
                className="claim-image"
              />
            </div>
            <div
              className="small-11 columns"
              style={style}
            >
              <span className="header-text-status">ไม่อนุมัติ </span>
              <span className="no-text-status">
                no.{claimdata.number}
              </span>
            </div>
          </div>
        </div>
      );
    }
    if (claimdata.status === 'approve') {
      listRender = (
        <div className="green-claim-box-header">
          <div className="row">
            <div className="small-1 columns">
              <Icon
                inverted
                size="big"
                name="check circle outline"
                className="claim-image"
              />
            </div>
            <div
              className="small-11 columns"
              style={style}
            >
              <span className="header-text-status">อนุมัติ </span>
              <span className="no-text-status">no.
                {claimdata.number}
              </span>
            </div>
          </div>
        </div>
      );
    }
    if (claimdata.status === 'pending') {
      listRender = (
        <div className="blue-claim-box-header">
          <div className="row">
            <div className="small-1 columns">
              <img
                src={Hourglass}
                alt="Blue Hourglass"
                className="claim-image"
              />
            </div>
            <div
              className="small-11 columns"
              style={style}
            >
              <span className="header-text-status">กำลังพิจารณา</span>
              <span className="no-text-status">
                no. {claimdata.number}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return listRender;
  }

  renderType = () => {
    const { claimdata } = this.props;
    let list;
    if (claimdata.type === 'insurance') {
      list = (
        <span>
          <p>ประเภทการเคลม : ประกันภัย </p>
          <p>เรื่องที่เคลม : {claimdata.InsuranceType}</p>
        </span>
      );
    }
    if (claimdata.type === 'general') {
      list = (
        <span>
          <p>ประเภทการเคลม : ค่าใช้จ่ายทั่วไป </p>
          <p>เรื่องที่เคลม : {claimdata.expenseType} </p>
        </span>
      );
    }
    if (claimdata.type === 'health') {
      list = (
        <span>
          <p>ประเภทการเคลม : สุขภาพ </p>
          <p>เรื่องที่เคลม : {claimdata.HealthType}</p>
        </span>
      );
    }
    return list;
  }

  render() {
    const { claimdata } = this.props;
    return (
      <div className="claim-status">
        <div className="claim-box">
          {this.renderStatusHead()}
          <div className="claim-box-detail">
            {this.renderType()}
            <p>วันที่เคลม : {claimdata.date}</p>
            <p>ผู้เคลม : {claimdata.ChooseEmployeeName}</p>
            <span>จำนวนเงิน : {claimdata.AmountMoney} บาท </span>
            <span
              className="detail-link"
              role="button"
              aria-hidden
              onClick={() =>
                 this.props.handleToggleViewDetail(this.props.id)}
            >
              ดูเพิ่มเติม&gt;
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ClaimStatusBox;
