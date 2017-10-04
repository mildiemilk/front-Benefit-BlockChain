import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react';
import { createPlan, editPlan } from '../../../api/set-plan';
import '../../../styles/submit-plan.scss';
import erase from '../../image/icons-8-erase.png';

class FormSubmitPlan extends Component {
  static propTypes = {
    activePlan: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    // editPlan: PropTypes.func.isRequired,
    // createPlan: PropTypes.func.isRequired,
    // handlePlan: PropTypes.func.isRequired,
    handleModalFinish: PropTypes.func,
    handleResetProfilePlan: PropTypes.func.isRequired,
    planName: PropTypes.string.isRequired,
    employeeOfPlan: PropTypes.string.isRequired,
    planList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleUpdateData: PropTypes.func.isRequired,
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
    const { planName, employeeOfPlan } = this.props;
    const numberOfPlan = parseInt(employeeOfPlan, 10);
    if (this.props.activePlan === -1) {
      const employeeOfPlan = numberOfPlan;
      createPlan({ planName, employeeOfPlan })
      .then(() => {
        this.props.handleModalFinish();
        // this.props.handlePlan(this.props.planList.length);
      });
      // console.log('thisPlanList', this.props.planList.length);
      // setTimeout(() => this.props.handlePlan(this.props.planList.length), 2000);
    } else {
      editPlan(
        { planName, employeeOfPlan },
        this.props.planList[this.props.activePlan].planId,
        'profilePlan',
      )
      .then(() => {
        this.props.handleUpdateData();
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
              <Form className="submit-plan-form-create-plan">
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
                    value={this.props.employeeOfPlan}
                    name="employeeOfPlan"
                    id="employeeOfPlan"
                    onChange={this.props.handleChange}
                  />
                </Form.Field>
              </Form>
              {
                this.props.btnCancle
                ? <Button
                  style={{
                    width: '164px',
                    height: '40px',
                    borderRadius: '20px',
                    color: '#ffffff',
                    backgroundColor: '#f7555f',
                  }}
                  onClick={this.props.handleClose}
                >
                  ยกเลิก
                </Button>
                : <div />
              }
              <Button
                style={{
                  textAlign: 'center',
                  width: '164px',
                  height: '40px',
                  backgroundColor: '#3A7BD5',
                  color: 'white',
                  float: 'right',
                  borderRadius: '20px',
                  marginBottom: '3%',
                }}
                type="submit"
              >
                บันทึก
            </Button>
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
