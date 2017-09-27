import React, { Component } from 'react';
// import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Divider } from 'semantic-ui-react';
import Customerlist from './customerlist';
import AllPlanData from './allPlanData';
import { getCustomer } from '../../../../api/Insurer/customer';

class AllCustomer extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired,
    customer: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    if (status === 'active' || status === 'inactive') {
      window.location = `/empmanagement/${status}/${index}`;
    } else {
      const { isAllPlan } = this.state;
      this.setState({
        isAllPlan: !isAllPlan,
        index,
        status,
      });
    }
  }

  render() {
    const { customer } = this.props;
    const { isAllPlan, index } = this.state;
    return (
      <div className="allcustomer">
        { isAllPlan
          ? <AllPlanData
            customer={customer}
            index={index}
          />
          : <Customerlist
            customer={customer}
            index={index}
            handleDetail={this.handleDetail}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(AllCustomer);
