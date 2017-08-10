import React, { Component } from 'react';
import ChangePlanModal from './confirm-change-plan-modal';
import DeadlineBox from '../flexy-plan/deadline-box';
import selectPlanImage from '../../image/select-plan.png';

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
              <img
                className="select-plan-image"
                alt="select-plan"
                src={selectPlanImage}
              />
              <p>คุณเลือกแผนเรียบร้อยแล้ว</p>
              <p>รอดำเนินการในขั้นตอนต่อไป</p>
            </div>
            <div className="show-deadline-box">
              <p>สามารถทำการเปลี่ยนแผนได้ก่อนวันที่ 12 เม.ย. 60</p>
              <DeadlineBox />
            </div>
            <div className="center-link">
              <p
                className="link-change-plan"
                onClick={() => this.handleOpenModal()}
                role="button"
                aria-hidden
              >
                <u>ต้องการเปลี่ยนแผน?</u>
              </p>
            </div>
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
