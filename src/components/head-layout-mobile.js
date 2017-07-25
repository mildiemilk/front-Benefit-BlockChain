import React, { Component } from 'react'
import Header from './Employee/header'
import Footer from './Employee/Footer'
class HeadLayoutMobile extends Component {
  render() {
    return (
      <div className='headlayout'>
        <Header />
          <div id='content'>
            {this.props.children} 
          </div>
        <Footer/>
      </div>
    )
  }
}
export default HeadLayoutMobile