import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyFill } from '../../actions'
import { Button, Checkbox, Form, Grid, Image, Input } from 'semantic-ui-react'
import userIcon from '../image/icons8-user.png'
import gift from '../image/gigift.jpg'
import logo from '../image/logo.jpg'
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

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  signUpHandler() {
    window.location.href = '/signup'
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.authenticate(email, password)
    console.log(this.state)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div>
        <div className="row">
          <div className="large-10 large-offset-4 columns">
            <img src={logo} className="logostyle" />
          </div>
        </div>
        <div className="inbox">
          <div className="row">
            <div className="large-5 columns">
              <img src={gift} className="gift" />
            </div>
            <div className="large-5 columns">
              <div style={{ marginRight: '15px' }}>
                <h2 style={{ marginTop: '65px' }}>เข้าสู่ระบบ</h2>
                <p>เข้าด้วย E-mail ของคุณหรือ Username</p>
                <hr className="line1" />
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
                        paddingLeft: '35px',
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
                        paddingLeft: '35px',
                      }}
                      placeholder="พาสเวิร์ด"
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                    />
                  </Form.Field>
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
                    marginTop: '3px',
                    textAlign: 'center',
                    width: '315px',
                    fontSize: '11.4px',
                    backgroundColor: '#F7555F',
                    color: 'white',
                    marginBottom: '85px',
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
  user: state.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
