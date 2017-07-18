import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Menus extends Component {
  state = { activeItem: 'home' }

  //handleItemClicklogin = (e, { name }) => this.setState({ activeItem: login })
  handleItemClickHi = e => {
    e.preventDefault()
    window.location.href = '/hi'
  }
  handleItemClickTest = e => {
    e.preventDefault()
    window.location.href = '/test'
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{ width: '245px' }} pointing vertical>
        <Menu.Item
          icon="home"
          name="Dashboard"
          active={activeItem === 'Dashboard'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          icon="book"
          name="แผนของคุณ"
          active={activeItem === 'Hi'}
          onClick={this.handleItemClickHi}
        />
        <Menu.Item
          icon="group"
          name="อัพเดทจำนวนพนักงาน"
          active={activeItem === 'Test'}
          onClick={this.handleItemClickTest}
        />
        <Menu.Item
          icon="newspaper"
          name="รายการเคลม"
          active={activeItem === 'Test'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          icon="checked calendar"
          name="เตือนความจำ"
          active={activeItem === 'Test'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          icon="user"
          name="โปรไฟล์ของคุณ"
          active={activeItem === 'Test'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          icon="setting"
          name="การตั้งค่า"
          active={activeItem === 'Test'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
