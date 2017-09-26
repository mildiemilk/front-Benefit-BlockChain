import React, { Component } from 'react';
import { Icon, Item, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Plan from '../../../../assets/employee/sidebar/icons-8-membership.png';
import Cliam from '../../../../assets/employee/sidebar/ClaimPic.png';
import ClaimStatus from '../../../../assets/employee/sidebar/ClaimstatusPic.png';
import ClaimHistory from '../../../../assets/employee/sidebar/ClaimHistoryPic.png';
import Hospital from '../../../../assets/employee/sidebar/hospitalPic.png';
import logout from '../../../../assets/employee/sidebar/logoutPic.png';

const Links = styled(Link)`
  color: #6c6c6c;
`;

const ImageStyle = styled(Image)`
  width: 21px;
  height: 21px;
`;

export default class SidebarDesktop extends Component {
  state = { activeItem: 'home' }

  render() {
    return (
      <aside className="sidebar">
        <Item.Group className="sidebarstyle" relaxed>
          <Item>
            <Icon name="home" size="large" />&nbsp;
            <Links to="/homedashboard" ><Item.Content verticalAlign="middle">หน้าหลัก</Item.Content></Links>
          </Item>
          <Item>
            <ImageStyle src={Plan} />&nbsp;
            <Links to="/plan" ><Item.Content verticalAlign="middle">แผนสิทธิประโยชน์</Item.Content></Links>
          </Item>
          <Item>
            <ImageStyle src={Cliam} />&nbsp;
            <Links to="/claim" ><Item.Content verticalAlign="middle">เคลม</Item.Content></Links>
          </Item>
          <Item>
            <ImageStyle src={ClaimStatus} />&nbsp;
            <Links to="/claimstatus" ><Item.Content verticalAlign="middle">สถานะการเคลม</Item.Content></Links>
          </Item>
          <Item>
            <ImageStyle src={ClaimHistory} />&nbsp;
            <Link to="/claimhistory" ><Item.Content verticalAlign="middle">ประวัติการเคลม</Item.Content></Link >
          </Item>
          <Item>
            <ImageStyle src={Hospital} />&nbsp;
            <Link to="/findhospital"><Item.Content verticalAlign="middle">ค้นหาโรงพยาบาล</Item.Content></Link>
          </Item>
          <Item>
            <Icon name="user" size="large" />&nbsp;
            <Links to="/profile"><Item.Content verticalAlign="middle">โปรไฟล์</Item.Content></Links>
          </Item>
          <Item>
            <Icon name="setting" size="large" />&nbsp;
            <Links to="/setting"><Item.Content verticalAlign="middle">ตั้งค่า</Item.Content></Links>
          </Item>
          <Item>
            <ImageStyle src={logout} />&nbsp;
            <Links to="/logout"><Item.Content verticalAlign="middle">ออกจากระบบ</Item.Content></Links>
          </Item>
        </Item.Group>
      </aside>
    );
  }
}
