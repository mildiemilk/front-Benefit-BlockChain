import React, { Component } from 'react'
import Header from './Employee/header'
import Footer from './Employee/footer'
class HeadLayoutMobile extends Component {
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
