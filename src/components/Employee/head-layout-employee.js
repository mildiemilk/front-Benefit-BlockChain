import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import HeaderMobile from './header/HeaderMobile';
import HeaderDesktop from '../Header/';
import Footer from './footer';
import SidebarMobile from './Sidebar/SidebarMobile';
import SidebarDesktop from './Sidebar/SidebarDesktop';

class HeadLayoutMobile extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const check = window.location.pathname;
    return (
      <div>
        <MediaQuery query="(max-width: 767px)">
          <div className="headlayout">
            <SidebarMobile />
            <main id="page-wrap" className="sideBar">
              <HeaderMobile />
              <div id="content">
                {this.props.children}
              </div>
              <Footer />
            </main>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <div>
            {
              check !== '/employeeverify'
              ? <HeaderDesktop />
              : <div />
            }
            <div>
              <div className="row">
                <div className="large-2 columns">
                  {
                    check !== '/employeeverify'
                    ? <SidebarDesktop />
                    : <div />
                  }
                </div>
                <div className="large-10 columns">
                  <div className="row" style={{ marginTop: 75 }}>
                    <div className="large-12 columns" style={{ padding: '0px 30px' }}>
                      {this.props.children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}
export default HeadLayoutMobile;
