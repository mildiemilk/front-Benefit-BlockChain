import React, { Component } from 'react';
import styled from 'styled-components';
import check from '../../../assets/Toastify/icons-8-checked.png';

// const ToastStyle = styled.div`
//   width: 100%;
//   height: 100%;
//   border-radius: 5px;
//   background-color: #deecfc;
//   border: solid 1px #dbdbdb;
//   text-align: center;
// `;
const Logo = styled.img`
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
class ToasifyContent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Logo src={check} alt="check" />
        <div>บันทึกข้อมูลเรียบร้อยแล้ว</div>
      </div>
    );
  }
}

export default ToasifyContent;
