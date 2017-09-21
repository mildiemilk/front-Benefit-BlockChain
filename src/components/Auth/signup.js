import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Popup } from 'semantic-ui-react';
import logo from '../image/logo.png';
import '../../styles/signup.scss';
import { register } from '../../api/auth';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      role: 'HR',
    };
  }

  onInputChange(e) {
    this.setState({ nameInput: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password, confirmPassword, role } = this.state;
    this.props.register(email, password, confirmPassword, role);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div className="signupStyle">
        <div className="box">
          <img src={logo} alt="logo" style={{ maxWidth: '30%' }} />
          <div className="large-8 large-centered columns">
            <div className="boxForm">
              <h2 className="header"> สร้างบัญชีผู้ใช้ </h2>
              <div className="row" />
              <div className="boxCenter">
                <div className="row">
                  <div className="large-5 large-centered columns">
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Field>
                        <div className="divInput">
                          <img
                            className="iconUser"
                            alt="iconUser"
                            src="../../../login/icons8-user.png"
                          />
                          <Form.Input
                            placeholder="อีเมลของคุณ"
                            name="email"
                            onChange={this.handleChange}
                            type="email"
                            required
                          />
                        </div>
                      </Form.Field>
                      <Form.Field>
                        <div className="divInput">
                          <img
                            className="iconPassword"
                            alt="iconPassword"
                            src="../../../login/icons8-password.png"
                          />
                          <Popup
                            trigger={
                              <Form.Input
                                placeholder="พาสเวิร์ด"
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                                required
                              />
                            }
                            header="คำแนะนำ:"
                            content="รหัสผ่านควรมีความยาว 8-20 ตัวอักษรและประกอบด้วยตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และตัวเลข"
                            on="click"
                          />
                        </div>
                      </Form.Field>
                      <Form.Field>
                        <div className="divInput">
                          <img
                            className="iconPassword"
                            alt="iconPassword"
                            src="../../../login/icons8-password.png"
                          />
                          <Form.Input
                            placeholder="ยืนยันพาสเวิร์ด"
                            name="confirmPassword"
                            type="password"
                            onChange={this.handleChange}
                            required
                          />
                        </div>
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
      </div>
    );
  }
}

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  register: (email, password, confirmPassword, role) =>
    dispatch(register(email, password, confirmPassword, role)),
});

export default connect(null, mapDispatchToProps)(SignUp);
