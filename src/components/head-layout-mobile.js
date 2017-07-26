import React, { Component } from 'react'
import Header from './Employee/header'
import Footer from './Employee/footer'
import Side from './main-layout-mobile'
class HeadLayoutMobile extends Component {
  render() {
    return (
      <div className='headlayout'>
        <Side/>
        <main  id="page-wrap" className = 'sideBar' >
          <Header />
            <div id='content'>
              {this.props.children} 
            </div>
          <Footer/>
        </main>
      </div>
    )
  }
}
export default HeadLayoutMobile
