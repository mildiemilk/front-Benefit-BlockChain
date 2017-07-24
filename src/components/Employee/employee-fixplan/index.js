import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
import congrat from '../../image/asset-1.png'
import logo from '../../image/logo-benefitable-mobile.png'
import '../../../styles/employee-style/fixplan.scss'
import footerLogo from '../../image/logo-footer.png'
import healthpic from '../../image/5.png'
import insurepic from '../../image/7.png'
import expendpic from '../../image/6.png'
import Header from '../header'
import Footer from '../footer'

import {
  Submit,
  HeaderBox,
  BoxStyle,
  HeaderBoxRight,
  DataStyle,
  ImageInbox,
} from './styled.js'

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

class EmployeeFixPlan extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="backgroundStlye">
          <Header />
          <div className="row">
            <img className="Imagefirst" src={congrat} />
            <div className="textfirst">
              ยินดีด้วย!<br />นี้คือสิทธิประโยชน์ของคุณ
            </div>
            <div className="small-10 small-centered columns">
              <BoxStyle>
                <HeaderBox>
                  <div
                    className="small-6  columns"
                    style={{ fontSize: '14px' }}
                  >
                    แผนประกันภัย
                  </div>
                  <HeaderBoxRight className="small-4 columns">
                    ดูเพิ่มเติม &gt;
                  </HeaderBoxRight>
                </HeaderBox>
                <DataStyle className="small-7 columns">
                  <b>ผลประโยชน์และการคุ้มครอง</b><br />
                  ค่าห้อง: 400 <br />
                  ผ่าตัด : 20,000 บาท/ครั่ง
                </DataStyle>
                <div className="small-3 columns">
                  <ImageInbox src={insurepic} />
                </div>
              </BoxStyle>
              <BoxStyle>
                <HeaderBox>
                  <div
                    className="small-6  columns"
                    style={{ fontSize: '14px' }}
                  >
                    สุขภาพ
                  </div>
                  <HeaderBoxRight className="small-4 columns">
                    ดูเพิ่มเติม &gt;
                  </HeaderBoxRight>
                </HeaderBox>
                <DataStyle className="small-7 columns">
                  <b>ผลประโยชน์และการคุ้มครอง</b><br />
                  ค่าห้อง: 400 <br />
                  บริการ : 2,000 บาท
                </DataStyle>
                <div className="small-3 columns">
                  <ImageInbox src={healthpic} />
                </div>
              </BoxStyle>
              <BoxStyle>
                <HeaderBox>
                  <div
                    className="small-6  columns"
                    style={{ fontSize: '14px' }}
                  >
                    ใช้จ่ายทั่วไป
                  </div>
                  <HeaderBoxRight className="small-4 columns">
                    ดูเพิ่มเติม &gt;
                  </HeaderBoxRight>
                </HeaderBox>
                <DataStyle className="small-7 columns">
                  <b>ผลประโยชน์และการคุ้มครอง</b><br />
                  ค่าห้อง: 400 <br />
                  บริการ : 2,000 บาท
                </DataStyle>
                <div className="small-3 columns">
                  <ImageInbox src={expendpic} />
                </div>
              </BoxStyle>

              <Submit>
                ยืนยัน
              </Submit>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

EmployeeFixPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeFixPlan)
