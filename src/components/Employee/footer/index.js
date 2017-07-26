import React, { Component } from 'react'
import '../../../styles/employee-style/login-verify.scss'
import footerLogo from '../../image/logo-footer.png'

class Footer extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="box-in-footer">
              <img src={footerLogo} alt="footerLogo" />
            </div>
            <div className="footer-Head">
              <div className="footer-list">เกี่ยวกับเรา</div>
              <div className="footer-list">ติดต่อเรา</div>
              <div className="footer-list">แจ้งปัญหา</div>
              <div className="footer-list">Terms</div>
              <div className="footer-list">Privacy</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
