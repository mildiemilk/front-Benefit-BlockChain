import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
import gift from '../../image/gigift-mobile.png'
import Header from '../header'
import Footer from '../footer-relative'
import Slider from 'react-slick'
import FlexyPlanBox from './flexy-plan-box'
import CongrateImage from '../../image/asset-1.png'
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

class FlexyPlan extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div>
        <MediaQuery query="(max-width: 1224px)">
          <Header />

          <div className="row">
            <div className="small-10 small-centered columns">
              <div className="deadline-flexy-plan">
                <img src={CongrateImage} />
                <div className="congrate-text">ยินดีด้วย!</div>
                <div className="congrate-text">
                  มีสิทธิประโยชน์มากมายรอคุณอยู่
                </div>
                <div className="deadline-box">
                  <p>กรุณาเลือกแผนของคุณภายในวันที่ 12 เม.ย. 60</p>
                  <div className="row">
                    <div className="box-space">
                      <div
                        className="small-4 columns"
                        style={{ paddingRight: '0px' }}
                      >
                        <div className="date-deadline-box">
                          <div className="deadline-text">
                            08
                          </div>
                          <div>วัน</div>
                        </div>
                      </div>
                      <div
                        className="small-4 columns"
                        style={{ paddingRight: '0px', paddingLeft: '0px' }}
                      >
                        <div className="hour-deadline-box">
                          <div className="deadline-text">
                            08
                          </div>
                          <div>ชั่วโมง</div>
                        </div>
                      </div>
                      <div
                        className="small-4 columns"
                        style={{ paddingLeft: '0px' }}
                      >
                        <div className="second-deadline-box">
                          <div className="deadline-text">
                            08
                          </div>
                          <div>ชั่วโมง</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-space">
                <div className="header-text-select-flexy-plan">
                  คุณกำลังเลือก : แผน 1
                </div>
              </div>
              <div className="slider">
                <Slider {...settings}>
                  <div>
                    <FlexyPlanBox />
                  </div>
                  <div>
                    <FlexyPlanBox />
                  </div>
                </Slider>
              </div>
              <button className="button-submit-flexy-plan">
                ยืนยัน
              </button>
            </div>
            <Footer />
          </div>
        </MediaQuery>
      </div>
    )
  }
}

FlexyPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FlexyPlan)
