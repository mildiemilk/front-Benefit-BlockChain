import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexyInsurance from '../../../../assets/employee/Flexy_Plan_insurance.jpg';
import Info from '../../../../assets/employee/info.png';
import FlexyHealth from '../../../../assets/employee/Flexy_Plan_health.png';
import FlexyGeneralExpense from '../../../../assets/employee/Flexy_Plan_generalExpense.png';

class FlexyPlanBox extends Component {
  static propTypes = {
    plan: PropTypes.number.isRequired,
    handleClickInsurance: PropTypes.func.isRequired,
    handleClickHealth: PropTypes.func.isRequired,
    handleClickGeneralExpense: PropTypes.func.isRequired,
  };
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { plan } = this.props;
    return (
      <div>
        <div className="box-space">
          <div className="flexy-plan-box">
            <div className="head-flexy-plan-box">
              <img src={Info} alt="Plan1" className="flexy-image-info" />
              <img className="flexy-image-head" src={FlexyInsurance} alt={`plan${plan + 1}`} />
              <span className="flexy-text-header">INSURANCE</span>
            </div>
            <div
              className="body-flexy-plan-box"
              onClick={this.props.handleClickInsurance}
              role="button"
              aria-hidden
            >
              <span className="flexy-text-body small-7 columns">แผนประกันภัย</span>
              <span className="flexy-more-body small-4 columns">ดูเพิ่มเติม &gt;</span>
            </div>
            <div className="tail-flexy-plan-box">
              <ul className="flexy-text-tail">
                <li>ผลประโยชน์และความคุ้มครอง</li>
                <li>IPD 400 บาท/ครั้ง</li>
                <li>OPD 1,200 บาท/ครั้ง</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-space">
          <div className="flexy-plan-box">
            <div className="head-flexy-plan-box">
              <img src={Info} alt="Plan1" className="flexy-image-info" />
              <img className="flexy-image-head" src={FlexyHealth} alt={`plan${plan + 1}`} />
              <span className="flexy-text-header">HEALTH</span>
            </div>
            <div
              className="body-flexy-plan-box"
              onClick={this.props.handleClickHealth}
              role="button"
              aria-hidden
            >
              <span className="flexy-text-body small-7 columns">สุขภาพ</span>
              <span className="flexy-more-body small-4 columns">ดูเพิ่มเติม &gt;</span>
            </div>
            <div className="tail-flexy-plan-box">
              <ul className="flexy-text-tail">
                <li>สิทธิประโยชน์</li>
                <li>ซื้อสินค้า 400 บาท</li>
                <li>บริการด้านสุภาพ 800 บาท</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-space">
          <div className="flexy-plan-box">
            <div className="head-flexy-plan-box">
              <img src={Info} alt="Plan1" className="flexy-image-info" />
              <img className="flexy-image-head" src={FlexyGeneralExpense} alt={`plan${plan + 1}`} />
              <span className="flexy-text-header">GENERAL EXPENSE</span>
            </div>
            <div
              className="body-flexy-plan-box"
              onClick={this.props.handleClickGeneralExpense}
              role="button"
              aria-hidden
            >
              <span className="flexy-text-body small-7 columns">ใช้จ่ายทั่วไป</span>
              <span className="flexy-more-body small-4 columns">ดูเพิ่มเติม &gt;</span>
            </div>
            <div className="tail-flexy-plan-box">
              <ul className="flexy-text-tail">
                <li>สิทธิประโยชน์</li>
                <li>ค่ารถ ค่าเติมน้ำมัน 1,000 บาท</li>
                <li>ค่าของใช้ 200 บาท</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlexyPlanBox;
