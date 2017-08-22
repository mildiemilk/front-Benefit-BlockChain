import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Container } from 'semantic-ui-react';
import gift from '../image/gigift.jpg';
import logo from '../image/logo.png';
import '../../styles/login-style.scss';
import { authenticate } from '../../api/auth';

class Login extends Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
    data: PropTypes.shape.isRequired,
    profile: PropTypes.shape.isRequired,
  }

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.authenticate(email, password);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { error, message, approve, role, personalVerify } = this.props.data;
    const { companyName } = this.props.profile;
    if (role === 'HR') {
      if (companyName && approve) {
        return <Redirect to={{ pathname: '/dashboard' }} />;
      } else if (companyName && !approve) {
        return <Redirect to={{ pathname: '/confirm_identity' }} />;
      }
      return <Redirect to={{ pathname: '/settingprofile' }} />;
    } else if (role === 'Employee') {
      if (approve === true) {
        if (!personalVerify) {
          return <Redirect to={{ pathname: '/employeeverify' }} />;
        } return <Redirect to={{ pathname: '/flexyplan' }} />;
      }
    }
    return (
      <div className="loginStyle">
        <div className="row">
          <div className="large-10 large-offset-4 columns">
            <div className="logostyle">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <Container>
          <div className="large-10 large-centered columns">
            <div className="inbox-login">
              <div className="row">
                <div className="large-5 columns">
                  <img src={gift} alt="gift" className="gift" />
                </div>
                <div className="large-5 columns">
                  <h2 style={{ marginTop: '23%' }}>เข้าสู่ระบบ</h2>
                  <p>เข้าด้วย E-mail ของคุณหรือ Username</p>
                  <hr className="line0" />
                  <Form
                    style={{ paddingLeft: '0px' }}
                    onSubmit={this.handleSubmit}
                  >
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
                          type="email"
                          onChange={this.handleChange}
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
                        <Form.Input
                          placeholder="พาสเวิร์ด"
                          name="password"
                          type="password"
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </Form.Field>
                    {error
                      ? <p style={{ color: 'red' }}>
                        {' '}{message}
                      </p>
                      : <p />}
                    <a className="link">ลืมพาสเวิร์ด?</a>
                    <button className="logInButton">
                      ลงชื่อเข้าใช้
                    </button>
                  </Form>
                  <hr className="line2" />
                  <p className="question">ยังไม่เคยสมัคร?</p>
                  <Link to="/signup"><button
                    className="newMemberButton"
                  >
                    สร้างบัญชีใหม่
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  authenticate: (email, password) => dispatch(authenticate(email, password)),
});
const mapStateToProps = state => ({
  data: state.authReducer,
  profile: state.profile,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
