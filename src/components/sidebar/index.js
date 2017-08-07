import React, { Component } from 'react'
import { Icon, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Links = styled(Link)`
  color: #6c6c6c;
`
export default class Sidebar extends Component {
  state = { activeItem: 'home' }

  render() {
    return (
      <aside className="sidebar">
        <Item.Group className="sidebarstyle" relaxed>
          <Item>
            <Icon name="home" size="large" />&nbsp;
            <Links to="/dashboard" ><Item.Content verticalAlign="middle">Dashboard</Item.Content></Links>
          </Item>
          <Item>
            <Icon name="book" size="large" />&nbsp;
            <Links to="/plan" ><Item.Content verticalAlign="middle">แผนของคุณ</Item.Content></Links>
          </Item>
          <Item>
            <Icon name="group" size="large" />&nbsp;
            <Links to="/employeelist" ><Item.Content verticalAlign="middle">อัพเดทจำนวนพนักงาน</Item.Content></Links>
          </Item>
          <Item>
            <Icon name="newspaper" size="large" />&nbsp;
            <Item.Content verticalAlign="middle">รายการเคลม</Item.Content>
          </Item>
          <Item>
            <Icon name="checked calendar" size="large" />&nbsp;
            <Item.Content verticalAlign="middle">เตือนความจำ</Item.Content>
          </Item>
          <Item>
            <Icon name="user" size="large" />&nbsp;
            <Item.Content verticalAlign="middle">โปรไฟล์ของคุณ</Item.Content>
          </Item>
          <Item>
            <Icon name="setting" size="large" />&nbsp;
            <Item.Content verticalAlign="middle">ตั้งค่า</Item.Content>
          </Item>
        </Item.Group>
      </aside>
    )
  }
}
