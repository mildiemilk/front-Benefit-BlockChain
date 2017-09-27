import React, { Component } from 'react';
// import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Divider } from 'semantic-ui-react';
// import { nextButton, grayButton } from '../../../StyleComponent';
import HeadCompanyInfo from '../../header-company-info';
// import Plan from './plan';
import manageEmployee from './manageEmployee';
import { getCustomer } from '../../../../api/Insurer/customer';

class AllCustomer extends Component {
  static propTypes = {
    // getCustomer: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    customer: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      // customer: [],
      isAllPlan: false,
      status: '',
    };
    // props.getCustomer();
  }
  render() {
    const { customer, index } = this.props;
    return (
      <div className="allStatusData">
        <HeadCompanyInfo DataCompany={customer[index]} />
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
  customer: state.customerReducer.customer,
});

const mapDispatchToProps = dispatch => ({
  getCustomer: () => dispatch(getCustomer()),

});

export default connect(mapStateToProps, mapDispatchToProps)(AllCustomer);
