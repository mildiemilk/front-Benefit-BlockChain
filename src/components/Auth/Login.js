import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyFill } from '../../actions'
import { Button, Checkbox, Form, Grid, Image, Input } from 'semantic-ui-react'
import iconUser from '../../image/icons8-user.png'
import gift from '../../image/gigift.jpg'
import logo from '../../image/logo.jpg'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      nameInput: '',
    }
  }

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  signUpHandler() {
    console.log('hello')
    window.location.href = '/signup'
  }
  render() {
    return (
      <div>
        <img src={logo} style={{ marginTop: '135px', marginLeft: '420px' }} />
        <div
          style={{
            margin: '50px 250px 172px 200px',
            boxShadow: '0 1px 7px 2px rgba(0, 0, 0, 0.08)',
          }}
        >
          <Grid>
            <Grid.Column width={9}>
              <img
                src={gift}
                style={{ marginTop: '135px', marginLeft: '30px' }}
              />
            </Grid.Column>
            <Grid.Column width={7}>
              <div style={{ marginRight: '15px' }}>
                <h2 style={{ marginTop: '65px' }}>เข้าสู่ระบบ</h2>
                <p>เข้าด้วย E-mail ของคุณหรือ Username</p>
                <hr
                  style={{
                    margin: '2em 0em 2em 0em',
                    borderColor: 'blue',
                    width: '315px',
                  }}
                />
                <Form>
                  <Form.Field>
                    <Input
                      style={{ background: 'iconUser', width: '315px' }}
                      placeholder="อีเมลของคุณ"
                    />
                  </Form.Field>
                  <Form.Field>
                    <Input
                      style={{ background: 'iconUser', width: '315px' }}
                      placeholder="พาสเวิร์ด"
                    />
                  </Form.Field>
                </Form>
                <br />
                <a style={{ float: 'right', marginRight: '25px' }}>
                  ลืมพาสเวิร์ด?
                </a>
                <Button
                  style={{
                    marginTop: '20px',
                    textAlign: 'center',
                    width: '315px',
                    backgroundColor: '#3A7BD5',
                    color: 'white',
                  }}
                >
                  ลงชื่อเข้าใช้
                </Button>
                <hr style={{ margin: '2em 0em 2em 0em', width: '315px' }} />
                <p style={{ textAlign: 'center', marginRight: '15px' }}>
                  ยังไม่เคยสมัคร?
                </p>
                <Button
                  style={{
                    marginTop: '3px',
                    textAlign: 'center',
                    width: '315px',
                    fontSize: '11.4px',
                    backgroundColor: '#F7555F',
                    color: 'white',
                  }}
                  type="button"
                  onClick={() => this.signUpHandler()}
                >
                  สร้างบัญชีใหม่
                </Button>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

Login.propTypes = {}

const mapStateToProps = state => ({
  user: state.user,
})
export default connect(mapStateToProps, {})(Login)
