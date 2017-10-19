import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../../styles/main_icon.scss';

const Links = styled(Link)`
  color: #6c6c6c;
`;
export default class Sidebar extends Component {
  static propTypes = {
    // Location: PropTypes.shape({}).isRequired,
    handleCloseHamburgerMenu: PropTypes.func.isRequired,
    mobile: PropTypes.bool,
  }
  static defaultProps = {
    mobile: false,
  }
  state = { activeItem: 'home' }
  render() {
    const url = window.location.pathname.split('/')[1];
    const { mobile, handleCloseHamburgerMenu } = this.props;
    return (
      <aside className={mobile ? 'siderbar-mobile-active' : 'sidebar'}>
        <Item.Group className="sidebarstyle" relaxed>
          <Item onClick={handleCloseHamburgerMenu}>
            <i aria-hidden="true" className="icon-home" />&nbsp;
            <Links to="/dashboard" ><Item.Content verticalAlign="middle">Dashboard</Item.Content></Links>
          </Item>
          {url === 'allcustomer' || url === 'customerplan' || url === 'stepmanagement' || url === 'stepdownload' || url === 'stepupload' || url === 'stepbenefits' || url === 'empmanagement'
            ? <Item>
              <i aria-hidden="true" className="icon-conference-active" />&nbsp;
              <Links to="/allcustomer" ><Item.Content verticalAlign="middle"><p className="text-active">ลูกค้าของคุณ</p></Item.Content></Links>
            </Item>
            : <Item>
              <i aria-hidden="true" className="icon-conference" />&nbsp;
              <Links to="/allcustomer" ><Item.Content verticalAlign="middle">ลูกค้าของคุณ</Item.Content></Links>
            </Item>
          }
          {url === 'biddinglist' || url === 'biddingdetali'
            ? <Item>
              <i aria-hidden="true" className="icon-purchase-active" />&nbsp;
              <Links to="/biddinglist" ><Item.Content verticalAlign="middle"><p className="text-active">การเสนอราคา</p></Item.Content></Links>
            </Item>
            : <Item>
              <i aria-hidden="true" className="icon-purchase" />&nbsp;
              <Links to="/biddinglist" ><Item.Content verticalAlign="middle">การเสนอราคา</Item.Content></Links>
            </Item>
          }
          {url === 'claim' || url === 'claimlist' || url === 'claimdetail' || url === 'claimanalysis'
            ? <Item>
              <i aria-hidden="true" className="icon-overview-active" />&nbsp;
              <Links to="/claim" ><Item.Content verticalAlign="middle"><p className="text-active">รายการเคลม</p></Item.Content></Links>
            </Item>
            : <Item>
              <i aria-hidden="true" className="icon-overview" />&nbsp;
              <Links to="/claim" ><Item.Content verticalAlign="middle">รายการเคลม</Item.Content></Links>
            </Item>
        }
          {url === 'insurerplan'
          ? <Item>
            <i aria-hidden="true" className="icon-sell-active" />&nbsp;
            <Links to="/insurerplan" ><Item.Content verticalAlign="middle"><p className="text-active">แผนประกันภัย</p></Item.Content></Links>
          </Item>
          : <Item>
            <i aria-hidden="true" className="icon-sell" />&nbsp;
            <Links to="/insurerplan" ><Item.Content verticalAlign="middle">แผนประกันภัย</Item.Content></Links>
          </Item>
        }
          {url === 'profile'
        ? <Item>
          <i aria-hidden="true" className="icon-administrator-active" />&nbsp;
          <Links to="/profile" ><Item.Content verticalAlign="middle"><p className="text-active">โปรไฟล์ของคุณ</p></Item.Content></Links>
        </Item>
        : <Item>
          <i aria-hidden="true" className="icon-administrator" />&nbsp;
          <Links to="/profile" ><Item.Content verticalAlign="middle">โปรไฟล์ของคุณ</Item.Content></Links>
        </Item>
        }
          {url === 'sitting'
      ? <Item>
        <i aria-hidden="true" className="icon-services-active" />&nbsp;
        <Links to="/sitting" ><Item.Content verticalAlign="middle"><p className="text-active">ตั้งค่า</p></Item.Content></Links>
      </Item>
      : <Item>
        <i aria-hidden="true" className="icon-services" />&nbsp;
        <Links to="/sitting" ><Item.Content verticalAlign="middle">ตั้งค่า</Item.Content></Links>
      </Item>
        }
        </Item.Group>
      </aside>
    );
  }
}
