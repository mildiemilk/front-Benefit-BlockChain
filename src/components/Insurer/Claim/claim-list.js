import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from '../../Head';
import '../../../styles/InsurerStyle/Claim.scss';
// import { Detail } from '../../StyleComponent';
import {
  Nav,
  ProfileImg,
} from './styled';

class ClaimList extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="ClaimList">
        <Head className="insurerheade-text" content="แผนสิทธิประโยชน์ของคุณ" />
        <div className="row">
          <div className="large-6 columns box-left">
            <Nav>
              <div className="text-main">
                <ProfileImg className="insurertext1"><img src="" alt="" /></ProfileImg>
                <div className="insurertext2">
                  <span>sounds of Alaska Company</span><br />
                  จำนวนพนักงาน : 217 คน<br />
                  วันเริ่มกรมธรรม์ใหม่ : 4 มกราคม 2561<br />
                  วันสิ้นสุดกรมธรรม์เก่า : 4 มกราคม 2560
                </div>
                <div className="insurertext3"><input type="button" name="" value="" /> </div>
              </div>
              <div className="insurertext4"><div className="status-text">กำลังพิจารณา <span> 10 </span></div></div>
            </Nav>
          </div>
          <div className="large-6 columns box-right">
            <Nav>
              <div className="text-main">
                <ProfileImg className="insurertext1"><img src="" alt="" /></ProfileImg>
                <div className="insurertext2">
                  <span>sounds of Alaska Company</span><br />
                  จำนวนพนักงาน : 217 คน<br />
                  วันเริ่มกรมธรรม์ใหม่ : 4 มกราคม 2561<br />
                  วันสิ้นสุดกรมธรรม์เก่า : 4 มกราคม 2560
                </div>
                <div className="insurertext3"><input type="button" name="" value="" /> </div>
              </div>
              <div className="insurertext4"><div className="status-text">กำลังพิจารณา <span> 10 </span></div></div>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}
export default ClaimList;
