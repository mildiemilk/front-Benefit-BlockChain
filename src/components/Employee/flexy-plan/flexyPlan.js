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
  }
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const settings = {
      customPaging: i => <span>เลือกแผนที่ {i + 1}</span>,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      slickGoTo: this.props.plan,
      afterChange: index => this.props.handleChangePlan(index),
    };
    return (
      <div>
        <div className="slider">
          <Slider {...settings} >
            <div>
              <FlexyPlanBox
                plan={this.props.plan}
                handleClickInsurance={this.props.handleClickInsurance}
                handleClickHealth={this.props.handleClickHealth}
                handleClickGeneralExpense={this.props.handleClickGeneralExpense}
                flexyPlan={this.props.flexyPlan}
              />
            </div>
            <div>
              <FlexyPlanBox
                plan={this.props.plan}
                handleClickInsurance={this.props.handleClickInsurance}
                handleClickHealth={this.props.handleClickHealth}
                handleClickGeneralExpense={this.props.handleClickGeneralExpense}
                flexyPlan={this.props.flexyPlan}
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default FlexyPlan;
