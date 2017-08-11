import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { updatePassword } from '../../../api/auth';
import { updatePersonalDetails } from '../../../api/personalDetail';
import ModalAddData from './modal-add-data';
import '../../../styles/employee-style/login-verify.scss';
import key from '../../image/key.png';
import keyIcon from '../../image/icons-8-key-copy.png';

const passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{8,20}/;
const phonePattern = /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class EmployeeVerify extends Component {
  static propTypes = {
    updatePassword: PropTypes.func.isRequired,
    updatePersonalDetails: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      password: '',
      confirmPassword: '',
      email: '',
      phone: '',
      showModal: false,
      error: null,
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleSubmitButtonModal = this.handleSubmitButtonModal.bind(this);
    this.handleHideModel = this.handleHideModel.bind(this);
  }

  handleChangeInput = ({ target: { name, value } }) => {
    // console.log(name, value)
    const checkPassword = passwordPattern.test(value);
    if (name === 'password') {
      if (value.length >= 8 && value.length <= 20) {
        if (!checkPassword) {
          // console.log('chackPassword: ', checkPassword)
          this.setState({ error: 'พาสเวิร์ดควรมีตัวอักษรพิมพ์เล็กพิมพ์ใหญ่และตัวเลข' });
        } else {
          this.setState({ error: '' });
        }
      } else if (value === '') {
        this.setState({ error: '' });
      } else {
        this.setState({ error: 'พาสเวิร์ดควรมีความยาว 8-20 ตัวอักษร' });
      }
    }
    this.setState({ [name]: value });
  }

  handleSubmitButton() {
    // console.log('handleSubmitButton')
    this.setState({ error: null });
    const { password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      this.props.updatePassword(password, confirmPassword);
      // console.log('Password === ConfirmPassword')
      this.setState({ showModal: true });
    } else {
      this.setState({ error: 'พาสเวิร์ดไม่ตรงกัน' });
      // console.log('Password !== ConfirmPassword')
    }
  }

  handleSubmitButtonModal() {
    const { email, phone } = this.state;
    const checkEmail = emailPattern.test(email);
    const checkPhone = phonePattern.test(phone);
    if (email && !phone) {
      this.setState({ error: 'กรุณากรอกเบอร์โทรศัพท์ด้วยค่ะ' });
    } else if (!email && phone) {
      this.setState({ error: 'กรุณากรอกอีเมลด้วยค่ะ' });
    } else {
      this.setState({ error: '' });
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

  handleHideModel() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="white-background">
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="form-key-box">
              <img src={key} alt="key" />
              <p>ตั้งรหัสผ่านบัญชีผู้ใช้</p>
              <Form onSubmit={this.handleSubmitButton}>
                <Form.Field>
                  <div className="divInput">
                    <img className="iconImage" alt="keyIcon" src={keyIcon} />
                    <Form.Input
                      placeholder="รหัสผ่าน"
                      type="password"
                      name="password"
                      defaultValue={this.state.password}
                      onChange={e => this.handleChangeInput(e)}
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
            </div>
          </div>
        </div>
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
