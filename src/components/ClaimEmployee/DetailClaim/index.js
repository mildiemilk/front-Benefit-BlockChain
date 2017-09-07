import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Detail, Text } from '../../EmployeeList/AddEmployee/styled';
// import { TextList, DivHead } from '../../EmployeeList/styled';
import { getGroupBenefit } from '../../../api/profile-company';
import { getBenefitPlan } from '../../../api/benefit-plan';
import { employeeDetail } from '../../../api/profile-company';
import { DivImg } from '../../EmployeeList/styled';
import { DivClaim } from '../styled';
import excel from '../../../../assets/EmployeeList/icons-8-ms-excel.png';
import pdf from '../../../../assets/EmployeeList/icons-8-pdf.png';
import print from '../../../../assets/EmployeeList/icons-8-print.png';
import FilterSearch from '../../FilterSearch';
// import Health from './Health';
// import Expense from './Expense';
// import Insurance from './Insurance';

class DetailClaim extends Component {
  static propTypes = {
    employeeDetail: PropTypes.func.isRequired,
    groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    getGroupBenefit: PropTypes.func.isRequired,
    getBenefitPlan: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      isHealth: true,
      isExpense: false,
      isInsurance: false,
    };
  }
  componentDidMount() {
    this.props.employeeDetail();
    this.props.getBenefitPlan();
    this.props.getGroupBenefit();
  }
  handleHealth = () => {
    const { isHealth } = this.state;
    if (!isHealth) {
      this.setState({
        isHealth: true,
        isExpense: false,
        isInsurance: false,
      });
    }
  }
  handleExpense = () => {
    const { isExpense } = this.state;
    if (!isExpense) {
      this.setState({
        isHealth: false,
        isExpense: true,
        isInsurance: false,
      });
    }
  }
  handleInsurance = () => {
    const { isInsurance } = this.state;
    if (!isInsurance) {
      this.setState({
        isHealth: false,
        isExpense: false,
        isInsurance: true,
      });
    }
  }
  styletabHealth = () => {
    if (this.state.isHealth) {
      return 'active';
    }
    return '';
  }
  styletabExpense = () => {
    if (this.state.isExpense) {
      return 'active';
    }
    return '';
  }
  styletabInsurance = () => {
    if (this.state.isInsurance) {
      return 'active';
    }
    return '';
  }
  render() {
    // const { isHealth, isExpense, isInsurance } = this.state;
    return (
      <div>
        <Detail>
          <div className="tab">
            <Text
              className={this.styletabHealth()}
              onClick={this.handleHealth}
            >รายการเคลมค่าใช้จ่ายสุขภาพ</Text>
            <Text
              className={this.styletabExpense()}
              onClick={this.handleExpense}
            >รายการเคลมค่าใช้จ่ายทั่วไป</Text>
            <Text
              className={this.styletabInsurance()}
              onClick={this.handleInsurance}
              last
            >รายการเคลมประกันภัย</Text>
          </div>
          <DivClaim>
            <div className="row">
              <FilterSearch
                groupBenefit={this.props.groupBenefit}
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
            {/* <div className="list-employee-box">
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
              </div> */}
            {/* </div> */}
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
    )
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
