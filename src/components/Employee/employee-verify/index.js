import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import '../../../styles/employee-style/login-verify.scss';
import key from '../../image/key.png';
import keyIcon from '../../image/icons-8-key-copy.png';

class EmployeeVerify extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="white-background">
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="form-key-box">
              <img src={key} alt="key" />
              <p>ตั้งรหัสผ่านบัญชีผู้ใช้</p>
              <Form>
                <Form.Field>
                  <div className="divInput">
                    <img className="iconImage" alt="keyIcon" src={keyIcon} />
                    <Form.Input
                      placeholder="รหัสผ่าน"
                      type="password"
                      required
                    />
                  </div>
                </Form.Field>
                <Form.Field>
                  <div className="divInput">
                    <img className="iconImage" alt="keyIcon" src={keyIcon} />
                    <Form.Input
                      placeholder="กรอกรหัสผ่านอีกครั้ง"
                      type="password"
                      required
                    />
                  </div>
                </Form.Field>
                <button className="button-submit-key">
                  ตั้งรหัสผ่านสำหรับใช้งาน
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeVerify;
