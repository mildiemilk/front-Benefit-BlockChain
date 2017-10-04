import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './sidebar';

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.shape({}).isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { location } = this.props;
    return (
      <div className="row">
        <div className="large-2 columns">
          <Sidebar
            Location={location}
          />
        </div>
        <div className="large-10 columns">
          <div className="row" style={{ marginTop: 75 }}>
            <div className="large-12 columns">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainLayout;
