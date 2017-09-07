import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import '../../styles/InsurerStyle/Claim.scss';
import { Button } from '../StyleComponent';
import {
  Head,
  ProfileImg,
  Companies,
  CompaniesInfo,
  StyleStatus,
} from './styled';

class HeaderCompanyInfo extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="HeaderCompanyInfo">
        <div className="row">
          <div className="large-1 columns">
            <Companies>
              <ProfileImg><img src="" alt="" /></ProfileImg>
            </Companies>
          </div>
          <div className="large-8 columns">
            <CompaniesInfo className="company-heder-info">
              <div style={{ display: 'inline-flex' }}><Head> White Cat Company </Head><StyleStatus style={{ color: 'rgb(58, 123, 213)' }}>| กำลังพิจารณา </StyleStatus> </div><br />
              จำนวนพนักงาน : 217 คน <br />
              วันเริ่มกรมธรรม์ใหม่ : 4 มกราคม 2561
              <span>วันสิ้นสุดกรมธรรม์เก่า : 4 มกราคม 2560</span>
            </CompaniesInfo>
          </div>
          <div className="large-3 columns btn-company-info"><Button>ข้อมูลบริษัท</Button></div>
        </div>
        <Divider />
      </div>
    );
  }
}
export default HeaderCompanyInfo;
