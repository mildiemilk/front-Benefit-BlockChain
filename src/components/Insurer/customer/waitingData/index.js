import React, { Component } from 'react';
// import moment from 'moment';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Input, Divider } from 'semantic-ui-react';
// import HeadCompanyInfo from '../../header-company-info';
// import {
//   BoxDetail,
//   InSide,
//   TextLine,
//   Special,
//   TextInsure,
// } from '../styled';
// import Plan from '../plan';

class waiting extends Component {
  static propTypes = {
    planData: PropTypes.func.isRequired,
    // claimList: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
    };
    // props.getAllPlan();
  }
  render() {
    return (
      <div className="WaitingIndex">
        {/* <HeadCompanyInfo /> */}
      </div>
    );
  }
}

export default waiting;
