import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import Sidebar from './sidebar';
import Header from './Header';
// import Header from './Header';
import SidebarMobile from './Header/mobile';
// import SidebarMobile from './sidebar';
// import HeaderMobile from 'header/HeaderMobile';

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.shape({}).isRequired,
    // data: PropTypes.shape({}).isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { location, children } = this.props;
    return (
      <div>
        <MediaQuery query="(max-width: 1328px)">
          <SidebarMobile />
          <div className="large-12 medium-12 small-12 columns custom-grid-width-100">
            <div className="row" style={{ margin: '75px 40px 40px 20px' }} >
              <main id="page-wrap" className="sideBar">
                {children}
              </main>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 1329px)">
          <Header />
          { location.pathname === '/dashboard'
            ? ''
            : <div className="large-2 columns"> <Sidebar Location={location} /> </div>
          }
          { location.pathname === '/dashboard'
            ? <div className="large-12 columns">
              <div className="row" style={{ marginTop: 75 }}>
                <div className="large-12 columns" style={{ padding: '0px 10px' }}>
                  {children}
                </div>
              </div>
            </div>
            : <div className="large-10 columns">
              <div className="row" style={{ marginTop: 75 }}>
                <div className="large-12 columns" style={{ padding: '0px 30px' }}>
                  {children}
                </div>
              </div>
            </div>
          }
        </MediaQuery>
      </div>
    );
  }
}
export default MainLayout;
