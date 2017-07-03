import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import styled from 'react-sc'
import logo from './logo_white.png'
import avatarn from './avatarn.JPG'
import { connect } from 'react-redux'
import { HeadNav ,LogoPosition ,SpanStyle} from './styled'

const ImageCss = styled(Image)`
  &&&{
  position: absolute;
   right: 3%;
   top: 20px;
  }
`

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <HeadNav>
        <LogoPosition>
          <div>
            <Image src={logo} size="small" />
          </div>
        </LogoPosition>
        <Menu.Item style={{ width: '20%' }} position="right">
          <div>
            <SpanStyle>
              {this.props.data.companyName}
            </SpanStyle>
            <ImageCss src={avatarn} avatar  size="mini" />
          </div>
        </Menu.Item>
      </HeadNav>
    )
  }
}

const mapStateToProps = state => ({
  data: state.profile,
})

export default connect(mapStateToProps, null)(Header)
