import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Divider, Icon, Popup, List } from 'semantic-ui-react';
import styled from 'styled-components';
import HeadCompanyInfo from '../../header-company-info';
import ModalEditEmployee from './ModalEditEmployee';
// import { DivImg } from 'react-router-dom';
import { Navmanage,
  Pic,
  TextNav,
  FontNum,
  Font,
  Head,
  TextIn,
  DisplayTag,
  StatusTag,
  TextList,
  DivHead,
  TextP,
  // PopupList,
} from './styled';
import '../../../../styles/main_icon.scss';
import { getCustomer,
  getCustomerEmployee, getCustomerSelectPlan } from '../../../../api/Insurer/customer';
import IconPlan from '../../../../../assets/Insurer/icon_plan@3x.png';
import Icity from '../../../../../assets/Insurer/icons-8-city@2x.png';
import IempPlus from '../../../../../assets/Insurer/group-copy@2x.png';
import IempDelete from '../../../../../assets/Insurer/group-copy-3@2x.png';
import Iquality from '../../../../../assets/Insurer/icons-8-good-quality@2x.png';
// import IconDownload from '../../../../../assets/Insurer/icon_download@3x.png';
// import IconView from '../../../../../assets/Insurer/icon_view@3x.png';

const Popups = styled(Popup)`
  display: inline-block;
`;

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
      search: '',
      minList: 0,
      maxList: 10,
      pageNumber: 1,
      employees: props.customerEmployee.employees,
    };
    props.getCustomerEmployee(this.state.companyId);
    props.getCustomerSelectPlan(this.state.companyId);
    props.getCustomer();
  }
  ShowPlan = plans =>
    plans.map(
      (plan, index) =>
        <div className="employee-list-box" keys={index}>
          <div className="row">
            <div className="large-5 columns">
              <div className="large-2 columns">
                <TextIn>
                  <img alt="" src={IconPlan} width="30" height="30" />
                  <span>{plan.planId.planName}</span>
                </TextIn>
              </div>
            </div>
            <div className="large-3 columns">
              <span>{plan.planId.planName}</span>
            </div>
            <div className="large-2 columns">
              <DisplayTag color="#fafafa">
                <TextP>ดูไฟล์ที่คุณส่งให้ลูกค้า</TextP></DisplayTag>
            </div>
            <div className="large-2 columns">
              <Popups
                trigger={
                  <Icon name="ellipsis vertical" size="large" />
                }
                content={
                  <p>
                    <Icon name="edit" />ดูแพลน
                  </p>
                }
                on="click"
                hideOnScroll
                position="bottom center"
              />
            </div>
          </div>
        </div>,
      );
  sortByCode = value => {
    if (value === 'respect') {
      this.setState({
        employees: this.state.employees.sort((a, b) => {
          if (a.detail.employeeCode.toLowerCase() < b.detail.employeeCode.toLowerCase()) {
            return -1;
          }
          if (a.detail.employeeCode.toLowerCase() > b.detail.employeeCode.toLowerCase()) {
            return 1;
          }
          return 0;
        }),
      });
    } else {
      this.setState({
        employees: this.state.employees.sort((a, b) => {
          if (a.detail.employeeCode.toLowerCase() < b.detail.employeeCode.toLowerCase()) {
            return 1;
          }
          if (a.detail.employeeCode.toLowerCase() > b.detail.employeeCode.toLowerCase()) {
            return -1;
          }
          return 0;
        }),
      });
    }
  }
  renderSearch = employees => {
    const list = employees.filter(
      employees =>
        employees.detail.name.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0 ||
        employees.detail.employeeCode.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0 ||
        employees.detail.status.toLowerCase()
        .indexOf(this.state.search.toLowerCase()) >= 0 ||
        employees.detail.benefitGroup.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0,
    );
    return list;
  }
  renderElement = EMPlist => {
    const searchData = this.renderSearch(EMPlist);
    let list = searchData.filter(
      (EMPlist, index) =>
        index >= this.state.minList && index <= this.state.maxList,
    );
    list = list.map((EMPlist, index) => {
      let tag;
      if (EMPlist.detail.status === 'พนักงาน') {
        tag = <StatusTag color="#5fb34f">{EMPlist.detail.status}</StatusTag>;
      } else if (EMPlist.detail.status === 'ลาออก') {
        tag = <StatusTag color="#e43e3e">{EMPlist.detail.status}</StatusTag>;
      } else if (EMPlist.detail.status === 'ปรับตำแหน่ง') {
        tag = <StatusTag color="#109f94">{EMPlist.detail.status}</StatusTag>;
      } else if (EMPlist.detail.status === 'พนักงานใหม่') {
        tag = <StatusTag color="#3a7bd5">{EMPlist.detail.status}</StatusTag>;
      }
      return (
        <div className="employee-list-box" key={index.toString()}>
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
              {tag}
            </div>
            <div className="large-2 columns">
              <TextIn>{moment(EMPlist.detail.startDate).format('L')}</TextIn>
            </div>
            <div className="large-1 columns">
              <div className="list-box-in-list">
                <div className="edit-employee-list">
                  <Icon name="search" />
                </div>
                <div className="edit-employee-list">
                  <ModalEditEmployee
                    optionGroupBenefit={this.state.optionGroupBenefit}
                    optionDepartment={this.state.optionDepartment}
                    optionTitles={this.state.optionTitles}
                    optionTypeEmployee={this.state.optionTypeEmployee}
                    manageEmployee={manageEmployee}
                    checkStateManage={this.checkStateManage}
                    optionBenefitPlan={this.state.optionBenefitPlan}
                    employeeId={this.state._id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    });
    return list;
  }
//   <div className="large-6 columns">
//     <div className="list-box-in-list">
//       <div className="edit-employee-list">
//         <Icon name="search" />
//       </div>
//       <div className="edit-employee-list">
//         {
//           this.props.data !== undefined && this.props.data.length >= 1
//           ? <ModalEditEmployee
//             optionGroupBenefit={this.state.optionGroupBenefit}
//             optionDepartment={this.state.optionDepartment}
//             optionTitles={this.state.optionTitles}
//             optionTypeEmployee={this.state.optionTypeEmployee}
//             manageEmployee={manageEmployee}
//             checkStateManage={this.checkStateManage}
//             optionBenefitPlan={this.state.optionBenefitPlan}
//             employeeId={element._id}
//           />
//         : <div />
//         }
//       </div>
//       <ModalDelete
//         deleteEmployee={deleteEmployee}
//         checkStateDelete={this.checkStateDelete}
//         idEmployee={element._id}
//       />
//     </div>
//   </div>
// </div>
  render() {
    console.log('renderPro', this.props);
    const { customer, customerSelectPlan, customerEmployee } = this.props;
    const { index } = this.state;
    console.log('rendercustomerEmployee', customerEmployee.employees);
    if (customer.length > 0) {
      return (
        <div className="employee-list">
          <HeadCompanyInfo DataCompany={customer[index]} PageName="allcustomer" />
          <div className="breadcrumbs">ลูกค้า</div>
          <div className="row">
            <Head>อัพเดตจำนวนพนักงาน </Head>
            <div className="large-3 columns">
              <Navmanage>
                <Pic> <img alt="" src={Icity} width="40" height="40" /></Pic>
                <TextNav>
                  <Font>พนักงานทัั้งหมด</Font><br />
                  <FontNum>{customerEmployee.employees.length}</FontNum>
                </TextNav>
              </Navmanage>
            </div>
            <div className="large-3 columns">
              <Navmanage>
                <Pic><img alt="" src={IempPlus} width="40" height="40" /></Pic>
                <TextNav>
                  <Font>พนักงานเข้าใหม่</Font><br />
                  <FontNum>{customerEmployee.summary.new}</FontNum>
                </TextNav>
              </Navmanage>
            </div>
            <div className="large-3 columns">
              <Navmanage>
                <Pic> <img alt="" src={IempDelete} width="40" height="40" /></Pic>
                <TextNav>
                  <Font>พนักงานลาออก</Font><br />
                  <FontNum>{customerEmployee.summary.promote}</FontNum>
                </TextNav>
              </Navmanage>
            </div>
            <div className="large-3 columns">
              <Navmanage>
                <Pic><img alt="" src={Iquality} width="40" height="40" /></Pic>
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
          <div className="list-employee-box">
            <div className="list-header">
              <div className="row">
                <div className="large-3 columns">
                  <div className="large-5 columns">
                    <DivHead>
                      <TextList>รหัสพนักงาน</TextList>
                      <Popups
                        trigger={
                          <Icon
                            name="sort descending"
                          />
                        }
                        content={
                          <List divided relaxed style={{ cursor: 'pointer' }}>
                            <List.Item>
                              <List.Content
                                onClick={() => this.sortByCode('respect')}
                              >
                                <p>Increase</p>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content
                                onClick={() => this.sortByCode('reverse')}
                              >
                                <p>Decrease</p>
                              </List.Content>
                            </List.Item>
                          </List>
                        }
                        on="click"
                        hideOnScroll
                        position="bottom center"
                      />
                    </DivHead>
                  </div>
                  <div className="large-7 columns">
                    <DivHead>
                      <TextList>ชื่อ-นามสกุล</TextList>
                      <Popups
                        trigger={
                          <Icon
                            name="sort descending"
                            style={{ cursor: 'pointer' }}
                          />
                        }
                        content={
                          <List divided relaxed style={{ cursor: 'pointer' }}>
                            <List.Item>
                              <List.Content
                                onClick={() => this.sortByName('respect')}
                              >
                                <p>A -&gt; Z</p>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content
                                onClick={() => this.sortByName('reverse')}
                              >
                                <p>Z -&gt; A</p>
                              </List.Content>
                            </List.Item>
                          </List>
                        }
                        on="click"
                        hideOnScroll
                        position="bottom center"
                      />
                    </DivHead>
                  </div>
                </div>
                <div className="large-2 columns">
                  <DivHead>
                    <TextList>เลขสมาชิก</TextList>
                    <Popups
                      trigger={
                        <Icon
                          name="sort descending"
                          style={{ cursor: 'pointer' }}
                        />
                      }
                      content={
                        <List divided relaxed style={{ cursor: 'pointer' }}>
                          <List.Item>
                            <List.Content
                              onClick={() => this.sortByCode('respect')}
                            >
                              <p>Increase</p>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content
                              onClick={() => this.sortByCode('reverse')}
                            >
                              <p>Decrease</p>
                            </List.Content>
                          </List.Item>
                        </List>
                      }
                      on="click"
                      hideOnScroll
                      position="bottom center"
                    />
                  </DivHead>
                </div>
                <div className="large-5 columns">
                  <div className="large-4 columns">
                    <DivHead>
                      <TextList>แผนประกัน</TextList>
                      <Popups
                        trigger={
                          <Icon
                            name="sort descending"
                            style={{ cursor: 'pointer' }}
                          />
                        }
                        content={
                          <List divided relaxed style={{ cursor: 'pointer' }}>
                            <List.Item>
                              <List.Content
                                onClick={() => this.sortByName('respect')}
                              >
                                <p>A -&gt; Z</p>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content
                                onClick={() => this.sortByName('reverse')}
                              >
                                <p>Z -&gt; A</p>
                              </List.Content>
                            </List.Item>
                          </List>
                        }
                        on="click"
                        hideOnScroll
                        position="bottom center"
                      />
                    </DivHead>
                  </div>
                  <div className="large-4 columns">
                    <DivHead>
                      <TextList>สถานะพนักงาน</TextList>
                      <Popups
                        trigger={
                          <Icon
                            name="sort descending"
                            style={{ cursor: 'pointer' }}
                          />
                        }
                        content={
                          <List divided relaxed style={{ cursor: 'pointer' }}>
                            <List.Item>
                              <List.Content
                                onClick={() => this.sortByName('respect')}
                              >
                                <p>A -&gt; Z</p>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content
                                onClick={() => this.sortByName('reverse')}
                              >
                                <p>Z -&gt; A</p>
                              </List.Content>
                            </List.Item>
                          </List>
                        }
                        on="click"
                        hideOnScroll
                        position="bottom center"
                      />
                    </DivHead>
                  </div>
                </div>
                <div className="large-2 columns">
                  <div className="large-6 columns">
                    <DivHead>
                      <TextList>วันที่มีผล</TextList>
                      <Popups
                        trigger={
                          <Icon
                            name="sort descending"
                            style={{ cursor: 'pointer' }}
                          />
                        }
                        content={
                          <List divided relaxed style={{ cursor: 'pointer' }}>
                            <List.Item>
                              <List.Content
                                onClick={() => this.sortByName('respect')}
                              >
                                <p>A -&gt; Z</p>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content
                                onClick={() => this.sortByName('reverse')}
                              >
                                <p>Z -&gt; A</p>
                              </List.Content>
                            </List.Item>
                          </List>
                        }
                        on="click"
                        hideOnScroll
                        position="bottom center"
                      />
                    </DivHead>
                  </div>
                  <div className="large-6 columns">
                    <TextList>Option</TextList>
                  </div>
                </div>
              </div>
            </div>
            {customerEmployee
            ? this.renderElement(customerEmployee.employees)
              // this.renderElement(customerEmployee.employees);
            : null
            }
          </div>
          <Head>แผนประกันภัย</Head>
          <Divider />
          <div>
            <div className="row">
              <div className="large-5 columns">
                <TextList>แผนประกันภัยทั้งหมดที่บริษัทนี้กำลังใช้งาน</TextList>
              </div>
              <div className="large-7 columns">
                <div className="large-2 columns">
                  <TextList>เลขกรมธรรม์</TextList>
                </div>
              </div>
            </div>
          </div>
          <br />
          {customerSelectPlan.length > 0
            ? this.ShowPlan(customerSelectPlan)
            : <div className="quotation-mp-edit-noplan">
              ยังไม่มีแพลนเพิ่มเติม
              </div>
            }
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
