import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CongrateImage from '../../image/asset-1.png';
import ConfirmModal from './confirm-modal';
import DeadlineBox from './deadline-box';
import FlexyPlanBox from './flexy-plan-box';
import FlexyPlan from './flexyPlan';
import FixPlanNextYear from '../../../../assets/employee/icon_gift.png';

const month = [
  'ม.ค.',
  'ก.พ.',
  'มี.ค.',
  'เม.ย.',
  'พ.ค.',
  'มิ.ย.',
  'ก.ค.',
  'ส.ค.',
  'ก.ย.',
  'ต.ค.',
  'พ.ย.',
  'ธ.ค.'];

class Plan extends Component {
  static propTypes = {
    handleClickInsurance: PropTypes.func.isRequired,
    handleClickHealth: PropTypes.func.isRequired,
    handleClickGeneralExpense: PropTypes.func.isRequired,
    handleChangePlan: PropTypes.func.isRequired,
    handleClickButton: PropTypes.func.isRequired,
    handleClickNextYearSelectPlan: PropTypes.func.isRequired,
    plan: PropTypes.number.isRequired,
    // fixPlan: PropTypes.bool.isRequired,
    fixPlanNextYear: PropTypes.bool.isRequired,
    flexyPlan: PropTypes.bool.isRequired,
    flexyPlanNextYear: PropTypes.bool.isRequired,
    data: PropTypes.shape({}).isRequired,
    timeUp: PropTypes.bool.isRequired,
  }
  constructor() {
    super();
    this.state = {
      openModal: false,
    };
  }

  handleCloseModal = () => {
    this.setState({ openModal: false });
  }

  handleOpenModal = () => {
    this.setState({ openModal: true });
  }

  handleImageHeader = () => this.props.fixPlanNextYear === true ? FixPlanNextYear : CongrateImage;

  handleShowDeadLine = () => {
    const {
      fixPlanNextYear,
      flexyPlan,
      flexyPlanNextYear,
      data,
    } = this.props;
    const timeout = data.allBenefit[0].timeout;
    const getDate = new Date(timeout);
    const d = getDate.getDate();
    const m = getDate.getMonth();
    let y = getDate.getFullYear();
    y += 543;
    y = y.toString().slice(2);
    if (flexyPlan && !flexyPlanNextYear) {
      return (
        <div className="deadline-box">
          <p>กรุณาเลือกแผนของคุณภายในวันที่ {d} {month[m]} {y}</p>
          <DeadlineBox timeout={timeout} />
        </div>
      );
    } else if (fixPlanNextYear) {
      return (
        <span className="fixplan-next-year">นี่คือสิทธิประโยชน์ของคุณในปีถัดไป</span>
      );
    } else if (flexyPlanNextYear && flexyPlan) {
      return (
        <div className="deadline-box">
          <p>กรุณาเลือกแผนของคุณภายในวันที่ {d} {month[m]} {y}</p>
          <DeadlineBox timeout={timeout} />
        </div>
      );
    }
    return <div />;
  }

  handleShowPlan = () => {
    const {
      flexyPlan,
      flexyPlanNextYear,
      timeUp,
      data,
      plan,
    } = this.props;
    if (flexyPlan) {
      return (
        <FlexyPlan
          handleClickInsurance={this.props.handleClickInsurance}
          handleClickHealth={this.props.handleClickHealth}
          handleClickGeneralExpense={this.props.handleClickGeneralExpense}
          handleChangePlan={this.props.handleChangePlan}
          handleClickButton={this.props.handleClickButton}
          plan={plan}
          flexyPlan={flexyPlan}
          data={data}
          timeUp={timeUp}
        />
      );
    } else if (flexyPlanNextYear) {
      return (
        <button
          className="flexy-btn-ny-select-plan"
          onClick={this.props.handleClickNextYearSelectPlan}
        >
          เลือกแผนสิทธิประโยชน์ปีถัดไป
        </button>
      );
    }
    return (
      <FlexyPlanBox
        plan={-1}
        handleClickInsurance={this.props.handleClickInsurance}
        handleClickHealth={this.props.handleClickHealth}
        handleClickGeneralExpense={this.props.handleClickGeneralExpense}
        flexyPlan={flexyPlan}
        data={data}
        timeUp={timeUp}
      />
    );
  }

  handleShowBTN = () => {
    const {
      flexyPlanNextYear,
      flexyPlan,
    } = this.props;
    if (flexyPlanNextYear && !flexyPlan) {
      return (
        <button
          className="button-skip-flexy-plan"
        >
          ข้ามไปก่อน
        </button>
      );
    }
    return (
      <button
        className="button-submit-flexy-plan"
        onClick={() => this.handleOpenModal()}
      >
        ยืนยัน
      </button>
    );
  }

  render() {
    const {
      fixPlanNextYear,
      flexyPlanNextYear,
      plan,
      data,
      timeUp,
    } = this.props;
    if (data !== undefined) {
      return (
        <div className="flexyPlan">
          <div className="row">
            <div className="small-10 small-centered columns">
              <div className="deadline-flexy-plan">
                <img src={this.handleImageHeader()} alt="Congrate" />
                <div className="congrate-text-box">
                  <span className="congrate-text">
                    { fixPlanNextYear || flexyPlanNextYear ? 'ว้าว! สิทธิประโยชน์ครั้งใหม่' : 'ยินดีด้วย!' }
                  </span>
                  <span className="congrate-text">
                    { fixPlanNextYear || flexyPlanNextYear ? 'ได้จัดส่งมาถึงมือคุณแล้ว' : 'นี่คือสิทธิประโยชน์ของคุณ' }
                  </span>
                </div>
                { this.handleShowDeadLine() }
              </div>
            </div>
            { this.handleShowPlan() }
            { this.handleShowBTN() }
          </div>
          <ConfirmModal
            openModal={this.state.openModal}
            handleCloseModal={this.handleCloseModal}
            plan={plan}
            data={data}
            timeUp={timeUp}
          />
        </div>
      );
    }
    return (<div />);
  }
}

export default Plan;
