import React, { Component } from 'react';
// import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Divider } from 'semantic-ui-react';
// import { nextButton, grayButton } from '../../../StyleComponent';
// import HeadCompanyInfo from '../../header-company-info';
// import Plan from './plan';
import manageEmployee from './manageEmployee';
import { getCustomerPlan } from '../../../../api/Insurer/customer';

class AllCustomer extends Component {
  static propTypes = {
    getCustomerPlan: PropTypes.func.isRequired,
    // index: PropTypes.number.isRequired,
    // customer: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({ params: PropTypes }),
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      // customer: [],
      companyId: props.match.params.companyId,
      isAllPlan: false,
      status: '',
    };
    props.getCustomerPlan(this.state.companyId);
  }
  render() {
    console.log('>>>render', this.props);
    // const { customer, index } = this.props;
    return (
      <div className="allStatusData">
        {/* <HeadCompanyInfo DataCompany={customer[index]} PageName="allcustomer" /> */}
        <div className="breadcrumbs">ลูกค้า</div>
        <manageEmployee />
        {/* {(customer[index].status === 'active' || customer[index].status === 'inactive')
          ? <ManageEmp customer={customer[index]} />
          : <Plan customer={customer[index]} />
        } */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customerPlan: state.customerPlanReducer.customerPlan,
});

const mapDispatchToProps = dispatch => ({
  getCustomerPlan: companyId => dispatch(getCustomerPlan(companyId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AllCustomer);
