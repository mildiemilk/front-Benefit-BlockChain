import React, { Component } from 'react';
import gift from '../../image/gigift-mobile.png';

class DashboardStart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard-start">
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="dashboard-start-box">
              <img src={gift} alt="gift" />
              <ul className="text-dashboard-start">
                <li>สิทธิประโยชน์ของคุณจะเริ่มมีผล</li>
                <li>วันที่ 1 พฤษภาคม 2560</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardStart;
