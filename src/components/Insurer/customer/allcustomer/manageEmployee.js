import React, { Component } from 'react';
// import moment from 'moment';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Nav, Pic, TextNav } from '../../../StyleComponent';
// import { FontNum, Font, FontNumAucTime, FontAucTime } from '../styled';
import '../../../../styles/main_icon.scss';
// import { getCustomer } from '../../../../api/Insurer/customer';

class manageEmployee extends Component {
  static propTypes = {
    // getCustomer: PropTypes.func.isRequired,
    // index: PropTypes.number.isRequired,
    match: PropTypes.shape({ params: PropTypes }),
    // match1: PropTypes.shape({ params: PropTypes.index }),
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      status: props.match.params.status,
      index: props.match.params.index,
    };
    // props.getCustomer();
  }
  render() {
    console.log('render empmanagement', this.state);
    return (
      <div className="manageEmployee">
        <div className="breadcrumbs">ลูกค้า</div>
        {/* <div className="row">
          <div className="large-3 columns">
            <Nav>
              <Pic> <i aria-hidden="true" className="icon-city" /></Pic>
              <TextNav>
                <Font>พนักงานทัั้งหมด</Font><br />
                <FontNum>2</FontNum>
              </TextNav>
            </Nav>
          </div>
          <div className="large-3 columns">
            <Nav>
              <Pic> <i aria-hidden="true" className="icon-empPlus" /></Pic>
              <TextNav>
                <FontAucTime>พนักงานเข้าใหม่</FontAucTime><br />
                <FontNumAucTime>1</FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
          <div className="large-3 columns">
            <Nav>
              <Pic> <i aria-hidden="true" className="icon-empDelete" /></Pic>
              <TextNav>
                <FontAucTime>พนักงานลาออก</FontAucTime><br />
                <FontNumAucTime>1</FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
          <div className="large-3 columns">
            <Nav>
              <Pic> <i aria-hidden="true" className="icon-quality" /></Pic>
              <TextNav>
                <FontAucTime>พนักงานปรับตำแหน่ง</FontAucTime><br />
                <FontNumAucTime>1</FontNumAucTime>
              </TextNav>
            </Nav>
          </div>
        </div> */}
      </div>
    );
  }
}


export default manageEmployee;
