import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AddTopic } from './styled';

class PlanBar extends Component {
  static propTypes = {
    plan: PropTypes.arrayOf(PropTypes.object).isRequired,
    activePlan: PropTypes.string.isRequired,
    handleActivePlan: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
    };
  }
  renderList = list => {
    const lists = list.map((element, index) => {
      const isActive = index === this.props.activePlan ? 'active' : '';
      return (
        <div
          className={`addBox summary ${isActive}`}
          onClick={() => this.props.handleActivePlan(index)}
          role="button"
          aria-hidden
        >
          <AddTopic> {element.planName} </AddTopic>
        </div>
      );
    });
    return lists;
  }

  render() {
    if (this.props.plan) {
      return (
        <div >
          {this.renderList(this.props.plan)}
        </div>
      );
    }
    return <div />;
  }
}

export default PlanBar;
