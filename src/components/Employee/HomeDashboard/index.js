import React, { Component } from 'react';
import Plan from '../../../../assets/employee/plan.png';
import Claim from '../../../../assets/employee/claim.png';
import StatusClaim from '../../../../assets/employee/status_claim.png';
import FindHospital from '../../../../assets/employee/hospital.png';
import Profile from '../../../../assets/employee/profile.png';
import Setting from '../../../../assets/employee/setting.png';

class HomeDashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <span className="hb-header">ยินดีต้อนรับเข้าสู่ BenefiTable</span>
        <div className="hb-box">
          <div className="hb-box-row row">
            <div className="hb-box-item">
              <img className="hb-box-item-img" alt="plan" src={Plan} />
              <span className="hb-box-item-text">แผนสิทธิประโยชน์</span>
            </div>
            <div className="hb-box-item">
              <img className="hb-box-item-img" alt="plan" src={Claim} />
              <span className="hb-box-item-text">เคลม</span>
            </div>
          </div>
          <div className="hb-box-row row">
            <div className="hb-box-item">
              <img className="hb-box-item-img" alt="plan" src={StatusClaim} />
              <span className="hb-box-item-text">สถานะการเคม</span>
            </div>
            <div className="hb-box-item">
              <img className="hb-box-item-img" alt="plan" src={FindHospital} />
              <span className="hb-box-item-text">ค้นหาโรงพบาบาล</span>
            </div>
          </div>
          <div className="hb-box-row row">
            <div className="hb-box-item">
              <img className="hb-box-item-img" alt="plan" src={Profile} />
              <span className="hb-box-item-text">โปรไฟล์</span>
            </div>
            <div className="hb-box-item">
              <img className="hb-box-item-img" alt="plan" src={Setting} />
              <span className="hb-box-item-text">ตั้งค่า</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeDashboard;
