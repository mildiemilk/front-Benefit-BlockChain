import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { Divider, Image } from 'semantic-ui-react';
import User from '../../../../assets/employee/user.png';
import '../../../styles/main_icon.scss';

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
const HeadNav = styled.div`
  position: fixed;
  border: none;
  background-color: #3a7bd5;
  height: 65px;
  width: 100%;
  z-index: 20;
`;
const HeadDiv = styled.div`
  padding-left: 16px;
  padding-top: 32px;;
  width: 100px;
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
class Mobile extends React.Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
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

  closeSidebar = () => {
    this.setState({ closeSidebar: false });
  }

  handleProfilePic = () => {
    const { data } = this.props;
    if (data.logo !== 'null') {
      return data.logo;
    }
    return User;
  }

  render() {
    const { data } = this.props;
    console.log('>>data', this.props);
    const { companyName } = data;
    return (
      <div>
        <HeadNav>
          <Menu
            burgerButtonClassName={this.OverlayStyle(this.state.isClosed)}
            onStateChange={this.hamburgerCross}
            width={'230px'}
            height={'568px'}
            pageWrapId={'page-wrap'}
            isOpen={this.state.closeSidebar}
          >
            <HeadDiv>
              <Image src={this.handleProfilePic()} shape="circular" size="Tiny" />
              <Head>{companyName}</Head>
              {/* <Number>{companyName}</Number> */}
            </HeadDiv>
            <Dividers />
            <div>
              <List onClick={this.closeSidebar}>
                <i aria-hidden="true" className="icon-home" />&nbsp;<Link to="/dashboard">
                  Dashboard
                </Link>
              </List>
              <List onClick={this.closeSidebar}>
                <i aria-hidden="true" className="icon-conference" />&nbsp;<Link to="/allcustomer">
                  ลูกค้าของคุณ
                </Link>
              </List>
              <List onClick={this.closeSidebar}>
                <i aria-hidden="true" className="icon-purchase" />&nbsp;<Link to="/biddinglist">
                  การเสนอราคา
                </Link>
              </List>
              <List onClick={this.closeSidebar}>
                <i aria-hidden="true" className="icon-overview" />&nbsp;<Link to="/claim">
                  รายการเคลม
                </Link>
              </List>
              <List onClick={this.closeSidebar}>
                <i aria-hidden="true" className="icon-sell" />&nbsp;<Link to="/insurerplan">
                  แผนประกันภัย
                </Link>
              </List>
              <List onClick={this.closeSidebar}>
                <i aria-hidden="true" className="icon-administrator" />&nbsp;<Link to="/profile">
                  โปรไฟล์ของคุณ
                </Link>
              </List>
            </div>
            <SettingDiv>
              <List onClick={this.closeSidebar}>
                <i aria-hidden="true" className="icon-services" />&nbsp;<Link to="/setting">
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
        </HeadNav>
      </div>
    );
  }
}

// export default Mobile;
const mapStateToProps = state => ({
  data: state.profile,
});

export default connect(mapStateToProps, null)(Mobile);
