import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCustomer, getCustomerSelectPlan } from '../../../../../api/Insurer/customer';
import HeaderCompanyInfo from '../../../header-company-info';
import IconPlan from '../../../../../../assets/Insurer/icon_plan@3x.png';
import IconView from '../../../../../../assets/Insurer/icon_view@3x.png';
import IconDownload from '../../../../../../assets/Insurer/icon_download@3x.png';
import NavStep from '../NavStep';
import {
CustomerName,
WhiteBackGround,
HeadSecondDiv,
NextButton,
BackButton,
} from './styled';

class ViewPlan extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired,
    getCustomerSelectPlan: PropTypes.func.isRequired,
    customer: PropTypes.arrayOf(PropTypes.object).isRequired,
    customerSelectPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
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
      companyId: props.match.params.companyId,
      index: props.match.params.index,
    };
    props.getCustomerSelectPlan(this.state.companyId);
    props.getCustomer();
  }


  ShowPlan = Plans =>
    Plans.map(
      (Plans, index) =>
        <div className="quotation-body-show-mp" keys={index}>
          <div className="quotation72width">
            <img alt="" className="quotation-icon-plan" src={IconPlan} />
            <span className="quotation-mp-name">{Plans.planId.planName}</span>
          </div>
          <div className={'quotation-mp-price-box pricered'}>
            <div
              className="quotation-circle-icon-view"
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
    const { customer, customerSelectPlan } = this.props;
    const { index } = this.state;
    if (customer.length > 0) {
      return (
        <div style={{ padding: 15 }}>
          <HeaderCompanyInfo DataCompany={customer[index]} PageName="allcustomer" />
          <CustomerName>
            ลูกค้าของคุณ &nbsp; /&nbsp;{customer[index].companyName}
          </CustomerName>
          <NavStep step={1} />
          <WhiteBackGround>
            <HeadSecondDiv>
              ดูแผนประกันภัยที่เลือก
            </HeadSecondDiv>
            <div className="quotation-box">
              <div className="quotation-Height100">
                {customerSelectPlan.length > 0
                  ? this.ShowPlan(customerSelectPlan)
                  : <div className="quotation-mp-edit-noplan">
                    ยังไม่มีแผนเพิ่มเติม
                    </div>
                  }
              </div>
            </div>
          </WhiteBackGround>
          <Link to={`/customerplan/${index}/${customer[index].companyId}`}>
            <BackButton>กลับ</BackButton>
          </Link>
          <Link to={`/stepdownload/${index}/${customer[index].companyId}`}>
            <NextButton>ต่อไป</NextButton>
          </Link>
        </div>

      );
    }
    return <div />
  }
}

const mapStateToProps = state => ({
  customer: state.customerReducer.customer,
  customerSelectPlan: state.customerSelectPlanReducer.customerSelectPlan,
});

const mapDispatchToProps = dispatch => ({
  getCustomer: () => dispatch(getCustomer()),
  getCustomerSelectPlan: companyId => dispatch(getCustomerSelectPlan(companyId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlan);
