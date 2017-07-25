import React, { Component } from 'react'
import '../../../styles/employee-style/health-genaral.scss'
import healthImage from '../../image/health-detail.png'
import info from '../../image/icons-8-info.png'

class HealthDetail extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="row health">
          <div className="small-10 small-centered columns">
            <div className="employee-health-box">
              <p>สิทธิประโยชน์ด้านสุขภาพ</p>
              <div className="health-image-box">
                <img src={info} alt="info" style={{ float: 'right' }} />
                <br />
                <img
                  src={healthImage}
                  alt="health"
                  style={{ marginTop: '2%' }}
                />
                <p className="text-image-health">HEALTH</p>
              </div>
              <div className="detail-health-box">
                <div className="row">
                  <div className="text-in-health-image-box">
                    <div className="small-6 columns">
                      <div>วงเงินทั้งหมด</div>
                      <div>ซื้อสินค้า</div>
                      <div className="pharagraph-text">บริการสินค้า</div>
                    </div>
                    <div className="small-6 columns">
                      <div className="position-text">
                        <div>1,200 บาท/ปี</div>
                        <div>400 บาท</div>
                        <div>800 บาท</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="condition-health-box">
                <div className="text-head-condition">
                  เงื่อนไขในการใช้ Benefit
                </div>
                <div>- ไม่รวมสินค้าสำหรับบริโภค</div>
                <div>- ใช้ซื้อสินค้าได้แค่ในหมวดกีฬา</div>
              </div>
            </div>
          </div>
          <div className="link-back-health-detail">
            <a className="link-back-health-detail"><u>&lt; ย้อนกลับ</u></a>
          </div>
        </div>
      </div>
    )
  }
}

export default HealthDetail
