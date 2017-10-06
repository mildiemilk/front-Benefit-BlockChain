import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import '../../styles/chart-box.scss';
import EmpolyeeChart from './empolyee-chart';
import PlanChart from './plan-chart';
import { getBenefitPlan } from '../../api/benefit-plan';
import { setCompleteStep, getCompleteStep, getSummaryEmployee, getSummaryGroup, summaryInsurancePlan } from '../../api/profile-company';
import { getSummaryBenefitPlan } from '../../api/benefit-plan';
import ModalConfirmPassword from '../ModalConfirmPassword';

class Piechart extends Component {
  static propTypes = {
    data: PropTypes.shape.isRequired,
    setCompleteStep: PropTypes.func.isRequired,
    completeStep: PropTypes.bool.isRequired,
    getCompleteStep: PropTypes.func.isRequired,
    summaryGroup: PropTypes.arrayOf(PropTypes.object).isRequired,
    // benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    // summaryEmployee: PropTypes.arrayOf(PropTypes.object).isRequired,
    getSummaryEmployee: PropTypes.func.isRequired,
    getBenefitPlan: PropTypes.func.isRequired,
    getSummaryGroup: PropTypes.func.isRequired,
    summaryInsurancePlan: PropTypes.func.isRequired,
    summaryInsurance: PropTypes.arrayOf(PropTypes.object).isRequired,
    getSummaryBenefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    summaryBenefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      passwordToConfirm: '',
    };
    props.summaryInsurancePlan();
    props.getSummaryBenefitPlan();
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

  // renderHead = allPlan => {
  //   console.log('all', allPlan);
  //   if (allPlan !== undefined && allPlan.length >= 1) {
  //     const plan = allPlan.map(allGroup => (
  //       <Table.HeaderCell
  //         rowSpan="2"
  //         textAlign="center"
  //         style={{
  //           backgroundColor: '#3a7bd5',
  //           color: 'white',
  //           height: '80px',
  //         }}
  //       >
  //         {allGroup.benefitPlanName}
  //       </Table.HeaderCell>
  //     ));
  //     return plan;
  //   }
  //   return '';
  // }
  renderRow = () => {
    const { summaryInsurance } = this.props;
    if (summaryInsurance !== undefined && summaryInsurance.length >= 1) {
      const group = summaryInsurance.map(plan => (
        <Table.Row>
          <Table.Cell textAlign="center" style={{ height: '60px', border: 'solid 1px #c8c8c8' }}>
            {plan.planName}
          </Table.Cell>
          <Table.Cell textAlign="center" style={{ height: '60px', border: 'solid 1px #c8c8c8' }}>
            {plan.amount}
          </Table.Cell>
        </Table.Row>
    ),
      );
      return group;
    }
    return '';
  }
  render() {
    const { completeStep } = this.props;
    if (completeStep) {
      return <Redirect to="/dashboard" />;
    }
    console.log('props-->', this.props);
    return (
      <div>
        <div className="row">
          <div className="large-6 columns">
            <EmpolyeeChart
              summaryGroup={this.props.summaryGroup}
              width={265}
              height={200}
            />
          </div>
          <div className="large-6 columns">
            <PlanChart
              summaryBenefitPlan={this.props.summaryBenefitPlan}
              width={265}
              height={200}
            />
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
                        border: 'solid 1px #c8c8c8',
                      }}
                    >
                      แผนประกันภัย
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      rowSpan="2"
                      textAlign="center"
                      style={{
                        backgroundColor: '#3a7bd5',
                        color: 'white',
                        height: '80px',
                        border: 'solid 1px #c8c8c8',
                      }}
                    >
                      จำนวนคนต่อแผน
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                {this.renderRow()}
              </Table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="large-2 large-offset-9 columns">
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
  getSummaryBenefitPlan: () => dispatch(getSummaryBenefitPlan()),
  summaryInsurancePlan: () => dispatch(summaryInsurancePlan()),
});
const mapStateToProps = state => ({
  benefitPlan: state.benefitPlan.plan,
  data: state.profile,
  completeStep: state.profile.completeStep[3],
  summaryInsurance: state.profile.summaryInsurancePlan,
  summaryEmployee: state.profile.summaryEmployee,
  summaryGroup: state.profile.summaryGroup,
  summaryBenefitPlan: state.benefitPlan.summaryBenefitPlan,
});

export default connect(mapStateToProps, mapDispatchToProps)(Piechart);
