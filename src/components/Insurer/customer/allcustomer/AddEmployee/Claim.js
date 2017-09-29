import React, { Component } from 'react';
// import { Dropdown } from 'semantic-ui-react';
// import styled from 'styled-components';
import { PersonalDiv, ClaimDiv, ClaimText } from './styled';
// import InputDate from '../../InputDate';
import claim from '../../../../assets/EmployeeList/icons-8-form.png';
// const Dropdowns = styled(Dropdown)`
// &&&{
//   height: 40px;
//   width: 100%;
//   margin-top: 10px;
// }
// `;

// const status = [
//   { key: 1, text: 'โสด', value: 1 },
//   { key: 2, text: 'สมรส', value: 2 },
//   { key: 3, text: 'หย่าร้าง', value: 3 },
// ];
// const prefix = [
//   { key: 1, text: 'นาย', value: 1 },
//   { key: 2, text: 'นาง', value: 2 },
//   { key: 3, text: 'นางสาว', value: 3 },
// ];

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <PersonalDiv>
        <ClaimDiv>
          <img src={claim} alt="claim" />
          <ClaimText>ยังไม่มีประวัติการเคลม</ClaimText>
        </ClaimDiv>
      </PersonalDiv>
    );
  }
}

export default Personal;
