import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react';
import { createPlan, editPlan } from '../../../api/set-plan';
import '../../../styles/submit-plan.scss';
import erase from '../../image/icons-8-erase.png';

class FormSubmitPlan extends Component {
  static propTypes = {
    activePlan: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    // editPlan: PropTypes.func.isRequired,
    // createPlan: PropTypes.func.isRequired,
    // handlePlan: PropTypes.func.isRequired,
    handleModalFinish: PropTypes.func,
    handleResetProfilePlan: PropTypes.func.isRequired,
    planName: PropTypes.string.isRequired,
    employeeOfPlan: PropTypes.number.isRequired,
    planList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleUpdateEditData: PropTypes.func.isRequired,
    btnCancle: PropTypes.bool,
    handleClose: PropTypes.func,
  }
  static defaultProps = {
    handleModalFinish: null,
    btnCancle: false,
    handleClose: null,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    const { planName, employeeOfPlan, activePlan, planList } = this.props;
    const numberOfPlan = parseInt(employeeOfPlan, 10);
    if (this.props.activePlan === -1) {
      const employeeOfPlan = numberOfPlan;
      createPlan({ planName, employeeOfPlan })
      .then(() => {
        this.props.handleModalFinish();
      });
    } else {
      editPlan(
        { planName, employeeOfPlan },
        planList[activePlan].planId,
        'profilePlan',
      )
      .then(() => {
        this.props.handleUpdateEditData(activePlan);
      });
    }
  }

  render() {
    return (
      <div>
        <div className="fillBox1">
          <div className="headBox step1">
            <span className="headLogo">
              ขั้นตอนที่ 1 : ตั้งชื่อแผนประกัน
            </span>
            <div className="box-in-head-box">
              <span role="button" aria-hidden onClick={() => this.props.handleResetProfilePlan()}>
                <img
                  src={erase}
                  className="image-erase"
                  role="button"
                  aria-hidden
                  alt="erase"
                />
                <span className="headLogo">Reset</span>
              </span>
            </div>
          </div>
          <div className="set-padding">
            <div className="row">
              <Form className="submit-plan-form-create-plan" onSubmit={this.handleClick}>
                <Form.Field inline>
                  <label className="submit-plan-label-create-plan" htmlFor="planName">ชื่อแผน</label>
                  <Input
                    className="submit-plan-input-create-plan"
                    placeholder="ชื่อแผน"
                    name="planName"
                    value={this.props.planName}
                    onChange={this.props.handleChange}
                    required
                  />
                </Form.Field>
                <Form.Field inline>
                  <label className="submit-plan-label-create-plan" htmlFor="planName">จำนวนพนักงานในแผน</label>
                  <Input
                    className="submit-plan-input-create-plan"
                    placeholder="ระบุจำนวนพนักงาน"
                    value={this.props.employeeOfPlan === 0 ? '' : this.props.employeeOfPlan}
                    name="employeeOfPlan"
                    id="employeeOfPlan"
                    onChange={this.props.handleChange}
                  />
                </Form.Field>
                {
                  this.props.btnCancle
                  ? <Button
                    className="submit-plan-btn-form-submit-plan btn-red"
                    onClick={this.props.handleClose}
                  >
                    ยกเลิก
                  </Button>
                  : <div />
                }
                <Button
                  className="submit-plan-btn-form-submit-plan btn-blue grap-bottom"
                  style={{
                    float: 'right',
                    marginBottom: '1.4vw',
                  }}
                  type="submit"
                >
                  บันทึก
              </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   createPlan: data => dispatch(createPlan(data)),
// });
// const mapStateToProps = state => ({
//   planList: state.plan.planList,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(FormSubmitPlan);
export default FormSubmitPlan;
