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
import NavClaimStatus from '../NavClaimStatus'

const Icons = styled(Icon)`
  &&&{
    position: absolute;
    right: 6px;
  }
`

class ClaimStatusDetail extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="ClaimStatusDetail">
        <Header />
        <div className="MarginDiv">
          <div className="row">
            <div className="small-10 small-centered columns">
              <p className="ClaimNumber">
                {' '}สถานะการเคลม &gt; เลขที่ 1200455020987{' '}
              </p>
              <NavClaimStatus />
            </div>
          </div>

          <div className="row">
            <div className="BodyDiv">
              <div className="small-10 small-centered columns">
                <div className="DivImg">
                  <img
                    className="StatusImg"
                    src="../../../../employee/claimdetail/icons-8-hourglass@2x.png"
                  />
                  <span className="StatusHeader"> กำลังพิจารณา </span>
                </div>

                <div className="DivDetail">
                  <span className="Detail"> ประเภทการเคลม : ประกันภัย </span>
                  <span className="Detail"> เรื่องที่เคลม : IPD </span>
                  <span className="Detail"> วันที่เคลม : 12/05/2017 </span>
                  <span className="Detail"> สถานที่ : โรงพยาบาลราชวิถี </span>
                  <span className="Detail"> ผู้เคลม : สมศรี ช่างสงสัย </span>
                  <span className="Detail"> จำนวนเงิน : 540 บาท </span>
                  <span className="Detail"> ธนาคาร : กสิกร </span>
                  <span className="Detail"> เลขที่บัญชี : 123454684 </span>
                </div>
              </div>
            </div>
          </div>

          <div className="DivBack">
            <u className="BackButton">
              &lt; ย้อนกลับ
            </u>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

ClaimStatusDetail.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default ClaimStatusDetail
