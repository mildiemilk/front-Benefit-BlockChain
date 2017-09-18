import React, { Component } from 'react';
import moment from 'moment';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Input, Divider } from 'semantic-ui-react';
import {
  Nav,
  ImageCompany,
  Headtext,
  DisplaySide,
  DisplayOption,
} from './styled';


class AllCustomer extends Component {
  static propTypes = {
    // getCompanyBiddingList: PropTypes.func.isRequired,
    // Bidding: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      SearchTerm: '',
      Searchstatus: '',
      customer: [
        {
          companyName: 'Benefitable',
          logo: 'https://image.freepik.com/free-icon/apple-logo_318-40184.jpg',
          numberOfEmployees: 50,
          expiredOldInsurance: '2018-01-02T01:49:22.765Z',
          startNewInsurance: '2018-01-02T01:49:22.765Z',
          status: 'waiting',
        },
        {
          companyName: 'Moneytable',
          logo: 'https://dashboard.moneytable.com/assets/images/logos/mt-logo.png',
          numberOfEmployees: 80,
          expiredOldInsurance: '2018-01-02T01:49:22.765Z',
          startNewInsurance: '2018-01-02T01:49:22.765Z',
          status: 'pending',
        },
        {
          companyName: 'HRtable',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png',
          numberOfEmployees: 450,
          expiredOldInsurance: '2018-01-02T01:49:22.765Z',
          startNewInsurance: '2018-01-02T01:49:22.765Z',
          status: 'active',
        },
        {
          companyName: 'HRtable2',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png',
          numberOfEmployees: 450,
          expiredOldInsurance: '2018-01-02T01:49:22.765Z',
          startNewInsurance: '2018-01-02T01:49:22.765Z',
          status: 'active',
        },
        {
          companyName: 'HRtable3',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png',
          numberOfEmployees: 450,
          expiredOldInsurance: '2018-01-02T01:49:22.765Z',
          startNewInsurance: '2018-01-02T01:49:22.765Z',
          status: 'active',
        },
        {
          companyName: 'Paystaytion',
          logo: 'https://image.freepik.com/free-vector/abstract-logo-in-flame-shape_1043-44.jpg',
          numberOfEmployees: 2000,
          expiredOldInsurance: '2018-01-02T01:49:22.765Z',
          startNewInsurance: '2018-01-02T01:49:22.765Z',
          status: 'inactive',
        },
      ],

    };
  }

  // componentDidMount() {
  //   this.props.getCompanyBiddingList();
  // }

  handleSearchBoxChange(event) {
    this.setState({ SearchTerm: event.target.value });
  }
  handleClickChangeSearchTerm(value) {
    this.setState({ Searchstatus: value });
  }

  filterCustomer(list) {
    const newlist = list.filter(
      customer => customer.companyName.toLowerCase()
        .indexOf(this.state.SearchTerm.toLowerCase()) >= 0,
    );
    if (this.state.Searchstatus !== '') {
      return newlist.filter(
        customer => customer.status === this.state.Searchstatus,
      );
    }
    return newlist;
  }

  renderCustomerStatus = status => {
    if (status === 'waiting') {
      return <p style={{ color: 'black' }} >รอบริษัทส่งข้อมูลพนักงาน </p>;
    } else if (status === 'pending') {
      return <p style={{ color: 'green' }} >ระหว่างดำเนินการ </p>;
    } else if (status === 'active') {
      return <p style={{ color: 'blue' }} >อยู่ระหว่างการคุ้มครอง </p>;
    }
    return <p style={{ color: 'red' }} >สิ้นสุดการคุ้มครอง </p>;
  }

  renderElement = customer => {
    const list = customer.map((customer, id) => (
      <Nav id={id} >
        <div className="text-main">
          <ImageCompany
            avatar
            src={customer.logo}
          />
          <div className="insurertext2">
            <span>{customer.companyName}</span><br />
            จำนวนพนักงาน : &nbsp;{customer.numberOfEmployees} คน<br />
            วันเริ่มกรมธรรม์ใหม่ :&nbsp;
            {moment(customer.startNewInsurance)
            .locale('th')
            .format('DD MMMM YYYY')} <br />
            วันสิ้นสุดกรมธรรม์เก่า :&nbsp;
            {moment(customer.expiredOldInsurance)
            .locale('th')
            .format('DD MMMM YYYY')}
          </div>
          <div className="insurertext3">
            <input type="button" name="" value="" />
          </div>
        </div>
        <div className="insurertext4">
          <div className="status-text">
            {this.renderCustomerStatus(customer.status)}
          </div>
        </div>
      </Nav>
    ));
    return list;
  }

  renderSearch = () => (
    <div className="allcustomer">
      <Input
        className="searchCustomer"
        icon="search"
        iconPosition="right"
        placeholder="ค้นหา"
        onChange={event => this.handleSearchBoxChange(event)}
      />
    </div>
  )
 // ----------------------------------------------------------

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
      <div className="ClaimList">
        <div className="row">
          <Headtext className="large-10 columns">
          ลูกค้าของคุณ
          </Headtext>
          <div className="large-2 columns">
            {this.renderSearch()}
          </div>
        </div>
        <Divider />
        <div
          style={{ paddingBottom: '15px' }}
          className="row"
        >
          <div className="large-5 columns" />
          <div className="large-7 columns">
            <DisplaySide> แสดงผล </DisplaySide>
            <DisplayOption
              style={
              (this.state.Searchstatus === '')
              ? boderBlue
              : boderGray
            }
              onClick={() => this.handleClickChangeSearchTerm('')}
            >
             ทั้งหมด
           </DisplayOption>
            <DisplayOption
              style={
              (this.state.Searchstatus === 'waiting')
              ? boderBlue
              : boderGray
            }
              onClick={() => this.handleClickChangeSearchTerm('waiting')}
            >
            รอส่งข้อมูล
            </DisplayOption>
            <DisplayOption
              style={
              (this.state.Searchstatus === 'pending')
              ? boderBlue
              : boderGray
              }
              onClick={() => this.handleClickChangeSearchTerm('pending')}
            >
              ดำเนินการ
            </DisplayOption>
            <DisplayOption
              style={
              (this.state.Searchstatus === 'active')
              ? boderBlue
              : boderGray
              }
              onClick={() => this.handleClickChangeSearchTerm('active')}
            >
              คุ้มครอง
            </DisplayOption>
            <DisplayOption
              style={
              (this.state.Searchstatus === 'inactive')
              ? boderBlue
              : boderGray
              }
              onClick={() => this.handleClickChangeSearchTerm('inactive')}
            >
              สิ้นสุดการคุ้มครอง
            </DisplayOption>
          </div>
        </div>
        {this.renderElement(this.filterCustomer(this.state.customer))}
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   Bidding: state.biddingListReducer,
// });

// const mapDispatchToProps = dispatch => ({
//   getCompanyBiddingList: () => dispatch(getCompanyBiddingList()),

// });

export default AllCustomer;
