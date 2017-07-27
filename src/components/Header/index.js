import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import styled from 'react-sc'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import logo from './logo_white.png'
import avatarn from './avatarn.JPG'
import { HeadNav, LogoPosition, SpanStyle } from './styled'
import { getCompanyName } from '../../api/profile-company'

const ImageCss = styled(Image)`
  &&&{
  position: absolute;
   right: 3%;
   top: 20px;
  }
`
class Header extends Component {
  static propTypes = {
    getCompanyName: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.getCompanyName()
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
          {this.props.data.companyName
            ? <div>
                <SpanStyle>
                  {this.props.data.companyName}
                </SpanStyle>
                <ImageCss src={avatarn} avatar size="mini" />
              </div>
            : <div />}
        </Menu.Item>
      </HeadNav>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getCompanyName: () => dispatch(getCompanyName()),
})

const mapStateToProps = state => ({
  data: state.profile,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
