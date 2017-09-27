import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Divider } from 'semantic-ui-react';
import { getCustomer } from '../../../../../api/Insurer/customer';
import HeaderCompanyInfo from '../../../header-company-info';

class ViewPlan extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired,
    customer: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isAllPlan: false,
      status: '',
    };
    props.getCustomer();
  }

  render() {
    const data = this.props.customer;
    return (
      <div>
        {data.map(data => (
          <HeaderCompanyInfo DataCompany={data} />
        ))
      }
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
