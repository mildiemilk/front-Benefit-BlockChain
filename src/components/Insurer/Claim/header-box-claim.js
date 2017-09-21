import React, { Component } from 'react';
// import moment from 'moment';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import '../../../styles/InsurerStyle/Claim.scss';
// import { getGroupBenefit } from '../../../api/profile-company';
// import { Redirect } from 'react-router-dom';
import {
  NavClaim,
  Pic,
  Font,
  FontNum,
  TextNav,
  FontAucTime,
  FontNumAucTime,
 } from './styled';
// import { chooseFinalInsurer } from '../../../api/bidding';

class HeaderBoxClaim extends Component {
  static propTypes = {
    // getGroupBenefit: PropTypes.func.isRequired,
    // end: PropTypes.shape({}).isRequired,
    // data: PropTypes.shape({}).isRequired,
    // handleClick: PropTypes.func.isRequired,
    // list: PropTypes.arrayOf(PropTypes.object).isRequired,
    // completeStep: PropTypes.bool.isRequired,
  }
  constructor() {
    super();
    this.state = {
      passwordToConfirm: '',
    };
  }
  componentDidMount() {
    // this.props.getGroupBenefit();
  }

  render() {
    return (
      <div className="HeaderBoxClaim">
        <div className="row">
          <div className="large-3 columns">
            <NavClaim>
              <Pic> <Icon name="drivers license outline" size="big" /></Pic>
              <TextNav>
                <Font>จำนวนการเคลมทั้งหมด</Font><br />
                <FontNum>44</FontNum>
              </TextNav>
            </NavClaim>
          </div>
          <div className="large-3 columns">
            <NavClaim>
              <Pic> <Icon name="checkmark" size="big" color="white" /></Pic>
              <TextNav>
                <FontAucTime>การเคลมที่อนุมัติไปแล้ว</FontAucTime><br />
                <FontNumAucTime>10</FontNumAucTime>
              </TextNav>
            </NavClaim>
          </div>
          <div className="large-3 columns">
            <NavClaim>
              <Pic> <Icon name="search" size="big" color="white" /></Pic>
              <TextNav>
                <FontAucTime>การเคลมที่กำลังพิจารณา</FontAucTime><br />
                <FontNumAucTime>3
                </FontNumAucTime>
              </TextNav>
            </NavClaim>
          </div>
          <div className="large-3 columns">
            <NavClaim>
              <Pic> <Icon name="remove" size="big" color="white" /></Pic>
              <TextNav>
                <FontAucTime>การเคลมที่ไม่อนุมัติ</FontAucTime><br />
                <FontNumAucTime>4
                </FontNumAucTime>
              </TextNav>
            </NavClaim>
          </div>
        </div>
      </div>
    );
  }
}
// const mapDispatchToProps = dispatch => ({
//   getGroupBenefit: () => dispatch(getGroupBenefit()),
// });
//
// const mapStateToProps = state => ({
//   // claim: state.claimReducer.claim,
//   getGroupBenefit: state.profile.getGroupBenefit,
//   // benefitPlan: state.benefitPlan.plan,
// });
// export default connect(mapStateToProps, mapDispatchToProps)(HeaderBoxClaim);

export default HeaderBoxClaim;
