import React, { Component } from 'react';
import { Icon, Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../styles/main_icon.scss';

const Links = styled(Link)`
  color: #6c6c6c;
`;
export default class Sidebar extends Component {
  static propTypes = {
    Location: PropTypes.shape({}).isRequired,
  }
  state = { activeItem: 'home' }

  render() {
    const pathname = this.props.Location;
    const url = pathname.location.pathname.split('/')[1];
    return (
      <aside className="sidebar">
        <Item.Group className="sidebarstyle" relaxed>
          <Item>
            <Icon name="home" size="large" />&nbsp;
            <Links to="/dashboard" ><Item.Content verticalAlign="middle">Dashboard</Item.Content></Links>
          </Item>
          {url === 'viewyourplan'
            ? <Item>
              <i aria-hidden="true" className="book large icon icon-active" />&nbsp;
              <Links to="/viewyourplan" ><Item.Content verticalAlign="middle"><p className="text-active">แผนของคุณ</p></Item.Content></Links>
            </Item>
            : <Item>
              <Icon name="book" size="large" />&nbsp;
              <Links to="/viewyourplan" ><Item.Content verticalAlign="middle">แผนของคุณ</Item.Content></Links>
            </Item>
        }
          { url === 'employeelist' || url === 'addemployee'
          ? <Item>
            <i aria-hidden="true" className="group large icon icon-active" />&nbsp;
            <Links to="/employeelist" ><Item.Content verticalAlign="middle"><p className="text-active">อัพเดทจำนวนพนักงาน</p></Item.Content></Links>
          </Item>
          : <Item>
            <Icon name="group" size="large" />&nbsp;
            <Links to="/employeelist" ><Item.Content verticalAlign="middle">อัพเดทจำนวนพนักงาน</Item.Content></Links>
          </Item>
        }
          { url === 'ClaimEmployee'
          ? <Item>
            <i aria-hidden="true" className="newspaper large icon icon-active" />&nbsp;
            <Links to="/ClaimEmployee" ><Item.Content verticalAlign="middle"><p className="text-active">รายการเคลม</p></Item.Content></Links>
          </Item>
          : <Item>
            <Icon name="newspaper" size="large" />&nbsp;
            <Links to="/ClaimEmployee" ><Item.Content verticalAlign="middle">รายการเคลม</Item.Content></Links>
          </Item>
          }
          { url === 'profileclaim'
          ? <Item>
            <i aria-hidden="true" className="checked calendar large icon icon-active" />&nbsp;
            <Link to="/profileclaim" ><Item.Content verticalAlign="middle"><p className="text-active">ประวัติการเคลม</p></Item.Content></Link >
          </Item>
          : <Item>
            <Icon name="checked calendar" size="large" />&nbsp;
            <Link to="/profileclaim" ><Item.Content verticalAlign="middle">ประวัติการเคลม</Item.Content></Link >
          </Item>
        }
          { url === 'profile'
        ? <Item>
          <i aria-hidden="true" className="user large icon icon-active" />&nbsp;
          <Link to="profile"><Item.Content verticalAlign="middle"><p className="text-active">โปรไฟล์ของคุณ</p></Item.Content></Link>
        </Item>
        : <Item>
          <Icon name="user" size="large" />&nbsp;
          <Link to="profile"><Item.Content verticalAlign="middle">โปรไฟล์ของคุณ</Item.Content></Link>
        </Item>
        }
          { url === 'setting'
        ? <Item>
          <i aria-hidden="true" className="setting large icon icon-active" />&nbsp;
          <Links to="/setting"><Item.Content verticalAlign="middle"><p className="text-active">ตั้งค่า</p></Item.Content></Links>
        </Item>
        : <Item>
          <Icon name="setting" size="large" />&nbsp;
          <Links to="/setting"><Item.Content verticalAlign="middle">ตั้งค่า</Item.Content></Links>
        </Item>
        }
        </Item.Group>
      </aside>
    );
  }
}
