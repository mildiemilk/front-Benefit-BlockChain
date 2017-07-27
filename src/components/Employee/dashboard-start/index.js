import React, { Component } from 'react'
import gift from '../../image/gigift-mobile.png'

class DashboardStart extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="dashboard-start">
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="dashboard-start-box">
              <img src={gift} alt="gift" />
              <div className="text-dashboard-start">
                <p>สิทธิประโยชน์ของคุณจะเริ่มมีผล</p>
                <p>วันที่ 1 พฤษภาคม 2560</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardStart
