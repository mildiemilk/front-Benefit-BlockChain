import React, { Component } from 'react';
import Slider from 'react-slick';
import FlexyPlanBox from './flexy-plan-box';
import CongrateImage from '../../image/asset-1.png';
import ConfirmModal from './confirm-modal';
import DeadlineBox from './deadline-box';

class FlexyPlan extends Component {
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
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="flexyPlan">
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="deadline-flexy-plan">
              <img src={CongrateImage} alt="Congrate" />
              <div className="congrate-text">ยินดีด้วย!</div>
              <div className="congrate-text">
                นี่คือสิทธิประโยชน์ของคุณ
              </div>
              <div className="deadline-box">
                <p>กรุณาเลือกแผนของคุณภายในวันที่ 12 เม.ย. 60</p>
                <DeadlineBox />
              </div>
            </div>
          </div>
          <div className="box-space">
            <div className="header-text-select-flexy-plan">
              คุณกำลังเลือก : แผน 1
            </div>
          </div>
          <div className="slider">
            <Slider {...settings}>
              <div>
                <FlexyPlanBox />
              </div>
              <div>
                <FlexyPlanBox />
              </div>
            </Slider>
          </div>
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
        />
      </div>
    );
  }
}

export default FlexyPlan;
