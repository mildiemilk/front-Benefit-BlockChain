import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
import gift from '../../image/gigift-mobile.png'
import Header from '../header'
import Slider from 'react-slick'
import Flexy1 from '../../image/flexy-1.png'
import Flexy2 from '../../image/flexy-2.png'
import Flexy3 from '../../image/flexy-3.png'
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

class FlexyPlanBox extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
    }
    return (
      <div>
        <MediaQuery query="(max-width: 1224px)">
          <div className="box-space">
            <div className="flexy-plan-box">
              <div className="head-flexy-plan-box">
                <span className="flexy-plan-header">แผนประกันภัย</span>
                <span className="link-flexy-plan">ดูเพิ่มเติม &gt;</span>
              </div>
              <div className="flexy-plan-detail-box">
                <div className="row">
                  <div className="small-9 columns">
                    <div className="header-flexy-plan-detail">
                      ผลประโยชน์และความคุ้มครอง
                    </div>
                    <div className="detail-flexy-text">ค่าห้อง : 400 บาท</div>
                    <div className="detail-flexy-text">
                      ผ่าตัด : 20,000 บาท/ครั้ง
                    </div>
                  </div>
                  <div className="small-3 columns">
                    <div className="flexy-image-box">
                      <img src={Flexy1} className="flexy-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flexy-plan-box">
              <div className="head-flexy-plan-box">
                <span className="flexy-plan-header">สุขภาพ</span>
                <span className="link-flexy-plan">ดูเพิ่มเติม &gt;</span>
              </div>
              <div className="flexy-plan-detail-box">
                <div className="row">
                  <div className="small-9 columns">
                    <div className="header-flexy-plan-detail">
                      ผลประโยชน์และความคุ้มครอง
                    </div>
                    <div className="detail-flexy-text">ค่าห้อง : 400 บาท</div>
                    <div className="detail-flexy-text">บริการ : 2,000 บาท</div>
                  </div>
                  <div className="small-3 columns">
                    <div className="flexy-image-box">
                      <img src={Flexy2} className="flexy-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flexy-plan-box">
              <div className="head-flexy-plan-box">
                <span className="flexy-plan-header">สุขภาพ</span>
                <span className="link-flexy-plan">ดูเพิ่มเติม &gt;</span>
              </div>
              <div className="flexy-plan-detail-box">
                <div className="row">
                  <div className="small-9 columns">
                    <div className="header-flexy-plan-detail">
                      ผลประโยชน์และความคุ้มครอง
                    </div>
                    <div className="detail-flexy-text">ค่าห้อง : 400 บาท</div>
                    <div className="detail-flexy-text">บริการ : 2,000 บาท</div>
                  </div>
                  <div className="small-3 columns">
                    <div className="flexy-image-box">
                      <img src={Flexy3} className="flexy-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

FlexyPlanBox.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FlexyPlanBox)
