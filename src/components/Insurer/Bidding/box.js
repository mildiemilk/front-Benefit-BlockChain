import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Text, TextIn, IconPointer, ButtonStatusCancle } from './styled';
import ModalConfirmPassword from '../../ModalConfirmPassword';
import { chooseFinalInsurer } from '../../../api/bidding';

class Box extends Component {
  static propTypes = {
    chooseFinalInsurer: PropTypes.func.isRequired,
    end: PropTypes.shape({}).isRequired,
    data: PropTypes.shape({}).isRequired,
    handleClick: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    completeStep: PropTypes.bool.isRequired,
  }
  constructor() {
    super();
    this.state = {
      passwordToConfirm: '',
    };
  }

  getStatusModule = insurerName => {
    const status = 'Join';
    let statusModule = '';
    const { end } = this.props;
    if (end.end === 'Timeout') {
      if (status === 'Join') {
        statusModule = (
          <ModalConfirmPassword
            handlePost={this.handlePost}
            handleChange={this.handleChange}
            data={this.props.data}
            value={insurerName}
            content="เลือก"
            head="การเลือกบริษัทประกัน"
          />
        );
      } else {
        statusModule = (
          <ButtonStatusCancle>ไม่เข้าร่วมประมูล</ButtonStatusCancle>
        );
      }
    } else {
      if (status === 'Join') {
        statusModule = <Text style={{ color: '#2ac294' }}>ร่วมประมูล</Text>;
      } else if (status === 'Cancel') {
        statusModule = <Text style={{ color: '#f1535d' }}>ไม่ร่วมประมูล</Text>;
      } else {
        statusModule = <Text style={{ color: '#3a7bd5' }}>กำลังพิจารณา</Text>;
      }
    }
    return statusModule;
  }

  handlePost = e => {
    e.preventDefault();
    const { passwordToConfirm } = this.state;
    const insurerName = e.target.value;
    const step = 1;
    this.props.chooseFinalInsurer(passwordToConfirm, insurerName, step);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  boxStyling = (status, end) => {
    if (end === 'Timeout') {
      if (status === 'Join') {
        return 'boxes';
      }
      return 'boxCancelTimeout';
    }
    if (status === 'Join') {
      return 'boxes';
    } else if (status === 'Cancel') {
      return 'boxCancel';
    }
    return 'wait';
  }

  renderList = bids => {
    const status = 'Join';
    const { end, completeStep } = this.props;
    if (completeStep) {
      return <Redirect to="/congrat" />;
    }
    return bids.map((bid, index) => (
      <div className="boxDetail" keys={bid._id}>
        <div className={this.boxStyling(status, end.end)}>
          <div className="row">
            <div className="large-3 columns">
              <Text>{bid.insurerName}</Text>
            </div>
            <div className="large-6 columns">
              <div className="row">
                <div className="large-4 columns">
                  <Text>{bid.biddingId}</Text>
                </div>
                <div className="large-2 columns">
                  <Text>{bid.timeOfBidding}</Text>
                </div>
                <div className="large-2 columns">
                  <Text>{moment(bid.updatedAt).format('L')}</Text>
                </div>
                <div className="large-4 columns">
                  <Text>{bid.priceOfBidding}</Text>
                </div>
              </div>
            </div>
            <div className="large-1 columns">
              <Text>
                <IconPointer
                  name="external"
                  size="big"
                  onClick={() => this.props.handleClick(bid, index)}
                />
              </Text>
            </div>
            <div className="large-2 columns">
              <Text>{this.getStatusModule(bid.insurerName)}</Text>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="Box">
        <div className="HeadBidContent">
          <div className="row">
            <div className="large-3 columns">
              <Text>ชื่อบริษัทประกัน</Text>
            </div>
            <div className="large-6 columns">
              <div className="row">
                <div className="large-4 columns">
                  <TextIn>เลขที่ใบเสนอราคา</TextIn>
                </div>
                <div className="large-2 columns">
                  <TextIn>ครั้งที่เสนอราคา</TextIn>
                </div>
                <div className="large-2 columns">
                  <TextIn>วันที่</TextIn>
                </div>
                <div className="large-4 columns">
                  <TextIn>ราคาประมูล</TextIn>
                </div>
              </div>
            </div>
            <div className="large-1 columns">
              <Text>ดูแผนประกัน</Text>
            </div>
            <div className="large-2 columns">
              <Text>สถานะ</Text>
            </div>
          </div>
        </div>
        {this.renderList(this.props.list)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  end: state.endTimeout,
  data: state.selectFinalInsurer,
  completeStep: state.profile.completeStep[1],
});

const mapDispatchToProps = dispatch => ({
  chooseFinalInsurer: (data, insurerName, step) =>
    dispatch(chooseFinalInsurer(data, insurerName, step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
