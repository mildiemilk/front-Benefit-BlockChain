import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import FlexyPlanBox from './flexy-plan-box';

class FlexyPlan extends Component {
  static propTypes = {
    handleClickInsurance: PropTypes.func.isRequired,
    handleClickHealth: PropTypes.func.isRequired,
    handleClickGeneralExpense: PropTypes.func.isRequired,
    handleChangePlan: PropTypes.func.isRequired,
    plan: PropTypes.number.isRequired,
    flexyPlan: PropTypes.bool.isRequired,
    data: PropTypes.shape({}).isRequired,
    timeUp: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRenderFlexyPlanBox = () => {
    const { data, timeUp } = this.props;
    const flexy = data.allBenefit.map((ele, index) => (
      <div key={index.toString()}>
        <FlexyPlanBox
          plan={this.props.plan}
          handleClickInsurance={this.props.handleClickInsurance}
          handleClickHealth={this.props.handleClickHealth}
          handleClickGeneralExpense={this.props.handleClickGeneralExpense}
          flexyPlan={this.props.flexyPlan}
          data={data}
          timeUp={timeUp}
        />
      </div>
    ));
    return flexy;
  }

  render() {
    const settings = {
      customPaging: i => <span className="flexyplan-btn-slider-page">แผนที่ {i + 1}</span>,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      slickGoTo: this.props.plan,
      afterChange: index => this.props.handleChangePlan(index),
      initialSlide: this.props.plan,
    };
    const { data } = this.props;
    return (
      <div>
        <div className="slider">
          <Slider {...settings} >
            {
              data !== undefined
              ? this.handleRenderFlexyPlanBox()
              : <div />
            }
          </Slider>
        </div>
      </div>
    );
  }
}

export default FlexyPlan;
