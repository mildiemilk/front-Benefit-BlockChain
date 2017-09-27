import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import moment from 'moment';
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
    DataCompany: PropTypes.shape({}).isRequired,
    // pageName: PropTypes.string.isRequired,
    // Company: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const data = this.props.DataCompany;
    moment.locale('th');
    let styleCss;
    let textDisplay = '';
    const { numberOfEmployees,
      expiredOldInsurance, startNewInsurance, logo, status, companyName } = data;
    if (status === 'join') {
      styleCss = { color: '#2ac294' };
      textDisplay = '| เข้าร่วมแล้ว';
    } else if (status === 'waiting') {
      styleCss = { color: '#3a7bd5' };
      textDisplay = '| กำลังพิจารณา';
      // if (this.props.pageName === 'customer') {
      //   textDisplay = '| รอบริษัทส่งข้อมูลพนักงาน';
      // } else {
      //   textDisplay = '| กำลังพิจารณา';
      // }
    } else if (status === 'reject') {
      styleCss = { color: '#3a7bd5' };
      textDisplay = '| ไม่เข้ารวมการประมูล';
    } else if (status === 'active') {
      styleCss = { color: '#3a7bd5' };
      textDisplay = '| อยู่ระหว่างการคุ้มครอง';
    } else if (status === 'inactive') {
      styleCss = { color: '#3a7bd5' };
      textDisplay = '| สิ้นสุดการคุ้มครอง';
    } else if (status === 'pending') {
      styleCss = { color: '#3a7bd5' };
      textDisplay = '| ระหว่างดำเนินการ';
    } else {
      textDisplay = ' ';
    }
    return (
      <div className="HeaderCompanyInfo">
        <div className="row">
          <div className="large-1 columns">
            <Companies>
              <ProfileImg src={logo} alt="" />
            </Companies>
          </div>
          <div className="large-8 columns">
            <CompaniesInfo className="company-heder-info">
              <div style={{ display: 'inline-flex' }}><Head>{companyName} </Head>
                <StyleStatus style={styleCss} >{textDisplay} </StyleStatus>
              </div><br />
              จำนวนพนักงาน : {numberOfEmployees} คน <br />
              วันเริ่มกรมธรรม์ใหม่ : {moment(startNewInsurance).locale('th').format('DD MMMM YYYY')}
              <span>วันสิ้นสุดกรมธรรม์เก่า : {moment(expiredOldInsurance).locale('th').format('DD MMMM YYYY')}</span>
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
