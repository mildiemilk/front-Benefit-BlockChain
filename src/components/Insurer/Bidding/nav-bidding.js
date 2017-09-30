import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CountDowns from '../../Bidding/CountDowns';
import HeadCompanyInfo from '../header-company-info';
import {
  Nav,
  Pic,
  Font,
  FontNum,
  TextNav,
  FontAucTime,
  FontNumAucTime,
} from './styled';
import building from '../../../../assets/bidding/icons-8-city.png';
import time from '../../../../assets/bidding/icons-8-time.png';
import auction from '../../../../assets/bidding/icons-8-auction.png';

class Bidding extends Component {
  static propTypes = {
    DataCompany: PropTypes.shape({}).isRequired,
    notiTimeout: PropTypes.func.isRequired,
    // timeout: PropTypes.string.isRequired,
    // candidateInsurer: PropTypes.string.isRequired,
    // minPrice: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = this.props.DataCompany;
    const { candidateInsurer, minPrice, timeout } = data;
    return (
      <div className="NavBid">
        <HeadCompanyInfo DataCompany={data} />
        <div className="row">
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={building} alt="building" /></Pic>
              <TextNav>
                <Font>จำนวนบริษัทประกัน</Font><br />
                <FontNum>{candidateInsurer}</FontNum>
              </TextNav>
            </Nav>
          </div>
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={auction} alt="auction" /></Pic>
              <TextNav>
                <FontAucTime>ราคาต่ำสุดในการประมูล</FontAucTime><br />
                <FontNumAucTime>{
                (minPrice !== '')
                ? minPrice
                : '0'
              }</FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={time} alt="time" /></Pic>
              <TextNav>
                <FontAucTime>ระยะเวลาที่เหลือในการประมูล</FontAucTime><br />
                <FontNumAucTime>
                  <CountDowns date={timeout} notiTimeout={this.props.notiTimeout} />
                </FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({
  // timeout: state.setTimeOut.timeout,
});

export default connect(mapStateToProps, null)(Bidding);
