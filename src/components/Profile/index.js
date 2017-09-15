import React, { Component } from 'react';
import Head from '../Head';
import Cover from './Cover';
import DetailProfile from './DetailProfile';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Head content="โปรไฟล์" />
        <Cover />
        <DetailProfile />
      </div>
    );
  }
}

export default Profile;
