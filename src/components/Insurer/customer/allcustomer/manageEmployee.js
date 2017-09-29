import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Divider, Icon } from 'semantic-ui-react';
import HeadCompanyInfo from '../../header-company-info';
// import { DivImg } from 'react-router-dom';
import { Navmanage, Pic, TextNav, FontNum, Font, Head, TextIn, displayTag, StatusTag } from './styled';
import '../../../../styles/main_icon.scss';
import { getCustomer, getCustomerEmployee, getCustomerSelectPlan } from '../../../../api/Insurer/customer';
import IconPlan from '../../../../../assets/Insurer/icon_plan@3x.png';
// import IconDownload from '../../../../../assets/Insurer/icon_download@3x.png';
// import IconView from '../../../../../assets/Insurer/icon_view@3x.png';

class manageEmployee extends Component {
  static propTypes = {
    getCustomerEmployee: PropTypes.func.isRequired,
    getCustomerSelectPlan: PropTypes.func.isRequired,
    getCustomer: PropTypes.func.isRequired,
    // index: PropTypes.number.isRequired,
    customer: PropTypes.arrayOf(PropTypes.object).isRequired,
    customerSelectPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    customerEmployee: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    match: PropTypes.shape({ params: PropTypes }),
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      companyId: props.match.params.companyId,
      index: props.match.params.index,
    };
    props.getCustomerEmployee(this.state.companyId);
    props.getCustomerSelectPlan(this.state.companyId);
    props.getCustomer();
  }
  ShowPlan = plans =>
    plans.map(
      (plan, index) =>
        <div className="quotation-body-show-mp" keys={index}>
          <div className="quotation-mp-name-box">
            <img alt="" className="quotation-icon-plan" src={IconPlan} />
            <span className="quotation-mp-name">{plan.planId.planName}</span>
          </div>
          <displayTag color="#fafafa">ดูไฟล์ที่คุณส่งให้ลูกค้า</displayTag>
        </div>,
    );
  renderElement = EMPlist => {
    const list = EMPlist.map((EMPlist, index) => (
      <div className="boxDetail" key={index.toString()}>
        <div className="">
          <div className="row">
            <div className="large-1 columns">
              <TextIn>{EMPlist.detail.employeeCode}</TextIn>
            </div>
            <div className="large-2 columns">
              {EMPlist.detail.name
              ? <TextIn>{EMPlist.detail.name} {EMPlist.detail.lastname}</TextIn>
              : ''
              }
            </div>
            <div className="large-2 columns">
              <TextIn>{EMPlist.detail.employeeCode}</TextIn>
            </div>
            <div className="large-2 columns">
              <TextIn>{EMPlist.detail.benefitGroup}</TextIn>
            </div>
            <div className="large-2 columns">
              <TextIn>{EMPlist.detail.amount} </TextIn>
            </div>
            <div className="large-2 columns">
              <StatusTag color="#46b3b8"> {EMPlist.detail.typeOfEmployee}</StatusTag>
            </div>
            <div className="large-2 columns">
              <TextIn>{moment(EMPlist.detail.startDate).format('L')}</TextIn>
            </div>
            <div className="large-1 columns">
              <Icon name="edit" />
            </div>
          </div>
        </div>
      </div>
    ));
    return list;
  }
  render() {
    const { customer, customerSelectPlan, customerEmployee } = this.props;
    const { index } = this.state;
    console.log('rendercustomerEmployee', customerEmployee.employees);
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
                  <FontNum>{customerEmployee.employees.length}</FontNum>
                </TextNav>
              </Navmanage>
            </div>
            <div className="large-3 columns">
              <Navmanage>
                <Pic> <i aria-hidden="true" className="icon-empPlus" /></Pic>
                <TextNav>
                  <Font>พนักงานเข้าใหม่</Font><br />
                  <FontNum>{customerEmployee.summary.new}</FontNum>
                </TextNav>
              </Navmanage>
            </div>
            <div className="large-3 columns">
              <Navmanage>
                <Pic> <i aria-hidden="true" className="icon-empDelete" /></Pic>
                <TextNav>
                  <Font>พนักงานลาออก</Font><br />
                  <FontNum>{customerEmployee.summary.promote}</FontNum>
                </TextNav>
              </Navmanage>
            </div>
            <div className="large-3 columns">
              <Navmanage>
                <Pic> <i aria-hidden="true" className="icon-quality" /></Pic>
                <TextNav>
                  <Font>พนักงานปรับตำแหน่ง</Font><br />
                  <FontNum>{customerEmployee.summary.resign}</FontNum>
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
            <div className="large-1 columns">
              <TextIn>รหัสพนักงาน <Icon name="sort descending" /></TextIn>
            </div>
            <div className="large-2 columns">
              <TextIn>ชื่อ-นามสกุล <Icon name="sort descending" /></TextIn>
            </div>
            <div className="large-2 columns">
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
          {customerEmployee
          ? this.renderElement(customerEmployee.employees)
          : null
          }
          <div className="quotation-box">
            <div className="quotation-show-mp">
              <Head>แผนประกันภัย</Head>
              <Divider />
              <div className="quotation-body-show-mp-box">
                {customerSelectPlan.length > 0
                  ? this.ShowPlan(customerSelectPlan)
                  : <div className="quotation-mp-edit-noplan">
                    ยังไม่มีแพลนเพิ่มเติม
                    </div>
                  }
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
  customerEmployee: state.customerEmployeeReducer.customerEmployee,
  customerSelectPlan: state.customerSelectPlanReducer.customerSelectPlan,
});

const mapDispatchToProps = dispatch => ({
  getCustomer: () => dispatch(getCustomer()),
  getCustomerSelectPlan: companyId => dispatch(getCustomerSelectPlan(companyId)),
  getCustomerEmployee: companyId => dispatch(getCustomerEmployee(companyId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(manageEmployee);
