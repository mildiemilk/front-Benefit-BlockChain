import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  BoxDetail,
  Back,
  InSide,
  TextSide,
  HeadBar,
  TextLine,
  HeadList,
  Special,
  TextInsure,
} from './styled';
import Plan from './plan';
import { bidding } from '../../../api/bidding';

class Details extends Component {
  static propTypes = {
    bid: PropTypes.shape.isRequired,
    index: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleClick: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { bid, index, data } = this.props;
    return (
      <div className="Bidding">
        <Back onClick={() => this.props.handleClick()}> &lt; กลับหน้าหลัก</Back>
        <BoxDetail>
          <InSide>
            <div className="row">
              <div className="large-3 columns">
                <TextLine> {bid.insurerName} </TextLine>
              </div>
              <div className="large-3 large-offseet-6 columns">
                <TextSide> เลขที่ใบเสนอราคา {bid.biddingId} </TextSide>
              </div>
            </div>
          </InSide>
          <HeadBar>
            <div className="row">
              <div className="large-4 columns">
                <HeadList>
                  {' '}วันที่เสนอราคา: {moment(bid.updatedAt).format('L')}{' '}
                </HeadList>
              </div>
              <div className="large-3 large-offset-1 columns">
                <HeadList>การเสนอราคาครั้งที่ {bid.timeOfBidding}</HeadList>
              </div>
              <div className="large-3 columns">
                <HeadList>ราคาที่เสนอ {bid.priceOfBidding} บาท</HeadList>
              </div>
            </div>
          </HeadBar>
          <InSide>
            <div className="row">
              <div className="large-3 columns">
                <TextLine>รายการแผนของคุณ</TextLine>
              </div>
            </div>
            <div className="row">
              <Plan planList={data[index].detail} />
            </div>
          </InSide>
          <InSide>
            <div className="row">
              <div className="large-6 columns">
                <TextInsure>ข้อเสนอจากบริษัทประกัน</TextInsure>
                {' '}
                <Special>พิเศษสำหรับคุณ</Special>
              </div>
            </div>
            <div className="row">
              <Plan planList={data[index].detail} />
            </div>
          </InSide>
        </BoxDetail>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.biddingReducer,
});

const mapDispatchToProps = dispatch => ({
  bidding: () => dispatch(bidding()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
