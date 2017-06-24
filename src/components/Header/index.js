import React, { Component } from 'react'
import { Menu, Segment, Image} from 'semantic-ui-react'

import logo from './logo_white.png'
import avatarn from './avatarn.JPG'

const Header = () => (
  <Menu style={{border:'none',backgroundColor: '#3a7bd5', height:'72'}}  >
    <Menu.Item  onClick={this.handleItemClick}>
      <div>
        <Image src={logo} size='small' />
      </div>
    </Menu.Item>
    <Menu.Item name='signup' position='right' onClick={this.handleItemClick}>
      <div>
        <span>บริษัทโจร500จำกัด  </span>
        <Image src={avatarn} avatar />
      </div>
    </Menu.Item>
  </Menu>
)

export default Header
