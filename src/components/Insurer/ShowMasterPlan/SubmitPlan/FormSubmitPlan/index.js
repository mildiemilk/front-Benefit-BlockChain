import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Button, Form } from 'semantic-ui-react';
import { createPlan, editPlan } from '../../../../../api/set-plan';
import '../../../../../styles/submit-plan.scss';

// const moneyOptions = [{ text: '100', value: 100 }, { text: '200', value: 200 }];

class FormSubmitPlan extends Component {
  static propTypes = {
    activePlan: PropTypes.number.isRequired,
    // handleChange: PropTypes.func.isRequired,
    editPlan: PropTypes.func.isRequired,
    // styletabPrice: PropTypes.string.isRequired,
    createPlan: PropTypes.func.isRequired,
    handlePlan: PropTypes.func.isRequired,
    handleModalFinish: PropTypes.func,
    // handleResetProfilePlan: PropTypes.func.isRequired,
    planName: PropTypes.string.isRequired,
    employeeOfPlan: PropTypes.number.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    // pricePerperson: PropTypes.number.isRequired,
  }

  static defaultProps = {
    handleModalFinish: null,
  }

  constructor() {
    super();
    this.state = {};
  }

  handleClick = () => {
    const { planName, employeeOfPlan } = this.props;
    if (this.props.activePlan === -1) {
      this.props.handleModalFinish();
      this.props.createPlan({ planName, employeeOfPlan });
      setTimeout(() => this.props.handlePlan(this.props.planList.length), 2000);
    } else {
      this.props.editPlan(
        { planName, employeeOfPlan },
        this.props.planList[this.props.activePlan].planId,
        'profilePlan',
      );
    }
  }

  render() {
    return (
      <div>
        <div className="fillBox1">
          <div className="headBox step1">
            <span className="headLogo">
              ขั้นตอนที่ 1 : Choose High Level Plan
            </span>
          </div>
          <div className="formsubmit-head-box">
            <div className="formsubmit-1-box">
              <span className="formsubmit-1-l">ชื่อแพลน</span>
              <span className="formsubmit-1-r">{this.props.planName}</span>
            </div>
            <div className="formsubmit-1-box">
              <span className="formsubmit-1-l">จำนวนพนักงานในแพลน</span>
              <span className="formsubmit-1-r">{this.props.employeeOfPlan} คน</span>
            </div>
            <div className="formsubmit-1-box">
              <span className="formsubmit-1-l">ราคาต่อคน</span>
              <span className="formsubmit-1-r">12,000 บาท</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createPlan: data => dispatch(createPlan(data)),
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
});
const mapStateToProps = state => ({
  planList: state.plan.planList,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSubmitPlan);
