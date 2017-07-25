import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
import gift from '../../image/gigift-mobile.png'
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


class DashboardStart extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className='dashboard-start'>
          <div className="row">
            <div className="small-10 small-centered columns">
              <div className="dashboard-start-box">
                <img src={gift} />
                <div className="text-dashboard-start">
                  <p>สิทธิประโยชน์ของคุณจะเริ่มมีผล</p>
                  <p>วันที่ 1 พฤษภาคม 2560</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

DashboardStart.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStart)
