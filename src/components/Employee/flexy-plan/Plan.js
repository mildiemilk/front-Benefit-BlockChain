import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CongrateImage from '../../image/asset-1.png';
import ConfirmModal from './confirm-modal';
import DeadlineBox from './deadline-box';
import FlexyPlanBox from './flexy-plan-box';
import FlexyPlan from './flexyPlan';
import FixPlanNextYear from '../../../../assets/employee/icon_gift.png';

const ShowDeadline = (
  <div className="deadline-box">
    <p>กรุณาเลือกแผนของคุณภายในวันที่ 12 เม.ย. 60</p>
    <DeadlineBox />
  </div>
);

const ShowText = (
  <span className="fixplan-next-year">นี่คือสิทธิประโยชน์ของคุณในปีถัดไป</span>
);

class Plan extends Component {
  static propTypes = {
    handleClickInsurance: PropTypes.func.isRequired,
    handleClickHealth: PropTypes.func.isRequired,
    handleClickGeneralExpense: PropTypes.func.isRequired,
    handleChangePlan: PropTypes.func.isRequired,
    handleClickButton: PropTypes.func.isRequired,
    plan: PropTypes.number.isRequired,
    // fixPlan: PropTypes.bool.isRequired,
    fixPlanNextYear: PropTypes.bool.isRequired,
    flexyPlan: PropTypes.bool.isRequired,
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
    } = this.props;
    if (flexyPlan) {
      return ShowDeadline;
    } else if (fixPlanNextYear) {
      return ShowText;
    }
    return <div />;
  }

  render() {
    const {
      fixPlanNextYear,
      flexyPlan,
    } = this.props;
    return (
      <div className="flexyPlan">
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="deadline-flexy-plan">
              <img src={this.handleImageHeader()} alt="Congrate" />
              <div className="congrate-text-box">
                <span className="congrate-text">
                  { fixPlanNextYear === true ? 'ว้าว! สิทธิประโยชน์ครั้งใหม่' : 'ยินดีด้วย!' }
                </span>
                <span className="congrate-text">
                  { fixPlanNextYear === true ? 'ได้จัดส่งมาถึงมือคุณแล้ว' : 'นี่คือสิทธิประโยชน์ของคุณ' }
                </span>
              </div>
              { this.handleShowDeadLine() }
            </div>
          </div>
          {
            flexyPlan === true
            ? <FlexyPlan
              handleClickInsurance={this.props.handleClickInsurance}
              handleClickHealth={this.props.handleClickHealth}
              handleClickGeneralExpense={this.props.handleClickGeneralExpense}
              handleChangePlan={this.props.handleChangePlan}
              handleClickButton={this.props.handleClickButton}
              plan={this.props.plan}
              flexyPlan={this.props.flexyPlan}
            />
            : <FlexyPlanBox
              plan={-1}
              handleClickInsurance={this.props.handleClickInsurance}
              handleClickHealth={this.props.handleClickHealth}
              handleClickGeneralExpense={this.props.handleClickGeneralExpense}
              flexyPlan={this.props.flexyPlan}
            />
          }
          <button
            className="button-submit-flexy-plan"
            onClick={() => this.handleOpenModal()}
          >
            ยืนยัน
          </button>
        </div>

        <ConfirmModal
          openModal={this.state.openModal}
          handleCloseModal={this.handleCloseModal}
          plan={this.props.plan}
        />
      </div>
    );
  }
}

export default Plan;
