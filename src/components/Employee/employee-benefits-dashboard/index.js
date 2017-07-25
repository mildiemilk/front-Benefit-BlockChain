import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
import paper from '../../image/icons-8-fine-print@2x.png'
import Header from '../header-dashboard'
import Benefits1 from '../../image/flexy-1.png'
import Benefits2 from '../../image/flexy-2.png'
import Benefits3 from '../../image/flexy-3.png'
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

class EmployeeBenefitsDashboard extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <p className="header-employee-benefits-dashboard">
          สิทธิประโยชน์ของคุณ
        </p>
        <div className="employee-benefits-dashboard-box">
          <div className="header-employee-benefits-dashboard-box">
            <div className="benefits-plan-employee-text">
              <img src={paper} className="paper-image" />
              <span>แผนสิทธิประโยชน์</span>
            </div>
            <div className="employee-benefits-date-text">
              <div>Start 10/10/17</div>
              <div>EXP 10/08/18</div>
            </div>
          </div>
          <div className="employee-benefits-dashboard-detail">
            <div className="row">
              <div className="header-employee-benefits-detail-box">
                <MediaQuery query="(max-width: 520px) and (min-width: 320px)">
                  <div
                    className="small-2 columns"
                    style={{ paddingLeft: '0px' }}
                  >
                    <img
                      src={Benefits1}
                      className="employee-benefits-dashboard-image"
                    />
                  </div>
                  <div className="small-10 columns">
                    <div className="text-header-employee-benefits-dashboard-detail">
                      <p>ประกันภัย</p>
                    </div>
                  </div>
                </MediaQuery>
                <MediaQuery query="(max-width: 768px) and (min-width: 520px)">
                  <div
                    className="small-1 columns"
                    style={{ paddingLeft: '0px' }}
                  >
                    <img
                      src={Benefits1}
                      className="employee-benefits-dashboard-image"
                    />
                  </div>
                  <div className="small-11 columns">
                    <div className="text-header-employee-benefits-dashboard-detail">
                      <p>ประกันภัย</p>
                    </div>
                  </div>
                </MediaQuery>
              </div>
            </div>
            <div className="employee-benefits-detail-box">
              <p>ผลประโยชน์และความคุ้มครอง</p>
              <span>ค่าห้อง : 400 บาท</span>
              <span className="icon-angle-right">
                <Icon name="angle right" size="big" />
              </span>
              <p>ผ่าตัด : 20,000 บาท/ครั้ง</p>
            </div>
            <button className="pdf-button">view PDF</button>
          </div>
          <div className="employee-benefits-dashboard-detail">
            <div className="row">
              <div className="header-employee-benefits-detail-box">
                <MediaQuery query="(max-width: 520px) and (min-width: 320px)">
                  <div
                    className="small-2 columns"
                    style={{ paddingLeft: '0px' }}
                  >
                    <img
                      src={Benefits2}
                      className="employee-benefits-dashboard-image"
                    />
                  </div>
                  <div className="small-10 columns">
                    <div className="text-header-employee-benefits-dashboard-detail">
                      <p>ประกันภัย</p>
                    </div>
                  </div>
                </MediaQuery>
                <MediaQuery query="(max-width: 768px) and (min-width: 520px)">
                  <div
                    className="small-1 columns"
                    style={{ paddingLeft: '0px' }}
                  >
                    <img
                      src={Benefits2}
                      className="employee-benefits-dashboard-image"
                    />
                  </div>
                  <div className="small-11 columns">
                    <div className="text-header-employee-benefits-dashboard-detail">
                      <p>ประกันภัย</p>
                    </div>
                  </div>
                </MediaQuery>
              </div>
            </div>
            <div className="employee-benefits-detail-box">
              <p>ผลประโยชน์และความคุ้มครอง</p>
              <span>ค่าห้อง : 400 บาท</span>
              <span className="icon-angle-right">
                <Icon name="angle right" size="big" />
              </span>
              <p>ผ่าตัด : 20,000 บาท/ครั้ง</p>
            </div>
            <button className="pdf-button">view PDF</button>
          </div>
          <div className="employee-benefits-dashboard-detail">
            <div className="row">
              <div className="header-employee-benefits-detail-box">
                <MediaQuery query="(max-width: 520px) and (min-width: 320px)">
                  <div
                    className="small-2 columns"
                    style={{ paddingLeft: '0px' }}
                  >
                    <img
                      src={Benefits3}
                      className="employee-benefits-dashboard-image"
                    />
                  </div>
                  <div className="small-10 columns">
                    <div className="text-header-employee-benefits-dashboard-detail">
                      <p>ประกันภัย</p>
                    </div>
                  </div>
                </MediaQuery>
                <MediaQuery query="(max-width: 768px) and (min-width: 520px)">
                  <div
                    className="small-1 columns"
                    style={{ paddingLeft: '0px' }}
                  >
                    <img
                      src={Benefits3}
                      className="employee-benefits-dashboard-image"
                    />
                  </div>
                  <div className="small-11 columns">
                    <div className="text-header-employee-benefits-dashboard-detail">
                      <p>ประกันภัย</p>
                    </div>
                  </div>
                </MediaQuery>
              </div>
            </div>
            <div className="employee-benefits-detail-box">
              <p>ผลประโยชน์และความคุ้มครอง</p>
              <span>ค่าห้อง : 400 บาท</span>
              <span className="icon-angle-right">
                <Icon name="angle right" size="big" />
              </span>
              <p>ผ่าตัด : 20,000 บาท/ครั้ง</p>
            </div>
            <button className="pdf-button">view PDF</button>
          </div>
        </div>
        <div className="row">
          <div className="small-10 small-centered columns">
            <button className="clam-button">เคลม</button>
          </div>
        </div>
      </div>
    )
  }
}

EmployeeBenefitsDashboard.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(
  EmployeeBenefitsDashboard,
)
