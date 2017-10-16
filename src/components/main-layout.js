import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import Sidebar from './sidebar';
import HamburgerMenu from './sidebar/Hamburger';

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    hamburgerMenu: PropTypes.bool.isRequired,
    handleCloseHamburgerMenu: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children, hamburgerMenu, handleCloseHamburgerMenu } = this.props;
    return (
      <div className="row">
        <MediaQuery query="(min-width: 1329px)">
          <div className="large-2 columns">
            <Sidebar Location={children} />
          </div>
        </MediaQuery>
        <HamburgerMenu
          hamburgerMenu={hamburgerMenu}
          handleCloseHamburgerMenu={handleCloseHamburgerMenu}
          Location={children}
        />
        <div className="large-10 medium-12 small-12 columns custom-grid-width-100">
          <div className="row" style={{ margin: '75px 40px 40px 20px' }} >
            <main id="page-wrap" className="sideBar">
              {children}
            </main>
          </div>
        </div>
      </div>
    );
  }
}
export default MainLayout;
