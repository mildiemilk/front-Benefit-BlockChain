import React, { Component } from 'react';
import Head from '../Head';
import BarClaim from './BarClaim';
import Download from './Download';
import Detail from './Detail';

class ProfileClaim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetail: true,
    };
  }
  handleDetail = () => {
    this.setState({
      isDetail: !this.state.isDetail,
    });
  }
  render() {
    const { isDetail } = this.state;
    return (
      <div>
        { isDetail
        ? <div>
          <Head content="ประวัติการเคลมทั้งหมด" />
          <BarClaim />
          <Download handleDetail={this.handleDetail} />
        </div>
        : <div>
          <Head content="ข้อมูลการเคลมย้อนหลัง" />
          <Detail />
        </div>
        }
      </div>
    );
  }
}

export default ProfileClaim;
