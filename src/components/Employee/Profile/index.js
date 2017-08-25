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
    };
  }

  handleClickEdit = (key, value) => this.setState({ [key]: !value }, console.log(key, ' ', value));

  render() {
    const {
      personalDetail,
      // familyDetail,
    } = this.state;
    return (
      <div className="profile-box">
        <HeadProfile />
        <PersonalDetail
          handleClickEdit={this.handleClickEdit}
          key="personalDetail"
          value={personalDetail}
        />
        <FamilyDetail />
      </div>
    );
  }
}

export default Profile;
