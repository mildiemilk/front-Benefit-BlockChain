import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Checkbox } from 'semantic-ui-react';
import IconUser from '../../../../assets/employee/icon_user@3x.png';
import IconSendEmail from '../../../../assets/employee/icon_send_email@3x.png';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="setting-header">
          ตั้งค่า
        </div>
        <div className="setting-box line">
          <div className="setting-ac-box">
            <img alt="" className="setting-icon-user" src={IconUser} />
            บัญชีผู้ใช้ของคุณ
          </div>
        </div>
        <div className="setting-box flex">
          <div className="setting-box-l">
            <span className="setting-password">รหัสผ่าน</span>
            <span className="setting-password">***********</span>
          </div>
          <div className="setting-box-r">
            <Link to="/changepassword">
              <Icon className="setting-icon-arrow" name="chevron right" />
            </Link>
          </div>
        </div>
        <div className="setting-box grap line">
          <div className="setting-box-l w75">
            <img className="setting-icon-send-email" src={IconSendEmail} alt="" />
            แจ้งเตือนทางอีเมล
          </div>
          <div className="setting-box-r w25">
            <Checkbox defaultChecked toggle />
          </div>
        </div>
        <div className="setting-box grap">
          <div className="setting-box-l w75">
            เกี่ยวกับการเคลม
          </div>
          <div className="setting-box-r w25">
            <Checkbox toggle />
          </div>
        </div>
      </div>
    );
  }
}

export default Setting;
