import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
import '../../../styles/employee-style/login-verify.scss'
import gift from '../../image/gigift-mobile.png'
import logo from '../../image/logo-benefitable-mobile.png'
import footerLogo from '../../image/logo-footer.png'
import Header from '../header'
import Footer from '../footer-relative'
import { Form } from 'semantic-ui-react'
import {
  HeaderInsurance,
  SpaceHeader,
  RecHeader,
  ToppicImg,
  DivImg,
  ToppicDetail,
  NoteImg,
  RecDetail,
  Detail,
  SpaceDetail,
  SpaceDiv,
  OverflowDiv,
} from './styled'

class InsuranceDetail extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <OverflowDiv className="small-10 small-centered columns">
            <SpaceHeader>
              <HeaderInsurance> แผนประกันภัย </HeaderInsurance>
            </SpaceHeader>

            <SpaceDiv>
              <DivImg>
                <RecHeader>
                  <ToppicDetail>
                    LIFE
                  </ToppicDetail>
                </RecHeader>
                <ToppicImg src="../../../../employee/insurance/life.png" />
                <NoteImg src="../../../../employee/insurance/icons-8-info.png" />
              </DivImg>
              <RecDetail>
                <SpaceDetail>
                  <Detail>
                    คูณด้วยอัตราเงินเดือน 2 เท่า
                  </Detail>
                </SpaceDetail>
              </RecDetail>
            </SpaceDiv>

          </OverflowDiv>
        </div>
        <Footer />
      </div>
    )
  }
}

InsuranceDetail.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(InsuranceDetail)
