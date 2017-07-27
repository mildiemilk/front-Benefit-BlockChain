import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
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
    )
  }
}
export default MainLayout
