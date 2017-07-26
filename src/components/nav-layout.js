import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

class EmptyLayout extends Component {
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
      </div>
    )
  }
}
export default EmptyLayout
