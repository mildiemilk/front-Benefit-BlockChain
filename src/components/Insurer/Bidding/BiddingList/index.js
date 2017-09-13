import React, { Component } from 'react';
// import moment from 'moment';
import { Link } from 'react-router-dom';
import { Divider, Icon } from 'semantic-ui-react';
import {
    BiddingElement,
    DisplayOption,
    DisplaySide,
  }
  from './styled';
import ElementName from './ElementName';
import ElementBottom from './ElementBottom';

class congrat extends Component {
  constructor() {
    super();
    this.state = {
      SearchTerm: '',
      Bidding: [
        {
          companyId: '59af536b6933f11d9f6b7394',
          company: 'Benefitable',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png',
          numberOfEmployees: 500,
          expiredOldInsurance: '2018-01-02T01:49:22.765Z',
          startNewInsurance: new Date(),
          status: 'waiting',   // join , waiting,  reject
          candidateInsurer: 2,
          countBidding: 3,
          minPrice: 580000,
          timeout: new Date('2017-12-02T01:49:22.765Z'),
        },
        {
          companyId: '59af536b6933f11d9f6b7394',
          company: 'White cate ',
          logo: 'https://lh4.googleusercontent.com/-ak28-E7WE_w/TX9JIJy4lBI/AAAAAAAALcY/4hPNBtNZk8U/s1600/sony_logo20.png',
          numberOfEmployees: 120,
          expiredOldInsurance: '2018-01-02T01:49:22.765Z',
          startNewInsurance: '2018-01-02T01:49:22.765Z',
          status: 'join',   // join , waiting,  reject
          candidateInsurer: 2,
          countBidding: 1,
          minPrice: 8400,
          timeout: '2017-10-11T01:12:36.840Z',
        },
        {
          companyId: '59af536b6933f11d9f6b7394',
          company: 'Black cat ',
          logo: 'https://i.pinimg.com/originals/85/f6/5c/85f65c8102054ff8c7cf829efb19f348.jpg',
          numberOfEmployees: 1120,
          expiredOldInsurance: '2018-01-02T01:49:22.765Z',
          startNewInsurance: '2018-01-02T01:49:22.765Z',
          status: 'select',   // join , waiting,  reject
          candidateInsurer: 3,
          countBidding: 2,
          minPrice: 8400,
          timeout: '2017-10-11T01:12:36.840Z',
        },
        {
          companyId: '59af536b6933f11d9f6b7394',
          company: 'calculus company',
          logo: 'https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg',
          numberOfEmployees: 20,
          expiredOldInsurance: '2018-01-02T01:49:22.765Z',
          startNewInsurance: '2018-01-02T01:49:22.765Z',
          status: 'reject',   // join , waiting,  reject
          candidateInsurer: 2,
          countBidding: 2,
          minPrice: 48200,
          timeout: '2017-10-11T01:12:36.840Z',
        },
        {
          companyId: '59af536b6933f11d9f6b7394',
          company: 'Fityshade company',
          logo: 'https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg',
          numberOfEmployees: 10,
          expiredOldInsurance: '2018-01-02T01:49:22.765Z',
          startNewInsurance: '2018-01-02T01:49:22.765Z',
          status: 'reject',   // join , waiting,  reject
          candidateInsurer: 2,
          countBidding: 2,
          minPrice: 250,
          timeout: new Date(),
        },
      ],
    };
  }

  RenderBiddingElement = Bidding => {
    const listItems = Bidding.map((Bidding, number) => {
      if (Bidding.status === 'reject') {
        return (
          <Link to={`/biddingdetali/${Bidding.companyId}`}>
            <BiddingElement
              className="rejectBackgroundcolor"
            >
              <ElementName
                Bidding={Bidding}
                id={number}
              />
              <Divider className="DividerStyle" />
              <ElementBottom
                Bidding={Bidding}
                id={number}
              />
            </BiddingElement>
          </Link>
        );
      }
      return (
        <Link to={`/biddingdetali/${Bidding.companyId}`}>
          <BiddingElement>
            <ElementName
              Bidding={Bidding}
              id={number}
            />
            <Divider className="DividerStyle" />
            <ElementBottom
              Bidding={Bidding}
              id={number}
            />
          </BiddingElement>
        </Link>
      );
    });
    return listItems;
  }

  handleSearchBoxChange(keyword) {
    this.setState({ SearchTerm: keyword });
    console.log(this.state.SearchTerm);
  }

  filterBiddingList(list) {
    return list.filter(
      Bidding => Bidding.status.toLowerCase()
        .indexOf(this.state.SearchTerm.toLowerCase()) >= 0,
    );
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
        {this.RenderBiddingElement(this.filterBiddingList(this.state.Bidding))}
      </div>
    );
  }
}

export default congrat;
