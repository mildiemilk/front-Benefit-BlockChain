import React, { Component } from 'react';
import ChangePlanModal from './confirm-change-plan-modal';
import DeadlineBox from '../flexy-plan/deadline-box';
import selectPlanImage from '../../../../assets/employee/congrat_select_plan.png';

class CongrateSelectPlan extends Component {
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

  render() {
    return (
      <div>
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="select-plan-box">
              <span className="select-plan-header-text">คุณกำลังเลือกแผนที่ 1</span>
              <img
                className="select-plan-image"
                alt="select-plan"
                src={selectPlanImage}
              />
              <ul className="select-plan-header-description">
                <li>คุณเลือกแผนเรียบร้อยแล้ว</li>
                <li>รอดำเนินการในขั้นตอนต่อไป</li>
              </ul>
            </div>
            <div className="show-deadline-box">
              <p>สามารถเปลี่ยนแผนได้ก่อนวันที่ 12 เม.ย. 60</p>
              <DeadlineBox />
            </div>
            <button className="select-plan-change" onClick={() => this.handleOpenModal()}>
              ต้องการเปลี่ยนแผน?
            </button>
            <a className="select-plan-view-plan" href="/dashboardstart">ดูแผนที่เลือก</a>
          </div>
        </div>
        <ChangePlanModal
          openModal={this.state.openModal}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default CongrateSelectPlan;
