import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { createPlan, editPlan } from '../../../api/set-plan';

import '../../../styles/submit-plan.scss';
import erase from '../../image/icons-8-erase.png';


class FormSubmitPlan extends Component {
  static propTypes = {
    activePlan: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    editPlan: PropTypes.func.isRequired,
    createPlan: PropTypes.func.isRequired,
    handlePlan: PropTypes.func.isRequired,
    handleModalFinish: PropTypes.func,
    handleResetProfilePlan: PropTypes.func.isRequired,
    planName: PropTypes.string.isRequired,
    employeeOfPlan: PropTypes.number.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    const numberOfPlan = parseInt(employeeOfPlan, 10);
    if (this.props.activePlan === -1) {
      this.props.handleModalFinish();
      this.props.createPlan({ planName, numberOfPlan });
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
              ขั้นตอนที่ 1 : Choose High Level Plan{' '}
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
              <div className="large-4 columns">
                <div className="paragraph-step1">
                  <p className="p-in-modal">ชื่อแพลน</p>
                  <br />
                  <p className="p-in-modal">จำนวนพนักงานในแพลน</p>
                </div>
              </div>
              <div className="large-8 columns">
                <Form onSubmit={this.handleClick}>
                  <Form.Group widths="equal">
                    <Form.Input
                      placeholder="ชื่อแพลน"
                      name="planName"
                      value={this.props.planName}
                      onChange={this.props.handleChange}
                      style={{ marginTop: '7%', paddingLeft: '0px' }}
                      required
                    />
                    <br />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input
                      placeholder="ระบุจำนวนพนักงาน"
                      value={this.props.employeeOfPlan}
                      name="employeeOfPlan"
                      id="employeeOfPlan"
                      onChange={this.props.handleChange}
                    />
                    <br />
                  </Form.Group>
                  <Button
                    style={{
                      marginTop: '3%',
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
                </Form>
              </div>
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
