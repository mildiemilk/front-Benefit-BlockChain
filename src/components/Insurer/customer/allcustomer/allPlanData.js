import React, { Component } from 'react';
// import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Divider } from 'semantic-ui-react';
// import { nextButton, grayButton } from '../../../StyleComponent';
import HeadCompanyInfo from '../../header-company-info';
import Plan from './plan';
// import manageEmployee from './manageEmployee';
import { getCustomerPlan, getCustomer } from '../../../../api/Insurer/customer';
import { InSide, TextLine, TextInsure, BoxDetail, ButtonPlan, CustomerName } from './styled';

class AllCustomer extends Component {
  static propTypes = {
    getCustomerPlan: PropTypes.func.isRequired,
    // index: PropTypes.number.isRequired,
    getCustomer: PropTypes.func.isRequired,
    customer: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({ params: PropTypes }),
    customerPlan: PropTypes.shape({}).isRequired,
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
      companyId: props.match.params.companyId,
      isAllPlan: false,
      status: '',
      index: props.match.params.index,
    };
    props.getCustomer();
    props.getCustomerPlan(this.state.companyId);
  }
  render() {
    const { customer, customerPlan } = this.props;
    const { index } = this.state;
    if (customer.length > 0) {
      return (
        <div className="allStatusData">
          <HeadCompanyInfo DataCompany={customer[index]} PageName="allcustomer" />
          <CustomerName>ลูกค้า / {customer[index].companyName}</CustomerName>
          <BoxDetail>
            <InSide>
              <div className="row">
                <div className="large-3 columns">
                  <TextLine>รายการแพลนของคุณ</TextLine>
                </div>
              </div>
              <div className="row">
                <Plan customerPlan={customerPlan.master} />
              </div>
            </InSide>
            <InSide>
              <div className="row">
                <div className="large-6 columns">
                  <TextInsure>ข้อเสนอจากบริษัทประกัน</TextInsure>
                  {' '}
                </div>
              </div>
              <div className="row">
                <Plan customerPlan={customerPlan.insurer} />
              </div>
            </InSide>
          </BoxDetail>
          {(customer[index].status === 'padding')
            ? <Link to={`/stepmanagement/${index}/${this.state.companyId}`}><ButtonPlan next> เริ่มดำเนินการ </ButtonPlan></Link>
            : <ButtonPlan disabled> เริ่มดำเนินการ </ButtonPlan>
          }
          <Link to={`/stepmanagement/${index}/${this.state.companyId}`}><ButtonPlan next> เริ่มดำเนินการ </ButtonPlan></Link>
        </div>
      );
    }
    return <div />
  }
  }

const mapStateToProps = state => ({
  customerPlan: state.customerPlanReducer.customerPlan,
  customer: state.customerReducer.customer,
});

const mapDispatchToProps = dispatch => ({
  getCustomerPlan: companyId => dispatch(getCustomerPlan(companyId)),
  getCustomer: () => dispatch(getCustomer()),

});

export default connect(mapStateToProps, mapDispatchToProps)(AllCustomer);
