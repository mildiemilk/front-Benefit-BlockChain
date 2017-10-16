import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';
import logoBenefit from './logo_white.png';
import IconMenu from '../../../dist/images/icon_menu.png';
import { HeadNav } from './styled';

class Header extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    // hamburgerMenu: PropTypes.bool.isRequired,
    // handleCloseHamburgerMenu: PropTypes.func.isRequired,
    handleHamburgerMenu: PropTypes.func.isRequired,
    check: PropTypes.string.isRequired,
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
      <div
        className="navbar-header-menu-box"
        onClick={this.handlePopup}
        role="button"
        aria-hidden
        style={{ cursor: 'pointer' }}
      >
        <Link to="/setting" >
          <Icon name="setting" />
          <span className="navbar-header-menu-text">ตั้งค่า</span>
        </Link>
      </div>
      <div className="navbar-header-menu-box" style={{ cursor: 'pointer' }}>
        <Link to="/logout" >
          <Icon name="log out" />
          <span className="navbar-header-menu-text">ออกจากระบบ</span>
        </Link>
      </div>
    </div>

  render() {
    const { check, data: { companyName, logo } } = this.props;
    return (
      <HeadNav>
        <div className="nav-header-box">
          <div className="nav-header-box-l">
            {
              check !== 'dashboard' && check !== 'login'
              ? <img
                className="nav-header-icon-menu"
                alt=""
                src={IconMenu}
                onClick={this.props.handleHamburgerMenu}
                role="button"
                aria-hidden
                style={{ cursor: 'pointer' }}
              />
              : <div />
            }
            <img
              className={
                check !== 'dashboard' && check !== 'login'
                ? 'nav-header-img-logo-bt menu-active'
                : 'nav-header-img-logo-bt'
              }
              alt=""
              src={logoBenefit}
              size="small"
            />
          </div>
          <div className="nav-header-box-r">
            {
              companyName !== 'null' && companyName !== null
              ? <div>
                <span>
                  {companyName}
                </span>
                <Popup
                  trigger={
                    <Icon
                      className="nav-header-icon-dropdown"
                      name="caret down"
                      role="button"
                      aria-hidden
                      style={{ cursor: 'pointer' }}
                    />
                  }
                  content={this.renderMenuPopup()}
                  className="nav-header-menu-dropdown"
                  on="click"
                  position="bottom center"
                  open={this.state.isClose}
                  onOpen={this.handlePopup}
                  onClose={this.handlePopup}
                />
                <img className="nav-header-img-user" src={logo} alt="" />
              </div>
              : <div />
            }
          </div>
        </div>
      </HeadNav>
    );
  }
}

const mapStateToProps = state => ({
  data: state.profile,
});

export default connect(mapStateToProps, null)(Header);
