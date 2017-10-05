import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './sidebar';

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const Location = this.props;
    return (
      <div className="row">
        <div className="large-2 columns">
          <Sidebar Location={Location} />
        </div>
        <div className="large-10 columns">
          <div className="row" style={{ margin: '75px 40px 40px 20px' }} >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
export default MainLayout;
