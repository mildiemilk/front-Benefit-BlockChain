import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import HeadCompanyInfo from '../header-company-info';
import HeaderBoxClaim from './header-box-claim';
import { Button } from '../../StyleComponent';
import '../../../styles/InsurerStyle/Claim.scss';
import { Head, DivImg, TextIn, Text } from './styled';
import pdf from '../../../../assets/EmployeeList/icons-8-pdf.png';
import print from '../../../../assets/EmployeeList/icons-8-print.png';
// import FilterSearch from '../../FilterSearch';
import { getClaim } from '../../../api/Insurer/claim';
// import ClaimDetail from './claim-detail';

class Claim extends Component {
  static propTypes = {
    // children: PropTypes.element.isRequired,
    match: PropTypes.shape({ params: PropTypes.companyId }),
    // groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    getClaim: PropTypes.func.isRequired,
    claim: PropTypes.shape({ claim: {} }).isRequired,
    // getBenefitPlan: PropTypes.func.isRequired,
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      companyId: props.match.params.companyId,
    };
    // props.getCompanyBidding(this.state.companyId);
  }
  componentWillMount() {
    this.props.getClaim(this.state.companyId);
  }
  renderElement = claim => {
    const list = claim.map(claim => (
      <div className="boxDetail">
        <Link to={`/claimlist/${claim.companyId}`}>
          <div className="">
            <div className="row">
              <div className="large-1 columns">
                <Text>{claim.claimNumber} </Text>
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
        </Link>
      </div>
    ));
    return list;
  }
  render() {
    const { claim } = this.props;
    return (
      <div className="ClaimIndex">
        {/* <HeadCompanyInfo /> */}
        <HeaderBoxClaim />
        <div className="row">
          <div className="large-4 columns"><Head>รายการเคลม</Head></div>
          <div className="large-3 columns"><Button>ภาพรวมการเคลม<span className="external"><Icon name="external" size="lang" /></span></Button></div>
          <div className="filter-claim">
            {/* <FilterSearch /> */}
            {/* groupBenefit={this.props.groupBenefit} */}
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
        {claim.length > 0
        ? this.renderElement(claim)
        : null
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getClaim: () => dispatch(getClaim()),
  // getGroupBenefit: () => dispatch(getGroupBenefit()),
  // getBenefitPlan: () => dispatch(getBenefitPlan()),
});

const mapStateToProps = state => ({
  claim: state.claimReducer.claim,
  // groupBenefit: state.profile.groupBenefit,
  // benefitPlan: state.benefitPlan.plan,
});
export default connect(mapStateToProps, mapDispatchToProps)(Claim);
