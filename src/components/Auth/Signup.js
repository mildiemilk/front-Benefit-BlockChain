import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyFill } from '../../actions'
import { Button, Checkbox, Form, Grid, Image } from 'semantic-ui-react'
import logo from '../image/logo.jpg'
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
    }
  }

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  handleSubmit = e => {
    console.log('hello')
    e.preventDefault()
    const { email, password, confirmPassword } = this.state
    this.props.register(email, password, confirmPassword)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div className="box">
        <img src={logo} />
        <div className="boxForm">
          <h2 className="header"> สร้างบัญชีผู้ใช้ </h2>
          <div className="boxCenter">
            <Grid centered columns={3}>
              <Grid.Column>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <Form.Input
                      style={{
                        width: '325px',
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
                        width: '325px',
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
                  <Form.Field>
                    <Form.Input
                      style={{
                        width: '325px',
                        backgroundImage: `url(${passwordIcon})`,
                        backgroundSize: '32px,32px',
                        backgroundRepeat: 'no-repeat',
                        paddingLeft: '35px',
                      }}
                      placeholder="ยืนยันพาสเวิร์ด"
                      name="confirmPassword"
                      type="password"
                      onChange={this.handleChange}
                    />
                  </Form.Field>

                  <Button
                    style={{
                      marginTop: '50px',
                      marginBottom: '129px',
                      textAlign: 'center',
                      width: '329px',
                      backgroundColor: '#3A7BD5',
                      color: 'white',
                    }}
                    type="submit"
                  >
                    สมัครมสาชิก
                  </Button>
                </Form>
              </Grid.Column>
            </Grid>
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
  register: (email, password, confirmPassword) =>
    dispatch(register(email, password, confirmPassword)),
})

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
