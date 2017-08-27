import React, { Component } from 'react';
import DefaultImg from '../../../../assets/employee/user@3x.png';
import IconUploadImg from '../../../../assets/employee/icon_upload_img@3x.png';

class HeadProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="profile-box-header">
          <img className="profile-img" alt="" src={DefaultImg} />
          <button className="profile-btn-upload">
            <img className="profile-icon-upload-img" alt="" src={IconUploadImg} />
            เลือกรูปโปรไฟล์
          </button>
          <div className="profile-box-name">
            <span className="profile-name">สมศรี ช่างสงสัย</span>
            <span className="profile-no">เลขพนักงาน : 00001023</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadProfile;
