import React, { Component } from 'react';
import '../../styles/employee-benefits.scss';

class FinishSelectPlan extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="employeeBenefits-select-box">
        <div className="employeeBenefits-select-head-box">
          <p>กลุ่ม A</p>
        </div>
        <div className="employeeBenefits-select-plan">
          <div className="row">
            <div className="large-8 columns">
              <p>จำนวนพนักงานในกลุ่มนี้</p>
              <p>รูปแบบของแผนสิทธิประโยชน์ที่ต้องการ</p>
              <p>แผนสิทธิประโยชน์ที่เลือกใช้กับกลุ่มนี้</p>
            </div>
            <div className="large-4  columns">
              <p>120คน</p>
              <p>Fixed</p>
            </div>
          </div>
          <div style={{ marginTop: '5%' }}>
            <div className="plan-box">
              แผนประโยชน์ 1
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FinishSelectPlan;
