import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Divider } from 'semantic-ui-react';
// import moment from 'moment';
import '../../styles/InsurerStyle/Claim.scss';
// import { Button } from '../StyleComponent';
// import {
//   Head,
//   ProfileImg,
//   Companies,
//   CompaniesInfo,
//   StyleStatus,
// } from './styled';

class breadcrumbs extends Component {
  static propTypes = {
    breadcrumbs: PropTypes.shape({}).isRequired,
    // Company: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // const { breadcrumbs } = this.props;
    // moment.locale('th');
    // let styleCss;
    // let textDisplay = '';
    // if (breadcrumbs.name === 'join') {
    //   styleCss = { color: '#2ac294' };
    //   textDisplay = '| เข้าร่วมแล้ว';
    // } else if (status === 'waiting') {
    //   styleCss = { color: '#3a7bd5' };
    //   textDisplay = '| กำลังพิจารณา';
    // } else if (status === 'reject') {
    //   styleCss = { color: '#3a7bd5' };
    //   textDisplay = '| ไม่เข้ารวมการประมูล';
    // } else {
    //   textDisplay = ' ';
    // }
    return (
      <div className="breadcrumbs">
        <div className="row">
          ลูกค้า
        </div>
      </div>
    );
  }
}
export default breadcrumbs;
