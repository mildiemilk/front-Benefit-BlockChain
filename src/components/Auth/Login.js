import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyFill } from '../../actions'
import { Button, Checkbox, Form, Grid, Image, Input } from 'semantic-ui-react'
import userIcon from '../image/icons8-user.png'
import gift from '../image/gigift.jpg'
import logo from '../image/logo.png'
import '../../styles/loginstyle.scss'
import passwordIcon from '../image/icons8-password.png'
import { authenticate } from '../../api/auth'

class Login extends Component {
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

  signUpHandler() {
    window.location.href = '/signup'
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.authenticate(email, password)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    console.log(this.props.data.error)
    return (
      <div>
        <div className="row">
          <div className="large-10 large-offset-4 columns">
            <div className="logostyle">
              <img src={logo} />
            </div>
          </div>
        </div>
        <div className="inbox">
          <div className="row">
            <div className="large-5 columns">
              <img src={gift} className="gift" />
            </div>
            <div className="large-5 columns">
              <div>
                <h2 style={{ marginTop: '23%' }}>เข้าสู่ระบบ</h2>
                <p>เข้าด้วย E-mail ของคุณหรือ Username</p>
                <hr className="line0" />
                <Form
                  style={{ paddingLeft: '0px' }}
                  onSubmit={this.handleSubmit}
                >
                  <Form.Field>
                    <Form.Input
                      style={{
                        width: '315px',
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
                        width: '315px',
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
                  {this.props.data.error
                    ? <p style={{ color: 'red' }}> {this.props.data.message}</p>
                    : <p />}
                  <Button
                    style={{
                      marginTop: '20px',
                      textAlign: 'center',
                      width: '315px',
                      backgroundColor: '#3A7BD5',
                      color: 'white',
                    }}
                    type="submit"
                  >
                    ลงชื่อเข้าใช้
                  </Button>
                </Form>
                <br />
                <a className="link">ลืมพาสเวิร์ด?</a>
                <hr className="line2" />
                <p className="question">ยังไม่เคยสมัคร?</p>
                <Button
                  style={{
                    marginTop: '3%',
                    textAlign: 'center',
                    width: '315px',
                    fontSize: '11.4px',
                    backgroundColor: '#F7555F',
                    color: 'white',
                    marginBottom: '10%',
                  }}
                  type="button"
                  onClick={() => this.signUpHandler()}
                >
                  สร้างบัญชีใหม่
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  authenticate: (email, password) => dispatch(authenticate(email, password)),
})
const mapStateToProps = state => ({
  data: state.authReducer,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
