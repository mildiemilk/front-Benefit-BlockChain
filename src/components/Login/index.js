import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { authenticate } from '../../api/auth';
import LoginMobile from './IndexMobile';
import LoginDesktop from './IndexDesktop';

class AuthLogin extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    authenticate: PropTypes.func.isRequired,
    profile: PropTypes.shape({}).isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }
  static defaultProps = {
    newUser: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.authenticate(email, password);
  }

  render() {
    const { data, text, status, profile } = this.props;
    const { approve, role, personalVerify, newUser } = data;
    const { companyName } = profile;
    if (role === 'Employee') {
      if (!personalVerify) {
        return <Redirect to={{ pathname: '/employeeverify' }} />;
      }
      if (newUser) {
        return <Redirect to={{ pathname: '/plan' }} />;
      }
      return <Redirect to={{ pathname: '/homedashboard' }} />;
    } else if (role === 'HR') {
      if (companyName && approve) {
        return <Redirect to={{ pathname: '/dashboard' }} />;
      } else if (companyName && !approve) {
        return <Redirect to={{ pathname: '/confirm_identity' }} />;
      }
      return <Redirect to={{ pathname: '/settingprofile' }} />;
    } else if (role === 'Insurer') {
      return <Redirect to={{ pathname: '/dashboard' }} />;
    }

    const showEmployee = text =>
      <div>
        <MediaQuery query="(max-width: 767px)">
          <LoginMobile
            data={data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <LoginDesktop
            data={data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            text={text}
            status={status}
          />
        </MediaQuery>
      </div>;

    return (
      <div style={{ height: '100vh' }}>
        {
          status === 'employee'
          ? showEmployee(text)
          : <LoginDesktop
            data={data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            text={text}
            status={status}
          />
        }
      </div>
    );
  }
}

AuthLogin.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  authenticate: (email, password) => dispatch(authenticate(email, password)),
});
const mapStateToProps = state => ({
  data: state.authReducer,
  profile: state.profile,
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);
