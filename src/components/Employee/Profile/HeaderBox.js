import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import IconUser from '../../../../assets/employee/icon_user@3x.png';
import IconEdit from '../../../../assets/employee/icon_edit@3x.png';

class HeaderBox extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleClickEdit: PropTypes.func.isRequired,
    key: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
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
      key,
      value,
    } = this.props;
    return (
      <div className="profile-pd-header">
        <div className="profile-pd-title">
          <img className="profile-pd-icon-user" alt="" src={icon} />
          <span className="profile-pd-title-text">{title}</span>
        </div>
        <div className="profile-pd-edit">
          <img className="profile-pd-icon-edit" alt="" src={IconEdit} />
          <span
            className="profile-pd-edit-text"
            onClick={handleClickEdit(key, value)}
            role="button"
            aria-hidden
          >
            แก้ไข
          </span>
        </div>
      </div>
    );
  }
}

export default HeaderBox;
