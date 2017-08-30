import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { authenticate } from '../../../api/auth';
import EmployeeLoginMobile from './IndexMobile';
import EmployeeLoginDesktop from './IndexDesktop';

class EmployeeLogin extends Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
    authenticate: PropTypes.func.isRequired,
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
    const {
      data,
    } = this.props;
    return (
      <div>
        <MediaQuery query="(max-width: 767px)">
          <EmployeeLoginMobile
            data={data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <EmployeeLoginDesktop
            data={data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </MediaQuery>
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
