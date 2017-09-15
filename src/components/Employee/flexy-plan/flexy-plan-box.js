import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Modal } from 'semantic-ui-react';
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
    flexyPlan: PropTypes.bool.isRequired,
    data: PropTypes.shape({}).isRequired,
    // timeUp: PropTypes.bool.isRequired,
  };
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ modal: true });
  }

  handleCloseModal = () => {
    this.setState({ modal: false });
  }

  render() {
    const {
      plan,
      flexyPlan,
      data,
    } = this.props;
    if (data !== undefined) {
      return (
        <div>
          <div className={flexyPlan === true ? 'box-box' : ''}>
            <div className="box-space">
              <div className="flexy-plan-box">
                <div className="head-flexy-plan-box">
                  <img
                    src={Info}
                    alt="Plan1"
                    className="flexy-image-info"
                    onClick={this.handleOpenModal}
                    role="button"
                    aria-hidden
                  />
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
                  <img
                    src={Info}
                    alt="Plan1"
                    className="flexy-image-info"
                    onClick={this.handleOpenModal}
                    role="button"
                    aria-hidden
                  />
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
                  <img
                    src={Info}
                    alt="Plan1"
                    className="flexy-image-info"
                    onClick={this.handleOpenModal}
                    role="button"
                    aria-hidden
                  />
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
          <Modal
            className="plan-modal-info"
            trigger={<div />}
            open={this.state.modal}
            onClose={this.handleCloseModal}
          >
            <div className="insurance-box-modal">
              <span
                className="insurance-modal-cancel-box"
                onClick={this.handleCloseModal}
                role="button"
                aria-hidden
              >
                <Icon className="insurance-modal-cancel" name="plus" />
              </span>
              <span className="insurance-modal-text-header">
                User Tips!
              </span>
              <p className="insurance-modal-text">
                สิทธิประโยชน์ด้านค่าใช้จ่ายทั่วไปที่คุณจะได้รับในแต่ละปี
                 โดยขอบเขตและเงื่อนไขในการเคลมนั้นเป็นไปตามที่ HR ระบุไว้
              </p>
            </div>
          </Modal>
        </div>
      );
    }
    return (<div />);
  }
}

export default FlexyPlanBox;
