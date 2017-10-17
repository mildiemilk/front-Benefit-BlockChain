import React, { Component } from 'react';
// import { connect } from 'react-redux';
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
// import { bidding } from '../../api/bidding';

class Details extends Component {
  static propTypes = {
    bid: PropTypes.shape({}).isRequired,
    handleClick: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    index: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { bid, list, index } = this.props;
    if (bid.detail.plan) {
      return (
        <div className="Bidding">
          <Back onClick={() => this.props.handleClick()}> &lt; กลับหน้าหลัก</Back>
          <BoxDetail>
            <InSide>
              <div className="row">
                <div className="large-3 columns">
                  <TextLine> {list[index].insurerCompany.companyName} </TextLine>
                </div>
                <div className="large-3 large-offseet-6 columns">
                  <TextSide> เลขที่ใบเสนอราคา {list[index].biddingId} </TextSide>
                </div>
              </div>
            </InSide>
            <HeadBar>
              <div className="row">
                <div className="large-4 columns">
                  <HeadList>
                    {' '}วันที่เสนอราคา: {moment(list[index].updatedAt).format('L')}{' '}
                  </HeadList>
                </div>
                <div className="large-3 large-offset-1 columns">
                  <HeadList>การเสนอราคาครั้งที่ {list[index].countBidding}</HeadList>
                </div>
                <div className="large-3 columns">
                  <HeadList>ราคาที่เสนอ {list[index].totalPrice} บาท</HeadList>
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
                {bid.detail.plan.master.length > 0
                ? <Plan planList={bid.detail.plan.master} color="#d8d8d8" />
                : <div />
                }
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
                {bid.detail.plan.insurer.length > 0
                ? <Plan planList={bid.detail.plan.insurer} color="#c0ccda" />
                : <div />
                }
              </div>
            </InSide>
          </BoxDetail>
        </div>
      );
    }
    return null;
  }
}

// const mapStateToProps = state => ({
//   data: state.biddingReducer,
// });

// const mapDispatchToProps = dispatch => ({
//   bidding: () => dispatch(bidding()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Details);
export default Details;
