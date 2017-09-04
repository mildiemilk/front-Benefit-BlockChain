import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CountDowns from './CountDowns';
import {
  Head,
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
    num: PropTypes.number.isRequired,
    timeout: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="NavBid">
        <div className="row">
          <div className="large-12 columns">
            <Head> การเสนอราคาประมูล </Head>
            <Divider style={{ marginBottom: '30px' }} />
          </div>
        </div>
        <div className="row">
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={building} alt="building" /></Pic>
              <TextNav>
                <Font>จำนวนบริษัทประกัน</Font><br />
                <FontNum>{this.props.num}</FontNum>
              </TextNav>
            </Nav>
          </div>
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={auction} alt="auction" /></Pic>
              <TextNav>
                <FontAucTime>ราคาต่ำสุดในการประมูล</FontAucTime><br />
                <FontNumAucTime>10,000,000</FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
          <div className="large-4 columns">
            <Nav>
              <Pic><img src={time} alt="time" /></Pic>
              <TextNav>
                <FontAucTime>ระยะเวลาที่เหลือในการประมูล</FontAucTime><br />
                <FontNumAucTime>
                  <CountDowns date={this.props.timeout.timeout} />
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
