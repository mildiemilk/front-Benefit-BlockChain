import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconEdit from '../../../../assets/employee/icon_edit@3x.png';

class HeaderBox extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleClickEdit: PropTypes.func.isRequired,
    personalDetail: PropTypes.bool.isRequired,
    familyDetail: PropTypes.bool.isRequired,
    keyChange: PropTypes.string.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      icon,
      title,
      handleClickEdit,
      personalDetail,
      familyDetail,
      keyChange,
    } = this.props;

    const BtnEdit = (
      <div>
        <img className="profile-pd-icon-edit" alt="" src={IconEdit} />
        <span
          className="profile-pd-edit-text"
          onClick={() => handleClickEdit(keyChange, familyDetail)}
          role="button"
          aria-hidden
        >
          แก้ไข
        </span>
      </div>
    );
    return (
      <div className="profile-pd-header">
        <div className="profile-pd-title">
          <img className="profile-pd-icon-user" alt="" src={icon} />
          <span className="profile-pd-title-text">{title}</span>
        </div>
        <div className="profile-pd-edit">
          {personalDetail || familyDetail ? <div /> : BtnEdit}
        </div>
      </div>
    );
  }
}

export default HeaderBox;
