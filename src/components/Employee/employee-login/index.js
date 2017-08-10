import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { authenticate } from '../../../api/auth';
import '../../../styles/employee-style/login-verify.scss';
import gift from '../../image/gigift-mobile.png';
import emailIcon from '../../image/icons-8-message.png';
import keyIcon from '../../image/icons-8-key-copy.png';
import Header from '../header';
import Footer from '../footer';
import ModalAddData from './modal-add-data';

class EmployeeLogin extends Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
    authenticate: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.authenticate(email, password);
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  render() {
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </Form.Field>
                  {this.props.data.error
                    ? <p style={{ color: 'red' }}>
                      {' '}{this.props.data.message}
                    </p>
                    : <p />}
                  <a className="link-mobile-login">ลืมพาสเวิร์ด?</a>
                  <ModalAddData
                    email={this.state.email}
                    password={this.state.password}
                    handleSubmit={this.handleSubmit}
                  />
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

EmployeeLogin.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  authenticate: (email, password) => dispatch(authenticate(email, password)),
});
const mapStateToProps = state => ({
  data: state.authReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLogin);
