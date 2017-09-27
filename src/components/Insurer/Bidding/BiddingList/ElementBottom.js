import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CountDowns from '../../../Bidding/CountDowns';
// import { Link } from 'react-router-dom';
import {
    ContantBid,
    Pic,
  }
  from './styled';
import time from '../../../../../assets/bidding/icons-8-time.png';
import company from '../../../../../assets/bidding/icons-8-city.png';
import auction from '../../../../../assets/bidding/icons-8-auction.png';


class ElementBottom extends Component {
  static propTypes = {
    Bidding: PropTypes.shape.isRequired,
    notiTimeout: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Bidding = this.props.Bidding;
    const backgroundNone = {
      backgroundColor: 'rgba(216, 216, 216, 0.4)',
    };
    const backgroundOriginal = {
      backgroundColor: '#ffffff',
    };
    return (
      <div style={{ padding: '0px 20px' }} >
        <div className="row">
          <div className="large-4 columns">
            <ContantBid
              style={
              (Bidding.status === 'reject')
              ? backgroundNone
              : backgroundOriginal
            }
            >

              <div className="row">
                <div className="large-3 columns">
                  <Pic>
                    <img
                      src={company}
                      alt="company"
                      className="pic"
                    />
                  </Pic>
                </div>
                <div className="large-9 columns">
                  จำนวนบริษัทประกัน
                <br />
                  <div className="contentText">
                    {Bidding.candidateInsurer}
                  </div>
                </div>
              </div>
            </ContantBid>
          </div>

          <div className="large-4 columns">
            <ContantBid
              style={
              (Bidding.status === 'reject')
              ? backgroundNone
              : backgroundOriginal
            }
            >
              <div className="row">
                <div className="large-3 columns">
                  <Pic>
                    <img
                      src={auction}
                      alt="company"
                      className="pic"
                    />
                  </Pic>
                </div>
                <div className="large-9 columns">
                  ราคาต่ำสุดในการประมูล
                <br />
                  <div className="contentText">
                    {Bidding.minPrice}
                  </div>
                </div>
              </div>
            </ContantBid>
          </div>

          <div className="large-4 columns">
            <ContantBid
              style={
              (Bidding.status === 'reject')
              ? backgroundNone
              : backgroundOriginal
            }
            >
              <div className="row">
                <div className="large-3 columns">
                  <Pic>
                    <img
                      src={time}
                      alt="company"
                      className="pic"
                    />
                  </Pic>
                </div>
                <div className="large-9 columns">
                  ระยะเวลาที่เหลือในการประมูล
                <br />
                  <div className="contentText">
                    <CountDowns
                      style={{ fontSize: '24px' }}
                      date={Bidding.timeout}
                      notiTimeout={this.props.notiTimeout}
                    />
                  </div>
                </div>
              </div>
            </ContantBid>
          </div>
        </div>
      </div>
    );
  }
}


export default ElementBottom;
