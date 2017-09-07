import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from '../../Head';
import HeadCompanyInfo from '../header-company-info';
import HeaderBoxClaim from './header-box-claim';
import { Detail } from '../../StyleComponent';

class Claim extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    match: PropTypes.shape({ params: PropTypes.claimId }),
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="ClaimDetail">
        <HeadCompanyInfo />
        <HeaderBoxClaim />
        <div>
          <Head className="insurerheade-text" content="รายการเคลม" />
          <div>ffff</div> <div>rrrffff</div>
        </div>
        <Detail>
          <div className="row">
            <div className="large-6 columns">hh</div>
            <div className="large-6 columns">hh</div>
          </div>
        </Detail>
      </div>
    );
  }
}
export default Claim;
