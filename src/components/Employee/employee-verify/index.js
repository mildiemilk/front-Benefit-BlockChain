import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Popup } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { updatePassword } from '../../../api/auth';
import { updatePersonalDetails } from '../../../api/personalDetail';
import ModalAddData from './modal-add-data';
import '../../../styles/employee-style/login-verify.scss';
import key from '../../image/key.png';
import keyIcon from '../../image/icons-8-key-copy.png';
import Logo from '../../../../assets/employee/logo@3x.png';

const passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{8,20}/;
const phonePattern = /^[+]?[(]?[0-9]{2,3}[)]?[-\\.]?[0-9]{3}[-\\.]?[0-9]{4,6}$/im;
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class EmployeeVerify extends Component {
  static propTypes = {
    updatePassword: PropTypes.func.isRequired,
    updatePersonalDetails: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      email: '',
      phone: '',
      showModal: false,
      error: null,
    };
  }

  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmitButton = () => {
    this.setState({ error: null });
    const { password, confirmPassword } = this.state;
    const checkPassword = passwordPattern.test(password);
    if (password.length >= 8 && password.length <= 20) {
      if (!checkPassword) {
        this.setState({ error: 'พาสเวิร์ดควรมีตัวอักษรพิมพ์เล็กพิมพ์ใหญ่และตัวเลข' });
      } else {
        if (password === confirmPassword) {
          this.props.updatePassword(password, confirmPassword);
          this.setState({ showModal: true, error: null });
        } else {
          this.setState({ error: 'พาสเวิร์ดไม่ตรงกัน' });
        }
      }
    } else {
      this.setState({ error: 'พาสเวิร์ดควรมีความยาว 8-20 ตัวอักษร' });
    }
  }

  handleSubmitButtonModal = () => {
    const { email, phone } = this.state;
    const checkEmail = emailPattern.test(email);
    const checkPhone = phonePattern.test(phone);
    if (email && !phone) {
      this.setState({ error: 'กรุณากรอกเบอร์โทรศัพท์ด้วยค่ะ' });
    } else if (!email && phone) {
      this.setState({ error: 'กรุณากรอกอีเมลด้วยค่ะ' });
    } else {
      this.setState({ error: null });
      if (!checkEmail && !checkPhone) {
        this.setState({ error: 'กรุณากรอกอีเมลและเบอร์โทรศัพท์ให้ถูกต้องด้วยค่ะ' });
      } else if (!checkEmail) {
        this.setState({ error: 'กรุณากรอกอีเมลให้ถูกต้องด้วยค่ะ' });
      } else if (!checkPhone) {
        this.setState({ error: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้องด้วยค่ะ' });
      } else {
        this.props.updatePersonalDetails(email, phone);
      }
    }
  }

  handleHideModel = () => {
    this.setState({ showModal: false });
  }

  handleRenderForm = () =>
    <Form onSubmit={this.handleSubmitButton}>
      <Form.Field>
        <div className="divInput">
          <img className="iconImage" alt="keyIcon" src={keyIcon} />
          <Popup
            trigger={
              <Form.Input
                placeholder="รหัสผ่าน"
                type="password"
                name="password"
                defaultValue={this.state.password}
                onChange={e => this.handleChangeInput(e)}
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
          <img className="iconImage" alt="keyIcon" src={keyIcon} />
          <Form.Input
            placeholder="กรอกรหัสผ่านอีกครั้ง"
            type="password"
            name="confirmPassword"
            defaultValue={this.state.confirmPassword}
            onChange={this.handleChangeInput}
            required
          />
        </div>
      </Form.Field>
      <p style={{ color: 'red' }}>{ this.state.error }</p>
      <button className="button-submit-key" type="submit">
        ตั้งรหัสผ่านสำหรับใช้งาน
      </button>
      <ModalAddData
        error={this.state.error}
        showModal={this.state.showModal}
        handleChangeInput={this.handleChangeInput}
        handleSubmitButtonModal={this.handleSubmitButtonModal}
        handleHideModel={this.handleHideModel}
      />
    </Form>

  render() {
    return (
      <div>
        <MediaQuery query="(max-width: 767px)">
          <div className="white-background">
            <div className="row">
              <div className="small-10 small-centered columns">
                <div className="form-key-box">
                  <img className="emp-verify-icon-key-mobile" src={key} alt="key" />
                  <p>ตั้งรหัสผ่านบัญชีผู้ใช้</p>
                  {this.handleRenderForm()}
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <img className="login-d-logo" alt="" src={Logo} />
          <div className="login-d-box">
            <div className="login-d-box-l">
              <img alt="" src={key} className="login-d-icon-gift" />
            </div>
            <div className="login-d-box-r">
              <span className="login-d-header">ตั้งรหัสผ่านบัญชีผู้ใช้</span>
              <span className="login-d-description">ตั้งรหัสผ่านเพื่อเข้าสู่ระบบในครั้งต่อไป</span>
              <hr className="login-d-line" />
              {this.handleRenderForm()}
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatePassword: (password, confirmPassword) => dispatch(
    updatePassword(password, confirmPassword),
  ),
  updatePersonalDetails: (personalEmail, phone) => dispatch(
    updatePersonalDetails(personalEmail, phone),
  ),
});

export default connect(null, mapDispatchToProps)(EmployeeVerify);
