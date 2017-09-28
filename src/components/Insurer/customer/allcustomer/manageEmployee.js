import React, { Component } from 'react';
// import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Divider, Icon } from 'semantic-ui-react';
import HeadCompanyInfo from '../../header-company-info';
// import { DivImg } from 'react-router-dom';
import { Navmanage, Pic, TextNav, FontNum, Font, Head, TextIn } from './styled';
import '../../../../styles/main_icon.scss';
import { getCustomer } from '../../../../api/Insurer/customer';

class manageEmployee extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired,
    // index: PropTypes.number.isRequired,
    customer: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({ params: PropTypes }),
    // match1: PropTypes.shape({ params: PropTypes.index }),
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      status: props.match.params.status,
      index: props.match.params.index,
    };
    props.getCustomer();
  }
  render() {
    console.log('render empmanagement', this.props);
    const { customer } = this.props;
    const { index } = this.state;
    if (customer.length > 0) {
      return (
        <div className="manageEmployee">
          <HeadCompanyInfo DataCompany={customer[index]} PageName="allcustomer" />
          <div className="breadcrumbs">ลูกค้า</div>
          <div className="row">
            <Head>อัพเดตจำนวนพนักงาน </Head>
            <div className="large-3 columns">
              <Navmanage>
                <Pic> <i aria-hidden="true" className="icon-city" /></Pic>
                <TextNav>
                  <Font>พนักงานทัั้งหมด</Font><br />
                  <FontNum>2</FontNum>
                </TextNav>
              </Navmanage>
            </div>
            <div className="large-3 columns">
              <Navmanage>
                <Pic> <i aria-hidden="true" className="icon-empPlus" /></Pic>
                <TextNav>
                  <Font>พนักงานเข้าใหม่</Font><br />
                  <FontNum>2</FontNum>
                </TextNav>
              </Navmanage>
            </div>
            <div className="large-3 columns">
              <Navmanage>
                <Pic> <i aria-hidden="true" className="icon-empDelete" /></Pic>
                <TextNav>
                  <Font>พนักงานลาออก</Font><br />
                  <FontNum>2</FontNum>
                </TextNav>
              </Navmanage>
            </div>
            <div className="large-3 columns">
              <Navmanage>
                <Pic> <i aria-hidden="true" className="icon-quality" /></Pic>
                <TextNav>
                  <Font>พนักงานปรับตำแหน่ง</Font><br />
                  <FontNum>2</FontNum>
                </TextNav>
              </Navmanage>
            </div>
          </div>
          <div className="row">
            <div className="large-4 columns"><Head>รายชื่อพนักงาน</Head></div>
            <div className="filter-claim">
              {/* <FilterSearch /> */}
              {/* groupBenefit={this.props.groupBenefit} */}
            </div>
          </div>
          <Divider />
          <div className="row">
            <div className="large-2 columns">
              <TextIn>รหัสพนักงาน <Icon name="sort descending" /></TextIn>
            </div>
            <div className="large-2 columns">
              <TextIn>ชื่อ-นามสกุล <Icon name="sort descending" /></TextIn>
            </div>
            <div className="large-1 columns">
              <TextIn>เลขสมาชิก <Icon name="sort descending" /></TextIn>
            </div>
            <div className="large-2 columns">
              <TextIn>แผนประกันภัย <Icon name="sort descending" /></TextIn>
            </div>
            <div className="large-2 columns">
              <TextIn>สถานะพนักงาน <Icon name="sort descending" /></TextIn>
            </div>
            <div className="large-1 columns">
              <TextIn>วันที่มีผล <Icon name="sort descending" /></TextIn>
            </div>
            <div className="large-1 columns">
              <TextIn>option <Icon name="sort descending" /></TextIn>
            </div>
          </div>
          <div className="quotation-box">
            <div className="quotation-show-mp">
              <Head>แผนประกันภัย</Head>
              <Divider />
              <div className="quotation-body-show-mp-box">
                <div className="quotation-mp-edit-noplan">
                  ยังไม่มีแพลนเพิ่มเติม
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div />
  }
  }

const mapStateToProps = state => ({
  customer: state.customerReducer.customer,
});

const mapDispatchToProps = dispatch => ({
  getCustomer: () => dispatch(getCustomer()),

});

export default connect(mapStateToProps, mapDispatchToProps)(manageEmployee);
