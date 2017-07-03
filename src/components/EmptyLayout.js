import React, { Component } from 'react'

class EmptyLayout extends Component {
  render() {
    console.log('EmptyLayout')
    return (
      <div>

        {this.props.children}

      </div>
    )
  }
}
export default EmptyLayout
