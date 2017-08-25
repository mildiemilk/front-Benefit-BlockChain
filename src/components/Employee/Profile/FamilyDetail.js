import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderBox from './HeaderBox';
import InputDate from '../../InputDate';
import ConfirmModal from './ConfirmModal';
import IconGroup from '../../../../assets/employee/icon_group@3x.png';
import IconAddUserBlue from '../../../../assets/employee/icon_add_user_blue.@3x.png';
import IconAddUserGray from '../../../../assets/employee/icon_add_user_gray@3x.png';
import IconRemoveUser from '../../../../assets/employee/icon_remove@3x.png';

class FamilyDetail extends Component {
  static propTypes = {
    handleClickEdit: PropTypes.func.isRequired,
    personalDetail: PropTypes.bool.isRequired,
    familyDetail: PropTypes.bool.isRequired,
    familyDetailAddUser: PropTypes.bool.isRequired,
  }
  constructor() {
    super();
    this.state = {
      modalOpen: false,
    };
  }

  handleClick = () => {
    const {
      handleClickEdit,
      familyDetail,
      familyDetailAddUser,
    } = this.props;
    handleClickEdit('familyDetail', familyDetail);
    handleClickEdit('familyDetailAddUser', familyDetailAddUser);
  }

  handleShow = (show, edit, add) => {
    const {
      familyDetail,
      familyDetailAddUser,
    } = this.props;
    if (familyDetail && familyDetailAddUser) {
      return add;
    } else if (familyDetail) {
      return edit;
    }
    return show;
  }

  handleModal = () => this.setState({ modalOpen: !this.state.modalOpen });

  render() {
    const {
      handleClickEdit,
      personalDetail,
      familyDetail,
    } = this.props;

    const { modalOpen } = this.state;

    const show = (
      <div>
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
      </div>
    );

    const edit = (
      <div>
        <div className="profile-pd-body-box">
          <div className="profile-pd-body-edit-family">
            <span className="profile-pd-edit-family-l">สมาชิกคนที่ 1</span>
            <span
              className="profile-pd-edit-family-r"
              onClick={this.handleModal}
              role="button"
              aria-hidden
            >
              <img alt="" src={IconRemoveUser} className="profile-pd-icon-remove" />
              ลบ
            </span>
          </div>
          <div className="profile-pd-box-text">
            ชื่อ
            <input className="profile-pd-input" type="text" defaultValue="สมศักดิ์ ช่างถาม" />
          </div>
          <div className="profile-pd-box-text">
            วันเกิด
            <InputDate inputClass="profile-pd-input-date" defaultInputDate="18 เมษายน 2540" />
          </div>
          <div className="profile-pd-box-text">
            ความสัมพันธ์
            <input className="profile-pd-input" type="text" defaultValue="บิดา" />
          </div>
        </div>
        <div className="profile-pd-body-box">
          <div className="profile-pd-body-edit-family">
            <span className="profile-pd-edit-family-l">สมาชิกคนที่ 2</span>
            <span
              className="profile-pd-edit-family-r"
              onClick={this.handleModal}
              role="button"
              aria-hidden
            >
              <img alt="" src={IconRemoveUser} className="profile-pd-icon-remove" />
              ลบ
            </span>
          </div>
          <div className="profile-pd-box-text">
            ชื่อ
            <input className="profile-pd-input" type="text" defaultValue="ฐิติมา เพ็ญพักตร์" />
          </div>
          <div className="profile-pd-box-text">
            วันเกิด
            <InputDate inputClass="profile-pd-input" defaultInputDate="18 เมษายน 2540" />
          </div>
          <div className="profile-pd-box-text">
            ความสัมพันธ์
            <input className="profile-pd-input" type="text" defaultValue="มารดา" />
          </div>
          <div className="profile-pd-btn-box">
            <button
              className="profile-pd-btn-cancel"
              onClick={() => handleClickEdit('familyDetail', familyDetail)}
            >
              ยกเลิก
            </button>
            <button
              className="profile-pd-btn-save"
              onClick={() => handleClickEdit('familyDetail', familyDetail)}
            >
              บันทึก
            </button>
          </div>
        </div>
      </div>
    );

    const add = (
      <div>
        <div className="profile-pd-body-box">
          <div className="profile-pd-body-edit-family">
            <span className="profile-pd-edit-family-l">สมาชิกคนที่ 3</span>
            {/* <span
              className="profile-pd-edit-family-r"
              onClick={this.handleModal}
              role="button"
              aria-hidden
            >
              <img alt="" src={IconRemoveUser} className="profile-pd-icon-remove" />
              ลบ
            </span> */}
          </div>
          <div className="profile-pd-box-text">
            ชื่อ
            <input className="profile-pd-input" type="text" defaultValue="" />
          </div>
          <div className="profile-pd-box-text">
            วันเกิด
            <InputDate inputClass="profile-pd-input-date" defaultInputDate="" />
          </div>
          <div className="profile-pd-box-text">
            ความสัมพันธ์
            <input className="profile-pd-input" type="text" defaultValue="" />
          </div>
          <div className="profile-pd-btn-box">
            <button
              className="profile-pd-btn-cancel"
              onClick={this.handleClick}
            >
              ยกเลิก
            </button>
            <button
              className="profile-pd-btn-save"
              onClick={this.handleClick}
            >
              บันทึก
            </button>
          </div>
        </div>
      </div>
    );

    return (
      <div className="profile-pd-box">
        <HeaderBox
          icon={IconGroup}
          title="สมาชิกในครอบครัว"
          handleClickEdit={handleClickEdit}
          personalDetail={personalDetail}
          familyDetail={familyDetail}
          keyChange="familyDetail"
        />
        {this.handleShow(show, edit, add)}
        <div
          className="profile-pd-body-box"
          onClick={this.handleClick}
          role="button"
          aria-hidden
        >
          <div
            className={
              !personalDetail && !familyDetail ?
              'profile-pd-body-btn-add-user'
              : 'profile-pd-body-btn-add-user-deactive'
            }
          >
            <img
              className="profile-pd-body-icon-add-user"
              alt=""
              src={!personalDetail && !familyDetail ? IconAddUserBlue : IconAddUserGray}
            />
            <span>เพิ่มสมาชิกในครอบครัว</span>
          </div>
        </div>
        <ConfirmModal
          modalOpen={modalOpen}
          handleModal={this.handleModal}
        />
      </div>
    );
  }
}

export default FamilyDetail;
