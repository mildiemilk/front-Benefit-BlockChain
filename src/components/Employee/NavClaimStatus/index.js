import React, { Component } from 'react';

class NavClaimStatus extends Component {
  constructor() {
    super();
    this.state = {
      pendingStatus: true,
      approveStatus: false,
      watingStatus: false,
      claimedStatus: false,
    };
  }

  renderPending = () => {
    let isActive = '';
    if (this.state.pendingStatus) {
      isActive = '-active';
    }
    return (
      <div className="InlineDiv">
        <div className="DivImg">
          <div className={`Circle${isActive}`} />
          {this.state.pendingStatus
            ? <img
              className="NavImg"
              src="../../../../employee/navclaimstatus/icons-8-hourglass-copy.png"
              alt="icons-8"
            />
            : <img
              className="NavImg"
              src="../../../../employee/navclaimstatus/icons-8-hourglass.png"
              alt="icons-8"
            />}
          <div className="DivStatus">
            <p className={`Status${isActive}`}> กำลังพิจารณา </p>
          </div>
        </div>
      </div>
    );
  }

  renderApprove = () => {
    let isActive = '';
    if (this.state.approveStatus) {
      isActive = '-active';
    }
    return (
      <div className={`CircleSpace${isActive}`}>
        <div className="DivImg">
          <div className={`Circle${isActive}`} />
          {this.state.approveStatus
            ? <img
              className="NavEmailImg"
              src="../../../../employee/navclaimstatus/icons-8-message-copy.png"
              alt="icons-8"
            />
            : <img
              className="NavEmailImg"
              src="../../../../employee/navclaimstatus/icons-8-message.png"
              alt="icons-8"
            />}
          <div className="DivStatus">
            <p className={`Status${isActive}`}> อนุมัติ </p>
          </div>
        </div>
      </div>
    );
  }

  renderWaiting = () => {
    let isActive = '';
    if (this.state.watingStatus) {
      isActive = '-active';
    }
    return (
      <div className={`CircleSpace${isActive}`}>
        <div className="DivImg">
          <div className={`Circle${isActive}`} />
          {this.state.watingStatus
            ? <img
              className="NavImg"
              src="../../../../employee/navclaimstatus/icons-8-money-transfer-copy.png"
              alt="icons-8"
            />
            : <img
              className="NavImg"
              src="../../../../employee/navclaimstatus/icons-8-money-transfer.png"
              alt="icons-8"
            />}
          <div className="DivStatus">
            <p className={`Status${isActive}`}> รอโอนเงิน </p>
          </div>
        </div>
      </div>
    );
  }

  renderClaimed = () => {
    let isActive = '';
    if (this.state.claimedStatus) {
      isActive = '-active';
    }
    return (
      <div className={`CircleSpace${isActive}`}>
        <div className="DivImg">
          <div className={`Circle${isActive}`} />
          {this.state.claimedStatus
            ? <img
              className="NavImg"
              src="../../../../employee/navclaimstatus/icons-8-checked-copy.png"
              alt="icons-8"
            />
            : <img
              className="NavImg"
              src="../../../../employee/navclaimstatus/icons-8-checked.png"
              alt="icons-8"
            />}
          <div className="DivStatus">
            <p className={`Status${isActive}`}> เคลมสำเร็จ </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="NavClaimStatus">
        <div>
          {this.renderPending()}
          {this.renderApprove()}
          {this.renderWaiting()}
          {this.renderClaimed()}
        </div>
      </div>
    );
  }
}

NavClaimStatus.propTypes = {};

export default NavClaimStatus;
