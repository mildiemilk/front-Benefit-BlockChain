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

class Footer extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <MediaQuery query="(max-width: 1224px)">
          <div className="footer">
            <div className="row">
              <div className="small-10 small-centered columns">
                <div className="box-in-footer">
                  <img src={footerLogo} />
                  <div className="row">
                    <div className="small-3 columns">
                      <span>เกี่ยวกับเรา</span>
                    </div>
                    <div className="small-3 columns">
                      <span>ติดต่อเรา</span>
                    </div>
                    <div className="small-3 columns">
                      <span>แจ้งปัญหา</span>
                    </div>
                    <div className="small-3 columns">
                      <span>Privacy</span>
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

Footer.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
