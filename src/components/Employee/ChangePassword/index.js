import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="cp-box-header">เปลี่ยนรหัสผ่าน</div>
        <div className="cp-box">
          <div className="cp-body-box">
            รหัสผ่านเก่า
            <input className="cp-input" type="password" />
          </div>
          <div className="cp-body-box">
            รหัสผ่านใหม่
            <input className="cp-input" type="password" />
          </div>
          <div className="cp-body-box">
            ยืนยันรหัสผ่านใหม่
            <input className="cp-input" type="password" />
          </div>
          <button className="cp-btn">เปลี่ยนรหัส</button>
        </div>
        <Link to="/setting">
          <span className="cp-back-btn"> &lt; ย้อนกลับ</span>
        </Link>
      </div>
    );
  }
}

export default ChangePassword;
