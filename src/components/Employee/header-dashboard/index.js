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

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <MediaQuery query="(max-width: 1224px)">
          <div className="mobile-header-dashboard">
            <div className="row">
              <div className="small-3 columns">
                <div className="icon-bar-header">
                  <Icon name="bars" size="big" />
                </div>
              </div>
              <div className="small-9 columns">
                <div className="logo-header">
                  <img src={logo} />
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

Header.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
