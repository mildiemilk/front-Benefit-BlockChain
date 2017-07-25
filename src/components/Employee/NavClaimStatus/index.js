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
      pendingStatus: false,
      approveStatus: false,
      watingStatus: false,
      claimedStatus: false,
    }
  }

  render() {
    return (
      <div className="NavClaimStatus">
        <div>
          <div className="InlineDiv">
            <div className="DivImg">
              <div className="Circle" />
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
                <p className="Status"> กำลังพิจารณา </p>
              </div>
            </div>
          </div>

          <div className="CircleSpace">
            <div className="DivImg">
              <div className="Circle" />
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
                <p className="Status"> อนุมัติ </p>
              </div>
            </div>
          </div>

          <div className="CircleSpace">
            <div className="DivImg">
              <div className="Circle" />
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
                <p className="Status"> รอโอนเงิน </p>
              </div>
            </div>
          </div>

          <div className="CircleSpace">
            <div className="DivImg">
              <div className="Circle" />
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
                <p className="Status"> เคลมสำเร็จ </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

NavClaimStatus.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default NavClaimStatus
