import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { getCustomer } from '../../../../../api/Insurer/customer';
import HeaderCompanyInfo from '../../../header-company-info';
import IconPlan from '../../../../../../assets/Insurer/icon_plan@3x.png';
import IconView from '../../../../../../assets/Insurer/icon_view@3x.png';
import IconDownload from '../../../../../../assets/Insurer/icon_download@3x.png';
import NavStep from '../NavStep';
import {
CustomerName,
WhiteBackGround,
HeadSecondDiv,
} from './styled';

class ViewPlan extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired,
    customer: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({ params: PropTypes.index }),
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      CustomerIndex: props.match.params.index,
      Plans: [
        {
          PlanName: 'Management Plan 1',
        },
        {
          PlanName: 'Management Plan 2',
        },
        {
          PlanName: 'Management Plan 3',
        },
      ],
    };
    props.getCustomer();
  }

  ShowMasterPlan = Plans =>
    Plans.map(
      (Plans, index) =>
        <div className="quotation-body-show-mp" keys={index}>
          <div className="quotation72width">
            <img alt="" className="quotation-icon-plan" src={IconPlan} />
            <span className="quotation-mp-name">{Plans.PlanName}</span>
          </div>
          <div className={'quotation-mp-price-box pricered'}>
            <div
              className="quotation-circle-icon-view"
              // onClick={
              //   () => this.props.handleOnpenModalPlanDetail(
              //     'master', plan.planDetail, plan.price, index)}
              role="button"
              aria-hidden
            >
              <img alt="" className="quotation-mp-icon-view" src={IconView} />
            </div>
            <div className="quotation-circle-icon-download">
              <img alt="" className="quotation-mp-icon-download" src={IconDownload} />
            </div>
          </div>
        </div>,
    );

  render() {
    const { customer } = this.props;
    const { CustomerIndex } = this.state;
    if (customer.length > 0) {
      return (
        <div style={{ padding: 15 }}>
          <HeaderCompanyInfo DataCompany={customer[CustomerIndex]} />
          <CustomerName>
            ลูกค้าของคุณ &nbsp; /&nbsp;{customer[CustomerIndex].companyName}
          </CustomerName>
          <NavStep step={1} />
          <WhiteBackGround>
            <HeadSecondDiv>
              ดูแผนประกันภัยที่เลือก
            </HeadSecondDiv>
            <div className="quotation-box">
              <div className="quotation-body-show-mp-box">
                {this.ShowMasterPlan(this.state.Plans)}
              </div>
            </div>
          </WhiteBackGround>
        </div>
      );
    }
    return (
      <div>
        empty
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customerReducer.customer,
});

const mapDispatchToProps = dispatch => ({
  getCustomer: () => dispatch(getCustomer()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlan);
