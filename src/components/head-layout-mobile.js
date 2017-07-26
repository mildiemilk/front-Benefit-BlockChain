import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Employee/header'
import Footer from './Employee/footer'

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
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
export default HeadLayoutMobile
