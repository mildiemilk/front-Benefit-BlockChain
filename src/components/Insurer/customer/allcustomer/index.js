import React, { Component } from 'react';
// import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Divider } from 'semantic-ui-react';
import Customerlist from './customerlist';
import { getCustomer } from '../../../../api/Insurer/customer';

class AllCustomer extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired,
    customer: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      SearchTerm: '',
      Searchstatus: '',
      customer: [],
      isAllPlan: false,
      status: '',
    };
    props.getCustomer();
  }
  handleDetail = (index, status) => {
    const { isExtend } = this.state;
    this.setState({
      isAllPlan: !isExtend,
      indexDetail: index,
      status,
    });
  }
  render() {
    const { customer } = this.props;
    return (
      <Customerlist
        customer={customer}
        handleDetail={this.handleDetail}
      />
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
