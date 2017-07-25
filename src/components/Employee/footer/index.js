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
      <div className='footer'>
     
            <div className="row">
              <div className="small-10 small-centered columns">
                <div className="box-in-footer">
                  <img src={footerLogo} />
                </div>
                <div className='footer-Head'>
                    <div className='footer-list'>เกี่ยวกับเรา</div>
                    <div className='footer-list'>ติดต่อเรา</div>
                    <div className='footer-list'>แจ้งปัญหา</div>
                    <div className='footer-list'>Terms</div>
                    <div className='footer-list'>Privacy</div>
                </div>
              </div>
            </div>
          
      </div>
    )
  }
}

Footer.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
