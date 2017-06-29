import React, { Component } from 'react'
import { Menu, Segment, Image} from 'semantic-ui-react'
import styled from 'react-sc'

import logo from './logo_white.png'
import avatarn from './avatarn.JPG'

const MenuWithoutMargin = styled(Menu)`
  &&&{
    margin: 0px;
  }
`

const Header = () => (
  <MenuWithoutMargin style={{ border: 'none', backgroundColor: '#3a7bd5', height: '72' }} >
    <Menu.Item onClick={this.handleItemClick}>
      <div>
        <Image src={logo} size="small" />
      </div>
    </Menu.Item>
    <Menu.Item name="signup" position="right" onClick={this.handleItemClick}>
      <div>
        <span style={{fontFamily:'Kanit'}}>บริษัทโจร500จำกัด </span>
        <Image src={avatarn} avatar />
      </div>
    </Menu.Item>
  </MenuWithoutMargin>
)

export default Header
