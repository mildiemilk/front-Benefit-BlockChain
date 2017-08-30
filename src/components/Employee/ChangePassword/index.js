import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updatePassword } from '../../../api/auth';

const passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{8,20}/;

class ChangePassword extends Component {
  static propTypes = {
    updatePassword: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      password: '',
      confirmPassword: '',
      error: null,
    };
  }

  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmitButton = () => {
    this.setState({ error: null });
    const { oldPassword, password, confirmPassword } = this.state;
    const checkPassword = passwordPattern.test(password);
    if (password.length >= 8 && password.length <= 20) {
      if (!checkPassword) {
        this.setState({ error: 'พาสเวิร์ดควรมีตัวอักษรพิมพ์เล็กพิมพ์ใหญ่และตัวเลข' });
      } else {
        if (password === confirmPassword) {
          this.props.updatePassword(oldPassword, confirmPassword);
        } else {
          this.setState({ error: 'พาสเวิร์ดไม่ตรงกัน' });
        }
      }
    } else {
      this.setState({ error: 'พาสเวิร์ดควรมีความยาว 8-20 ตัวอักษร' });
    }
  }

  render() {
    return (
      <div>
        <div className="cp-box-header">เปลี่ยนรหัสผ่าน</div>
        <div className="cp-box">
          <div className="cp-body-box">
            รหัสผ่านเก่า
            <input
              className="cp-input"
              type="password"
              name="oldPassword"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="cp-body-box">
            รหัสผ่านใหม่
            <input
              className="cp-input"
              type="password"
              name="password"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="cp-body-box">
            ยืนยันรหัสผ่านใหม่
            <input
              className="cp-input"
              type="password"
              name="confirmPassword"
              onChange={this.handleChangeInput}
            />
          </div>
          <p className="cp-error-msg">{ this.state.error }</p>
          <button onClick={this.handleSubmitButton} className="cp-btn">เปลี่ยนรหัส</button>
        </div>
        <Link to="/setting">
          <span className="cp-back-btn"> &lt; ย้อนกลับ</span>
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  updatePassword: (password, confirmPassword) => dispatch(
    updatePassword(password, confirmPassword),
  ),
});

export default connect(null, mapDispatchToProps)(ChangePassword);
