import React, { Component } from 'react';
import { Icon, Popup, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { employeeDetail } from '../../api/profile-company';
import Head from '../Head';
import ModalEditEmployee from './ModalEditEmployee';
import { getGroupBenefit } from '../../api/profile-company';
import { getBenefitPlan } from '../../api/benefit-plan';
import { Box, Pic, TextNav, Number } from '../StyleComponent';
import { ListPopup, DivFloat, DivImg, TextList, DivHead, TextElip } from './styled';
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
  }
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      minList: 0,
      maxList: 7,
      pageNumber: 1,
      data: [],
    };
  }
  componentDidMount() {
    this.props.employeeDetail();
    this.props.getBenefitPlan();
    this.props.getGroupBenefit();
  }

  componentWillReceiveProps(newProps) {
    if (this.state.data !== newProps.data) {
      this.setState({
        data: newProps.data,
      });
    }
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

  renderListEmployee = data => {
    const searchData = this.renderSearch(data);
    const showData = searchData.filter(
      (data, index) =>
        index >= this.state.minList && index <= this.state.maxList,
    );
    return showData.map(element => (
      <div className="employee-list-box">
        <div className="row">
          <div className="large-3 columns">
            <div className="large-5 columns">
              <div className="list-box-in-list">
                <p>{element.detail.employee_code}</p>
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
                <p>{element.detail.benefit_group}</p>
              </div>
            </div>
            <div className="large-4 columns">
              <div className="list-box-in-list group">
                <p>{element.detail.benefit_plan}</p>
              </div>
            </div>
            <div className="large-4 columns">
              <div className="list-box-in-list group">
                <p>{element.detail.type_of_employee}</p>
              </div>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="large-6 columns">
              <div className="list-box-in-list group">
                -
              </div>
            </div>
            <div className="large-6 columns">
              <div className="list-box-in-list">
                <div className="edit-employee-list">
                  <Icon name="search" />
                </div>
                <div className="edit-employee-list">
                  <ModalEditEmployee
                    groupBenefit={this.props.groupBenefit}
                    employeeDetail={this.state.data}
                  />
                </div>
                <ModalDelete />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  renderGroupPopup = Groups => {
    console.log('Groups', Groups);
    const allGroup = Groups.map(Group => (
      <DivFloat className="large-4 columns">
        <input type="checkbox" value="group" />
        <ListPopup>{Group.name}</ListPopup>
      </DivFloat>
    ));
    return allGroup;
  }
  render() {
    return (
      <div className="employee-list">
        <Head content="รายชื่อพนักงาน" />
        <div className="row">
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={employee} alt="allEmployee" /></Pic>
              <TextNav>พนักงานทั้งหมด</TextNav>
              <Number>1200</Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={promotion} alt="allEmployee" /></Pic>
              <TextNav>ปรับตำแหน่งเดือนนี้</TextNav>
              <Number>1200</Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={newjobs} alt="allEmployee" /></Pic>
              <TextNav>เข้าทำงานใหม่เดือนนี้</TextNav>
              <Number>1200</Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={Exit} alt="allEmployee" /></Pic>
              <TextNav>ลาออกเดือนนี้</TextNav>
              <Number>1200</Number>
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
            <Link to="/AddEmployee">
              <button className="add-employee-button">
              เพิ่มพนักงานใหม่
              </button>
            </Link>
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
        <div className="list-change-level">
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
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  employeeDetail: () => dispatch(employeeDetail()),
  getGroupBenefit: () => dispatch(getGroupBenefit()),
  getBenefitPlan: () => dispatch(getBenefitPlan()),
});

const mapStateToProps = state => ({
  data: state.profile.employeeDetail,
  groupBenefit: state.profile.groupBenefit,
  benefitPlan: state.benefitPlan.plan,
});

export default connect(mapStateToProps, mapDispatchToProps)(employeeList);
