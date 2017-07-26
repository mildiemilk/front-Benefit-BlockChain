import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Employee/header'
import Footer from './Employee/footer'
import Side from './main-layout-mobile'

class HeadLayoutMobile extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="headlayout">
        <Side />
        <main id="page-wrap" className="sideBar">
          <Header />
          <div id="content">
            {this.props.children}
          </div>
          <Footer />
        </main>
      </div>
    )
  }
}
export default HeadLayoutMobile
