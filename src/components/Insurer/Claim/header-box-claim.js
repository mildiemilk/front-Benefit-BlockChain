import React, { Component } from 'react';
// import moment from 'moment';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import '../../../styles/InsurerStyle/Claim.scss';
// import { Redirect } from 'react-router-dom';
import {
  Nav,
  Pic,
  Font,
  FontNum,
  TextNav,
  FontAucTime,
  FontNumAucTime,
 } from './styled';
// import { chooseFinalInsurer } from '../../../api/bidding';

class HeaderBoxClaim extends Component {
  static propTypes = {
    // chooseFinalInsurer: PropTypes.func.isRequired,
    // end: PropTypes.shape({}).isRequired,
    data: PropTypes.shape({}).isRequired,
    // handleClick: PropTypes.func.isRequired,
    // list: PropTypes.arrayOf(PropTypes.object).isRequired,
    // completeStep: PropTypes.bool.isRequired,
  }
  constructor() {
    super();
    this.state = {
      passwordToConfirm: '',
    };
  }


  render() {
    return (
      <div className="HeaderBoxClaim">
        <div className="row">
          <div className="large-3 columns">
            <Nav>
              <Pic> <Icon name="drivers license outline" size="big" /></Pic>
              <TextNav>
                <Font>จำนวนการเคลมทั้งหมด</Font><br />
                <FontNum>44</FontNum>
              </TextNav>
            </Nav>
          </div>
          <div className="large-3 columns">
            <Nav>
              <Pic> <Icon name="checkmark" size="big" color="white" /></Pic>
              <TextNav>
                <FontAucTime>การเคลมที่อนุมัติไปแล้ว</FontAucTime><br />
                <FontNumAucTime>10</FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
          <div className="large-3 columns">
            <Nav>
              <Pic> <Icon name="search" size="big" color="white" /></Pic>
              <TextNav>
                <FontAucTime>การเคลมที่กำลังพิจารณา</FontAucTime><br />
                <FontNumAucTime>3
                </FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
          <div className="large-3 columns">
            <Nav>
              <Pic> <Icon name="remove" size="big" color="white" /></Pic>
              <TextNav>
                <FontAucTime>การเคลมที่ไม่อนุมัติ</FontAucTime><br />
                <FontNumAucTime>4
                </FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBoxClaim;
