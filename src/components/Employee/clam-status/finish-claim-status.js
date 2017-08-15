import React, { Component } from 'react';
import FinishCheck from '../../image/icons-8-checked@2x-green.png';

class FinishClaimStatus extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="clam-status">
        <div className="clam-box">
          <div className="green-clam-box-header">
            <div className="row">
              <div className="small-1 columns">
                <img
                  src={FinishCheck}
                  alt="Check Green"
                  className="clam-image"
                />
              </div>
              <div
                className="small-11 columns"
                style={{ paddingLeft: '0px', paddingRight: '0px' }}
              >
                <span className="green-header-text-status">อนุมัติ </span>
                <span className="green-no-text-status">no. 1200455020987</span>
              </div>
            </div>
          </div>
          <div className="clam-box-detail">
            <p>ประเภทการเคลม : ประกันภัย</p>
            <p>เรื่องที่เคลม : IPD</p>
            <p>วันที่เคลม : 12/05/2017</p>
            <p>ผู้เคลม : สมศรี ช่างสงสัย</p>
            <span>จำนวนเงิน : 540 บาท </span>
            <span className="green-get-more-detail-link">ดูเพิ่มเติม&gt; </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FinishClaimStatus;
