import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { Divider, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HeadCompanyInfo from '../header-company-info';
import HeaderBoxClaim from './header-box-claim';
import { Button } from '../../StyleComponent';
import '../../../styles/InsurerStyle/Claim.scss';
import { Head, DivImg, TextIn, Text } from './styled';
import pdf from '../../../../assets/EmployeeList/icons-8-pdf.png';
import print from '../../../../assets/EmployeeList/icons-8-print.png';
// import FilterSearch from '../../FilterSearch';
import { getClaim } from '../../../api/Insurer/claim';
import { StatusTag } from './styled';
// import ClaimDetail from './claim-detail';

class Claim extends Component {
  static propTypes = {
    // children: PropTypes.element.isRequired,
    match: PropTypes.shape({ params: PropTypes.companyId }),
    // groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    getClaim: PropTypes.func.isRequired,
    claim: PropTypes.arrayOf(PropTypes.object).isRequired,
    company: PropTypes.shape({ company: {} }).isRequired,
    count: PropTypes.shape({ count: {} }).isRequired,
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
      DataCompany: props.company,
      Count: props.count,
    };
    // props.getCompanyBidding(this.state.companyId);
  }
  componentDidMount() {
    this.props.getClaim(this.state.companyId);
  }
  renderElement = claim => {
    const list = claim.map((claim, index) => (
      <div className="boxDetail" key={index.toString()}>
        <Link to={`/claimdetail/${this.state.companyId}/${index}/${claim._id}`}>
          <div className="">
            <div className="row">
              <div className="large-1 columns">
                <Text>{index + 1 }</Text>
              </div>
              <div className="large-2 columns">
                {(claim.detail.title)
                ? <Text>{claim.detail.title}</Text>
                : ''
                }
              </div>
              <div className="large-2 columns">
                <Text>{moment(claim.detail.date).format('L')}</Text>
              </div>
              <div className="large-2 columns">
                <Text>{claim.detail.name}</Text>
              </div>
              <div className="large-2 columns">
                <Text>{claim.detail.amount} </Text>
              </div>
              <div className="large-2 columns">
                {
                (claim.status === 'pending')
                ? <StatusTag color="#3a7bd5"><Icon name="hourglass two" /> รอพิจารณา</StatusTag>
                : ''
                }
                {
                (claim.status === 'approve')
                ? <StatusTag color="#46b3b8"><Icon name="checkmark two" /> อนุมัติ</StatusTag>
                : ''
                }
                {
                (claim.status === 'reject')
                ? <StatusTag color="#f7555f"><Icon name="remove two" /> ไม่อนุมัติ</StatusTag>
                : ''
                }
              </div>
              <div className="large-1 columns">
                <Icon name="edit" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    ));
    return list;
  }
  // renderElementCompany = company => {
  //   const companyDetail = company.map(company => (
  //     // console.log(company.companyName);
  //   ));
  //   return companyDetail;
  // }
  render() {
    const { claim, company, count } = this.props;
    console.log('count', count);
    // setState
    return (
      <div className="ClaimIndex">
        {company
        ? <HeadCompanyInfo DataCompany={company} />
        : null
        }
        {count
        ? <HeaderBoxClaim Count={count} />
        : null
        }
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
  getClaim: companyId => dispatch(getClaim(companyId)),
  // getGroupBenefit: () => dispatch(getGroupBenefit()),
  // getBenefitPlan: () => dispatch(getBenefitPlan()),
});

const mapStateToProps = state => ({
  claim: state.claimReducer.claim,
  company: state.claimReducer.company,
  count: state.claimReducer.count,
  // groupBenefit: state.profile.groupBenefit,
  // benefitPlan: state.benefitPlan.plan,
});
export default connect(mapStateToProps, mapDispatchToProps)(Claim);
