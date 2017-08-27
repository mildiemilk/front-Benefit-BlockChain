import React, { Component } from 'react';
import HeadProfile from './HeadProfile';
import PersonalDetail from './PersonalDetail';
import FamilyDetail from './FamilyDetail';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      personalDetail: false,
      familyDetail: false,
      familyDetailAddUser: false,
    };
  }

  handleClickEdit = (keyChange, value) => this.setState({ [keyChange]: !value });

  render() {
    const {
      personalDetail,
      familyDetail,
      familyDetailAddUser,
    } = this.state;
    return (
      <div className="profile-box">
        <HeadProfile />
        <PersonalDetail
          handleClickEdit={this.handleClickEdit}
          personalDetail={personalDetail}
          familyDetail={familyDetail}
        />
        <FamilyDetail
          handleClickEdit={this.handleClickEdit}
          personalDetail={personalDetail}
          familyDetail={familyDetail}
          familyDetailAddUser={familyDetailAddUser}
        />
      </div>
    );
  }
}

export default Profile;
