import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Select, Checkbox, Input, Popup, List } from 'semantic-ui-react'
import {
  Rec,
  Header,
  AddPlan,
  AddContent,
  HeaderSpace,
  AddBox,
  AddTopic,
} from './styled'
import styled from 'styled-components'
import NavBenefit from '../NavBenefit'

const ListContent = styled(List.Content)`
    &&&{
      font-size: 12px;
    }
`

export class AddPlanBar extends Component {
  constructor() {
    super()
    this.state = {}
  }

  renderList = list => {
    return list.map((element, index) => {
      const isActive = index === this.props.activePlan ? '-active' : ''
      return (
        <div
          className={`addBox${isActive}`}
          onClick={() => this.props.handleActivePlan(index)}
        >
          <Popup
            trigger={
              <Icon
                style={{ float: 'left', marginTop: '1px' }}
                name="ellipsis vertical"
                size="large"
              />
            }
            content={
              <List divided relaxed>
                <List.Item>
                  <ListContent>
                    <p onClick={this.props.handleDeletePlan}>
                      <Icon name="trash outline" />ลบแพลน
                    </p>
                  </ListContent>
                </List.Item>
              </List>
            }
            on="click"
            hideOnScroll
            position="bottom center"
          />

          <AddTopic> {element.planName} </AddTopic>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderList(this.props.plan)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planList: state.plan.planList,
})

export default connect(mapStateToProps)(AddPlanBar)
