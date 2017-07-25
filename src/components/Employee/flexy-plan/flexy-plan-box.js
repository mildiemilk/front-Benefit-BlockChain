import React, { Component } from 'react'
import Flexy1 from '../../image/flexy-1.png'
import Flexy2 from '../../image/flexy-2.png'
import Flexy3 from '../../image/flexy-3.png'

class FlexyPlanBox extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="box-space">
          <div className="flexy-plan-box">
            <div className="head-flexy-plan-box">
              <span className="flexy-plan-header">แผนประกันภัย</span>
              <span className="link-flexy-plan">ดูเพิ่มเติม &gt;</span>
            </div>
            <div className="flexy-plan-detail-box">
              <div className="row">
                <div className="small-9 columns">
                  <div className="header-flexy-plan-detail">
                    ผลประโยชน์และความคุ้มครอง
                  </div>
                  <div className="detail-flexy-text">ค่าห้อง : 400 บาท</div>
                  <div className="detail-flexy-text">
                    ผ่าตัด : 20,000 บาท/ครั้ง
                  </div>
                </div>
                <div className="small-3 columns">
                  <div className="flexy-image-box">
                    <img src={Flexy1} alt="Plan1" className="flexy-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flexy-plan-box">
            <div className="head-flexy-plan-box">
              <span className="flexy-plan-header">สุขภาพ</span>
              <span className="link-flexy-plan">ดูเพิ่มเติม &gt;</span>
            </div>
            <div className="flexy-plan-detail-box">
              <div className="row">
                <div className="small-9 columns">
                  <div className="header-flexy-plan-detail">
                    ผลประโยชน์และความคุ้มครอง
                  </div>
                  <div className="detail-flexy-text">ค่าห้อง : 400 บาท</div>
                  <div className="detail-flexy-text">บริการ : 2,000 บาท</div>
                </div>
                <div className="small-3 columns">
                  <div className="flexy-image-box">
                    <img src={Flexy2} alt="Plan2" className="flexy-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flexy-plan-box">
            <div className="head-flexy-plan-box">
              <span className="flexy-plan-header">สุขภาพ</span>
              <span className="link-flexy-plan">ดูเพิ่มเติม &gt;</span>
            </div>
            <div className="flexy-plan-detail-box">
              <div className="row">
                <div className="small-9 columns">
                  <div className="header-flexy-plan-detail">
                    ผลประโยชน์และความคุ้มครอง
                  </div>
                  <div className="detail-flexy-text">ค่าห้อง : 400 บาท</div>
                  <div className="detail-flexy-text">บริการ : 2,000 บาท</div>
                </div>
                <div className="small-3 columns">
                  <div className="flexy-image-box">
                    <img src={Flexy3} alt="Plan3" className="flexy-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlexyPlanBox
