import React, { Component, PropTypes } from 'react'

import { withRouter } from 'react-router'
import Header from './Header'
import Sidebar from './Sidebar'
class MainLayout extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="large-2 columns">
            <Sidebar />
          </div>
          <div className="large-10 columns">
            <div className="row" style={{ marginTop: 75 }}>
              <div className="large-10 large-offset-1 columns">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MainLayout
