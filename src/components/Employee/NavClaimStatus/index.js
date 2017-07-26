import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Responsive } from 'react-responsive'
import Header from '../header'
import Footer from '../footer'
import { Form, Icon } from 'semantic-ui-react'
import styled from 'react-sc'

const Icons = styled(Icon)`
  &&&{
    position: absolute;
    right: 6px;
  }
`

class NavClaimStatus extends Component {
  constructor() {
    super()
    this.state = {
      pendingStatus: true,
      approveStatus: false,
      watingStatus: false,
      claimedStatus: false,
    }
  }

  renderPending = () => {
    let isActive = ''
    if (this.state.pendingStatus) {
      isActive = '-active'
    }
    return (
      <div className="InlineDiv">
        <div className="DivImg">
          <div className={`Circle${isActive}`} />
          {this.state.pendingStatus
            ? <img
                className="NavImg"
                src="../../../../employee/navclaimstatus/icons-8-hourglass-copy.png"
              />
            : <img
                className="NavImg"
                src="../../../../employee/navclaimstatus/icons-8-hourglass.png"
              />}
          <div className="DivStatus">
            <p className={`Status${isActive}`}> กำลังพิจารณา </p>
          </div>
        </div>
      </div>
    )
  }

  renderApprove = () => {
    let isActive = ''
    if (this.state.approveStatus) {
      isActive = '-active'
    }
    return (
      <div className={`CircleSpace${isActive}`}>
        <div className="DivImg">
          <div className={`Circle${isActive}`} />
          {this.state.approveStatus
            ? <img
                className="NavEmailImg"
                src="../../../../employee/navclaimstatus/icons-8-message-copy.png"
              />
            : <img
                className="NavEmailImg"
                src="../../../../employee/navclaimstatus/icons-8-message.png"
              />}
          <div className="DivStatus">
            <p className={`Status${isActive}`}> อนุมัติ </p>
          </div>
        </div>
      </div>
    )
  }

  renderWaiting = () => {
    let isActive = ''
    if (this.state.watingStatus) {
      isActive = '-active'
    }
    return (
      <div className={`CircleSpace${isActive}`}>
        <div className="DivImg">
          <div className={`Circle${isActive}`} />
          {this.state.watingStatus
            ? <img
                className="NavImg"
                src="../../../../employee/navclaimstatus/icons-8-money-transfer-copy.png"
              />
            : <img
                className="NavImg"
                src="../../../../employee/navclaimstatus/icons-8-money-transfer.png"
              />}
          <div className="DivStatus">
            <p className={`Status${isActive}`}> รอโอนเงิน </p>
          </div>
        </div>
      </div>
    )
  }

  renderClaimed = () => {
    let isActive = ''
    if (this.state.claimedStatus) {
      isActive = '-active'
    }
    return (
      <div className={`CircleSpace${isActive}`}>
        <div className="DivImg">
          <div className={`Circle${isActive}`} />
          {this.state.claimedStatus
            ? <img
                className="NavImg"
                src="../../../../employee/navclaimstatus/icons-8-checked-copy.png"
              />
            : <img
                className="NavImg"
                src="../../../../employee/navclaimstatus/icons-8-checked.png"
              />}
          <div className="DivStatus">
            <p className={`Status${isActive}`}> เคลมสำเร็จ </p>
          </div>
        </div>
      </div>
    )
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
    )
  }
}

NavClaimStatus.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default NavClaimStatus
