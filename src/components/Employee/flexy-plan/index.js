import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
import gift from '../../image/gigift-mobile.png'
import Header from '../header'
import Footer from '../footer-absolute'
import Slider from 'react-slick'
import FlexyPlanBox from './flexy-plan-box'
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
            </div>
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
