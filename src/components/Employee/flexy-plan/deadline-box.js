import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
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

class DeadlineBox extends Component {
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
          <div className="row">
            <div className="box-space">
              <div className="small-4 columns" style={{ paddingRight: '0px' }}>
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
              <div className="small-4 columns" style={{ paddingLeft: '0px' }}>
                <div className="second-deadline-box">
                  <div className="deadline-text">
                    08
                  </div>
                  <div>ชั่วโมง</div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

DeadlineBox.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DeadlineBox)
