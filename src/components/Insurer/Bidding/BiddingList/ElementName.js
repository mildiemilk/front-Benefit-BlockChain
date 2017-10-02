import React, { Component } from 'react';
import moment from 'moment';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    StatusDiv,
    EmtryStatusDiv,
    ImageCompany,
  }
  from './styled';


class ElementName extends Component {
  static propTypes = {
    Bidding: PropTypes.shape.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  RenderStatus = Bidding => {
    if (Bidding.status === 'waiting') {
      return (
        <div>
          <EmtryStatusDiv />
          <StatusDiv className="textstatus blue">
           กำลังพิจารณา
          </StatusDiv>
        </div>
      );
    }
    if (Bidding.status === 'join') {
      return (
        <div>
          <StatusDiv className="textstatus gray">
          เสนอราคาครั้งที่ : {Bidding.countBidding}
          </StatusDiv>
          <StatusDiv className="textstatus blueWhite">
          เข้าร่วมแล้ว
          </StatusDiv>
        </div>
      );
    }
    if (Bidding.status === 'selected') {
      return (
        <div>
          <StatusDiv className="textstatus gray">
          เสนอราคาครั้งที่ : {Bidding.countBidding}
          </StatusDiv>
          <StatusDiv className="textstatus blueWhite">
          ถูกเลือก
          </StatusDiv>
        </div>
      );
    }
    return (
      <div>
        <StatusDiv className="textstatus gray">
        เสนอราคาครั้งที่ : {Bidding.countBidding}
        </StatusDiv>
        <StatusDiv className="textstatus gray">
         ไม่ถูกเลือก
        </StatusDiv>
      </div>
    );
  }

  render() {
    const Bidding = this.props.Bidding;
    return (
      <div className="row" style={{ paddingBottom: '8px' }}>
        <div className="large-1 columns">
          <ImageCompany
            src={Bidding.logo}
            avatar
          />
        </div>
        <div className="large-6 columns">
          <div>
            <div className="Headlist" >
              {Bidding.company}
            </div>
            <div style={{ fontSize: '14px' }}>
            จำนวนพนักงาน : {Bidding.numberOfEmployees} คน
              <div>
                <span style={{ marginRight: '10px' }}>
                  วันเริ่มกรมธรรม์ใหม่ :&nbsp;
                  {moment(Bidding.startNewInsurance)
                  .locale('th')
                  .format('DD MMMM YYYY')}
                   &nbsp;
                </span>
                <span>วันสิ้นสุดกรมธรรม์เก่า : &nbsp;
                   {moment(Bidding.expiredOldInsurance)
                  .locale('th')
                  .format('DD MMMM YYYY')}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="large-5 columns">
          {this.RenderStatus(Bidding)}
        </div>
      </div>
    );
  }
}


export default ElementName;
