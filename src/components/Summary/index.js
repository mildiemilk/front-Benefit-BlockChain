import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import '../../styles/chart-box.scss';
import EmpolyeeChart from './empolyee-chart';
import PlanChart from './plan-chart';
import { getBenefitPlan } from '../../api/benefit-plan';
import { setCompleteStep, getCompleteStep, getSummaryEmployee, getSummaryGroup } from '../../api/profile-company';
import ModalConfirmPassword from '../ModalConfirmPassword';

class Piechart extends Component {
  static propTypes = {
    data: PropTypes.shape.isRequired,
    setCompleteStep: PropTypes.func.isRequired,
    completeStep: PropTypes.bool.isRequired,
    getCompleteStep: PropTypes.func.isRequired,
    summaryGroup: PropTypes.arrayOf(PropTypes.object).isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    summaryEmployee: PropTypes.arrayOf(PropTypes.object).isRequired,
    getSummaryEmployee: PropTypes.func.isRequired,
    getBenefitPlan: PropTypes.func.isRequired,
    getSummaryGroup: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      passwordToConfirm: '',
    };
  }
  componentDidMount = () => {
    this.props.getCompleteStep();
    this.props.getSummaryEmployee();
    this.props.getSummaryGroup();
    this.props.getBenefitPlan();
  }
  handlePost = () => {
    const { passwordToConfirm } = this.state;
    const step = 3;
    console.log('step', step);
    this.props.setCompleteStep(passwordToConfirm, step);
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  renderHead = allPlan => {
    console.log('all', allPlan);
    if (allPlan !== undefined && allPlan.length >= 1) {
      const plan = allPlan.map(allGroup => (
        <Table.HeaderCell
          rowSpan="2"
          textAlign="center"
          style={{
            backgroundColor: '#3a7bd5',
            color: 'white',
            height: '80px',
          }}
        >
          {allGroup.benefitPlanName}
        </Table.HeaderCell>
      ));
      return plan;
    }
    return '';
  }
  renderRow = employee => {
    // console.log('all', allGroups);
    // if (allGroups !== undefined && allGroups.length >= 1) {
    //   const group = allGroups.map(allGroup => (
    //     <Table.Row>
    //       {/* <Table.Cell textAlign="center" style={{ height: '60px' }}>
    //         Alpha Team
    //       </Table.Cell>
    //       <Table.Cell textAlign="center" style={{ height: '60px' }}>
    //         50
    //       </Table.Cell>
    //       <Table.Cell textAlign="center" style={{ height: '60px' }}>
    //         24
    //       </Table.Cell> */}
    //     </Table.Row>
    //     ));
    //   return group;
    // }
    // return '';
    console.log('employee', employee);
    return (<div>gdgfg</div>);
  }
  render() {
    const { completeStep, benefitPlan, summaryEmployee } = this.props;
    if (completeStep) {
      return <Redirect to="/dashboard" />;
    }
    console.log('props-->', this.props);
    return (
      <div>
        <div className="row">
          <div className="large-6 columns">
            <EmpolyeeChart summaryGroup={this.props.summaryGroup} />
          </div>
          <div className="large-6 columns">
            <PlanChart />
          </div>
        </div>
        <div className="table-chart-box">
          <div className="row">
            <div className="large-10 large-centered columns">
              <p className="chart-head-text">รายละเอียด</p>
              <Table celled structured>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell
                      rowSpan="2"
                      textAlign="center"
                      style={{
                        backgroundColor: '#3a7bd5',
                        color: 'white',
                        height: '80px',
                      }}
                    >
                      กลุ่มพนักงาน
                    </Table.HeaderCell>
                    {this.renderHead(benefitPlan)}
                  </Table.Row>
                </Table.Header>
                {this.renderRow(summaryEmployee)}
                <Table.Body>
                  <Table.Row>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      Alpha Team
                    </Table.Cell>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      50
                    </Table.Cell>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      24
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      Beta Team
                    </Table.Cell>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      22
                    </Table.Cell>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      52
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell
                      textAlign="center"
                      style={{ height: '60px', backgroundColor: '#d8e4f3' }}
                    >
                      GammaTeam
                    </Table.Cell>
                    <Table.Cell
                      textAlign="center"
                      style={{ height: '60px', backgroundColor: '#d8e4f3' }}
                    >
                      77
                    </Table.Cell>
                    <Table.Cell
                      textAlign="center"
                      style={{ height: '60px', backgroundColor: '#d8e4f3' }}
                    >
                      77
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="large-3 large-offset-9 columns">
            <ModalConfirmPassword
              handlePost={this.handlePost}
              handleChange={this.handleChange}
              data={this.props.data}
              content="ส่งข้อมูล"
              head="การส่งข้อมูล"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCompleteStep: (passwordToConfirm, step) =>
  dispatch(setCompleteStep(passwordToConfirm, step)),
  getCompleteStep: () => dispatch(getCompleteStep()),
  getSummaryEmployee: () => dispatch(getSummaryEmployee()),
  getSummaryGroup: () => dispatch(getSummaryGroup()),
  getBenefitPlan: () => dispatch(getBenefitPlan()),
});
const mapStateToProps = state => ({
  benefitPlan: state.benefitPlan.plan,
  data: state.profile,
  completeStep: state.profile.completeStep[3],
  summaryEmployee: state.profile.summaryEmployee,
  summaryGroup: state.profile.summaryGroup,
});

export default connect(mapStateToProps, mapDispatchToProps)(Piechart);
