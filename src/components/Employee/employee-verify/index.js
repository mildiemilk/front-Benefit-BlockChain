import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
import '../../../styles/employee-style/login-verify.scss'
import key from '../../image/key.png'
import keyIcon from '../../image/icons-8-key-copy.png'
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
import Header from '../header'
import Footer from '../footer'

class EmployeeVerify extends Component {
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
              <div className="form-key-box">
                <img src={key} />
                <p>ตั้งรหัสผ่านบัญชีผู้ใช้</p>
                <Form>
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
                  <Form.Field>
                    <div className="divInput">
                      <img className="iconImage" src={keyIcon} />
                      <Form.Input
                        placeholder="กรอกรหัสผ่านอีกครั้ง"
                        type="password"
                        required
                      />
                    </div>
                  </Form.Field>
                  <button className="button-submit-key">
                    ตั้งรหัสผ่านสำหรับใช้งาน
                  </button>
                </Form>
              </div>
            </div>
          </div>
          <Footer />
        </MediaQuery>
      </div>
    )
  }
}

EmployeeVerify.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeVerify)
