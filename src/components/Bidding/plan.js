import React, { Component } from 'react'
import { List, IconPlan, DetailList, PopupList, PopupView } from './styled'
import { Popup, Icon } from 'semantic-ui-react'

class Plan extends Component {
  render() {
    return (
      <div className="large-4 columns">
        <List>
          <IconPlan name="add to calendar" size="big" />
          <DetailList>
            ManageMent Plan 1 <br />
            ราคาต่อหัว 12,000 บาท
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
    )
  }
}

export default Plan
