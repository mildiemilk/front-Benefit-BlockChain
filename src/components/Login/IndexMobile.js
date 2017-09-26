import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import '../../styles/employee-style/login-verify.scss';
import gift from '../image/gigift-mobile.png';
import emailIcon from '../image/icons-8-message.png';
import keyIcon from '../image/icons-8-key-copy.png';
import Header from '../Employee/header/HeaderMobile';
import Footer from '../Employee/footer';

class EmployeeLoginMobile extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      data,
      handleChange,
      handleSubmit,
    } = this.props;
    return (
      <div className="login">
        <Header />
        <div className="login-m-box">
          <img alt="" className="login-m-img-gift" src={gift} />
          <Input className="login-m-input-box" iconPosition="left" placeholder="อีเมล">
            <img className="login-m-icon-input" src={emailIcon} alt="at" />
            <input name="email" type="email" onChange={handleChange} />
          </Input>
          <Input className="login-m-input-box" iconPosition="left" placeholder="รหัสผ่าน">
            <img className="login-m-icon-input" src={keyIcon} alt="at" />
            <input name="password" type="password" onChange={handleChange} />
          </Input>
          {
            data.error ?
              <p className="login-m-error-msg">
                {data.message}
              </p>
            : <div />
          }
          <a className="login-m-forget">ลืมรหัสผ่าน?</a>
          <button className="login-m-btn-login" onClick={handleSubmit}>
            ลงชื่อเข้าใช้
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EmployeeLoginMobile;
