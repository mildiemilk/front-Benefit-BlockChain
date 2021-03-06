import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../api/auth';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    props.logout();
  }

  render() {
    return (
      <div>
        logout
      </div>
    );
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
