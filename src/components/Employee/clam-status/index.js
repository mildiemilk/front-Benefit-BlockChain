import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Responsive } from 'react-responsive'
import ConsiderClaimStatus from './consider-claim-status'
import ApproveClaimStatus from './approve-claim-status'
import WaitTransferClaimStatus from './wait-transfer-claim-status'
import FinishClaimStatus from './finish-claim-status'
import NotApproveClaimStatus from './not-approve-claim-status'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Container,
  Table,
  Icon,
} from 'semantic-ui-react'
const MediaQuery = require('react-responsive')

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

ClamStatus.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ClamStatus)
