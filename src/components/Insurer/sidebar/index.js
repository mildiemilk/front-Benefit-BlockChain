import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../../styles/main_icon.scss';

const Links = styled(Link)`
  color: #6c6c6c;
`;
export default class Sidebar extends Component {
  state = { activeItem: 'home' }

  render() {
    return (
      <aside className="sidebar">
        <Item.Group className="sidebarstyle" relaxed>
          <Item>
            <i aria-hidden="true" className="icon-home" />
            <Links to="/dashboard" ><Item.Content verticalAlign="middle">Dashboard</Item.Content></Links>
          </Item>
          <Item>
            <i aria-hidden="true" className="icon-conference" />
            <Links to="/allcustomer" ><Item.Content verticalAlign="middle">ลูกค้าของคุณ</Item.Content></Links>
          </Item>
          <Item>
            <i aria-hidden="true" className="icon-purchase" />
            <Links to="/employeelist" ><Item.Content verticalAlign="middle">การเสนอราคา</Item.Content></Links>
          </Item>
          <Item>
            <i aria-hidden="true" className="icon-overview" />
            <Links to="/employeelist" ><Item.Content verticalAlign="middle">รายการเคลม</Item.Content></Links>
          </Item>
          <Item>
            <i aria-hidden="true" className="icon-sell" />
            <Item.Content verticalAlign="middle">แผนประกันภัย</Item.Content>
          </Item>
          <Item>
            <i aria-hidden="true" className="icon-administrator" />
            <Item.Content verticalAlign="middle">โปรไฟล์ของคุณ</Item.Content>
          </Item>
          <Item>
            <i aria-hidden="true" className="icon-services" />
            <Item.Content verticalAlign="middle">ตั้งค่า</Item.Content>
          </Item>
        </Item.Group>
      </aside>
    );
  }
}
