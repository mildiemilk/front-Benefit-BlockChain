import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { push as Menu } from 'react-burger-menu';
// import styled from 'styled-components';
// import { Item, Icon } from 'semantic-ui-react';
import Sidebar from '../sidebar';

class HamburgerMenu extends Component {
  static propTypes = {
    Location: PropTypes.element.isRequired,
    hamburgerMenu: PropTypes.bool.isRequired,
    handleCloseHamburgerMenu: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isClosed: true,
      closeSidebar: false,
    };
  }

  OverlayStyle = () => {
    if (this.props.hamburgerMenu === false) {
      return 'is-open';
    }
    return '';
  }

  render() {
    const { hamburgerMenu, handleCloseHamburgerMenu, Location } = this.props;
    return (
      <div>
        <Menu
          burgerButtonClassName={this.OverlayStyle(hamburgerMenu)}
          width={'230px'}
          height={'568px'}
          pageWrapId={'page-wrap'}
          isOpen={hamburgerMenu}
        >
          <Sidebar
            Location={Location}
            handleCloseHamburgerMenu={handleCloseHamburgerMenu}
            mobile
          />
        </Menu>
      </div>
    );
  }
}

export default HamburgerMenu;
