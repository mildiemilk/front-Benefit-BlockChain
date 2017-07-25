import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { List, IconPlan, DetailList, PopupList, PopupView } from './styled'

class Plan extends Component {
  static propTypes = {
    planList: PropTypes.arrayof(PropTypes.object).isRequired,
  }
  renderList = bids => {
    const planlists = bids.map(bid => (
      <div className="large-4 columns">
        <List>
          <IconPlan name="add to calendar" size="big" />
          <DetailList>
            {bid.planName} <br />
            {bid.priceOfBidding}
            <PopupView
              trigger={
                <PopupList>
                  <Icon name="ellipsis vertical" size="large" />
                </PopupList>
              }
              content={
                <p>
                  <Icon name="edit" />ดูแพลน
                </p>
              }
              on="click"
              hideOnScroll
              position="bottom center"
            />
          </DetailList>
        </List>
      </div>
    ))
    return planlists
  }

  render() {
    return (
      <div>
        {this.renderList(this.props.planList)}
      </div>
    )
  }
}

export default Plan
