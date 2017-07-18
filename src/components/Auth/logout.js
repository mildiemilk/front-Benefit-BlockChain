import React, { Component } from 'react'
import { logout } from '../../api/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    props.logout()
  }

  render() {
    console.log('aaaaaaaaaaaaaaaaaaaa')
    return (
      <div>
        logout
      </div>
    )
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(Logout)
