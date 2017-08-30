import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import '../../../styles/employee-style/login-verify.scss';
import gift from '../../image/gigift-mobile.png';
import emailIcon from '../../image/icons-8-message.png';
import keyIcon from '../../image/icons-8-key-copy.png';
import Header from '../header';
import Footer from '../footer';
import { LogInButton } from './styled';

class EmployeeLoginMobile extends Component {
  static propTypes = {
    data: PropTypes.shape.isRequired,
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
        <div className="row bg">
          <div className="small-10 small-centered columns">
            <div className="gift-logo-in-mobile">
              <img src={gift} alt="gift" />
              <div className="form-login-mobile">
                <Form>
                  <Form.Field>
                    <div className="divInput">
                      <img
                        className="iconImage"
                        alt="icomEmail"
                        src={emailIcon}
                      />
                      <Form.Input
                        placeholder="อีเมล"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Form.Field>
                  <Form.Field>
                    <div className="divInput">
                      <img
                        className="iconImage"
                        alt="iconKey"
                        src={keyIcon}
                      />
                      <Form.Input
                        name="password"
                        placeholder="รหัสผ่าน"
                        type="password"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Form.Field>
                  {
                    data.error ?
                      <p style={{ color: 'red' }}>
                        {' '}{data.message}
                      </p>
                    : <p />
                  }
                  <a className="link-mobile-login">ลืมรหัสผ่าน?</a>
                  <LogInButton onClick={handleSubmit}>
                    ลงชื่อเข้าใช้
                  </LogInButton>
                </Form>
              </div>
            </div>
          </div>
          <div className="small-2 columns" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default EmployeeLoginMobile;
