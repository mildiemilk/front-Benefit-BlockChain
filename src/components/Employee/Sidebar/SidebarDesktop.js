import React, { Component } from 'react';
import { Icon, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Plan from '../../../../assets/employee/sidebar/icons-8-membership.png';
// import Cliam from '../../../../assets/employee/sidebar/ClaimPic.png';
// import ClaimStatus from '../../../../assets/employee/sidebar/ClaimstatusPic.png';
// import ClaimHistory from '../../../../assets/employee/sidebar/ClaimHistoryPic.png';
// import Hospital from '../../../../assets/employee/sidebar/hospitalPic.png';
// import logout from '../../../../assets/employee/sidebar/logoutPic.png';

const Links = styled(Link)`
  color: #6c6c6c;
`;

// const ImageStyle = styled(Image)`
//   width: 21px;
//   height: 21px;
// `;

export default class SidebarDesktop extends Component {
  state = { activeItem: 'home' }

  render() {
    const pathname = window.location.pathname.split('/')[1].toLowerCase();
    console.log('>>>url ', pathname);
    return (
      <aside className="sidebar">
        <Item.Group className="sidebarstyle" relaxed>
          <Item>
            <Icon name="home" size="large" className={pathname === 'homedashboard' ? 'icon-active' : ''} />
            &nbsp;
            <Links to="/homedashboard" >
              <Item.Content verticalAlign="middle">
                <p className={pathname === 'homedashboard' ? 'text-active' : ''}>
                  หน้าหลัก
                </p>
              </Item.Content>
            </Links>
          </Item>
          <Item>
            <Icon name="browser" size="large" className={pathname === 'yourbenefit' ? 'icon-active' : ''} />
            &nbsp;
            <Links to="/yourbenefit" >
              <Item.Content verticalAlign="middle">
                <p className={pathname === 'yourbenefit' ? 'text-active' : ''}>
                  แผนสิทธิประโยชน์
                </p>
              </Item.Content>
            </Links>
          </Item>
          <Item>
            <Icon name="id card outline" size="large" className={pathname === 'claim' ? 'icon-active' : ''} />
            &nbsp;
            <Links to="/claim" >
              <Item.Content verticalAlign="middle">
                <p className={pathname === 'claim' ? 'text-active' : ''}>
                  เคลม
                </p>
              </Item.Content>
            </Links>
          </Item>
          <Item>
            <Icon name="archive" size="large" className={pathname === 'claimstatus' ? 'icon-active' : ''} />
            &nbsp;
            <Links to="/claimstatus" >
              <Item.Content verticalAlign="middle">
                <p className={pathname === 'claimstatus' ? 'text-active' : ''}>
                  สถานะการเคลม
                </p>
              </Item.Content>
            </Links>
          </Item>
          <Item>
            <Icon name="book" size="large" className={pathname === 'claimhistory' ? 'icon-active' : ''} />
            &nbsp;
            <Link to="/claimhistory" >
              <Item.Content verticalAlign="middle">
                <p className={pathname === 'claimhistory' ? 'text-active' : ''}>
                  ประวัติการเคลม
                </p>
              </Item.Content>
            </Link >
          </Item>
          <Item>
            <Icon name="search" size="large" className={pathname === 'findhospital' ? 'icon-active' : ''} />
            &nbsp;
            <Link to="/findhospital">
              <Item.Content verticalAlign="middle">
                <p className={pathname === 'findhospital' ? 'text-active' : ''}>
                  ค้นหาโรงพยาบาล
                </p>
              </Item.Content>
            </Link>
          </Item>
          <Item>
            <Icon name="user" size="large" className={pathname === 'profile' ? 'icon-active' : ''} />
            &nbsp;
            <Links to="/profile">
              <Item.Content verticalAlign="middle">
                <p className={pathname === 'profile' ? 'text-active' : ''}>
                  โปรไฟล์
                </p>
              </Item.Content>
            </Links>
          </Item>
          <Item>
            <Icon name="setting" size="large" className={pathname === 'setting' ? 'icon-active' : ''} />
            &nbsp;
            <Links to="/setting">
              <Item.Content verticalAlign="middle">
                <p className={pathname === 'setting' ? 'text-active' : ''}>
                  ตั้งค่า
                </p>
              </Item.Content>
            </Links>
          </Item>
          <Item>
            <Icon name="log out" size="large" className={pathname === 'logout' ? 'icon-active' : ''} />
            &nbsp;
            <Links to="/logout">
              <Item.Content verticalAlign="middle">
                <p className={pathname === 'logout' ? 'text-active' : ''}>
                  ออกจากระบบ
                </p>
              </Item.Content>
            </Links>
          </Item>
        </Item.Group>
      </aside>
    );
  }
}
