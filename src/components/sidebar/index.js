import React, { Component } from 'react'
import { Menu, Icon, Item } from 'semantic-ui-react'
import './style.scss'

export default class SidebarLeft extends Component {
  state = { activeItem: 'home' }

  //handleItemClicklogin = (e, { name }) => this.setState({ activeItem: login })
  handleItemClick1 = e => {
    e.preventDefault()
    window.location.href = '/dashboard'
  }
  handleItemClick2 = e => {
    e.preventDefault()
    window.location.href = '/plan'
  }
  handleItemClick3 = e => {
    e.preventDefault()
    window.location.href = '/update_employee'
  }
  handleItemClick4 = e => {
    e.preventDefault()
    window.location.href = '/cliam'
  }
  handleItemClick5 = e => {
    e.preventDefault()
    window.location.href = '/remainder'
  }
  handleItemClick6 = e => {
    e.preventDefault()
    window.location.href = '/profile'
  }
  handleItemClick7 = e => {
    e.preventDefault()
    window.location.href = '/setting'
  }

  render() {
    const { activeItem } = this.state

    return (
      <aside className="sidebar">
        <Item.Group
          style={{
            fontSize: '110%',
            paddingTop: '10px',
            margin: '33px',
            cursor: 'pointer',
          }}
          relaxed
        >
          <Item onClick={this.handleItemClick1}>
            <Icon name="home" size="large" />
            <Item.Content verticalAlign="middle">Dashboard</Item.Content>
          </Item>
          <Item onClick={this.handleItemClick2}>
            <Icon name="book" size="large" />
            <Item.Content verticalAlign="middle">แผนของคุณ</Item.Content>
          </Item>
          <Item onClick={this.handleItemClick3}>
            <Icon name="group" size="large" />
            <Item.Content verticalAlign="middle">
              อัพเดทจำนวนพนักงาน{' '}
            </Item.Content>
          </Item>
          <Item onClick={this.handleItemClick4}>
            <Icon name="newspaper" size="large" />
            <Item.Content verticalAlign="middle">รายการเคลม</Item.Content>
          </Item>
          <Item onClick={this.handleItemClick5}>
            <Icon name="checked calendar" size="large" />
            <Item.Content verticalAlign="middle">เตือนความจำ</Item.Content>
          </Item>
          <Item onClick={this.handleItemClick6}>
            <Icon name="user" size="large" />
            <Item.Content verticalAlign="middle">โปรไฟล์ของคุณ</Item.Content>
          </Item>
          <Item onClick={this.handleItemClick7}>
            <Icon name="setting" size="large" />
            <Item.Content verticalAlign="middle">ตั้งค่า</Item.Content>
          </Item>
        </Item.Group>
      </aside>
    )
  }
}
