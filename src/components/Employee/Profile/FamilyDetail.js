import React, { Component } from 'react';
import HeaderBox from './HeaderBox';
import IconGroup from '../../../../assets/employee/icon_group@3x.png';
import IconAddUser from '../../../../assets/employee/icon_add_user@3x.png';

class FamilyDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="profile-pd-box">
        <HeaderBox icon={IconGroup} title="สมาชิกในครอบครัว" />
        <div className="profile-pd-body-box">
          <span className="profile-pd-body-name">สมศักดิ์ ช่างถาม</span>
          <div className="profile-pd-body-name-box">
            <span className="profile-pd-body-name-tab">วันเกิด:</span>
            <span>18 เมษายน 2540</span>
          </div>
          <div className="profile-pd-body-name-box">
            <span className="profile-pd-body-name-tab">อายุ:</span>
            <span>30 ปี</span>
          </div>
          <div className="profile-pd-body-name-box">
            <span className="profile-pd-body-name-tab">ความสัมพันธ์:</span>
            <span>บิดา</span>
          </div>
        </div>
        <div className="profile-pd-body-box">
          <span className="profile-pd-body-name">ฐิติมา เพ็ญพักตร์</span>
          <div className="profile-pd-body-name-box">
            <span className="profile-pd-body-name-tab">วันเกิด:</span>
            <span>18 เมษายน 2540</span>
          </div>
          <div className="profile-pd-body-name-box">
            <span className="profile-pd-body-name-tab">อายุ:</span>
            <span>30 ปี</span>
          </div>
          <div className="profile-pd-body-name-box">
            <span className="profile-pd-body-name-tab">ความสัมพันธ์:</span>
            <span>มารดา</span>
          </div>
        </div>
        <div className="profile-pd-body-box">
          <div className="profile-pd-body-btn-add-user">
            <img className="profile-pd-body-icon-add-user" alt="" src={IconAddUser} />
            <span>เพิ่มสมาชิกในครอบครัว</span>
          </div>
        </div>
      </div>
    );
  }
}

export default FamilyDetail;
