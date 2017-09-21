import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, Icon } from 'semantic-ui-react';
// import HeadCompanyInfo from '../header-company-info';
import HeaderBoxClaim from './header-box-claim';
import { Button } from '../../StyleComponent';
import '../../../styles/InsurerStyle/Claim.scss';
import { Head, DivImg, TextIn, Text } from './styled';
import pdf from '../../../../assets/EmployeeList/icons-8-pdf.png';
import print from '../../../../assets/EmployeeList/icons-8-print.png';
import FilterSearch from '../../FilterSearch';
import { getGroupBenefit } from '../../../api/profile-company';

class Claim extends Component {
  static propTypes = {
    // children: PropTypes.element.isRequired,
    // match: PropTypes.shape({ params: PropTypes.claimId }),
    groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    getGroupBenefit: PropTypes.func.isRequired,
    // getBenefitPlan: PropTypes.func.isRequired,
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
  componentDidMount() {
    this.props.getGroupBenefit();
  }
  render() {
    return (
      <div className="ClaimIndex">
        {/* <HeadCompanyInfo /> */}
        <HeaderBoxClaim />
        <div className="row">
          <div className="large-4 columns"><Head>รายการเคลม</Head></div>
          <div className="large-3 columns"><Button>ภาพรวมการเคลม<span className="external"><Icon name="external" size="lang" /></span></Button></div>
          <div className="filter-claim"><FilterSearch groupBenefit={this.props.groupBenefit} />
            <div className="large-1 columns">
              <DivImg>
                <img src={pdf} alt="pdf" height="24" width="24" />
              </DivImg>
              <DivImg>
                <img src={print} alt="printer" />
              </DivImg>
            </div>
          </div>
        </div>
        <Divider />

        <div className="row">
          <div className="large-1 columns">
            <TextIn>เลขที่เคลม <Icon name="sort descending" /></TextIn>
          </div>
          <div className="large-2 columns">
            <Text>เรื่องที่เคลม</Text>
          </div>
          <div className="large-2 columns">
            <TextIn>วันที่เคลม <Icon name="sort descending" /></TextIn>
          </div>
          <div className="large-2 columns">
            <TextIn>ผู้เคลม <Icon name="sort descending" /></TextIn>
          </div>
          <div className="large-2 columns">
            <TextIn>จำนวนเงิน <Icon name="sort descending" /></TextIn>
          </div>
          <div className="large-2 columns">
            <TextIn>สถานะการเคลม <Icon name="sort descending" /></TextIn>
          </div>
          <div className="large-1 columns">
            <Text>Option</Text>
          </div>
        </div>
        <div className="boxDetail">
          <div className="">
            <div className="row">
              <div className="large-1 columns">
                <Text>MT0001 </Text>
              </div>
              <div className="large-2 columns">
                <Text>IPD</Text>
              </div>
              <div className="large-2 columns">
                <Text>07/07/2560 </Text>
              </div>
              <div className="large-2 columns">
                <Text>อิทธิพงศ์ กฤดากร ณ อยุธยา </Text>
              </div>
              <div className="large-2 columns">
                <Text>1222 </Text>
              </div>
              <div className="large-2 columns">
                <Text>สถานะ </Text>
              </div>
              <div className="large-1 columns">
                <Text>Option</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // employeeDetail: () => dispatch(employeeDetail()),
  getGroupBenefit: () => dispatch(getGroupBenefit()),
  // getBenefitPlan: () => dispatch(getBenefitPlan()),
});

const mapStateToProps = state => ({
  data: state.profile.employeeDetail,
  groupBenefit: state.profile.groupBenefit,
  benefitPlan: state.benefitPlan.plan,
});
export default connect(mapStateToProps, mapDispatchToProps)(Claim);
