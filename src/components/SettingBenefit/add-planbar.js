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
import styled from 'react-sc'
import NavBenefit from '../NavBenefit'

const ListContent = styled(List.Content)`
    &&&{
      font-size: 12px;
    }
`

export class AddPlanBar extends Component {
  constructor() {
    super()
    this.state = {
      selected: '',
    }
  }

  handleActive = index => {
    this.setState({ selected: index })
  }

  renderList = list => {
    return list.map((element, index) => {
      const isActive = index === this.state.selected ? '-active' : ''
      return (
        <div
          className={`addBox${isActive}`}
          onClick={() => this.handleActive(index)}
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
                    <Icon name="edit" />แก้ไขแพลน
                  </ListContent>
                </List.Item>
                <List.Item>
                  <ListContent>
                    <Icon name="copy" />คัดลอกแพลน
                  </ListContent>
                </List.Item>
                <List.Item>
                  <ListContent>
                    <Icon name="trash outline" />ลบแพลน
                  </ListContent>
                </List.Item>
              </List>
            }
            on="click"
            hideOnScroll
            position="bottom center"
          />

          <AddTopic> {element.name} </AddTopic>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderList(this.props.planName)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps)(AddPlanBar)
