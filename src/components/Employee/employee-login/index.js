import React, { Component } from 'react';
import AuthLogin from '../../Login';

class EmployeeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AuthLogin text="เข้าสู่ระบบด้วยอีเมลของคุณ" status="employee" />
    );
  }
}

export default EmployeeLogin;
