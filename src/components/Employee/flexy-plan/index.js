import React, { Component } from 'react';
import Slider from 'react-slick';
import { Button } from 'semantic-ui-react';
import FlexyPlanBox from './flexy-plan-box';
import CongrateImage from '../../image/asset-1.png';
import ConfirmModal from './confirm-modal';
import DeadlineBox from './deadline-box';

class FlexyPlan extends Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
      slickGoTo: 0,
    };
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCloseModal = () => {
    this.setState({ openModal: false });
  }

  handleOpenModal = () => {
    this.setState({ openModal: true });
  }

  handleClickButton = ({ target: { dataset: { tag } } }) => {
    const data = parseInt(tag, 10);
    this.setState({ slickGoTo: data });
  }

  handleChange = index => {
    const data = parseInt(index, 10);
    this.setState({ slickGoTo: data });
  }

  handleIsActive = index => index === this.state.slickGoTo ? 'btn-select-plan active' : 'btn-select-plan default';

  render() {
    const settings = {
      customPaging: i => <a>${i}</a>,
      slidesToShow: 1,
      slidesToScroll: 1,
      slickGoTo: this.state.slickGoTo,
      afterChange: index => this.handleChange(index),
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
          <div className="box-space" style={{ display: 'block', textAlign: 'center', paddingTop: '2.5%' }}>
            <Button.Group>
              <Button
                className={this.handleIsActive(0)}
                onClick={e => this.handleClickButton(e)}
                data-tag={0}
              >
                เลือกแผนที่ 1
              </Button>
              <Button
                className={this.handleIsActive(1)}
                onClick={e => this.handleClickButton(e)}
                data-tag={1}
              >
                เลือกแผนที่ 2
              </Button>
            </Button.Group>
          </div>
          <div className="slider">
            <Slider {...settings} onChange={e => this.handleChange(e)}>
              <div>
                <FlexyPlanBox plan={this.state.slickGoTo} />
              </div>
              <div>
                <FlexyPlanBox plan={this.state.slickGoTo} />
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
          plan={this.state.slickGoTo}
        />
      </div>
    );
  }
}

export default FlexyPlan;
