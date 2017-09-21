import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Text, TextIn, IconPointer, ButtonStatusCancle } from './styled';
import ModalConfirmPassword from '../ModalConfirmPassword';
import { chooseFinalInsurer } from '../../api/bidding';

class Box extends Component {
  static propTypes = {
    chooseFinalInsurer: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
    handleClick: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    completeStep: PropTypes.bool.isRequired,
    end: PropTypes.bool.isRequired,
  }
  constructor() {
    super();
    this.state = {
      passwordToConfirm: '',
    };
  }

  getStatusModule = (status, insurerName) => {
    let statusModule = '';
    const { end } = this.props;
    if (end) {
      if (status === 'join') {
        statusModule = (
          <ModalConfirmPassword
            handlePost={this.handlePost}
            handleChange={this.handleChange}
            data={this.props.data}
            value={insurerName}
            content="เลือก"
            head="การเลือกบริษัทประกัน"
            margin="-8px"
          />
        );
      } else {
        statusModule = (
          <ButtonStatusCancle>ไม่เข้าร่วมประมูล</ButtonStatusCancle>
        );
      }
    } else {
      if (status === 'join') {
        statusModule = <Text style={{ color: '#2ac294' }}>ร่วมประมูล</Text>;
      } else if (status === 'reject') {
        statusModule = <Text style={{ color: '#f1535d' }}>ไม่ร่วมประมูล</Text>;
      } else {
        statusModule = <Text style={{ color: '#3a7bd5' }}>กำลังพิจารณา</Text>;
      }
    }
    return statusModule;
  }

  handlePost = e => {
    const { passwordToConfirm } = this.state;
    const insurerCompany = e;
    const step = 1;
    this.props.chooseFinalInsurer(passwordToConfirm, insurerCompany, step);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  boxStyling = (status, end) => {
    if (end) {
      if (status === 'join') {
        return 'boxes';
      }
      return 'boxCancelTimeout';
    }
    if (status === 'join') {
      return 'boxes';
    } else if (status === 'reject') {
      return 'boxCancel';
    }
    return 'wait';
  }

  renderList = bids => {
    const { completeStep } = this.props;
    if (completeStep) {
      return <Redirect to="/congrat" />;
    }
    return bids.map((bid, index) => (
      <div className="boxDetail">
        <div className={this.boxStyling(bid.status, this.props.end)}>
          <div className="row">
            <div className="large-2 columns">
              <Text>{bid.insurerCompany.companyName}</Text>
            </div>
            <div className="large-6 columns">
              <div className="row">
                <div className="large-3 columns">
                  <Text>
                    {bid.biddingId !== null
                    ? bid.biddingId
                    : <p>-</p>
                    }
                  </Text>
                </div>
                <div className="large-3 columns">
                  <Text>
                    {bid.countBidding !== 0
                    ? bid.countBidding
                    : <p>-</p>
                    }
                  </Text>
                </div>
                <div className="large-2 columns">
                  <Text>
                    {moment(bid.updatedAt).format('L') !== 'Invalid date'
                    ? moment(bid.updatedAt).format('L')
                    : <p>-</p>
                    }
                  </Text>
                </div>
                <div className="large-4 columns">
                  <Text>{bid.totalPrice}</Text>
                </div>
              </div>
            </div>
            <div className="large-2 columns">
              <Text>
                <IconPointer
                  name="external"
                  size="big"
                  onClick={() => this.props.handleClick(bid.insurerCompany._id, index)}
                />
              </Text>

            </div>
            <div className="large-2 columns">
              <Text>
                {this.getStatusModule(bid.status, bid.insurerCompany._id)}
              </Text>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    console.log('<---Props--->', this.props);
    return (
      <div className="Box">
        <div className="HeadBidContent">
          <div className="row">
            <div className="large-2 columns">
              <Text>ชื่อบริษัทประกัน</Text>
            </div>
            <div className="large-6 columns">
              <div className="row">
                <div className="large-3 columns">
                  <TextIn>เลขที่ใบเสนอราคา</TextIn>
                </div>
                <div className="large-3 columns">
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
            <div className="large-2 columns">
              <Text>ดูแผนประกัน</Text>
            </div>
            <div className="large-2 columns">
              <Text>สถานะ</Text>
            </div>
          </div>
        </div>
        {this.props.list
        ? <div>{this.renderList(this.props.list)}</div>
        : <div />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.selectFinalInsurer,
  completeStep: state.profile.completeStep[1],
});

const mapDispatchToProps = dispatch => ({
  chooseFinalInsurer: (data, insurerName, step) =>
    dispatch(chooseFinalInsurer(data, insurerName, step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
