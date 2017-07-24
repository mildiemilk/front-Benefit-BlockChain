import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import { Responsive } from 'react-responsive'
import { authenticate } from '../../../api/auth'
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
   this.state = {
      email: '',
      password: '',
    }
  }
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
  }
  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.authenticate(email, password)
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
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
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <div className="divInput">
                        <img className="iconImage" src={emailIcon} />
                        <Form.Input placeholder="อีเมล" name="email" type="email" onChange={this.handleChange} required />
                      </div>
                    </Form.Field>
                    <Form.Field>
                      <div className="divInput">
                        <img className="iconImage" src={keyIcon} />
                        <Form.Input
                          name="password"
                          placeholder="รหัสผ่าน"
                          type="password"
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </Form.Field>
                    {this.props.data.error
                      ? <p style={{ color: 'red' }}>
                          {' '}{this.props.data.message}
                        </p>
                      : <p />}
                    <a className="link-mobile-login">ลืมพาสเวิร์ด?</a>
                    <button className="button-submit-key">ลงชื่อเข้าใช้</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <Footer />
      </div>
    )
  }
}

EmployeeLogin.propTypes = {
  authenticate: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  authenticate: (email, password) => dispatch(authenticate(email, password)),
})
const mapStateToProps = state => ({
  data: state.authReducer,
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLogin)
