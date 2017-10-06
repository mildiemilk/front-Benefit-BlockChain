import React, { Component } from 'react';
import { Icon, Popup, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Head from '../Head';
import ModalEditEmployee from './ModalEditEmployee';
import { getGroupBenefit, deleteEmployee, employeeDetail, manageEmployee, getSummaryTotalEmployee } from '../../api/profile-company';
import { getBenefitPlan } from '../../api/benefit-plan';
import { Box, Pic, TextNav, Number } from '../StyleComponent';
import { ListPopup, DivFloat, DivImg, TextList, DivHead, TextElip, StatusTag } from './styled';
import employee from '../../../assets/EmployeeList/icons-8-commercial-development-management.png';
import promotion from '../../../assets/EmployeeList/icons-8-new-job.png';
import newjobs from '../../../assets/EmployeeList/icons-8-permanent-job.png';
import Exit from '../../../assets/EmployeeList/icons-8-export.png';
import excel from '../../../assets/EmployeeList/icons-8-ms-excel.png';
import pdf from '../../../assets/EmployeeList/icons-8-pdf.png';
import print from '../../../assets/EmployeeList/icons-8-print.png';
import ModalDelete from './ModalDelete';
import FilterSearch from '../FilterSearch';

const Popups = styled(Popup)`
  display: inline-block;
`;

class employeeList extends Component {
  static propTypes = {
    employeeDetail: PropTypes.func.isRequired,
    groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    getGroupBenefit: PropTypes.func.isRequired,
    getBenefitPlan: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    totalEmployee: PropTypes.shape({}).isRequired,
    getSummaryTotalEmployee: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      minList: 0,
      maxList: 20,
      pageNumber: 1,
      data: props.data,
      checkDelete: false,
      checkManage: false,
      optionGroupBenefit: [],
      optionTypeEmployee: [
        { key: 1, text: 'full-time', value: 'full-time' },
        { key: 2, text: 'part-time', value: 'part-time' },
        { key: 3, text: 'out-source', value: 'out-source' },
      ],
      optionDepartment: [],
      optionTitles: [],
      optionBenefitPlan: [],
      popup: false,
    };
    props.employeeDetail();
    props.getBenefitPlan();
    props.getGroupBenefit();
    props.getSummaryTotalEmployee();
  }
  // componentWillMount() {
  //   console.log('>>>willMount');
  //   this.renderGroup();
  //   this.renderDepartment();
  //   this.renderTitle();
  // }
  componentWillReceiveProps(newProps) {
    if (this.state.data !== newProps.data) {
      this.setState({
        data: newProps.data,
      });
    }
    this.renderGroup();
    this.renderDepartment(newProps.data);
    this.renderTitle(newProps.data);
    this.renderBenefitPlan(newProps.benefitPlan);
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextState.checkDelete) {
      this.setState({
        checkDelete: false,
      });
      this.props.employeeDetail();
    }
    if (nextState.checkManage) {
      this.setState({
        checkManage: false,
      });
      this.props.employeeDetail();
    }
  }
  checkStateDelete = () => {
    this.setState({
      checkDelete: true,
    });
  }
  checkStateManage = () => {
    this.setState({
      checkManage: true,
    });
  }
  handleClose = () => {
    this.setState({ popup: !this.state.popup });
  }
  plusLimitChange = () => {
    if (this.state.maxList <= this.renderSearch().length) {
      const { data } = this.state;
      this.setState({
        minList: this.state.minList + 4,
        maxList: this.state.maxList + 4,
        pageNumber: this.state.pageNumber + 1,
      });
      if (this.state.maxList > data.length) {
        this.setState({ maxList: data.length });
      }
    }
  }

  minusLimitChange = () => {
    if (this.state.minList !== 0) {
      this.setState({
        minList: this.state.minList - 4,
        maxList: this.state.maxList - 4,
        pageNumber: this.state.pageNumber - 1,
      });
    }
  }
  sortByGroup = value => {
    if (value === 'respect') {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.benefit_group.toLowerCase() < b.detail.benefit_group.toLowerCase()) {
            return -1;
          }
          if (a.detail.benefit_group.toLowerCase() > b.detail.benefit_group.toLowerCase()) {
            return 1;
          }
          return 0;
        }),
      });
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.benefit_group.toLowerCase() < b.detail.benefit_group.toLowerCase()) {
            return 1;
          }
          if (a.detail.benefit_group.toLowerCase() > b.detail.benefit_group.toLowerCase()) {
            return -1;
          }
          return 0;
        }),
      });
    }
  }

  sortByName = value => {
    if (value === 'respect') {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.name.toLowerCase() < b.detail.name.toLowerCase()) return -1;
          if (a.detail.name.toLowerCase() > b.detail.name.toLowerCase()) return 1;
          return 0;
        }),
      });
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.name.toLowerCase() < b.detail.name.toLowerCase()) return 1;
          if (a.detail.name.toLowerCase() > b.detail.name.toLowerCase()) return -1;
          return 0;
        }),
      });
    }
  }

  sortByCode = value => {
    if (value === 'respect') {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.employee_code.toLowerCase() < b.detail.employee_code.toLowerCase()) {
            return -1;
          }
          if (a.detail.employee_code.toLowerCase() > b.detail.employee_code.toLowerCase()) {
            return 1;
          }
          return 0;
        }),
      });
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.employee_code.toLowerCase() < b.detail.employee_code.toLowerCase()) {
            return 1;
          }
          if (a.detail.employee_code.toLowerCase() > b.detail.employee_code.toLowerCase()) {
            return -1;
          }
          return 0;
        }),
      });
    }
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  renderSearch = data => {
    const list = data.filter(
      data =>
        data.detail.name.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0 ||
        data.detail.employee_code.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0 ||
        data.detail.type_of_employee.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0 ||
        data.detail.level.toLowerCase().indexOf(this.state.search.toLowerCase()) >=
          0 ||
        data.detail.benefit_group.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0,
    );
    return list;
  }
  renderGroup = () => {
    const options = this.props.groupBenefit;
    const optionGroupBenefit = [];
    if (options !== undefined && options.length >= 1) {
      options.map((option, index) => {
        optionGroupBenefit.push({
          key: index,
          text: option.groupName,
          value: option.groupName,
        });
        return option;
      });
    }
    this.setState({ optionGroupBenefit });
  }
  renderBenefitPlan = options => {
    // const options = this.props.b;
    const optionBenefitPlan = [];
    if (options !== undefined && options.length >= 1) {
      options.map((option, index) => {
        optionBenefitPlan.push({
          key: index,
          text: option.benefitPlanName,
          value: option.benefitPlanName,
        });
        return option;
      });
    }
    this.setState({ optionBenefitPlan });
  }
  renderTitle = options => {
    // const options = this.props.data;
    const optionTitles = [];
    if (options !== undefined && options.length >= 1) {
      options.map((option, index) => {
        const exist = optionTitles.findIndex(d => d.text === option.detail.title) !== -1;
        if (!exist) {
          optionTitles.push({
            key: index,
            text: option.detail.title,
            value: option.detail.title,
          });
        }
        return option;
      });
    }
    this.setState({ optionTitles });
  }
  renderDepartment = options => {
    // const options = this.props.data;
    const departments = [];
    if (options !== undefined && options.length >= 1) {
      options.map((option, index) => {
        const exist = departments.findIndex(d => d.text === option.detail.department) !== -1;
        if (!exist) {
          departments.push({
            key: index,
            text: option.detail.department,
            value: option.detail.department,
          });
        }
        return option;
      });
    }
    this.setState({ optionDepartment: departments });
  }
  renderListEmployee = data => {
    const searchData = this.renderSearch(data);
    let showData = searchData.filter(
      (data, index) =>
        index >= this.state.minList && index <= this.state.maxList,
    );
    showData = showData.map((element, index) => {
      let tag;
      if (element.detail.status === 'พนักงาน') {
        tag = <StatusTag color="#5fb34f">{element.detail.status}</StatusTag>;
      } else if (element.detail.status === 'ลาออก') {
        tag = <StatusTag color="#e43e3e">{element.detail.status}</StatusTag>;
      } else if (element.detail.status === 'ปรับตำแหน่ง') {
        tag = <StatusTag color="#109f94">{element.detail.status}</StatusTag>;
      } else if (element.detail.status === 'พนักงานใหม่') {
        tag = <StatusTag color="#3a7bd5">{element.detail.status}</StatusTag>;
      }
      return (<div className="employee-list-box">
        <div className="row">
          <div className="large-3 columns">
            <div className="large-5 columns">
              <div className="list-box-in-list">
                <p>{element.detail.employeeCode}</p>
              </div>
            </div>
            <div className="large-7 columns">
              <div className="list-box-in-list">
                <p>{element.detail.name}&nbsp;{element.detail.lastname}</p>
              </div>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="list-box-in-list">
              <TextElip>{element.detail.department}</TextElip>
            </div>
          </div>
          <div className="large-5 columns">
            <div className="large-4 columns">
              <div className="list-box-in-list group">
                <p>{element.detail.benefitGroup}</p>
              </div>
            </div>
            <div className="large-4 columns">
              <div className="list-box-in-list group">
                <p>{element.detail.benefitPlan}</p>
              </div>
            </div>
            <div className="large-4 columns">
              <div className="list-box group">
                <p>{tag}</p>
              </div>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="large-6 columns">
              <div className="list-box group">
                {element.detail.effectiveDate === '-'
                ? element.detail.effectiveDate
                : moment(element.detail.effectiveDate)
                .format('L')
                }
              </div>
            </div>
            <div className="large-6 columns">
              <div className="list-box-in-list list-box-in-list-action">
                <div className="edit-employee-list">
                  <Link to={`/addemployee/${index}`}>
                    <Icon name="search" />
                  </Link>
                </div>
                <div className="edit-employee-list">
                  {
                    this.props.data !== undefined && this.props.data.length >= 1
                    ? <ModalEditEmployee
                      optionGroupBenefit={this.state.optionGroupBenefit}
                      optionDepartment={this.state.optionDepartment}
                      optionTitles={this.state.optionTitles}
                      optionTypeEmployee={this.state.optionTypeEmployee}
                      manageEmployee={manageEmployee}
                      checkStateManage={this.checkStateManage}
                      optionBenefitPlan={this.state.optionBenefitPlan}
                      employeeId={element._id}
                      log={element.log}
                    />
                  : <div />
                  }
                </div>
                <ModalDelete
                  deleteEmployee={deleteEmployee}
                  checkStateDelete={this.checkStateDelete}
                  idEmployee={element._id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    });
    return showData;
  }
  renderGroupPopup = Groups => {
    const allGroup = Groups.map(Group => (
      <DivFloat className="large-4 columns">
        <input type="checkbox" value="group" />
        <ListPopup>{Group.GroupName}</ListPopup>
      </DivFloat>
    ));
    return allGroup;
  }
  render() {
    const { data, totalEmployee } = this.props;
    console.log('summary', totalEmployee);
    return (
      <div className="employee-list">
        <Head content="รายชื่อพนักงาน" />
        <div className="row">
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={employee} alt="allEmployee" /></Pic>
              <TextNav>พนักงานทั้งหมด</TextNav>
              <Number>
                {data.length}
              </Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={promotion} alt="allEmployee" /></Pic>
              <TextNav>ปรับตำแหน่งเดือนนี้</TextNav>
              <Number>
                { totalEmployee !== ''
                ? totalEmployee.promote
                : <div />
                }
              </Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={newjobs} alt="allEmployee" /></Pic>
              <TextNav>เข้าทำงานใหม่เดือนนี้</TextNav>
              <Number>
                { totalEmployee !== ''
                ? totalEmployee.new
                : <div />
                }
              </Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={Exit} alt="allEmployee" /></Pic>
              <TextNav>ลาออกเดือนนี้</TextNav>
              <Number>
                { totalEmployee !== ''
                ? totalEmployee.resign
                : <div />
                }
              </Number>
            </Box>
          </div>
        </div>
        <div className="row">
          <FilterSearch
            groupBenefit={this.props.groupBenefit}
            handleChange={this.handleChange}
          />
          <div className="large-3 columns">
            <DivImg>
              <img src={excel} alt="excel" height="24" width="24" />
            </DivImg>
            <DivImg>
              <img src={pdf} alt="pdf" height="24" width="24" />
            </DivImg>
            <DivImg>
              <img src={print} alt="printer" />
            </DivImg>
          </div>
          <div className="large-5 columns">
            {/* <Link to="/addemployee/new"> */}
            {/* <button className="add-employee-button">
            เพิ่มพนักงานใหม่
            </button> */}
            <Popup
              trigger={
                <button className="add-employee-button" onClick={() => this.handleClose()}>
                  เพิ่มพนักงานใหม่
                </button>
              }
              content={
                <List divided relaxed style={{ cursor: 'pointer' }}>
                  <List.Item>
                    <Link to="/addemployee/new">
                      <List.Content>
                        <p>
                          เพิ่มพนักงานรายบุคคล
                        </p>
                      </List.Content>
                    </Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/addemployee/group">
                      <List.Content>
                        <p>
                        เพิ่มพนักงานเป็นกลุ่ม
                        </p>
                      </List.Content>
                    </Link>
                  </List.Item>
                </List>
              }
              on="click"
              position="bottom center"
              open={this.state.popup}
              onClose={this.handleClose}
            />
            {/* </Link> */}
          </div>
        </div>
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
                  <TextList>แผนก</TextList>
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
              <div className="large-5 columns">
                <div className="large-4 columns">
                  <DivHead>
                    <TextList>กลุ่มสิทธิประโยชน์</TextList>
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
                    <TextList>แผนสิทธิประโยชน์</TextList>
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
          {this.renderListEmployee(this.state.data)}
        </div>
        {/* <div className="list-change-level">
          <div
            className="list-change-level-box"
            onClick={this.minusLimitChange}
            role="button"
            aria-hidden
          >
            <Icon name="caret left" size="large" />
          </div>
          <div className="list-change-level-box-number">
            <p>{this.state.pageNumber}</p>
          </div>
          <div
            className="list-change-level-box"
            onClick={this.plusLimitChange}
            role="button"
            aria-hidden
          >
            <Icon name="caret right" size="large" />
          </div> */}
        {/* </div> */}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  employeeDetail: () => dispatch(employeeDetail()),
  getGroupBenefit: () => dispatch(getGroupBenefit()),
  getBenefitPlan: () => dispatch(getBenefitPlan()),
  getSummaryTotalEmployee: () => dispatch(getSummaryTotalEmployee()),
});

const mapStateToProps = state => ({
  data: state.profile.employeeDetail,
  totalEmployee: state.profile.summaryTotalEmployee,
  groupBenefit: state.profile.groupBenefit,
  benefitPlan: state.benefitPlan.plan,
});

export default connect(mapStateToProps, mapDispatchToProps)(employeeList);
