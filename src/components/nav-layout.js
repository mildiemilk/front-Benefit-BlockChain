import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class EmptyLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    handleHamburgerMenu: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const check = window.location.pathname.split('/')[1];
    return (
      <div>
        <Header
          handleHamburgerMenu={this.props.handleHamburgerMenu}
          check={check}
        />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default EmptyLayout;
