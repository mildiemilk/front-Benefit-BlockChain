import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { NextButton, grayButton } from '../../../StyleComponent';
import { List, IconPlan, DetailList, PopupList, PopupView } from './styled';

class Plan extends Component {
  static propTypes = {
    customerPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    // color: PropTypes.string.isRequired,
  }
  renderList = master => {
    console.log('planlist', master);
    const planlists = master.map(plan => (
      <List>
        <IconPlan name="add to calendar" size="big" />
        <DetailList>
          {plan.planId.planName} <br />
          {plan.price}
        </DetailList>
        <PopupView
          trigger={
            <PopupList>
              <Icon name="ellipsis vertical" size="large" />
            </PopupList>
          }
          content={
            <p>
              <Icon name="edit" />ดูแผน
            </p>
          }
          on="click"
          hideOnScroll
          position="bottom center"
        />
      </List>
    ));
    return planlists;
  }

  render() {
    const { customerPlan } = this.props;
    return (
      <div>
        {(customerPlan.length > 0)
        ? <div>{this.renderList(customerPlan)}</div>
        : <div />
        }
      </div>
    );
  }
}

export default Plan;
