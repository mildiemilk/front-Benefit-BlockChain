import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Plan from '../../../../assets/employee/plan.png';
import Claim from '../../../../assets/employee/claim.png';
import StatusClaim from '../../../../assets/employee/status_claim.png';
import FindHospital from '../../../../assets/employee/hospital.png';
import Profile from '../../../../assets/employee/profile.png';
import Setting from '../../../../assets/employee/setting.png';
import IconView from '../../../../assets/employee/icon_view.png';

class HomeDashboard extends Component {
  constructor() {
    super();
    this.state = {
      alertFlexyNextPlan: false,
      alertFlexyNextPlanSelected: true,
      alertFixNextPlan: false,
    };
  }

  handleShowAlert = () => {
    const {
      alertFlexyNextPlan,
      alertFlexyNextPlanSelected,
      alertFixNextPlan,
    } = this.state;
    if (alertFlexyNextPlan) {
      return (
        <div className="hb-alert-flexy-plan">
          <div className="hb-alert-flexy-box-text">
            <Icon name="warning sign" />
            <span className="hb-alert-flexy-text">
              กรุณาเลือกแผนปีถัดไปภายในวันที่ 12 เม.ย. 61
            </span>
          </div>
          <Link to="/flexyplan">
            <button className="hb-alert-flexy-btn">
              เลือกแผนสิทธิประโยชน์สำหรับปีถัดไป
            </button>
          </Link>
        </div>
      );
    } else if (alertFixNextPlan) {
      return (
        <div className="hb-alert-fix-plan">
          <div className="hb-alert-fix-box-header">
            <Icon className="hb-alert-fix-icon" name="gift" />
            <div className="hb-alert-fix-box-text">
              <p className="hb-alert-fix-text">สิทธิประโยชน์ของคุณจะเริ่มมีผล</p>
              <p className="hb-alert-fix-text">วันที่ 1 พฤษภาคม 2560</p>
            </div>
          </div>
          <Link to="/flexyplan">
            <button className="hb-alert-fix-btn">
              <img className="hb-alert-fix-icon-view" alt="IconView" src={IconView} />
              ดูแผนของคุณ
            </button>
          </Link>
        </div>
      );
    } else if (alertFlexyNextPlanSelected) {
      return (
        <div>
          <div className="hb-alert-flexy-s-box">
            <div className="hb-alert-flexy-s-text-box">
              <Icon className="hb-alert-flexy-s-icon" name="file text" />
              <span>คุณกำลังเลือกแผนที่ 1</span>
            </div>
            <div className="hb-alert-flexy-s-btn-box">
              <Link to="/flexyplan">
                <button className="hb-alert-flexy-s-btn-change">เปลี่ยนแผน</button>
              </Link>
              <Link to="/flexyplan">
                <button className="hb-alert-flexy-s-btn-view">
                  <img className="hb-alert-flexy-s-icon-view" alt="IconView" src={IconView} />
                  ดูแผนที่เลือก
                </button>
              </Link>
            </div>
          </div>
          <div className="hb-alert-flexy-s-detail-box">
            <span className="hb-alert-flexy-s-text">สามารถเปลี่ยนแผนได้ภายในวันที่ 12 เม.ย. 61</span>
            <span className="hb-alert-flexy-s-text">นับถอยหลัง 08 วัน : 12 ชั่วโมง : 40 นาที</span>
          </div>
        </div>
      );
    }
    return <div />;
  }

  render() {
    return (
      <div>
        { this.handleShowAlert() }
        <span className="hb-header">ยินดีต้อนรับเข้าสู่ BenefiTable</span>
        <div className="hb-box">
          <div className="hb-box-row row">
            <Link to="/flexyplan">
              <div className="hb-box-item">
                <img className="hb-box-item-img" alt="plan" src={Plan} />
                <span className="hb-box-item-text">แผนสิทธิประโยชน์</span>
              </div>
            </Link>
            <Link to="/claiminsurance">
              <div className="hb-box-item">
                <img className="hb-box-item-img" alt="plan" src={Claim} />
                <span className="hb-box-item-text">เคลม</span>
              </div>
            </Link>
          </div>
          <div className="hb-box-row row">
            <Link to="/claimstatus">
              <div className="hb-box-item">
                <img className="hb-box-item-img" alt="plan" src={StatusClaim} />
                <span className="hb-box-item-text">สถานะการเคม</span>
              </div>
            </Link>
            <Link to="/findhospital">
              <div className="hb-box-item">
                <img className="hb-box-item-img" alt="plan" src={FindHospital} />
                <span className="hb-box-item-text">ค้นหาโรงพบาบาล</span>
              </div>
            </Link>
          </div>
          <div className="hb-box-row row">
            <Link to="/profile">
              <div className="hb-box-item">
                <img className="hb-box-item-img" alt="plan" src={Profile} />
                <span className="hb-box-item-text">โปรไฟล์</span>
              </div>
            </Link>
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
