import React, { Component } from 'react';
// import moment from 'moment';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
import building from '../../../../assets/bidding/icons-8-city.png';
import time from '../../../../assets/bidding/icons-8-time.png';
import auction from '../../../../assets/bidding/icons-8-auction.png';

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
              <Pic><img src={building} alt="building" /></Pic>
              <TextNav>
                <Font>จำนวนการเคลมทั้งหมด</Font><br />
                <FontNum>44</FontNum>
              </TextNav>
            </Nav>
          </div>
          <div className="large-3 columns">
            <Nav>
              <Pic><img src={auction} alt="auction" /></Pic>
              <TextNav>
                <FontAucTime>การเคลมที่อนุมัติไปแล้ว</FontAucTime><br />
                <FontNumAucTime>10</FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
          <div className="large-3 columns">
            <Nav>
              <Pic><img src={time} alt="time" /></Pic>
              <TextNav>
                <FontAucTime>การเคลมที่กำลังพิจารณา</FontAucTime><br />
                <FontNumAucTime>3
                </FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
          <div className="large-3 columns">
            <Nav>
              <Pic><img src={time} alt="time" /></Pic>
              <TextNav>
                <FontAucTime>การเคลมที่ไม่อนุมัต</FontAucTime><br />
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
