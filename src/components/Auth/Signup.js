import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyFill } from '../../actions'
import { Button, Checkbox, Form, Grid, Image } from 'semantic-ui-react'
import logo from '../../image/logo.jpg'
import city from '../../image/cityscape2.png'
import userIcon from '../../image/icons8-user.png'
import passwordIcon from '../../image/icons8-password.png'
import '../../styles/signup.scss'

class SingUp extends Component {
  constructor() {
    super()
    this.state = {
      nameInput: '',
    }
  }

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  render() {
    return (
      <div className="box">
        <img src={logo} />
        <div className="boxForm">
          <h2 className="header"> สร้างบัญชีผู้ใช้ </h2>
          <div className="boxCenter">
            <Grid centered columns={3}>
              <Grid.Column>
                <Form>
                  <Form.Field>
                    <input
                      style={{
                        width: '325px',
                        backgroundImage: `url(${userIcon})`,
                        backgroundSize: '32px,32px',
                        backgroundRepeat: 'no-repeat',
                        paddingLeft: '35px',
                      }}
                      placeholder="อีเมลของคุณ"
                    />
                  </Form.Field>
                  <Form.Field>
                    <input
                      style={{
                        width: '325px',
                        backgroundImage: `url(${passwordIcon})`,
                        backgroundSize: '32px,32px',
                        backgroundRepeat: 'no-repeat',
                        paddingLeft: '35px',
                      }}
                      placeholder="พาสเวิร์ด"
                    />
                  </Form.Field>
                  <Form.Field>
                    <input
                      style={{
                        width: '325px',
                        backgroundImage: `url(${passwordIcon})`,
                        backgroundSize: '32px,32px',
                        backgroundRepeat: 'no-repeat',
                        paddingLeft: '35px',
                      }}
                      placeholder="ยืนยันพาสเวิร์ด"
                    />
                  </Form.Field>
                </Form>
                <Button
                  style={{
                    marginTop: '50px',
                    marginBottom: '129px',
                    textAlign: 'center',
                    width: '329px',
                    backgroundColor: '#3A7BD5',
                    color: 'white',
                  }}
                >
                  สมัครมสาชิก
                </Button>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

SingUp.propTypes = {}

const mapStateToProps = state => ({
  user: state.user,
})
export default connect(mapStateToProps, {})(SingUp)
