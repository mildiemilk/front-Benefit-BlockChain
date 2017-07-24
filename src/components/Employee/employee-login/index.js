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
import emailIcon from '../../image/icons-8-message.png'
import keyIcon from '../../image/icons-8-key-copy.png'
import Header from '../header'
import Footer from '../footer-absolute'
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

class EmployeeLogin extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="white-background">
        <MediaQuery query="(max-width: 1224px)">
          <Header />
          <div className="row">
            <div className="small-10 small-centered columns">
              <div className="gift-logo-in-mobile">
                <img src={gift} />
                <div className="form-login-mobile">
                  <Form>
                    <Form.Field>
                      <div className="divInput">
                        <img className="iconImage" src={emailIcon} />
                        <Form.Input placeholder="อีเมล" type="email" required />
                      </div>
                    </Form.Field>
                    <Form.Field>
                      <div className="divInput">
                        <img className="iconImage" src={keyIcon} />
                        <Form.Input
                          placeholder="รหัสผ่าน"
                          type="password"
                          required
                        />
                      </div>
                    </Form.Field>
                    <a className="link-mobile-login">ลืมพาสเวิร์ด?</a>
                    <button className="button-submit-key">ลงชื่อเข้าใช้</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </MediaQuery>
      </div>
    )
  }
}

EmployeeLogin.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLogin)
