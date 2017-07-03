import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import styled from 'react-sc'

import logo from './logo_white.png'
import avatarn from './avatarn.JPG'
import { connect } from 'react-redux'

const MenuWithoutMargin = styled(Menu)`
  &&&{
    margin: 0px;
    position: relative;
    z-index: 999;
  }
`

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div
        style={{
          position: 'fixed',
          border: 'none',
          backgroundColor: '#3a7bd5',
          height: '75',
          width: '100%',
          zIndex: '999',
        }}
      >
        <Menu.Item style={{ position: 'absolute', left: '29px', top: '17px' }}>
          <div>
            <Image src={logo} size="small" />
          </div>
        </Menu.Item>
        <Menu.Item style={{ width: '20%' }} position="right">
          <div>
            <span
              style={{
                fontFamily: 'Kanit',
                position: 'absolute',
                right: '7%',
                top: '29px',
                fontSize: '120%',
                color: 'white',
              }}
            >
              {this.props.data.companyName}
            </span>
            <Image
              style={{ position: 'absolute', right: '3%', top: '20px' }}
              src={avatarn}
              avatar
              size="mini"
            />
          </div>
        </Menu.Item>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.profile,
})

export default connect(mapStateToProps, null)(Header)
