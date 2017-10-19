import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Popup } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logoBenefit from './logo_white.png';
import { HeadNav } from './styled';

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
    // console.log('>>this.props', this.props);
    const { data } = this.props;
    const { companyName, logo } = data;
    return (
      <HeadNav>
        <div className="nav-header-box">
          <div className="nav-header-box-l">
            <img className="nav-header-img-logo-bt" alt="" src={logoBenefit} size="small" />
          </div>
          <div className="nav-header-box-r">
            {
              companyName !== ''
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
                  on="click"
                  position="bottom center"
                  className="nav-header-menu-dropdown"
                  open={this.state.isClose}
                  onOpen={this.handlePopup}
                  onClose={this.handlePopup}
                />
                <img className="nav-header-img-user" src={logo} alt="logo" />
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
