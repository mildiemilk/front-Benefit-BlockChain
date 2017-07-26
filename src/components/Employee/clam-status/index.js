import React, { Component } from 'react'
import ConsiderClaimStatus from './consider-claim-status'
import ApproveClaimStatus from './approve-claim-status'
import WaitTransferClaimStatus from './wait-transfer-claim-status'
import FinishClaimStatus from './finish-claim-status'
import NotApproveClaimStatus from './not-approve-claim-status'

class ClamStatus extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="clam-status">
        <p className="clam-header">สถานะการเคลม</p>
        <ConsiderClaimStatus />
        <ApproveClaimStatus />
        <WaitTransferClaimStatus />
        <FinishClaimStatus />
        <NotApproveClaimStatus />
      </div>
    )
  }
}

export default ClamStatus
