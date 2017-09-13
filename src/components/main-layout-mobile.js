import React from 'react';
import { Link } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { Divider, Image } from 'semantic-ui-react';
import User from '../../assets/employee/user.png';

const List = styled.div`
  padding-left: 6%;
  font-size: 14px;
  font-weight: 300;
  line-height: 40px;
  text-align: left;
  color: #323028;
  &:active,&:hover,&:focus{
    background: #c8ddf6;
  }
`;
const Number = styled.div`
  font-size: 12px;
  letter-spacing: 0.3px;
  font-weight: 300;
  color: #323028;
  line-height: 18px;
  padding-top: 2px;
`;
const Head = styled.div`
  font-family: Kanit;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-align: left;
  line-height: 24px;
  padding-top: 8px;
  color: #323028;
`;
const HeadDiv = styled.div`
  padding-left: 16px;
  padding-top: 32px;;
`;
const SettingDiv = styled.div`
  margin-top: 30px;
  padding: 0px !important;
`;
const Dividers = styled(Divider)`
  &&&{
    height: 2px;
    border: solid 1px #f0f0f0;
    margin-top: 16px;
    margin-bottom: 6px;
  }
`;
const LinkEdit = styled(Link)`
  &&&{
    padding: 0px;
  }
`;
class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isClosed: true,
      closeSidebar: false,
    };
  }
  showSettings = event => {
    event.preventDefault();
  }

  hamburgerCross = () => {
    const { isClosed } = this.state;
    if (isClosed) {
      this.setState({ isClosed: false, closeSidebar: true });
    } else {
      this.setState({ isClosed: true, closeSidebar: false });
    }
  }

  OverlayStyle = isClosed => {
    if (isClosed === false) {
      return 'is-open';
    }
    return '';
  }

  closeSidebar = () => this.setState({ closeSidebar: false });

  render() {
    return (
      <div>
        <Menu
          burgerButtonClassName={this.OverlayStyle(this.state.isClosed)}
          onStateChange={this.hamburgerCross}
          width={'230px'}
          height={'568px'}
          pageWrapId={'page-wrap'}
          isOpen={this.state.closeSidebar}
        >
          <HeadDiv>
            <Image src={User} shape="circular" />
            <Head>สมศรี ช่างสงสัย</Head>
            <Number>เลขพนักงาน : 0000001</Number>
          </HeadDiv>
          <Dividers />
          <div>
            <List onClick={this.closeSidebar}>
              <Link to="/homedashboard">
                หน้าหลัก
              </Link>
            </List>
            <List onClick={this.closeSidebar}>
              <Link to="/plan">
                แผนสิทธิประโยชน์
              </Link>
            </List>
            <List onClick={this.closeSidebar}>
              <Link to="/claim">
                เคลม
              </Link>
            </List>
            <List onClick={this.closeSidebar}>
              <Link to="/claimstatus">
                สถานะการเคลม
              </Link>
            </List>
            <List onClick={this.closeSidebar}>
              <Link to="/claimhistory">
                ประวัติการเคลม
              </Link>
            </List>
            <List onClick={this.closeSidebar}>
              <Link to="/findhospital">
                ค้นหาโรงพยาบาล
              </Link>
            </List>
            <List onClick={this.closeSidebar}>
              <Link to="/profile">
                โปรไฟล์
              </Link>
            </List>
          </div>
          <SettingDiv>
            <List onClick={this.closeSidebar}>
              <Link to="/setting">
                ตั้งค่า
              </Link>
            </List>
            <LinkEdit to="/logout">
              <List>
                ออกจากระบบ
              </List>
            </LinkEdit>
          </SettingDiv>
        </Menu>
      </div>
    );
  }
}

export default SideBar;
