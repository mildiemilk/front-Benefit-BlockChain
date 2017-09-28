import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Step } from 'semantic-ui-react';
import { Step1, StepRadius, Step4 } from './styled';

class NavStep extends Component {
  static propTypes = {
    step: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: props.step,
    };
  }

  render() {
    console.log('Step', this.state.step);
    return (
      <div className="NavManageCustomerStep">
        <div className="row">
          <StepRadius ordered>
            <Step1
              completed={this.props.step > 1}
              active={this.props.step === 1}
              description="ดูแผนประกันที่ถูกเลือก"
            />
            <Step
              completed={this.props.step > 2}
              active={this.props.step === 2}
              description="ดาวน์โหลดข้อมูลพนักงาน"
            />
            <Step
              completed={this.props.step > 3}
              active={this.props.step === 3}
              description="อัปโหลดกรมธรรม"
            />
            <Step4 active={this.props.step === 4}>
            อัปโหลดรายละเอียด<br />แผนประกันภัย
            </Step4>
          </StepRadius>
        </div>
      </div>
    );
  }
}

export default NavStep;
