import React, { Component } from 'react';
import AuthLogin from '../../Login';

class InsurerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AuthLogin text="เข้าด้วย E-mail ของคุณหรือ Username" status="insurer" />
    );
  }
}

export default InsurerLogin;
