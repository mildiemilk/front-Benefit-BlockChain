import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logoBenefit from './logo_white.png';
import { HeadNav, LogoPosition, SpanStyle } from './styled';

const ImageCss = styled.img `
  &&&{
  position: absolute;
   right: 39px;
   top: 8px;
   border-radius: 50%;
  }
`;
class Header extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const { companyName, logo } = data;
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
              <ImageCss src={logo} alt="logo" width="50px" height="50px" />
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
