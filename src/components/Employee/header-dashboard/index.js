import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import '../../../styles/employee-style/login-verify.scss'
import logo from '../../image/logo-benefitable-mobile.png'

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="mobile-header-dashboard">
          <div className="row">
            <div className="small-3 columns">
              <div className="icon-bar-header">
                <Icon name="bars" size="big" />
              </div>
            </div>
            <div className="small-9 columns">
              <div className="logo-header">
                <img src={logo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
