import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logoBenefit from './logo_white.png';
import { HeadNav, LogoPosition, SpanStyle } from './styled';

const ImageCss = styled(Image) `
  &&&{
  position: absolute;
   right: 3%;
   top: 20px;
  }
`;
class Header extends Component {
  static propTypes = {
    data: PropTypes.shape.isRequired,
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { companyName, logo } = this.props.data;
    return (
      <HeadNav>
        <LogoPosition>
          <div>
            <Image src={logoBenefit} size="small" />
          </div>
        </LogoPosition>
        <Menu.Item style={{ width: '20%' }} position="right">
          {companyName !== ''
            ? <div>
              <SpanStyle>
                {companyName}
              </SpanStyle>
              <ImageCss src={logo} avatar size="mini" />
            </div>
            : <div />}
        </Menu.Item>
      </HeadNav>
    );
  }
}

const mapStateToProps = state => ({
  data: state.profile,
});

export default connect(mapStateToProps, null)(Header);
