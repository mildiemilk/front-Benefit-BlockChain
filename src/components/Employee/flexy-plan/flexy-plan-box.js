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
  constructor(props) {
    super(props);
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

  handleShowIPD = () => {
    const { data, plan } = this.props;
    const ipd = data.allBenefit[plan].benefitPlan.plan.planId;
    if (ipd.ipdLumsumPerYear) {
      return <li>IPD คุ้มครองสูงสุดไม่เกิน {ipd.ipdLumsumPerYear} บาท/ปี</li>;
    } else if (ipd.ipdLumsumPerTime) {
      return <li>IPD คุ้มครองสูงสุดไม่เกิน {ipd.ipdLumsumPerTime} บาท/ครั้ง</li>;
    } else if (ipd.rbLumsumNigthNotExceedPerYear) {
      return <li>IPD คุ้มครองสูงสุดไม่เกิน {ipd.rbLumsumNigthNotExceedPerYear} บาท/คืน</li>;
    } else if (ipd.rbSchedulePatient) {
      return <li>IPD คุ้มครองสูงสุดไม่เกิน {ipd.rbSchedulePatient} บาท/คืน</li>;
    }
    return <div />;
  }

  handleShowOPD = () => {
    const { data, plan } = this.props;
    const opd = data.allBenefit[plan].benefitPlan.plan.planId;
    if (opd.opdPerYear) {
      return <li>OPD คุ้มครองสูงสุดไม่เกิน {opd.opdPerYear} บาท/ปี</li>;
    } else if (opd.opdPerTime) {
      return <li>OPD คุ้มครองสูงสุดไม่เกิน {opd.opdPerTime} บาท/ครั้ง</li>;
    }
    return <div />;
  }

  handleShowDental = () => {
    const { data, plan } = this.props;
    const dental = data.allBenefit[plan].benefitPlan.plan.planId;
    if (dental.dentalPerYear) {
      return <li>Dental ใช้บริการได้ครั้งละ {dental.dentalPerYear} บาท</li>;
    }
    return <div />;
  }

  handleShowLife = () => {
    const { data, plan } = this.props;
    const life = data.allBenefit[plan].benefitPlan.plan.planId;
    if (life.lifePerYear) {
      return <li>Life จำนวนเงิน {life.lifePerYear} บาท</li>;
    } else if (life.lifeTimeOfSalary) {
      return <li>Life คูณอัตราเงินเดือน {life.lifeTimeOfSalary} บาท</li>;
    }
    return <div />;
  }


  handleShowInsurance = () => {
    const { plan } = this.props;
    return (
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
              {this.handleShowIPD()}
              {this.handleShowOPD()}
              {this.handleShowDental()}
              {this.handleShowLife()}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  handleShowHealth = () => {
    const { data, plan } = this.props;
    if (data.allBenefit[plan].benefitPlan.isHealth) {
      return (
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
                {
                  data.allBenefit[plan].benefitPlan.detailPlan.health.healthList
                  .map((item, index) => (
                    <li key={index.toString()}>
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      );
    }
    return <div />;
  }

  handleShowGeneral = () => {
    const { data, plan } = this.props;
    if (data.allBenefit[plan].benefitPlan.isExpense) {
      return (
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
                {
                  data.allBenefit[plan].benefitPlan.detailPlan.expense.expenseList
                  .map((item, index) => (
                    <li key={index.toString()}>
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      );
    }
    return <div />;
  }

  render() {
    const {
      flexyPlan,
      data,
    } = this.props;
    if (data !== undefined) {
      return (
        <div>
          <div className={flexyPlan === true ? 'box-box' : ''}>
            {this.handleShowInsurance()}
            {this.handleShowHealth()}
            {this.handleShowGeneral()}
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
