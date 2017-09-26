import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Menu, Image, Icon, Popup } from 'semantic-ui-react';
import logoBenefit from './logo_white.png';
import { HeadNav, LogoPosition, SpanStyle } from './styled';

const ImageCss = styled.img `
  &&&{
    position: absolute;
    right: 39px;
    top: 8px;
    border-radius: 50%;
  }
`;
class Header extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isClose: false,
    };
  }

  handlePopup = () => this.setState({ isClose: !this.state.isClose });

  renderMenuPopup = () =>
    <div>
      <div className="navbar-header-menu-box" >
        <Icon name="file text outline" />
        <span className="navbar-header-menu-text">คู่มือการใช้งาน</span>
      </div>
      <div className="navbar-header-menu-box" onClick={this.handlePopup} role="button" aria-hidden >
        <Link to="/setting" >
          <Icon name="setting" />
          <span className="navbar-header-menu-text">ตั้งค่า</span>
        </Link>
      </div>
      <div className="navbar-header-menu-box">
        <Link to="/logout" >
          <Icon name="log out" />
          <span className="navbar-header-menu-text">ออกจากระบบ</span>
        </Link>
      </div>
    </div>

  render() {
    const { data } = this.props;
    const { companyName, logo } = data;
    return (
      <HeadNav>
        <LogoPosition>
          <div>
            <Image src={logoBenefit} size="small" />
          </div>
        </LogoPosition>
        <Menu.Item style={{ width: '20%' }} position="right">
          {companyName !== ''
            ? <div>
              <SpanStyle>
                {companyName}
              </SpanStyle>
              <Popup
                trigger={<Icon className="navbar-header-icon" name="caret down" />}
                content={this.renderMenuPopup()}
                on="click"
                position="bottom center"
                open={this.state.isClose}
                onOpen={this.handlePopup}
                onClose={this.handlePopup}
              />
              <ImageCss src={logo} alt="logo" width="50px" height="50px" />
            </div>
            : <div />}
        </Menu.Item>
      </HeadNav>
    );
  }
}

const mapStateToProps = state => ({
  data: state.profile,
});

export default connect(mapStateToProps, null)(Header);
