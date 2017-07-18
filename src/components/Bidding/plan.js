import React, { Component } from 'react'
import { List, IconPlan, DetailList, PopupList, PopupView } from './styled'
import { Popup, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Plan extends Component {
  constructor() {
    super()
  }

  renderList = bids => {
    console.log('ccccccccc')
    console.log(bids)
    return bids.map(bid => (
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
  }

  render() {
    console.log('bbbbbbbbbbbb')
    console.log(this.props.planList)
    return (
      <div>
        {this.renderList(this.props.planList)}
      </div>
    )
  }
}

export default Plan
