import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
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
      <div className="row" style={{ position: 'relative' }}>
        <Companies>
          <ProfileImg><img src="" alt="" /></ProfileImg>
        </Companies>
        <CompaniesInfo>
          <div style={{ display: 'inline-flex' }}><Head> White Cat Company </Head><StyleStatus style={{ color: 'rgb(58, 123, 213)' }}>| กำลังพิจารณา </StyleStatus> </div><br />
          จำนวนพนักงาน : 217 คน <br />
          วันเริ่มกรมธรรม์ใหม่ : 4 มกราคม 2561 วันสิ้นสุดกรมธรรม์เก่า : 4 มกราคม 2560
        </CompaniesInfo>
        <Divider />
      </div>
    );
  }
}
export default HeaderCompanyInfo;
