import React, { Component } from 'react'
import '../../../styles/employee-style/login-verify.scss'
import logo from '../../image/logo-benefitable-mobile.png'

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div id='header'>
          <div className="mobile-header">
            <img src={logo} />
          </div>
      </div>
    )
  }
}

export default Header
