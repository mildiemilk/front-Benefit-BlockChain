import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Step, Divider } from 'semantic-ui-react';
import { Head, Step1, StepRadius, Step4 } from './styled';

class NavInsure extends Component {
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
    return (
      <div className="NavInsure">
        <div className="row">
          <div className="large-12 column">
            <Head> จัดแผนประกัน </Head>
            <Divider />
          </div>
        </div>
        <div className="row">
          <StepRadius ordered>
            <Step1
              completed={this.props.step > 1}
              active={this.props.step === 1}
              description="จัดแผนประกัน"
            />
            <Step
              completed={this.props.step > 2}
              active={this.props.step === 2}
              description="เลือกบริษัทประกัน"
            />
            <Step
              completed={this.props.step > 3}
              active={this.props.step === 3}
              description="อัปโหลดไฟล์"
            />
            <Step4
              active={this.props.step === 4}
              description="ส่งข้อมูล"
            />
          </StepRadius>
        </div>
      </div>
    );
  }
}

export default NavInsure;
