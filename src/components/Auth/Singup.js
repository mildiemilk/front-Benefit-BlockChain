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
class SingUpp extends Component {
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
      <div style={{ margin: '55px 0px 0px 0px', textAlign: 'center' }}>
        <img src={logo} />
        <div
          style={{
            boxShadow: ' 0 1px 7px 2px rgba(0, 0, 0, 0.08)',
            marginLeft: '165px',
            marginTop: '41px',
            width: '943px',
          }}
        >
          <h2 style={{ margin: '0px 0px 30px 0px', paddingTop: '63px' }}>
            สร้างบัญชีผู้ใช้
          </h2>
          <div
            style={{
              backgroundImage: `url(${city})`,
              width: '943px',
              height: '385px',
            }}
          >
            <Form>
              <Form.Field>
                <input style={{ width: '325px' }} placeholder="อีเมลของคุณ" />
              </Form.Field>
              <Form.Field>
                <input style={{ width: '325px' }} placeholder="พาสเวิร์ด" />
              </Form.Field>
              <Form.Field>
                <input
                  style={{ width: '325px' }}
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
          </div>
        </div>
      </div>
    )
  }
}

SingUpp.propTypes = {}

const mapStateToProps = state => ({
  user: state.user,
})
export default connect(mapStateToProps, {})(SingUpp)
