import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Divider, Icon } from 'semantic-ui-react';
import { getCompanyBiddingList } from '../../../../api/Insurer/bidding';
import {
    BiddingElement,
    DisplayOption,
    DisplaySide,
  }
  from './styled';
import ElementName from './ElementName';
import ElementBottom from './ElementBottom';

class BiddingList extends Component {
  static propTypes = {
    getCompanyBiddingList: PropTypes.func.isRequired,
    Bidding: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      SearchTerm: '',
      bgColor: '',
      end: false,
    };
    // props.getCompanyBiddingList();
  }

  componentDidMount() {
    this.props.getCompanyBiddingList();
  }

  RenderBiddingElement = Bidding => {
    const listItems = Bidding.map((Bidding, number) => {
      if (Bidding.status === 'reject') {
        this.state = {
          bgColor: 'rejectBackgroundcolor',
        };
      }
      return (
        <Link to={`/biddingdetali/${Bidding.companyId}`}>
          <BiddingElement
            className={this.state.bgColor}
          >
            <ElementName
              Bidding={Bidding}
              id={number}
            />
            <Divider className="DividerStyle" />
            <ElementBottom
              Bidding={Bidding}
              id={number}
              notiTimeout={this.notiTimeout}
            />
          </BiddingElement>
        </Link>
      );
    });
    return listItems;
  }

  handleSearchBoxChange(keyword) {
    this.setState({ SearchTerm: keyword });
  }

  filterBiddingList(list) {
    return list.filter(
      Bidding => Bidding.status.toLowerCase()
        .indexOf(this.state.SearchTerm.toLowerCase()) >= 0,
    );
  }
  notiTimeout = () => {
    this.setState({
      end: true,
    });
  }

  render() {
    const boderBlue = {
      border: 'solid 1px #3a7bd5',
      color: '#3a7bd5',
    };

    const boderGray = {
      border: 'solid 1px  #bfbfbf',
      color: '#bfbfbf',
    };
    return (
      <div className="BiddingList">
        <div className="HeadTop" >
          การเสนอราคา
        </div>
        <Divider className="HeadTopDivider" />
        <div
          style={{ paddingBottom: '25px' }}
          className="row"
        >
          <div className="large-3 columns" />
          <div className="large-9 columns">
            <DisplaySide> แสดงผล </DisplaySide>
            <DisplayOption
              style={
              (this.state.SearchTerm === '')
              ? boderBlue
              : boderGray
            }
              onClick={() => this.handleSearchBoxChange('')}
            >
             ทั้งหมด
           </DisplayOption>
            <DisplayOption
              style={
              (this.state.SearchTerm === 'waiting')
              ? boderBlue
              : boderGray
            }
              onClick={() => this.handleSearchBoxChange('waiting')}
            >
            กำลังพิจารณา
            </DisplayOption>
            <DisplayOption
              style={
              (this.state.SearchTerm === 'join')
              ? boderBlue
              : boderGray
              }
              onClick={() => this.handleSearchBoxChange('join')}
            >
              เข้าร่วมแล้ว
            </DisplayOption>
            <DisplayOption
              style={
              (this.state.SearchTerm === 'select')
              ? boderBlue
              : boderGray
              }
              onClick={() => this.handleSearchBoxChange('select')}
            >
              ถูกเลือก
            </DisplayOption>
            <DisplayOption
              style={
              (this.state.SearchTerm === 'reject')
              ? boderBlue
              : boderGray
              }
              onClick={() => this.handleSearchBoxChange('reject')}
            >
              ไม่ถูกเลือก
            </DisplayOption>
            <DisplaySide> เรียงจากวันที่โพสล่าสุด&nbsp;
              <Icon name="angle down" />
            </DisplaySide>
          </div>
        </div>
        {this.RenderBiddingElement(this.filterBiddingList(this.props.Bidding)) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Bidding: state.biddingListReducer,
});

const mapDispatchToProps = dispatch => ({
  getCompanyBiddingList: () => dispatch(getCompanyBiddingList()),

});

export default connect(mapStateToProps, mapDispatchToProps)(BiddingList);
