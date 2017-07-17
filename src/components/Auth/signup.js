import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyFill } from '../../actions'
import { Button, Checkbox, Form, Grid, Image } from 'semantic-ui-react'
import logo from '../image/logo.png'
import city from '../image/cityscape2.png'
import userIcon from '../image/icons8-user.png'
import passwordIcon from '../image/icons8-password.png'
import '../../styles/signup.scss'
import { register } from '../../api/auth'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      role: 'HR',
    }
  }

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password, confirmPassword, role } = this.state
    this.props.register(email, password, confirmPassword, role)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div className="box">
        <img src={logo} style={{ maxWidth: '30%' }} />
        <div className="large-9 large-centered columns">
          <div className="boxForm">
            <h2 className="header"> สร้างบัญชีผู้ใช้ </h2>
            <div className="row" />
            <div className="boxCenter">
              <div className="row">
                <div className="large-4 large-offset-4 columns">
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <Form.Input
                        style={{
                          width: '325px',
                          backgroundImage: `url(${userIcon})`,
                          backgroundSize: '32px,32px',
                          backgroundRepeat: 'no-repeat',
                          paddingLeft: '13%',
                        }}
                        placeholder="อีเมลของคุณ"
                        name="email"
                        onChange={this.handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Form.Input
                        style={{
                          width: '325px',
                          backgroundImage: `url(${passwordIcon})`,
                          backgroundSize: '32px,32px',
                          backgroundRepeat: 'no-repeat',
                          paddingLeft: '13%',
                        }}
                        placeholder="พาสเวิร์ด"
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Form.Input
                        style={{
                          width: '325px',
                          backgroundImage: `url(${passwordIcon})`,
                          backgroundSize: '32px,32px',
                          backgroundRepeat: 'no-repeat',
                          paddingLeft: '13%',
                        }}
                        placeholder="ยืนยันพาสเวิร์ด"
                        name="confirmPassword"
                        type="password"
                        onChange={this.handleChange}
                      />
                    </Form.Field>
                    <button className="signUpButton">
                      สมัครสมาชิก
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  register: (email, password, confirmPassword, role) =>
    dispatch(register(email, password, confirmPassword, role)),
})

export default connect(null, mapDispatchToProps)(SignUp)
