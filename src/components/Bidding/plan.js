import React, { Component } from 'react';
// import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { List, IconPlan, DetailList } from './styled';
// import { PopupList, PopupView } from './styled';

class Plan extends Component {
  static propTypes = {
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    color: PropTypes.string.isRequired,
  }
  renderList = bids => {
    const planlists = bids.map((bid, i) => (
      <List key={i.toString()} color={this.props.color} className="large-4 columns">
        <IconPlan name="add to calendar" size="big" />
        <DetailList>
          {bid.planDetail.planName} <br />
          {bid.price}
        </DetailList>
        {/* <PopupView
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
        /> */}
      </List>
    ));
    return planlists;
  }

  render() {
    return (
      <div>
        {this.props.planList
        ? <div>{this.renderList(this.props.planList)}</div>
        : <div />
        }
      </div>
    );
  }
}

export default Plan;
