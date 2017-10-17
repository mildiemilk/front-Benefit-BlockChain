import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Popup, List, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Detail, Text } from '../../EmployeeList/AddEmployee/styled';
import { Box, Pic, TextNav, Number } from '../../StyleComponent';
import { TextList, DivHead } from '../../EmployeeList/styled';
import { getGroupBenefit } from '../../../api/profile-company';
import { getBenefitPlan } from '../../../api/benefit-plan';
import { employeeDetail } from '../../../api/profile-company';
import { DivImg } from '../../EmployeeList/styled';
import { DivClaim, StatusTag } from '../styled';
import excel from '../../../../assets/EmployeeList/icons-8-ms-excel.png';
import pdf from '../../../../assets/EmployeeList/icons-8-pdf.png';
import print from '../../../../assets/EmployeeList/icons-8-print.png';
import FilterSearch from '../../FilterSearch';
import allclaim from '../../../../assets/ClaimEmployee/allclaim.png';
import insurance from '../../../../assets/ClaimEmployee/insurance.png';
import health from '../../../../assets/ClaimEmployee/health.png';
import expense from '../../../../assets/ClaimEmployee/expense.png';
// import Health from './Health';
// import Expense from './Expense';
// import Insurance from './Insurance';
const Popups = styled(Popup)`
  display: inline-block;
`;
const TextLists = styled(TextList)`
`;
const Icons = styled(Icon)`
  position: absolute;
  top: 22px;
`;
class DetailClaim extends Component {
  static propTypes = {
    employeeDetail: PropTypes.func.isRequired,
    groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    getGroupBenefit: PropTypes.func.isRequired,
    getBenefitPlan: PropTypes.func.isRequired,
    styletabExpense: PropTypes.func.isRequired,
    styletabHealth: PropTypes.func.isRequired,
    styletabInsurance: PropTypes.func.isRequired,
    handleExpense: PropTypes.func.isRequired,
    handleHealth: PropTypes.func.isRequired,
    handleInsurance: PropTypes.func.isRequired,
    handleDetail: PropTypes.func.isRequired,
    claimList: PropTypes.shape({}).isRequired,
    index: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.employeeDetail();
    this.props.getBenefitPlan();
    this.props.getGroupBenefit();
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  renderListEmployee = (claimList, index) => {
    const allList = claimList.claims;
    // const searchData = this.renderSearch(data);
    // const showData = searchData.filter(
    //   (data, index) =>
    //     index >= this.state.minList && index <= this.state.maxList,
    // );
    // return showData.map(element => (
    if (allList !== undefined && allList.length >= 1) {
      if (allList[index].claims !== undefined && allList[index].claims.length >= 1) {
        const allLists = allList[index].claims;
        const result = allLists.map((list, i) => {
          let tag;
          if (list.status === 'pending') {
            tag = <StatusTag color="#3a7bd5">รอพิจารณา</StatusTag>;
          } else if (list.status === 'approve') {
            tag = <StatusTag color="#46b3b8">อนุมัติ</StatusTag>;
          } else {
            tag = <StatusTag color="#f7555f">ไม่อนุมัติ</StatusTag>;
          }
          return (<div className="employee-list">
            <div className="employee-list-box">
              <div className="row">
                <div className="large-4 columns">
                  <div className="large-5 columns">
                    <div className="list-box-in-list">
                      <p>{list.claimNumber}</p>
                    </div>
                  </div>
                  <div className="large-7 columns">
                    <div className="list-box-in-list">
                      <p>{list.detail.title}</p>
                    </div>
                  </div>
                </div>
                <div className="large-2 columns">
                  <div className="list-box-in-list">
                    <p>{moment(list.detail.date)
                      .locale('th')
                      .format('DD MMMM YYYY')}</p>
                  </div>
                </div>
                <div className="large-5 columns">
                  <div className="large-5 columns">
                    <div className="list-box-in-list">
                      <p>{list.name}</p>
                    </div>
                  </div>
                  <div className="large-3 columns">
                    <div className="list-box-in-list">
                      <p>{list.detail.amount} {list.detail.currency}</p>
                    </div>
                  </div>
                  <div className="large-4 columns">
                    <div className="list-box group">
                      <p>{tag}</p>
                    </div>
                  </div>
                </div>
                <div className="large-1 columns">
                  <div className="list-box-in-list list-box-in-list-action">
                    <div className="edit-employee-list">
                      <Icon name="edit" onClick={() => this.props.handleDetail(i)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        });
        return result;
      }
    }
    return '';
  }
  render() {
    const { claimList } = this.props;
    return (
      <div>
        {claimList.claims !== undefined && claimList.claims.length >= 1
        ? <div className="row">
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={allclaim} alt="allEmployee" /></Pic>
              <TextNav>รายการเคลมทั้งหมด</TextNav>
              <Number>{ claimList.total}</Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#689be4"><img src={insurance} alt="allEmployee" /></Pic>
              <TextNav>รายการเคลมประกันภัย</TextNav>
              <Number>{claimList.claims[2].amountOfClaim}</Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#5daa3f"><img src={health} alt="allEmployee" /></Pic>
              <TextNav>รายการเคลมสุขภาพ</TextNav>
              <Number>{claimList.claims[1].amountOfClaim}</Number>
            </Box>
          </div>

          <div className="large-3 columns">
            <Box>
              <Pic color="#ec5769"><img src={expense} alt="allEmployee" /></Pic>
              <TextNav>รายการเคลมทั่วไป</TextNav>
              <Number>{claimList.claims[0].amountOfClaim}</Number>
            </Box>
          </div>
        </div>
        : null
        }
        <Detail>
          <div className="tab">
            <Text
              className={this.props.styletabHealth()}
              onClick={this.props.handleHealth}
            >รายการเคลมค่าใช้จ่ายสุขภาพ</Text>
            <Text
              className={this.props.styletabExpense()}
              onClick={this.props.handleExpense}
            >รายการเคลมค่าใช้จ่ายทั่วไป</Text>
            <Text
              className={this.props.styletabInsurance()}
              onClick={this.props.handleInsurance}
              last
            >รายการเคลมประกันภัย</Text>
          </div>
          <DivClaim className="employee-list">
            <div className="row">
              <FilterSearch
                groupBenefit={this.props.groupBenefit}
                handleChange={this.handleChange}
              />
              <div className="large-3 end columns">
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
            </div>
            <div className="list-employee-box">
              <div className="list-header">
                <div className="row">
                  <div className="large-4 columns">
                    <div className="large-5 columns">
                      <DivHead>
                        <TextLists>เลขที่อ้างอิง</TextLists>
                        <Popups
                          trigger={
                            <Icons
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
                        <TextLists>เรื่องที่เคลม</TextLists>
                        <Popups
                          trigger={
                            <Icons
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
                      <TextLists>วันที่</TextLists>
                      <Popups
                        trigger={
                          <Icons
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
                    <div className="large-5 columns">
                      <DivHead>
                        <TextLists>ผู้เคลม</TextLists>
                        <Popups
                          trigger={
                            <Icons
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
                    <div className="large-3 columns">
                      <DivHead>
                        <TextLists>จำนวนเงิน</TextLists>
                        <Popups
                          trigger={
                            <Icons
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
                        <TextLists>สถานะการเคลม</TextLists>
                        <Popups
                          trigger={
                            <Icons
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
                  <div className="large-1 columns">
                    <TextLists>Option</TextLists>
                  </div>
                </div>
              </div>
            </div>
            {this.props.claimList !== undefined && this.props.index !== undefined
            ? this.renderListEmployee(this.props.claimList, this.props.index)
            : <div />
            }
          </DivClaim>

          {/* {isHealth
          ? <Health />
          : null
          }
          {isExpense
          ? <Expense />
          : null
          }
          {isInsurance
          ? <Insurance />
          : null
          } */}
        </Detail>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailClaim);
